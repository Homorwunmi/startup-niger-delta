import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export default function page() {
  return (
    <section className="flex-1 bg-[#F7FBFC] w-full h-full">
      <div className="flex items-center justify-between px-11 py-3 w-full flex-1">
        <h1 className="text-2xl font-semibold text-[#184341]">CALENDAR</h1>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="border-[#0D726F] bg-white border-[1.1px] rounded-full flex items-center justify-center h-10 w-10"
          >
            <SlArrowLeft className="text-[#184341]" />
          </button>
          <button
            type="button"
            className="border-[#0D726F] bg-white border-[1.1px] rounded-full flex items-center py-3 px-3"
          >
            <SlArrowRight className="text-[#184341]" />
          </button>
        </div>
      </div>
    </section>
  );
}
