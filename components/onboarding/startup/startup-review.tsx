/* eslint-disable import/no-cycle */

'use client';

import { useCallback } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { onboardingRegistrationStartup } from '@/api/onboarding/onboarding';
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
import StartupIdentity from './startup-identification';

export default function StartupReview() {
  const { setRange, setActiveTab, startupState } = useOnboardContext();

  const handleSubmit = async () => {
    // Handle form submission logic here
    console.log('Form submitted with data:', startupState);
    try {
      const response = await onboardingRegistrationStartup(startupState);
      console.log(response);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handlePrev = useCallback(() => {
    setRange(3);

    setActiveTab({
      title: 'Founder/Co-founder Profile',
      Component: <StartupIdentity />,
      src: '/angel/bgTrailer1.svg',
    });
  }, [setRange, setActiveTab]);

  return (
    <section className="flex flex-col items-stretch pb-10 max-w-3xl mx-auto px-4">
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
              <TableCell>{startupState.companyName}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Year of Incorporation</TableCell>
              <TableCell>{startupState.incorporation}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>RC Number</TableCell>
              <TableCell>{startupState.rcNumber}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Industry</TableCell>
              <TableCell>{startupState.industry}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Startup Description</TableCell>
              <TableCell className="h-auto">
                {startupState.description}
              </TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="w-full bg-gray-400 text-xl font-semibold font-poppins px-5"
              >
                Company Contact Info
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-black">
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Company Email</TableCell>
              <TableCell>{startupState.companyEmail}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Company Website</TableCell>
              <TableCell>{startupState.companyWebsite}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Company Address</TableCell>
              <TableCell>{startupState.companyAddress}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Company Phone</TableCell>
              <TableCell>{startupState.companyPhone}</TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="w-full bg-gray-400 text-xl font-semibold font-poppins px-5"
              >
                Founder / Co-founder Profile
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-black">
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Founder Name</TableCell>
              <TableCell>{startupState.founderName}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Founder Email</TableCell>
              <TableCell>{startupState.founderEmail}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Founder Address</TableCell>
              <TableCell>{startupState.founderAddress}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Founder Phone</TableCell>
              <TableCell>{startupState.founderMobile}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>No of Founder</TableCell>
              <TableCell>{startupState.founderNo}</TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="w-full bg-gray-400 text-xl font-semibold font-poppins px-5"
              >
                Founder&apos;s Identification
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-black">
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>CAC certificate</TableCell>
              <TableCell>{startupState.certificate.name}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Company Logo</TableCell>
              <TableCell>{startupState.logo.name}</TableCell>
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
        <Button
          type="button"
          onClick={handlePrev}
          className="px-10 bg-gray-200 hover:bg-gray-200 ml-auto"
        >
          Back
        </Button>
        <Button
          type="button"
          className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </section>
  );
}
