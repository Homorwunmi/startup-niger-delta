/* eslint-disable import/no-cycle */

'use client';

import { useCallback } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';

import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import StartupFounder from './startup-founder';
import StartupProfile from './startup-profile';

export default function StartupInfo() {
  const { setRange, setActiveTab } = useOnboardContext();

  const handleNext = useCallback(() => {
    setRange(2);

    setActiveTab({
      title: 'Company Profile',
      Component: <StartupFounder />,
      src: '/angel/bgTrailer1.svg',
    });
  }, [setRange, setActiveTab]);

  const handlePrev = useCallback(() => {
    setRange(0);

    setActiveTab({
      title: 'Company Profile',
      Component: <StartupProfile />,
      src: '/angel/bgTrailer1.svg',
    });
  }, [setRange, setActiveTab]);

  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 py-6 px-4">
        <div className="relative w-full">
          <Label
            htmlFor="company-email"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Email
          </Label>
          <Input
            type="text"
            id="company-email"
            name="compnayName"
            placeholder="username@domain.com"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="website"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Website
          </Label>
          <Input
            type="text"
            id="website"
            placeholder="www.businessdomain.com"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="company-address"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Address
          </Label>
          <Input
            type="text"
            id="company-address"
            placeholder="Address information"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="industry"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Phone
          </Label>
          <Input
            type="tel"
            id="industry"
            placeholder="+234"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
      </div>

      <div className="col-span-2 flex items-end justify-between w-full mt-auto pb-6">
        <p className="text-custom-orange">
          *You must fill in all field to be able to continue
        </p>
        <div className="flex gap-3">
          <Button
            type="button"
            onClick={handlePrev}
            className="px-10 bg-gray-200 hover:bg-gray-200"
          >
            Back
          </Button>
          <Button
            type="button"
            onClick={handleNext}
            className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark"
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
