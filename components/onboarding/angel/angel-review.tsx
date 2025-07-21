/* eslint-disable import/no-cycle */

'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { onboardingRegistrationAngel } from '@/api/onboarding/onboarding';
import { useOnboardContext } from '@/(frontend)/contexts/OnboardingContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table';
import AngelFormIdentify from './Angel-form-identify';
import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { Label } from '../../ui/label';

export default function AngelReview() {
  const router = useRouter();
  const { setRange, setActiveTab, angelState } = useOnboardContext();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    try {
      setIsLoading(true);
      const response = await onboardingRegistrationAngel(angelState);
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
  }

  const handlePrev = useCallback(() => {
    setRange(3);

    setActiveTab({
      title: 'Identification',
      Component: <AngelFormIdentify />,
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
              <TableCell>{angelState.companyName}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Industry</TableCell>
              <TableCell>{angelState.industry}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell> Business Description</TableCell>
              <TableCell>{angelState.description}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Funding Interest</TableCell>
              <TableCell>{angelState.fundingInterest}</TableCell>
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
              <TableCell>{angelState.companyEmail}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Company Phone Number</TableCell>
              <TableCell>{angelState.companyPhone}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Company Address</TableCell>
              <TableCell>{angelState.companyAddress}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Company Website</TableCell>
              <TableCell>{angelState.companyWebsite}</TableCell>
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
              <TableCell>Angel</TableCell>
              <TableCell>{angelState.angelName}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Investment Experience</TableCell>
              <TableCell>{angelState.investmentExperience}</TableCell>
            </TableRow>
            <TableRow className="bg-gray-100 hover:bg-gray-100">
              <TableCell>Investment Proof</TableCell>
              <TableCell>{angelState.investmentProof}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Investment Size</TableCell>
              <TableCell>{angelState.investmentSize}</TableCell>
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
              <TableCell>{angelState.identification}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Nationality</TableCell>
              <TableCell>{angelState.nationality}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell>Message</TableCell>
              <TableCell>{angelState.message}</TableCell>
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
          onClick={() => handleSubmit()}
          disabled={!agreedToTerms}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </section>
  );
}
