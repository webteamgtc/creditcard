'use client';
import React from 'react';

const TestimonialCard = ({ text, name, stars, odd }) => (
  <div
    className={`bg-white rounded-lg p-6 text-sm space-y-4 flex flex-col gap-6 ${
      odd ? 'items-end' : ''
    }`}
    style={{
      boxShadow: '1px 6px 16px 0px #0000001A',
    }}
  >
    <p className="text-3xl leading-tight m-0">
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={odd ? { transform: 'rotate(180deg)' } : {}}
      >
        <path
          d="M2.30984 3.3405C3.94667 1.566 6.4235 0.666504 9.67034 0.666504H10.837V3.95534L9.899 4.14317C8.30067 4.46284 7.18884 5.09167 6.59384 6.0145C6.28328 6.51161 6.10719 7.08087 6.08284 7.6665H9.67034C9.97975 7.6665 10.2765 7.78942 10.4953 8.00821C10.7141 8.22701 10.837 8.52375 10.837 8.83317V16.9998C10.837 18.2867 9.7905 19.3332 8.50367 19.3332H1.50367C1.19425 19.3332 0.897503 19.2103 0.678711 18.9915C0.459918 18.7727 0.337002 18.4759 0.337002 18.1665V12.3332L0.340502 8.92767C0.330002 8.79817 0.108335 5.72984 2.30984 3.3405ZM21.337 19.3332H14.337C14.0276 19.3332 13.7308 19.2103 13.512 18.9915C13.2933 18.7727 13.1703 18.4759 13.1703 18.1665V12.3332L13.1738 8.92767C13.1633 8.79817 12.9417 5.72984 15.1432 3.3405C16.78 1.566 19.2568 0.666504 22.5037 0.666504H23.6703V3.95534L22.7323 4.14317C21.134 4.46284 20.0222 5.09167 19.4272 6.0145C19.1166 6.51161 18.9405 7.08087 18.9162 7.6665H22.5037C22.8131 7.6665 23.1098 7.78942 23.3286 8.00821C23.5474 8.22701 23.6703 8.52375 23.6703 8.83317V16.9998C23.6703 18.2867 22.6238 19.3332 21.337 19.3332Z"
          fill="#4D4D70"
        />
      </svg>
    </p>
    <p className={`text-base mb-0 ${odd ? 'text-right' : ''}`}>{text}</p>
    <p className="text-sm text-[#808098] mb-0">{name}</p>

    <div className={`flex text-[#E6B34A] justify-end text-2xl ${odd ? 'w-full justify-start' : ''}`}>
      {'★'.repeat(stars)}
    </div>
  </div>
);

const FeedBack = ({
  title,
  description,
  testimonials = [],
  buttonLabel = 'Join Us',
  onClick,
}) => {
  return (
    <section className="bg-[#f9f9f9] india-bg py-8 md:py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 items-start gap-8 md:gap-16">
          {/* Left */}
          <div className="flex flex-col text-center md:text-left justify-center items-center md:items-start space-y-8 md:space-y-6">
            <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#4D4D70] leading-snug capitalize w-72 md:w-full max-w-xl mx-auto md:mx-0">
              {title}
            </h2>
            <p className="text-sm md:text-base xl:text-[22px] text-gray-600 max-w-xl">{description}</p>
            <button
              className="w-fit bg-white border border-gray-300 hover:bg-[#4e4d71] hover:text-white hover:border-gray-400 text-sm font-bold md:text-base xl:text-lg text-[#1f2937] px-8 py-3 rounded-xl flex flex-row gap-4 items-center transition"
              onClick={onClick}
            >
              {buttonLabel}
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#000032" strokeWidth="3" />
              </svg>
            </button>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-3 md:gap-6">
            {testimonials.map((item, idx) => (
              <TestimonialCard key={idx} {...item} odd={idx % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack