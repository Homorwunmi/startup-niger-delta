/* eslint-disable import/no-cycle */

'use client';

import { useCallback, useEffect, useState, useMemo } from 'react';
import { useOnboardContext } from '@/(frontend)/contexts/OnboardingContext';
import { VentureCapitalistInitialType } from 'types/Onboarding';
import { ventureCapitalistProfileSchema } from 'helpers/validation';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import CapitalistContact from './vc-contact';

export default function CapitalistProfile() {
  const {
    setRange,
    setActiveTab,
    setIsNext,
    setError,
    error: errorMessage,
    capitalistDispatch,
    capitalistState,
  } = useOnboardContext();

  const [ventureCapitalistProfileData, setVentureCapitalistProfileData] =
    useState<Partial<VentureCapitalistInitialType>>({
      companyName: '',
      industry: '',
      description: '',
      fundingInterest: '',
    });

  useEffect(() => {
    if (capitalistState) {
      setVentureCapitalistProfileData({
        companyName: capitalistState.companyName || '',
        industry: capitalistState.industry || '',
        description: capitalistState.description || '',
        fundingInterest: capitalistState.fundingInterest || '',
      });
      setError(null);
    }
  }, [capitalistState, setError]);

  const data = useMemo(
    () =>
      ventureCapitalistProfileSchema.safeParse({
        companyName: ventureCapitalistProfileData.companyName,
        industry: ventureCapitalistProfileData.industry,
        description: ventureCapitalistProfileData.description,
        fundingInterest: ventureCapitalistProfileData.fundingInterest,
      }),
    [ventureCapitalistProfileData]
  );

  useEffect(() => {
    setError(null);
    if (!data.success) {
      setError(data.error.errors.map((err) => err.message).join(', '));
    } else {
      setError(null);
    }
  }, [data, setError]);

  const handleNext = useCallback(() => {
    if (!data.success) {
      setError(data.error.message);
      return;
    }

    capitalistDispatch({
      type: 'UPDATE_COMPANY_PROFILE',
      ...ventureCapitalistProfileData,
    });

    setRange(1);
    setActiveTab({
      title: 'Contact Info',
      Component: <CapitalistContact />,
      src: '/angel/bgTrailer2.svg',
    });

    setIsNext({
      pathname: '/onboarding/venture-capitalist',
      title: 'Contact Info',
    });
  }, [
    setRange,
    setActiveTab,
    setIsNext,
    capitalistDispatch,
    ventureCapitalistProfileData,
    data,
    setError,
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
            value={ventureCapitalistProfileData.companyName}
            onChange={(e) =>
              setVentureCapitalistProfileData((prev) => ({
                ...prev,
                companyName: e.target.value,
              }))
            }
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
            value={ventureCapitalistProfileData.industry}
            onChange={(e) =>
              setVentureCapitalistProfileData((prev) => ({
                ...prev,
                industry: e.target.value,
              }))
            }
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
            value={ventureCapitalistProfileData.description}
            onChange={(e) =>
              setVentureCapitalistProfileData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
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
            value={ventureCapitalistProfileData.fundingInterest}
            onChange={(e) =>
              setVentureCapitalistProfileData((prev) => ({
                ...prev,
                fundingInterest: e.target.value,
              }))
            }
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
