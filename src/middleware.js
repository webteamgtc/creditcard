import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware({
  ...routing,
  localeDetection: false,
});

// ---- Config: add any future campaign slugs here once ----
const CAMPAIGN_SLUGS = [
  'swap-free',
  'trade-gold',
  'switch-to-gtc',
  // add new ones once and you're done
];

// ---- helpers ----
function isAdsBot(ua = '') {
  return /\bAdsBot-Google\b/i.test(ua) || /\bAdsBot-Google-Mobile\b/i.test(ua);
}
function hasLocalePrefix(pathname) {
  return routing.locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
}
// /<anything>/<slug> or just /<slug>
function isCampaignPath(pathname) {
  return CAMPAIGN_SLUGS.some((slug) => pathname === `/${slug}` || pathname.endsWith(`/${slug}`));
}

export default function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const { pathname } = req.nextUrl;

  // Never touch the fallback page
  if (pathname === '/adsbot-ok') {
    return NextResponse.next();
  }

  // ===== ADSBOT (desktop + mobile) =====
  if (isAdsBot(ua)) {
    // 1) HEAD: immediate 200 (skip all SSR/layouts)
    if (req.method === 'HEAD') {
      return new NextResponse(null, { status: 200, headers: { 'Cache-Control': 'no-store' } });
    }

    // 2) GET: any campaign path → serve static OK page (prevents random 500s)
    if (req.method === 'GET' && isCampaignPath(pathname)) {
      const url = req.nextUrl.clone();
      url.pathname = '/adsbot-ok';
      return NextResponse.rewrite(url);
    }

    // 3) GET: if no locale prefix, rewrite to default-locale content (no redirects)
    if (req.method === 'GET' && !hasLocalePrefix(pathname)) {
      const url = req.nextUrl.clone();
      url.pathname = `/${routing.defaultLocale}${pathname}`;
      return NextResponse.rewrite(url);
    }

    // Localized, non-campaign → normal i18n handling
    return handleI18nRouting(req);
  }

  // ===== Everyone else (humans/other bots) — NO REDIRECTS =====
  if (!hasLocalePrefix(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  return handleI18nRouting(req);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
