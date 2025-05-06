'use client';

import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { Label } from '../../ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table';

export default function StartupReview() {
  return (
    <section className="flex flex-col items-stretch pb-10">
      <div className="overflow-scroll h-96">
        <Table className="table-container">
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="w-full bg-gray-400 text-xl font-semibold font-poppins px-5"
              >
                Company Profile
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-black">
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Company Name</TableCell>
              <TableCell>Input text format</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Year of Incorporation</TableCell>
              <TableCell>Input year options</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>RC Number</TableCell>
              <TableCell>Input number format</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Industry</TableCell>
              <TableCell>Input text format</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Startup Description</TableCell>
              <TableCell>Input text format</TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="w-full bg-gray-400 text-xl font-semibold font-poppins px-5"
              >
                Company Profile
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-black">
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Company Name</TableCell>
              <TableCell>Input text format</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Year of Incorporation</TableCell>
              <TableCell>Input year options</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>RC Number</TableCell>
              <TableCell>Input number format</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Industry</TableCell>
              <TableCell>Input text format</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Startup Description</TableCell>
              <TableCell>Input text format</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-15 flex items-center justify-between gap-2">
        <p className="flex items-center gap-4 text-base">
          <Checkbox id="terms" value="I agree to the terms and condition" />
          <Label htmlFor="terms" className="text-black">
            I agree to the terms and condition
          </Label>
        </p>
        <Button className="px-10 bg-gray-200 hover:bg-gray-200 ml-auto">
          Back
        </Button>
        <Button className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark">
          Submit
        </Button>
      </div>
    </section>
  );
}
