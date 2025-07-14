/* eslint-disable import/no-cycle */

'use client';

import { Input } from '@/components/ui/input';
import { useMemo, useState } from 'react';
// import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { useCallback, useEffect } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { Label } from '../../ui/label';
import AngelFormInfo from './Angel-form-info';
import AngelFormIdentify from './Angel-form-identify';
import { AngelInitialType } from '@/types/Onboarding';
import { angelInvestmentInfoSchema } from '@/helpers/validation';

export default function AngelFormInvestment() {
  const {
    setRange,
    setActiveTab,
    setIsNext,
    setError,
    error: errorMessage,
    angelDispatch,
    angelState,
  } = useOnboardContext();
  const [angelInvestmentInfo, setAngelInvestmentInfo] = useState<
    Partial<AngelInitialType>
  >({
    angelName: '',
    investmentExperience: '',
    investmentProof: '',
    investmentSize: '',
  });

  useEffect(() => {
    if (angelState) {
      setAngelInvestmentInfo({
        angelName: angelState.angelName || '',
        investmentExperience: angelState.investmentExperience || '',
        investmentProof: angelState.investmentProof || '',
        investmentSize: angelState.investmentSize || '',
      });
      setError(null);
    }
  }, [angelState]);

  const data = useMemo(() => {
    return angelInvestmentInfoSchema.safeParse({
      angelName: angelInvestmentInfo.angelName,
      investmentExperience: angelInvestmentInfo.investmentExperience,
      investmentProof: angelInvestmentInfo.investmentProof,
      investmentSize: angelInvestmentInfo.investmentSize,
    });
  }, [angelInvestmentInfo]);

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
      Component: <AngelFormInfo />,
      src: '/angel/bgTrailer3.svg',
    });
  }, [setRange, setActiveTab]);

  const handleNext = useCallback(() => {
    if (!data.success) {
      return setError(data.error.errors.map((err) => err.message).join(', '));
    }

    angelDispatch({
      type: 'UPDATE_ANGEL_IDENTITY',
      ...angelInvestmentInfo,
    });

    setRange(3);

    setActiveTab({
      title: 'Identification',
      Component: <AngelFormIdentify />,
      src: '/angel/bgTrailer4.svg',
    });

    return setIsNext({
      pathname: '/onboarding/angel-investor',
      title: 'Identification',
    });
  }, [setRange, setActiveTab, angelInvestmentInfo, setIsNext, setError]);

  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 py-6 px-4">
        <div className="relative w-full">
          <Label
            htmlFor="angel"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Angel
          </Label>
          <Input
            type="text"
            id="angel"
            name="angel"
            placeholder="Full Name"
            value={angelInvestmentInfo.angelName}
            onChange={(e) => {
              setAngelInvestmentInfo((prev) => ({
                ...prev,
                angelName: e.target.value,
              }));
            }}
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
            type="date"
            id="investment-experience"
            placeholder="Choose investment experience"
            value={angelInvestmentInfo.investmentExperience}
            onChange={(e) => {
              setAngelInvestmentInfo((prev) => ({
                ...prev,
                investmentExperience: e.target.value,
              }));
            }}
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
            value={angelInvestmentInfo.investmentProof}
            onChange={(e) => {
              setAngelInvestmentInfo((prev) => ({
                ...prev,
                investmentProof: e.target.value,
              }));
            }}
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
            value={angelInvestmentInfo.investmentSize}
            onChange={(e) => {
              setAngelInvestmentInfo((prev) => ({
                ...prev,
                investmentSize: e.target.value,
              }));
            }}
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
