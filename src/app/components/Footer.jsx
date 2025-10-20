'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0a33] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
        <div className="grid grid-cols-1">
          <div className="md:col-span-2 space-y-3 text-[#cccccc] text-xs leading-relaxed">
            <p>
              <span className="text-secondary font-medium">Risk Warning:</span> Trading leveraged products such as CFDs involves a high level of risk and may not be suitable for all investors. You could lose more than your initial investment. Please ensure you fully understand the risks and consult an independent advisor if needed.
            </p>
            <p>
              <span className="text-secondary">GTC Global Ltd</span>, regulated by the FSC Mauritius (License No. GB22200292)
            </p>
            <p>
              <span className="text-secondary">GTC Global Pty Ltd</span>, regulated by the Australian Securities and Investments Commission (ASIC)
            </p>
            <p>
              <span className="text-secondary">GTC Global Trade Capital Co., Limited</span>, registered in Vanuatu and licensed by the Vanuatu Financial Services Commission (VFSC)
            </p>
            <p>
              <span className="text-secondary font-medium">Jurisdiction Notice:</span> GTC does not provide services in jurisdictions where such offerings would be contrary to local laws.
            </p>
            <p>
              <span className="text-secondary font-medium">Affiliate Notice:</span> Affiliate/partner content is for referral and marketing purposes only and does not constitute financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
