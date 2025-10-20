'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import React, { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'en', label: 'English', country: 'gb' },
  { code: 'ar', label: 'العربية', country: 'sa' },
];

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const currentPath = usePathname();
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (newLocale) => {
    if (newLocale !== locale) {
      router.replace(currentPath, { locale: newLocale });
    }
    setIsOpen(false);
  };

  const current = languages.find((lang) => lang.code === locale);

  // 🛡️ This ensures dropdown stays open while mouse is within or scrolling inside
  useEffect(() => {
    const handleScroll = (e) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('scroll', handleScroll, true);
    return () => {
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  return (
    <div
      className="relative inline-block text-left z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <div className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md shadow-md text-sm cursor-pointer border border-[#b688565b] border-opacity-10 mb-1">
        <span>{current?.label}</span>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 bg-primary  rounded-md ltr:w-[101px] rtl:w-[92px] shadow-lg ring-1 ring-black ring-opacity-5 overflow-auto max-h-60 "
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="flex items-center gap-2 w-full text-sm text-white hover:bg-[#1f2773] px-3 py-2 border-b cursor-pointer border-[#ffffff3a]"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
