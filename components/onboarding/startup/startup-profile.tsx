/* eslint-disable import/no-cycle */

'use client';

import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { useCallback } from 'react';
import { Textarea } from '../../ui/textarea';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import StartupInfo from './startup-info';

export default function StartupProfile() {
  const { setRange, setActiveTab, setStartupData, startupData } =
    useOnboardContext();

  const isNext =
    startupData.companyName &&
    startupData.incorporation &&
    startupData.rcNumber &&
    startupData.industry &&
    startupData.description &&
    startupData.fundingInterest;

  const handleNext = useCallback(() => {
    setRange(1);

    setActiveTab({
      title: 'Contact Info',
      Component: <StartupInfo />,
      src: '/angel/bgTrailer2.svg',
    });
  }, [setRange, setActiveTab]);

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
            onChange={(e) =>
              setStartupData((item) => ({
                ...item,
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
            Year of Incorporation
          </Label>
          <Input
            type="text"
            id="Industry"
            placeholder="Enter year of incorporation"
            onChange={(e) =>
              setStartupData((item) => ({
                ...item,
                incorporation: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="BusinessDescription"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            RC Number
          </Label>
          <Input
            type="text"
            id="BusinessDescription"
            placeholder="Your solution in one sentence"
            onChange={(e) =>
              setStartupData((item) => ({
                ...item,
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
            onChange={(e) =>
              setStartupData((item) => ({
                ...item,
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
            onChange={(e) =>
              setStartupData((item) => ({
                ...item,
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
            onChange={(e) =>
              setStartupData((item) => ({
                ...item,
                fundingInterest: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>

        <div className="col-span-2 flex items-end justify-between w-full mt-auto">
          <p className="text-custom-orange">
            *You must fill in all field to be able to continue
          </p>
          <div className="flex gap-3">
            <Button
              type="button"
              className="px-10 bg-gray-200 hover:bg-gray-200"
            >
              Back
            </Button>
            <Button
              type="button"
              disabled={!isNext}
              className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
