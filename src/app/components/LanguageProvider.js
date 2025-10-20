'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, defaultLocale } from '../utils/i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    getMessages(locale).then(setMessages);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}
