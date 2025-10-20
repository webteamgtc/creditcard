'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

const MainFooter = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#0b0a33] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        <div className="grid grid-cols-1">
          <div className="md:col-span-2 space-y-3 text-[#cccccc] text-xs leading-relaxed">
            <p>
              <span className="text-secondary">{t('riskWarningTitle')}</span> {t('riskWarningText')}
            </p>
           
            <p>{t('company2')}</p>
 
            <p>
              <span className="text-secondary text-xs">{t('affiliateNoticeTitle')}</span> {t('affiliateNoticeText')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
