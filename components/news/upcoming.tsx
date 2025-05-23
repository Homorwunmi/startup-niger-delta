'use client';

import Blog from './blog';
import Investment from './investment';
import Ad from './ad';

export default function Upcoming() {
  return (
    <div className="grid grid-cols-3 gap-12 w-[87%] mx-auto">
      {/* Left: Main Content */}
      <div className="col-span-2">
        {/* Heading and Share Button */}
        <div className="mt-7 pb-2.5 mb-6 relative ">
          <div className="flex justify-between items-center">
            <div className="relative">
              <h2 className="font-semibold text-2xl text-[#153230] uppercase">
                RECENT NEWS
              </h2>
              <div className="absolute bottom-[-10px] left-0 w-28 border-b-8 border-[#FFA500]" />
            </div>
          </div>

          {/* Arrow Buttons Positioned Above the Border */}
          <div className="absolute -bottom-0 right-3 flex space-x-0">
            <button
              type="button"
              className="w-6 h-7 flex items-center justify-center rounded-s-xl p-2 border border-[#153230] text-[#153230] hover:bg-[#153230] hover:text-white text-lg font-light bg-white"
            >
              &lt;
            </button>
            <button
              type="button"
              className="w-6 h-7 flex items-center justify-center rounded-e-xl p-2 border hover:bg-[#153230] hover:text-white border-[#153230] text-[#153230] text-lg font-light bg-white"
            >
              &gt;
            </button>
          </div>
        </div>
        {/*  */}
        <Blog/>
        <Investment />
      </div>
      {/* ad section */}
      <Ad />
    </div>
  );
}
