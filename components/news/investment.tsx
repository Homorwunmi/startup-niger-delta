'use client';

import Image from 'next/image';

export default function Investment() {
  return (
    <div>
      <div className="mt-7 pb-2.5 mb-6 relative border-b">
        <div className="flex justify-between items-center">
          <div className="relative">
            <h2 className="font-semibold text-2xl text-[#153230] uppercase">
              INVESTMENT
            </h2>
            <div className="absolute bottom-[-10px] left-0 w-28 border-b-8 border-[#FFA500]" />
          </div>
        </div>

        {/* Arrow Buttons Positioned Above the Border */}
        <div className="absolute -bottom-0 right-3 flex space-x-0">
          <button
            type="button"
            aria-label="Previous"
            className="w-6 h-7 flex items-center justify-center rounded-s-xl p-2 border border-[#153230] text-[#153230] hover:bg-[#153230] hover:text-white text-lg font-light bg-white"
          >
            &lt;
          </button>
          <button
            type="button"
            aria-label="Next"
            className="w-6 h-7 flex items-center justify-center rounded-e-xl p-2 border border-[#153230] text-[#153230] hover:bg-[#153230] hover:text-white text-lg font-light bg-white"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-8 flex-wrap md:flex-nowrap">
        {/* Main Article */}
        <div className="w-full md:w-1/2">
          <h1 className="font-semibold text-2xl text-[#153230] hover:text-custom-orange mb-4">
            How collaboration makes us better business person
          </h1>
          <div className="relative w-full h-[251px] mb-3.5 rounded-lg overflow-hidden">
            <Image
              src="/new/double.png"
              alt="Business collaboration"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="flex justify-between mb-3.5">
            <p className="text-[#153230] text-sm">By Admin NDS</p>
            <div className="flex gap-2 text-sm text-[#153230]">
              <p>Jan 6, 2024</p>
              <span>&bull;</span>
              <p>2 min read</p>
            </div>
          </div>
          <p className="text-[#153230] text-sm mb-3.5">
            Lorem ipsum dolor sit amet consectetur. Ont Condimentum adipiscing
            at iaculis m adiscing convallis ut feugiat morbi. In iquam dolor in
            justo{' '}
            <span className="text-custom-orange italic cursor-pointer">
              Read more...
            </span>
          </p>
        </div>

        {/* Side Thumbnails */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 mb-4">
          {/* Thumbnail 1 */}
          <div>
            <div className="relative w-full h-[166px] rounded-lg overflow-hidden">
              <Image
                src="/new/people.png"
                alt="People discussion"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-xs font-semibold text-[#153230] mt-1 mb-1">
              How collaboration makes you better business person
            </p>
            <div className="flex gap-2 text-[11.8px] text-[#153230]">
              <p>Jan 6, 2024</p>
              <span>&bull;</span>
              <p>2 min read</p>
            </div>
          </div>

          {/* Thumbnail 2 */}
          <div>
            <div className="relative w-full h-[166px] rounded-lg overflow-hidden">
              <Image
                src="/new/double.png"
                alt="Double exposure business"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-xs font-semibold text-[#153230] mt-1 mb-1">
              How collaboration makes you better business person
            </p>
            <div className="flex gap-2 text-[11.8px] text-[#153230]">
              <p>Jan 6, 2024</p>
              <span>&bull;</span>
              <p>2 min read</p>
            </div>
          </div>
          <div>
            <div className="relative w-full h-[166px] rounded-lg overflow-hidden">
              <Image
                src="/new/people.png"
                alt="People discussion"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-xs font-semibold text-[#153230] mt-1 mb-1">
              How collaboration makes you better business person
            </p>
            <div className="flex gap-2 text-[11.8px] text-[#153230]">
              <p>Jan 6, 2024</p>
              <span>&bull;</span>
              <p>2 min read</p>
            </div>
          </div>
          <div>
            <div className="relative w-full h-[166px] rounded-lg overflow-hidden">
              <Image
                src="/new/people.png"
                alt="People discussion"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-xs font-semibold text-[#153230] mt-1 ">
              How collaboration makes you better business person
            </p>
            <div className="flex gap-2 text-[11.8px] text-[#153230]">
              <p>Jan 6, 2024</p>
              <span>&bull;</span>
              <p>2 min read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
