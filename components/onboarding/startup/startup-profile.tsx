/* eslint-disable import/no-cycle */

'use client';

import { useCallback, useEffect, useState, useMemo } from 'react';
import { useOnboardContext } from '@/(frontend)/contexts/OnboardingContext';
import { startupCompanyProfileSchema } from 'helpers/validation';
import { StartupInitialType } from 'types/Onboarding';
import { Textarea } from '../../ui/textarea';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import StartupInfo from './startup-info';

export default function StartupProfile() {
  const {
    setRange,
    setActiveTab,
    startupDispatch,

    setIsNext,
    setError,
    error: errorMessage,
    startupState,
    isPrev: { range: isPrevRange },
  } = useOnboardContext();

  const [startupProfileData, setStartupProfileData] = useState<
    Partial<StartupInitialType>
  >({
    companyName: '',
    incorporation: '',
    rcNumber: '',
    industry: '',
    description: '',
    fundingInterest: '',
  });

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Company Profile',
    });
  }, [setIsNext]);

  useEffect(() => {
    if (startupState) {
      setStartupProfileData({
        companyName: startupState.companyName || '',
        incorporation: startupState.incorporation || '',
        rcNumber: startupState.rcNumber || '',
        industry: startupState.industry || '',
        description: startupState.description || '',
        fundingInterest: startupState.fundingInterest || '',
      });
      setError(null);
    }
  }, [startupState, setError]);

  const data = useMemo(
    () =>
      startupCompanyProfileSchema.safeParse({
        companyName: startupProfileData.companyName,
        incorporation: startupProfileData.incorporation,
        rcNumber: startupProfileData.rcNumber,
        industry: startupProfileData.industry,
        description: startupProfileData.description,
        fundingInterest: startupProfileData.fundingInterest,
      }),
    [startupProfileData]
  );

  useEffect(() => {
    if (!data.success) {
      setError(data.error.errors.map((err) => err.message).join(', '));
    } else {
      setError(null);
    }
  }, [data, setError]);

  const handleNext = useCallback(() => {
    if (!data.success) {
      setError(data.error.errors.map((err) => err.message).join(', '));
    }
    startupDispatch({
      type: 'UPDATE_COMPANY_PROFILE',
      ...startupProfileData,
    });

    setRange(1);

    setActiveTab({
      title: 'Contact Info',
      Component: <StartupInfo />,
      src: '/angel/bgTrailer2.svg',
    });

    return setIsNext({
      pathname: '/onboarding/startup',
      title: 'Contact Info',
    });
  }, [
    setRange,
    setActiveTab,
    setIsNext,
    data,
    startupDispatch,
    setError,
    startupProfileData,
  ]);

  return (
    <form className="w-full" style={{ height: '100%' }}>
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 justify-between py-6 px-4 h-full">
        <div className="relative w-full">
          <Label
            htmlFor="companyName"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Name
          </Label>
          <Input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Registered name"
            value={startupProfileData.companyName}
            onChange={(e) => {
              setStartupProfileData({
                ...startupProfileData,
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
            Year of Incorporation
          </Label>
          <Input
            type="text"
            id="Industry"
            placeholder="Enter year of incorporation"
            value={startupProfileData.incorporation}
            onChange={(e) =>
              setStartupProfileData((prev) => ({
                ...prev,
                incorporation: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="rcNumber"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            RC Number
          </Label>
          <Input
            type="text"
            id="rcNumber"
            placeholder="Your solution in one sentence"
            value={startupProfileData.rcNumber}
            onChange={(e) =>
              setStartupProfileData((prev) => ({
                ...prev,
                rcNumber: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="industry"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Industry
          </Label>
          <Input
            type="text"
            id="industry"
            placeholder="Select your Industry"
            value={startupProfileData.industry}
            onChange={(e) =>
              setStartupProfileData((prev) => ({
                ...prev,
                industry: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="startup-description"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Startup Description
          </Label>
          <Textarea
            id="startup-description"
            placeholder="Solution"
            value={startupProfileData.description}
            onChange={(e) =>
              setStartupProfileData((prev) => ({
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
            value={startupProfileData.fundingInterest}
            onChange={(e) => {
              setStartupProfileData((prev) => ({
                ...prev,
                fundingInterest: e.target.value,
              }));
            }}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>

        <div className="col-span-2 flex items-end justify-between w-full mt-auto">
          <p className="text-custom-orange">{errorMessage}</p>
          <div className="flex gap-3">
            <Button
              type="button"
              className="px-10 bg-gray-200 hover:bg-gray-200 cursor-pointer"
              disabled={isPrevRange === 0}
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
