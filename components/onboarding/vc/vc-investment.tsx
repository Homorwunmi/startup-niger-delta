/* eslint-disable import/no-cycle */

'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { Label } from '../../ui/label';
import CapitalistContact from './vc-contact';
import CapitalistIdentification from './vc-identification';
import { VentureCapitalistInitialType } from '@/types/Onboarding';
import { ventureCapitalistInvestmentInfoSchema } from '@/helpers/validation';

export default function CapitalistInvestment() {
  const {
    setRange,
    setActiveTab,
    setIsNext,
    setError,
    error: errorMessage,
    capitalistDispatch,
    capitalistState,
  } = useOnboardContext();

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/venture-capitalist',
      title: 'Investment Info',
    });
  }, [setIsNext]);

  const [capitalistInvestmentInfo, setCapitalistInvestmentInfo] = useState<
    Partial<VentureCapitalistInitialType>
  >({
    generalPartner: '',
    investmentExperience: '',
    investmentProof: '',
    investmentSize: '',
  });

  useEffect(() => {
    if (capitalistState) {
      setCapitalistInvestmentInfo({
        generalPartner: capitalistState.generalPartner || '',
        investmentExperience: capitalistState.investmentExperience || '',
        investmentProof: capitalistState.investmentProof || '',
        investmentSize: capitalistState.investmentSize || '',
      });
      setError(null);
    }
  }, [capitalistState]);

  const data = useMemo(() => {
    return ventureCapitalistInvestmentInfoSchema.safeParse({
      generalPartner: capitalistInvestmentInfo.generalPartner,
      investmentExperience: capitalistInvestmentInfo.investmentExperience,
      investmentProof: capitalistInvestmentInfo.investmentProof,
      investmentSize: capitalistInvestmentInfo.investmentSize,
    });
  }, [capitalistInvestmentInfo]);

  useEffect(() => {
    setError(null);
    if (!data.success) {
      setError(data.error.errors.map((err) => err.message).join(', '));
    } else {
      setError(null);
    }
  }, [data, setError]);

  const handlePrev = useCallback(() => {
    setRange(1);

    setActiveTab({
      title: 'Contact Info',
      Component: <CapitalistContact />,
      src: '/angel/bgTrailer2.svg',
    });
  }, [setRange, setActiveTab]);

  const handleNext = useCallback(() => {
    if (!data.success) {
      return setError(data.error.errors.map((err) => err.message).join(', '));
    } else {
      setError(null);
    }

    capitalistDispatch({
      type: 'UPDATE_VC_IDENTITY',
      ...capitalistInvestmentInfo,
    });

    setRange(3);

    setActiveTab({
      title: 'Identification',
      Component: <CapitalistIdentification />,
      src: '/angel/bgTrailer4.svg',
    });
  }, [
    setRange,
    setActiveTab,
    setIsNext,
    capitalistDispatch,
    capitalistInvestmentInfo,
    data,
    setError,
  ]);

  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 py-6 px-4">
        <div className="relative w-full">
          <Label
            htmlFor="partner"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            General Partner
          </Label>
          <Input
            type="text"
            id="partner"
            name="partner"
            placeholder="Full Name"
            value={capitalistInvestmentInfo.generalPartner}
            onChange={(e) =>
              setCapitalistInvestmentInfo((prev) => ({
                ...prev,
                generalPartner: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="investment-experience"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Investment Experience
          </Label>
          <Input
            type="text"
            id="investment-experience"
            placeholder="Choose investment experience"
            value={capitalistInvestmentInfo.investmentExperience}
            onChange={(e) =>
              setCapitalistInvestmentInfo((prev) => ({
                ...prev,
                investmentExperience: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="investment-proof"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Investment Proof
          </Label>
          <Input
            type="text"
            id="investment-proof"
            placeholder="E.g https://docs.googl.../1aByz123"
            value={capitalistInvestmentInfo.investmentProof}
            onChange={(e) =>
              setCapitalistInvestmentInfo((prev) => ({
                ...prev,
                investmentProof: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="investment-size"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Investment Size
          </Label>
          <Input
            type="tel"
            id="investment-size"
            placeholder="Choose investment size"
            value={capitalistInvestmentInfo.investmentSize}
            onChange={(e) =>
              setCapitalistInvestmentInfo((prev) => ({
                ...prev,
                investmentSize: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
      </div>

      <div className="col-span-2 flex items-end justify-between w-full mt-auto pb-6">
        <p className="text-custom-orange">{errorMessage}</p>
        <div className="flex gap-3">
          <Button
            type="button"
            onClick={handlePrev}
            className="px-10 bg-gray-200 hover:bg-gray-200 cursor-pointer"
          >
            Back
          </Button>
          <Button
            type="button"
            onClick={handleNext}
            className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark cursor-pointer"
            disabled={!data.success || errorMessage !== null}
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
