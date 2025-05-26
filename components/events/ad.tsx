'use client';

import Image from 'next/image';

interface SocialIcon {
  src: string;
}

const socialIcons: SocialIcon[] = [
  { src: '/events/facebook.svg' },
  { src: '/events/twitter.svg' },
  { src: '/events/youtube.svg' }, 
  { src: '/events/instagram.svg' },
];
export default  function RightSidebar() { 
  return (
    <div className="w-full flex flex-col items-center mb-8 px-4 sm:px-0">
      {/* Search Box */}
      <div className="w-full max-w-sm overflow-hidden rounded-l-2xl border border-[#CFE3D4] flex">
        <input
          type="text"
          placeholder="Search events here..."
          className="flex-1 px-4 py-2 text-sm text-[#153230] focus:outline-none"
        />
        <button className="bg-[#FF7A00] px-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#1E40AF"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </button>
      </div>

      {/* Social Pixel */}
      <div className="w-full text-left mt-8 max-w-sm px-2 sm:px-0">
        <h3 className="text-[#153230] font-semibold text-2xl uppercase mb-2">
          Social Pixel
        </h3>
        <div className="border-b-4 border-[#FF7A00] w-10 mb-8" />

        <div className="flex  justify-center gap-6 mb-8">
          {socialIcons.map((icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-16 h-16 sm:w-20 sm:h-20 justify-center relative"
            >
              <Image
                src={icon.src}
                alt="social icon"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-[#153230] w-full max-w-sm rounded-md p-4 sm:p-6 text-white text-sm flex flex-col">
        {/* Month Nav */}
        <div className="flex gap-3 justify-center items-center my-3 text-sm">
          <button>{'<'}</button>
          <span className="font-semibold">January 2024</span>
          <button>{'>'}</button>
        </div>

        {/* Days labels */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-gray-300">
              {day}
            </div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs flex-grow auto-rows-fr">
          {Array.from({ length: 31 }, (_, index) => {
            const day = index + 1;
            return (
              <div
                key={day}
                className={`p-1 rounded-full flex items-center justify-center cursor-pointer ${
                  day === 3
                    ? 'bg-white text-[#153230] font-bold'
                    : 'hover:bg-[#1e1e1e]/10'
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>

        <button className="my-4 w-1/2 mx-auto text-sm bg-[#FF7A00] text-white py-2 rounded-sm">
          Add to Calendar
        </button>
      </div>

      {/* Future Ad Section */}
      {/*
      <div className="w-full h-[371px] bg-[#F6F6F6] mt-10 rounded-sm flex flex-col items-center justify-center">
        <button className="w-[60%] mb-60 bg-[#FF7A00] text-white py-2 text-sm rounded-full font-medium">
          Place Your Ad
        </button>
      </div>
      */}
    </div>
  );
}

