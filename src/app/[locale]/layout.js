import Script from "next/script";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import CookieConsent from "./components/CookieConsent";
import { NextIntlClientProvider } from 'next-intl';

export default function RootLayout({ children, params }) {
  const locale = params?.locale ?? "en";
  const isArabicOrKurdish = locale === "ar" || locale === "ku";
  const GTM_ID = "GTM-PSWH9QF";

  // 🔹 Default SEO meta data (You can make this dynamic per locale/page)
  const metaTitle = "GTCFX Credit CARD Activation";
  const metaDescription =
    "";

  return (
    <html lang={locale} dir={isArabicOrKurdish ? "rtl" : "ltr"}>
      <head>
        {/* ✅ SEO Meta Tags */}
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GTCFX" />
        <meta property="og:image" content="https://www.gtcfx.com/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content="https://www.gtcfx.com/og-image.jpg" />

        {/* ✅ Viewport & Fonts */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: '${isArabicOrKurdish ? "Noto Kufi Arabic" : "Poppins"}', sans-serif;
          }
        `}</style>
      </head>

      <body>
   
 
        {/* App content */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer autoClose={3000} />
        <CookieConsent />

        <noscript>
     
        </noscript>
      </body>
    </html>
  );
}
