'use client';
import React from 'react';
import Image from 'next/image';

const GrowBusiness = ({
  topTitle,
  mainTitle,
  description1,
  description2,
  buttonLabel = 'Make the Switch',
  onClick,
  backgroundImage = '/ib/bottom-overlay.webp',
}) => {
  return (
    <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden text-center">
      {/* Background Image */}
      <div className="absolute top-0 h-full w-full opacity-50 pointer-events-none">
        <Image src={backgroundImage} alt="Decorative background" fill className="object-contain" />
      </div>

      <div className="relative container mx-auto">
        <div className="max-w-4xl mx-auto z-10 relative flex flex-col gap-5">
          {topTitle && (
            <h4 className="text-lg md:text-2xl xl:text-3xl font-[200]">{topTitle}</h4>
          )}
          {mainTitle && (
            <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#D9C3AA] max-w-xl mx-auto">
              {mainTitle}
            </h2>
          )}
          {description1 && (
            <p className="text-base md:text-lg xl:text-[22px]">{description1}</p>
          )}
          {description2 && (
            <p className="text-xl xl:text-2xl text-white font-semibold">
              <span className="text-white">{description2}</span>
            </p>
          )}
          <div className="flex flex-row justify-center items-center gap-4 mt-2">
            <button
              className="bg-gradient-to-r from-[#E1CFBB] to-[#956D42] hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm md:text-base font-bold xl:text-lg text-white px-6 py-3 rounded-lg transition-all duration-300"
              onClick={onClick}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness