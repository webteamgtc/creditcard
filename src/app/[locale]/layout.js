
import Script from "next/script";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import CookieConsent from "./components/CookieConsent";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';


export default function RootLayout({
  children,
  params,
}) {
  const locale = params?.locale ?? "en";
  const isArabicOrKurdish = locale === "ar" || locale === "ku";
  const GTM_ID = "GTM-PSWH9QF";

  return (
    <html lang={locale} dir={isArabicOrKurdish ? "rtl" : "ltr"}>
      <head>
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <style>{`
          body { font-family: '${isArabicOrKurdish ? "Noto Kufi Arabic" : "Poppins"}', sans-serif; }
        `}</style>
      </head>

      <body>
        {/* Google Tag Manager (noscript) – MUST be first in body */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {/* Google Tag Manager – load after hydration */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* your app */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer autoClose={3000} />
        <CookieConsent />
             <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSWH9QF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
