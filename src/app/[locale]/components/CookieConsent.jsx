'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Static translations object
const translations = {
  en: {
    message: "By clicking 'Agree', you agree to the storing of cookies on your device to enhance your user experience, site navigation, analyse site usage, and assist in our marketing efforts.",
    cta: "Agree",
    linkText: "Read our privacy policy here.",
  },
  es: {
    message: "Al hacer clic en 'Aceptar', aceptas el almacenamiento de cookies en tu dispositivo para mejorar tu experiencia de usuario, la navegación en el sitio, analizar el uso del sitio y asistir en nuestros esfuerzos de marketing.",
    cta: "Aceptar",
    linkText: "Lee nuestra política de privacidad aquí.",
  },
  pt: {
    message: "Ao clicar em 'Aceitar', você concorda com o armazenamento de cookies no seu dispositivo para melhorar sua experiência de usuário, facilitar a navegação no site, analisar o uso do site e auxiliar em nossos esforços de marketing.",
    cta: "Concordar",
    linkText: "Leia nossa política de privacidade aqui.",
  },
  ru: {
    message: "Нажимая 'Хорошо', вы соглашаетесь с сохранением cookies на вашем устройстве для улучшения вашего пользовательского опыта, навигации по сайту, анализа использования сайта и поддержки наших маркетинговых усилий.",
    cta: "Хорошо",
    linkText: "Прочитайте нашу политику конфиденциальности здесь.",
  },
  ar: {
    message: "من خلال النقر على 'موافق'، فإنك توافق على تخزين ملفات تعريف الارتباط على جهازك لتحسين تجربتك، والتنقل في الموقع، وتحليل استخدامه، والمساعدة في جهودنا التسويقية.",
    cta: "موافق",
    linkText: "اقرأ سياسة الخصوصية الخاصة بنا من هنا.",
  },
  zh: {
    message: "点击'我同意'，即表示您同意我们在设备上存储Cookie以提升用户体验、优化网站导航、分析使用情况并协助我们的营销活动。",
    cta: "我同意",
    linkText: "在此阅读隐私政策",
  },
  vi: {
  message: "Bằng cách nhấp vào 'Tôi đồng ý', bạn đồng ý cho phép lưu cookie trên thiết bị của mình để cải thiện trải nghiệm người dùng, điều hướng trang web, phân tích việc sử dụng trang web và hỗ trợ các hoạt động tiếp thị của chúng tôi.",
  cta: "Tôi đồng ý",
  linkText: "Đọc chính sách bảo mật của chúng tôi tại đây."
}
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
      setVisible(true);
    } else {
      const accepted = localStorage.getItem('cookiesAccepted');
      if (!accepted) setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent',
      consent_status: 'accepted',
    });

    fetch('/api/set-cookie-consent');
    setVisible(false);
  };

  if (!visible) return null;

  // Determine locale from URL or fallback to 'en'
  const locale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] || 'en' : 'en';
  const { message, cta, linkText } = translations[locale] || translations.en;
  const isRTL = ['ar'].includes(locale);

  return (
    <div
      className={`fixed bottom-4 inset-x-4 md:inset-x-0 md:max-w-5xl mx-auto z-50 bg-gradient-to-r from-[#293794] to-[#000021] text-white px-4 py-5 rounded-md border border-[#f2f2f2]/20 shadow-lg ${
        isRTL ? 'rtl' : 'ltr'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className={`text-center md:text-${isRTL ? 'right' : 'left'} text-xs md:text-sm leading-relaxed`}
        >
          {message}
          <span className="mx-1" />
          <Link
            href={`/${locale}/privacy-policy`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary"
          >
            {linkText}
          </Link>
        </p>
        <button
          onClick={handleAccept}
          className="bg-secondary text-white font-semibold text-xs md:text-sm px-4 py-2 rounded-md hover:bg-opacity-90 transition w-full md:w-48"
        >
          {cta}
        </button>
      </div>
    </div>
  );
}