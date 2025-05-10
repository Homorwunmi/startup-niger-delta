import { RiSearchLine } from 'react-icons/ri';
import { LuThumbsUp } from 'react-icons/lu';
import { FiFilter } from 'react-icons/fi';

export default function page() {
  return (
    <section className="flex-1 bg-[#F7FBFC] w-full h-full">
      <div className="flex items-center justify-between px-11 py-3 w-full flex-1">
        <h1 className="text-2xl font-semibold text-[#184341]">SCALEUP</h1>
        <div className="flex items-center gap-4">
          <button className="border-[#E7E6E6] bg-white border-[1.1px] rounded-md px-3 py-2 flex items-center gap-2">
            <RiSearchLine className="text-[#184341]" />
          </button>
          <button className="border-[#E7E6E6] bg-white border rounded-md px-3 py-2 flex items-center gap-2">
            <LuThumbsUp className="text-[#184341]" />
          </button>
          <button className="border-[#E7E6E6] bg-white border rounded-md px-3 py-1 flex items-center gap-2">
            <FiFilter className="text-[#184341] " />
            <h3 className="text-[#184341] text-base">Filter</h3>
          </button>
        </div>
      </div>
    </section>
  );
}
