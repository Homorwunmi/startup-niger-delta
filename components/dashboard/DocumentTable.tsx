import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '../ui/checkbox';
import { FaFilePdf, FaFileExcel, FaFileWord } from 'react-icons/fa';
import { BiSolidFilePng } from 'react-icons/bi';
import { BsFiletypePptx, BsThreeDots } from 'react-icons/bs';

const invoices = [
  {
    name: 'CAC Certificate.pdf',
    type: 'PDF',
    size: '17.7MB',
    createdAt: ' 4:27:45 PM, 23 Jan, 2024 ',
  },
  {
    name: 'Data_Certificate.xls',
    type: 'XLS',
    size: '2.5MB',
    createdAt: ' 4:27:45 PM, 23 Jan, 2024 ',
  },
  {
    name: 'Pitch_notes.doc',
    type: 'DOC',
    size: '1.2MB',
    createdAt: ' 4:27:45 PM, 23 Jan, 2024 ',
  },
  {
    name: 'Business_Plan.ppt',
    type: 'PPT',
    size: '3.4MB',
    createdAt: ' 4:27:45 PM, 23 Jan, 2024 ',
  },
  {
    name: 'Financial_Report.pdf',
    type: 'PDF',
    size: '5.6MB',
    createdAt: ' 4:27:45 PM, 23 Jan, 2024 ',
  },
  {
    name: 'Pitch_Report.png',
    type: 'PNG',
    size: '2.1MB',
    createdAt: ' 4:27:45 PM, 23 Jan, 2024 ',
  },
];

export function DocumentTable() {
  const isEven = (num: number): boolean => {
    return num % 2 === 0;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#E8E8E8] hover:bg-[#E8E8E8]">
          <TableHead className="w-[300px] pl-10">Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Created Time</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow
            key={invoice.name}
            className={`${isEven(index) ? 'bg-[#F9F9F9]' : 'bg-[#FFFFFF]'} hover: cursor-pointer`}
          >
            <TableCell className="flex items-center gap-4 font-medium text-black rounded-l-[5px]">
              <Checkbox
                id={invoice.name}
                className="h-4 rounded-none cursor-pointer"
              />
              {invoice.type === 'PDF' && (
                <span className="flex items-center justify-center bg-[#D42626] h-5 w-5 rounded-xs">
                  <FaFilePdf className="text-white" size={13} />
                </span>
              )}
              {invoice.type === 'XLS' && (
                <span className="flex items-center justify-center bg-[#4AB68E] h-5 w-5 rounded-xs">
                  <FaFileExcel className="text-white" size={11} />
                </span>
              )}
              {invoice.type === 'DOC' && (
                <span className="flex items-center justify-center bg-[#2B7CD3] h-5 w-5 rounded-xs">
                  <FaFileWord className="text-white" size={12} />
                </span>
              )}
              {invoice.type === 'PPT' && (
                <span className="flex items-center justify-center bg-yellow-200 h-5 w-5 rounded-xs">
                  <BsFiletypePptx className="text-black" size={13} />
                </span>
              )}
              {invoice.type === 'PNG' && (
                <span className="flex items-center justify-center bg-[#A6A6A6] h-5 w-5 rounded-xs">
                  <BiSolidFilePng className="text-white" />
                </span>
              )}
              <label htmlFor={invoice.name} className="">
                {invoice.name}
              </label>
            </TableCell>
            <TableCell className="text-[13px] font-medium text-black">
              {invoice.type}
            </TableCell>
            <TableCell className="text-[13px] font-medium text-black">
              {invoice.size}
            </TableCell>
            <TableCell className="text-[13px] font-medium text-black">
              {invoice.createdAt}
            </TableCell>
            <TableCell className="flex items-center justify-end pr-5 rounded-r-[5px]">
              <BsThreeDots className="text-[#0D726F] h-5 w-5" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
