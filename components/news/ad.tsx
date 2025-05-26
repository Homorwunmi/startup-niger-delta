'use client';

import Image from 'next/image';
import Article from '@/components/news/article';

interface SocialIcon {
  src: string;
}

const socialIcons: SocialIcon[] = [
  { src: '/events/facebook.svg' },
  { src: '/events/twitter.svg' },
  { src: '/events/youtube.svg' },
  { src: '/events/instagram.svg' },
];

export default function RightSidebar(){
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="w-full max-w-sm overflow-hidden rounded-l-2xl mb-20 border border-[#CFE3D4] flex">
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

      {/* article */}
      <Article />

      {/* Social Pixel */}
      <div className="w-full text-left mt-8 max-w-sm">
        <h3 className="text-[#153230] font-semibold text-2xl uppercase mb-2">
          Social Pixel
        </h3>
        <div className="border-b-4 border-[#FF7A00] w-10 mb-8" />

        <div className="flex justify-center gap-6 mb-8">
          {socialIcons.map((icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center  w-20 h-20 justify-center relative"
            >
              <Image
                src={icon.src}
                alt="social icon"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Ad Placeholder */}
      {/* <div className="w-full h-[371px] bg-[#F6F6F6] mt-10 rounded-sm" >
        
      <button className="w-[60%] mb-60 bg-[#FF7A00] text-white py-2 text-sm rounded-full font-medium">
        Place Your Ad
      </button>

      </div> */}
    </div>
  );
}
