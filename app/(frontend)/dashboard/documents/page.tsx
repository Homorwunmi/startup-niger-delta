import { RiSearchLine } from 'react-icons/ri';
import { FiDownload } from 'react-icons/fi';
import { DocumentTable } from 'components/dashboard/DocumentTable';

export default function page() {
  return (
    <section className="flex-1 bg-[#F7FBFC] w-full h-full">
      <div className="flex items-center justify-between px-11 py-3 w-full flex-1">
        <h1 className="text-2xl font-semibold text-[#184341]">DOCUMENTS</h1>
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
            <FiDownload className="text-[#184341]" />
          </button>
          <button
            type="button"
            className="bg-[#184341] border rounded-sm px-5 py-1 border-[#E7E6E6]"
          >
            <h3 className="text-white text-base">Upload file</h3>
          </button>
        </div>
      </div>
      <div className="px-11 py-3 w-full flex-1">
        <DocumentTable />
      </div>
    </section>
  );
}
