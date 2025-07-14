/* eslint-disable import/no-cycle */

'use client';

import { useCallback, useEffect, useState, useMemo } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import AcceleratorContact from './contact';
import { AcceleratorInitialType } from '@/types/Onboarding';
import { acceleratorProfileSchema } from '@/helpers/validation';

export default function AcceleratorProfile() {
  const {
    setRange,
    setActiveTab,
    setIsNext,
    setError,
    error: errorMessage,
    acceleratorState,
    acceleratorDispatch,
  } = useOnboardContext();

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/accelerator',
      title: 'Company Profile',
    });
  }, [setIsNext]);

  useEffect(() => {
    if (acceleratorState) {
      setAcceleratorProfileData({
        companyName: acceleratorState.companyName || '',
        industry: acceleratorState.industry || '',
        description: acceleratorState.description || '',
        fundingInterest: acceleratorState.fundingInterest || '',
      });
      setError(null);
    }
  }, [acceleratorState]);

  const [acceleratorProfileData, setAcceleratorProfileData] = useState<
    Partial<AcceleratorInitialType>
  >({
    companyName: '',
    industry: '',
    description: '',
    fundingInterest: '',
  });

  const data = useMemo(() => {
    return acceleratorProfileSchema.safeParse({
      companyName: acceleratorProfileData.companyName,
      industry: acceleratorProfileData.industry,
      description: acceleratorProfileData.description,
      fundingInterest: acceleratorProfileData.fundingInterest,
    });
  }, [acceleratorProfileData]);

  const handleNext = useCallback(() => {
    if (!data.success) {
      setError(data.error.errors[0].message);
    }

    acceleratorDispatch({
      type: 'UPDATE_COMPANY_PROFILE',
      ...acceleratorProfileData,
    });

    setRange(1);

    setActiveTab({
      title: 'Contact Info',
      Component: <AcceleratorContact />,
      src: '/angel/bgTrailer2.svg',
    });
    setError(null);
  }, [
    setRange,
    setActiveTab,
    setError,
    acceleratorDispatch,
    acceleratorProfileData,
    data,
  ]);

  return (
    <form className="w-full" style={{ height: '100%' }}>
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 justify-between py-6 px-4 h-full">
        <div className="relative w-full">
          <Label
            htmlFor="companyName"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company / Individual Name
          </Label>
          <Input
            type="text"
            id="companyName"
            name="compnayName"
            placeholder="Registered name"
            value={acceleratorProfileData.companyName}
            onChange={(e) => {
              setAcceleratorProfileData({
                ...acceleratorProfileData,
                companyName: e.target.value,
              });
            }}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="Industry"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Industry
          </Label>
          <Input
            type="text"
            id="Industry"
            placeholder="Select Your Industry"
            value={acceleratorProfileData.industry}
            onChange={(e) => {
              setAcceleratorProfileData({
                ...acceleratorProfileData,
                industry: e.target.value,
              });
            }}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="BusinessDescription"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Business Description
          </Label>
          <Textarea
            id="BusinessDescription"
            placeholder="Your solution in one sentence"
            value={acceleratorProfileData.description}
            onChange={(e) => {
              setAcceleratorProfileData({
                ...acceleratorProfileData,
                description: e.target.value,
              });
            }}
            className="w-full h-40 mt-2 py-3 px-6 border-custom-green-2 border-2 rounded-md resize-none focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="fundingInterest"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Funding Interest
          </Label>
          <Input
            type="text"
            id="fundingInterest"
            placeholder="Investment Interest"
            value={acceleratorProfileData.fundingInterest}
            onChange={(e) => {
              setAcceleratorProfileData({
                ...acceleratorProfileData,
                fundingInterest: e.target.value,
              });
            }}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>

        <div className="col-span-2 flex items-end justify-between w-full mt-auto">
          <p className="text-custom-orange">{errorMessage}</p>
          <div className="flex gap-3">
            <Button
              type="button"
              className="px-10 bg-gray-200 hover:bg-gray-200 cursor-pointer"
            >
              Back
            </Button>
            <Button
              type="button"
              className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark cursor-pointer"
              onClick={handleNext}
              disabled={!data.success || errorMessage !== null}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
