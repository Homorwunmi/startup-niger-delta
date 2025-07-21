'use client';

import Image from 'next/image';
import NewEvent from './new-event';
import Ad from './ad';

export default function Upcoming() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-[92%] md:w-[87%] mx-auto">
      {/* Left: Main Content */}
      <div className="md:col-span-2">
        {/* Heading and Share Button */}
        <div className="flex sm:flex-row justify-between items-start sm:items-center mt-7 border-b pb-3 mb-6 relative gap-3">
          <div className="relative">
            <h2 className="font-semibold text-xl sm:text-2xl uppercase">
              Upcoming
            </h2>
            <div className="absolute bottom-[-10px] left-0 w-20 sm:w-28 border-b-8 border-[#FFA500]" />
          </div>

          <div className="flex items-center gap-2">
            <Image src="/events/share.svg" alt="Share" width={20} height={20} />
            <p className="text-sm sm:text-base font-medium text-[#153230]">
              Share
            </p>
          </div>
        </div>

        {/* Title */}
        <p className="text-2xl sm:text-3xl md:text-[36px] font-medium text-[#153230] mb-4">
          Founders training: meeting your financial obligations
        </p>

        {/* Event Image */}
        <div className="w-full">
          <Image
            src="/events/event-up.png"
            alt="upcoming events"
            width={1000}
            height={500}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Event Info */}
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-between mt-6 mb-5 w-full md:w-[85%] gap-5">
            {/* Date/Time */}
            <div className="flex items-start">
              <div className="relative h-20 border-l-2">
                <div className="absolute left-0 bottom-0 h-8 border-l-8 border-[#FFA500]" />
              </div>
              <div className="flex flex-col ml-4">
                <p className="text-[#153230] text-2xl sm:text-3xl font-medium mb-1">
                  6
                </p>
                <p className="text-sm font-medium text-[#153230]">
                  January 2024
                </p>
                <p className="text-sm font-medium text-[#153230]">
                  12:00-14:00
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <Image
                src="/events/location.svg"
                alt="Location"
                width={24}
                height={24}
              />
              <p className="text-sm font-medium text-[#153230]">
                Ground Floor, Beech House, Anchorage Avenue
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="w-full">
            <p className="text-[15px] font-medium text-[#153230] mb-5">
              Join us for lunch with Elon Musk, Head of Investment and
              Compliance at NDS, and Olu Davids, Director at Finance
              Procurement. This session covers a broad overview of your
              responsibilities as a trustee and the opportunities of bespoke
              investment solutions, designed to help you further your
              organization purpose.
            </p>
            <p className="text-[15px] font-medium text-[#E64522] italic mb-2">
              To be a guest, a speaker or an exhibitor
            </p>
            <button
              type="button"
              className="text-sm sm:text-base font-medium text-white bg-[#FF7D05] rounded-sm py-2 px-5 sm:px-6 mb-8"
            >
              Register
            </button>
          </div>

          {/* NewEvent Component */}
          <NewEvent />

          {/* Place Your Ad Section */}
          <div className="my-7 p-4 sm:p-5 w-full bg-[#F6F6F6] rounded-sm h-auto flex justify-end items-center">
            <button
              type="button"
              className="w-full sm:w-[50%] md:w-[30%] text-sm sm:text-base font-medium text-white bg-[#FF7D05] rounded-3xl py-2 px-6"
            >
              Place your AD
            </button>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-1 flex justify-center md:justify-start items-start mt-8">
        <div className="md:sticky top-8 w-full">
          <Ad />
        </div>
      </div>
    </div>
  );
}
