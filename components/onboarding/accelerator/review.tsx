/* eslint-disable import/no-cycle */

'use client';

import { useCallback, useState } from 'react';
import { useOnboardContext } from '@/(frontend)/contexts/OnboardingContext';
import { toast } from 'sonner';
import { onboardingRegistrationAccelerator } from '@/api/onboarding/onboarding';
import { useRouter } from 'next/navigation';
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
import AcceleratorIdentification from './identification';
import { Button } from '../../ui/button';

export default function AcceleratorReview() {
  const router = useRouter();
  const { setRange, setActiveTab, acceleratorState } = useOnboardContext();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response =
        await onboardingRegistrationAccelerator(acceleratorState);
      if (!response.success) {
        setIsLoading(false);
        throw new Error(response.message || 'Registration failed');
      }
      toast.success(response.message, {
        onAutoClose: () => {
          setIsLoading(false);
          router.push('/dashboard');
        },
      });
    } catch (error) {
      setIsLoading(false);
      toast.error(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      );
    }
  };

  const handlePrev = useCallback(() => {
    setRange(3);

    setActiveTab({
      title: 'Identification',
      Component: <AcceleratorIdentification />,
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
              <TableCell>{acceleratorState.companyName}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Industry</TableCell>
              <TableCell>{acceleratorState.industry}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell> Business Description</TableCell>
              <TableCell>{acceleratorState.description}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Funding Interest</TableCell>
              <TableCell>{acceleratorState.fundingInterest}</TableCell>
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
              <TableCell>{acceleratorState.companyEmail}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Company Phone Number</TableCell>
              <TableCell>{acceleratorState.companyPhone}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Company Address</TableCell>
              <TableCell>{acceleratorState.companyAddress}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Company Website</TableCell>
              <TableCell>{acceleratorState.companyWebsite}</TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="w-full bg-gray-400 text-xl font-semibold font-poppins px-5"
              >
                Investment Info
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-black">
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Principal Promoter</TableCell>
              <TableCell>{acceleratorState.principalPromoter}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Investment Experience</TableCell>
              <TableCell>{acceleratorState.investmentExperience}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Investment Proof</TableCell>
              <TableCell>{acceleratorState.investmentProof}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Investment Size</TableCell>
              <TableCell>{acceleratorState.investmentSize}</TableCell>
            </TableRow>
          </TableBody>

          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={2}
                className="w-full bg-gray-400 text-xl font-semibold font-poppins px-5"
              >
                Identification
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-black">
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Means of identification</TableCell>
              <TableCell>{acceleratorState.identification}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Nationality</TableCell>
              <TableCell>{acceleratorState.nationality}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Message</TableCell>
              <TableCell>{acceleratorState.message}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-15 flex items-center justify-between gap-2">
        <p className="flex items-center gap-4 text-base">
          <Checkbox
            id="terms"
            value="I agree to the terms and condition"
            checked={agreedToTerms}
            onCheckedChange={() => setAgreedToTerms(!agreedToTerms)}
            className="cursor-pointer"
          />
          <Label htmlFor="terms" className="text-black">
            I agree to the terms and condition
          </Label>
        </p>
        <Button
          type="button"
          onClick={handlePrev}
          className="px-10 bg-gray-200 hover:bg-gray-200 ml-auto cursor-pointer"
        >
          Back
        </Button>
        <Button
          type="button"
          className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark cursor-pointer"
          onClick={handleSubmit}
          disabled={!agreedToTerms}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </section>
  );
}
