'use client';
import { useState } from 'react';
import Image from 'next/image';

const PayCommission = ({ topTitle,bottomText, buttonText, setIsOpen }) => {
  const features = [
    {
      icon: (
        <svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19.998" cy="19.9978" r="18.3352" fill="#4D4D70" />
          <path d="M28.0011 11.999L11.9996 28.0005" stroke="white" strokeWidth="1.25013" />
          <circle cx="14.4994" cy="15.4994" r="3.87535" stroke="white" strokeWidth="1.25013" />
          <circle cx="25.5008" cy="24.5002" r="3.87535" stroke="white" strokeWidth="1.25013" />
        </svg>

      ),
      title: "Earn Up to 80% in Rebates",
      description: "No caps, no limits. Just real payouts you can count on. "
    },
    {
      icon: (
        <svg width="45" height="45" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1785 6.03233C13.2487 3.36424 13.7838 2.03019 14.6532 1.8453C14.8818 1.79668 15.1181 1.79668 15.3467 1.8453C16.2161 2.03019 16.7512 3.36424 17.8214 6.03233C18.43 7.54962 18.7344 8.30826 19.3038 8.82426C19.4635 8.96899 19.6369 9.09789 19.8215 9.20916C20.4796 9.60582 21.3012 9.6794 22.9443 9.82656C25.7259 10.0757 27.1166 10.2002 27.5414 10.9932C27.6293 11.1574 27.6891 11.3353 27.7183 11.5193C27.8591 12.4077 26.8367 13.3379 24.7918 15.1983L24.2239 15.715C23.2679 16.5847 22.7899 17.0196 22.5135 17.5623C22.3476 17.8879 22.2364 18.2385 22.1843 18.6002C22.0974 19.203 22.2374 19.8339 22.5173 21.0957L22.6174 21.5465C23.1194 23.8093 23.3704 24.9407 23.0571 25.4968C22.7756 25.9964 22.2572 26.3162 21.6844 26.3435C21.0468 26.374 20.1484 25.6419 18.3516 24.1777C17.1678 23.2131 16.5759 22.7308 15.9188 22.5424C15.3183 22.3702 14.6816 22.3702 14.0811 22.5424C13.424 22.7308 12.8321 23.2131 11.6483 24.1777C9.85148 25.6419 8.95307 26.374 8.31547 26.3435C7.74274 26.3162 7.22428 25.9964 6.94281 25.4968C6.62945 24.9407 6.88048 23.8093 7.38252 21.5465L7.48255 21.0957C7.7625 19.8339 7.90247 19.203 7.81561 18.6002C7.7635 18.2385 7.6523 17.8879 7.48644 17.5623C7.20996 17.0196 6.73196 16.5847 5.77595 15.715L5.2081 15.1983C3.16324 13.3379 2.14081 12.4077 2.28161 11.5193C2.31077 11.3353 2.37058 11.1574 2.45854 10.9932C2.88325 10.2002 4.27403 10.0757 7.05559 9.82656C8.69874 9.6794 9.52031 9.60582 10.1784 9.20916C10.363 9.09789 10.5364 8.96899 10.6961 8.82426C11.2655 8.30826 11.5699 7.54962 12.1785 6.03233Z" fill="#4D4D70" stroke="#4D4D70" strokeWidth="3.33368" />
        </svg>
      ),
      title: "Tradeable Bonus for Your Traders",
      description: "Higher deposits, more volume, more commission for you."
    },
    {
      icon: (
        <svg width="45" height="45" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4104_5135)">
            <path d="M36.6938 9.25826C37.6987 8.91415 38.7036 8.57003 39.7081 8.22632C40.2634 8.03609 39.9503 7.22467 39.3942 7.41491C38.3893 7.75902 37.3843 8.10314 36.3798 8.44685C35.8245 8.63708 36.1376 9.44849 36.6938 9.25826Z" fill="#4D4D70" />
            <path d="M31.8612 3.53196C32.3624 2.6434 32.8636 1.75525 33.3648 0.86669C33.6422 0.374752 32.8091 0.0116544 32.5325 0.501977C32.0313 1.39054 31.5301 2.27869 31.0289 3.16725C30.7515 3.65919 31.5847 4.02228 31.8612 3.53196Z" fill="#4D4D70" />
            <path d="M36.2054 16.5378C37.1966 16.9155 38.1877 17.2927 39.1789 17.6703C39.7252 17.8783 40.116 17.0968 39.5667 16.8876C38.5755 16.51 37.5844 16.1327 36.5932 15.7551C36.0469 15.5471 35.6561 16.3286 36.2054 16.5378Z" fill="#4D4D70" />
            <path d="M3.62404 20.7238C3.79926 21.1769 3.97706 21.6293 4.15013 22.0833C4.41425 22.7775 4.08313 23.5227 3.3406 23.7917C2.62082 24.0381 1.83792 23.6766 1.56864 23.0122C1.43938 22.6935 1.32042 22.3708 1.19673 22.0505C0.826968 21.0949 0.45162 20.1418 0.087438 19.1845C-0.138028 18.592 0.0582348 17.9418 0.633711 17.5956C1.29293 17.1994 2.21026 17.426 2.58518 18.0706C2.75481 18.3626 2.84715 18.7156 2.9674 19.0254L3.62447 20.723L3.62404 20.7238Z" fill="#4D4D70" />
            <path d="M32.3952 21.3795C32.3896 22.0334 31.9331 22.6025 31.294 22.8327C30.3621 23.1518 29.4431 22.6413 29.1175 21.8044C28.9793 21.4482 28.8418 21.092 28.7035 20.7353L22.0641 3.57968C22.0327 3.4989 22.0005 3.41812 21.97 3.33734C21.7935 2.86439 21.8451 2.34216 22.1427 1.9205C22.9007 0.846554 24.6383 1.08243 25.1115 2.26219C25.2159 2.52229 25.3138 2.78482 25.4147 3.04614L32.1057 20.3351C32.2371 20.6743 32.3978 21.0116 32.3952 21.3799V21.3795Z" fill="#4D4D70" />
            <path d="M28.2126 21.9878C27.6204 21.9946 27.0273 22.0011 26.4351 22.0072C24.5206 22.0282 22.6069 22.0492 20.6924 22.0698C18.3866 22.0948 16.08 22.1199 13.7742 22.1449C11.7802 22.1663 9.78625 22.1885 7.79227 22.2099C6.9123 22.2192 6.01688 22.1881 5.1352 22.2281C5.12704 22.18 5.11673 22.1316 5.10514 22.0831C5.01066 21.695 4.83114 21.3177 4.68684 20.9445C4.30162 19.9493 3.93314 18.9469 3.53074 17.9578C3.47663 17.8249 3.41006 17.6989 3.33233 17.5813C3.87044 17.1665 4.40813 16.7517 4.9471 16.337C6.42744 15.1956 7.90822 14.0542 9.38857 12.9132C11.1721 11.5383 12.9561 10.1635 14.7396 8.78865C16.2818 7.6 17.8244 6.41135 19.3666 5.2223C19.9696 4.75782 20.5803 4.29981 21.1807 3.8313C21.2391 3.98276 21.3009 4.1326 21.3593 4.28366L28.1551 21.8436C28.1736 21.8917 28.1929 21.9397 28.2126 21.9878Z" fill="#4D4D70" />
            <path d="M18.6766 22.9534C18.6796 23.1852 18.6822 23.417 18.6852 23.6493C18.6903 24.0988 18.68 24.5265 18.406 24.9211C18.0715 25.4034 17.5098 25.6619 16.9081 25.676C16.683 25.6816 16.4576 25.6812 16.2321 25.6833C15.2426 25.6942 14.2527 25.7047 13.2633 25.716C12.4782 25.7245 11.6923 25.8174 11.0614 25.2721C10.6148 24.8864 10.5113 24.3747 10.5044 23.8326C10.5014 23.5693 10.4975 23.306 10.4945 23.0426C11.3427 23.0329 12.1905 23.024 13.0387 23.0148C14.9184 22.9946 16.7977 22.974 18.677 22.9538L18.6766 22.9534Z" fill="#4D4D70" />
          </g>
          <defs>
            <clipPath id="clip0_4104_5135">
              <rect width="40.0042" height="25.4572" fill="white" transform="translate(-0.00411987 0.269287)" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Events & Marketing Tools",
      description: "We’ll help you attract & convert more traders."
    },
    {
      icon: (
        <svg width="45" height="45" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.3347 8.33191C34.2553 8.33191 35.0016 7.58564 35.0016 6.66506C35.0016 5.74449 34.2553 4.99822 33.3347 4.99822V8.33191ZM9.16554 6.66506V8.33191L33.3347 8.33191V6.66506V4.99822L9.16554 4.99822V6.66506ZM9.16554 14.9993V16.6661L22.5003 16.6661V14.9993V13.3324L9.16554 13.3324V14.9993ZM4.99844 10.8322H6.66528C6.66528 9.45131 7.78469 8.33191 9.16554 8.33191V6.66506V4.99822C5.94354 4.99822 3.3316 7.61017 3.3316 10.8322H4.99844ZM4.99844 10.8322H3.3316C3.3316 14.0542 5.94354 16.6661 9.16554 16.6661V14.9993V13.3324C7.78469 13.3324 6.66528 12.213 6.66528 10.8322H4.99844Z" fill="#4D4D70" />
          <path d="M4.99843 20L4.99843 10.8324" stroke="#4D4D70" strokeWidth="3.33368" />
          <path d="M8.33163 35.8345C7.56967 35.8345 6.91441 35.8363 6.39218 35.7661C5.8459 35.6927 5.32181 35.5277 4.89706 35.103C4.47231 34.6783 4.30646 34.1542 4.233 33.6079C4.16277 33.0856 4.16464 32.4297 4.16464 31.6675L4.16464 14.1655L31.6676 14.1655C32.4298 14.1655 33.0857 14.1646 33.608 14.2349C34.1543 14.3083 34.6784 14.4732 35.1031 14.8979C35.5278 15.3227 35.6928 15.8468 35.7662 16.3931C35.8364 16.9154 35.8346 17.5713 35.8346 18.3335V20.8335H30.0006C27.6994 20.8337 25.8336 22.6992 25.8336 25.0005C25.8336 27.3017 27.6994 29.1672 30.0006 29.1675H35.8346V31.6675C35.8346 32.4297 35.8364 33.0856 35.7662 33.6079C35.6927 34.1542 35.5278 34.6783 35.1031 35.103C34.6784 35.5278 34.1543 35.6927 33.608 35.7661C33.0857 35.8363 32.4298 35.8345 31.6676 35.8345L8.33163 35.8345Z" fill="#4D4D70" stroke="#4D4D70" strokeWidth="1.66684" />
        </svg>
      ),
      title: "Instant Commission Payouts",
      description: "Withdraw your partner earnings the moment they hit."
    }
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden text-center">
      <div className="absolute top-0 h-full w-full opacity-50 pointer-events-none">
        <Image
          src="/ib/overlNew.webp"
          alt="Decorative background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative max-w-6xl mx-auto ainer flex flex-col gap-5 md:gap-5 px-4">
        {/* Section Title */}

        <h4 className="text-lg md:text-2xl font-[200]">{topTitle}</h4>
        <h2 className="text-2xl md:text-3xl xl:text-[40px] font-bold text-[#D9C3AA]">
          Pays More Than Just Commission
        </h2>
        <p className="text-sm md:text-base xl:text-[22px] text-white max-w-4xl mx-auto leading-relaxed">
          Welcome to a partnership built for performance. At GTC, we don’t just give you up to 80% in Rebates; we give you the tools to grow your business.
        </p>


       {/* Flip Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 justify-center">
{features.map((feat, idx) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const isFlipped = isMobile && flippedIndex === idx;

  return (
    <div
      key={idx}
      className="group relative w-full h-60 [perspective:1000px] bg-white rounded-2xl text-[#1F2937] flex flex-col items-center"
      onClick={() => {
        if (isMobile) {
          toggleFlip(idx);
        }
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        } group-hover:[transform:rotateY(180deg)]`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center [backface-visibility:hidden] px-10">
          <p className="text-4xl">{feat.icon}</p>
          <h3 className="text-lg font-medium">{feat.title}</h3>
        </div>

        {/* Back Face */}
        <div className="absolute bg-secondary text-white inset-0 flex items-center justify-center p-6 rounded-xl text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-sm md:text-base max-w-60 mx-auto">{feat.description}</p>
        </div>
      </div>
    </div>
  );
})}

</div>


        {/* Footer Text and CTA */}
        <p className="text-sm md:text-base xl:text-2xl font-semibold text-white max-w-4xl mx-auto leading-relaxed mt-2">
          {bottomText}
        </p>
        <div className='flex flex-row items-center justify-center mt-2'>
          <button className="bg-gradient-to-r  from-[#E1CFBB] cursor-pointer to-[#956D42] hover:bg-gradient-to-r  hover:from-[#4e4d71] hover:to-[#4e4d71] text-sm font-bold md:text-base xl:text-lg text-white  px-8 py-3 rounded-xl transition-all duration-300"
          onClick={() => setIsOpen(true)}>
           {buttonText}
          </button>
        </div>


      </div>
    </section>
  );
};

export default PayCommission