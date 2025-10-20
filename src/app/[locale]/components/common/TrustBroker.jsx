'use client';
import React from 'react';

const TrustBroker = ({
  title,
  subtitle,
  features = [],
  buttonLabel = 'Start Earning',
  onClick,
  gradientFrom = '#E1CFBB',
  gradientTo = '#956D42',
  backgroundImage = '/ib/candle.webp',
}) => {
  return (
    <section className="relative text-white py-8 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
        }}
      />

      {/* Decorative Background Image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-80">
        <img
          src={backgroundImage}
          alt="Decorative"
          className="w-full h-auto object-contain object-bottom"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 text-left items-center">
          {/* Left */}
          <div className="text-left md:text-right">
            <h3 className="text-2xl md:text-2xl xl:text-[40px] font-bold text-white mb-3">{title}</h3>
            <p className="text-base text-white/90">{subtitle}</p>
          </div>

          {/* Right */}
          <div>
            <ul className="text-sm md:text-base text-white/90 list-disc pl-5 space-y-5">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div>
          <img src="/divider.svg" alt="Divider" className="mx-auto py-10 w-full max-w-md md:max-w-lg" />
        </div>

        {/* CTA */}
        <div className="text-center col-span-2 flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-center text-white leading-tight mb-6 sm:max-w-2xl xl:max-w-5xl mx-auto">
            Switch to a broker that doesn’t just say it, we prove it every day.
          </h2>
          <button
            className="bg-white text-[#B48755] hover:bg-[#4e4d71] cursor-pointer px-6 py-3 text-sm md:text-base font-bold xl:text-lg rounded-lg flex flex-row gap-4 items-center justify-center shadow transition-all duration-300"
            onClick={onClick}
          >
            {buttonLabel}
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L1 13" stroke="#B48755" strokeWidth="3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustBroker