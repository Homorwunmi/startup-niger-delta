import { RiSearchLine } from 'react-icons/ri';
import { LuThumbsUp } from 'react-icons/lu';
import { FiFilter } from 'react-icons/fi';
import Image from 'next/image';

export default function Page() {
  return (
    <section className="flex-1 bg-[#F7FBFC] w-full h-full">
      <div className="flex items-center justify-between px-11 py-3 w-full flex-1">
        <h1 className="text-2xl font-semibold text-[#184341]">DASHBOARD</h1>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="border-[#E7E6E6] bg-white border-[1.1px] rounded-md px-3 py-2 flex items-center gap-2"
          >
            <RiSearchLine className="text-[#184341]" />
          </button>
          <button
            type="button"
            className="border-[#E7E6E6] bg-white border rounded-md px-3 py-2 flex items-center gap-2"
          >
            <LuThumbsUp className="text-[#184341]" />
          </button>
          <button
            type="button"
            className="border-[#E7E6E6] bg-white border rounded-md px-3 py-1 flex items-center gap-2"
          >
            <FiFilter className="text-[#184341] " />
            <h3 className="text-[#184341] text-base">Filter</h3>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-11 py-3 w-full flex-1">
        <div className="bg-[#0A8282] border-b-custom-orange border-b-2 pt-7 w-full flex gap-14 rounded-sm pl-11 pr-36">
          <Image
            src="/images/dash-illus.svg"
            alt="hero"
            width={100}
            height={100}
          />
          <div className="flex flex-col items-start gap-2 ">
            <h1 className="text-2xl font-medium text-white">
              Welcome to your new homepage
            </h1>
            <p className="text-white text-base">
              We can&apos;t wait to help you enhance your business with our
              easy-to-use deliverability tool suite. Here you will find the
              tools, apps, and insights you need to take your tech dream to the
              next level. Ready for takeoff? Let&apos;s get started!
            </p>
          </div>
        </div>
      </div>

      <div className="px-11 py-3 w-full">
        <div className="flex w-full items-center justify-between">
          <div className="bg-[#7BBBB2] rounded-sm h-[185px] shadow-md border w-[48%]">
            <p>hey</p>
          </div>
          <div className="bg-white rounded-sm h-[185px] shadow-md border w-[48%]">
            <p>hey</p>
          </div>
        </div>

        <div className="grid items-center justify-between mt-8 grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-sm border w-[335px] h-60">
            <p>hey</p>
          </div>
          <div className="bg-white shadow-md rounded-sm border w-[335px] h-60">
            <p>hey</p>
          </div>
          <div className="bg-white shadow-md rounded-sm border w-[335px] h-60">
            <p>hey</p>
          </div>
        </div>
      </div>
    </section>
  );
}
