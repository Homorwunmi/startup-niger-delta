/* eslint-disable import/no-cycle */

'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCallback, useEffect } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { Label } from '../../ui/label';
import AcceleratorProfile from './profile';
import AcceleratorIncubator from './incubator';

export default function AcceleratorContact() {
  const { setRange, setActiveTab, setIsNext } = useOnboardContext();

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/accelerator',
      title: 'Contact Info',
    });
  }, [setIsNext]);

  const handlePrev = useCallback(() => {
    setRange(0);

    setActiveTab({
      title: 'Company Profile',
      Component: <AcceleratorProfile />,
      src: '/angel/bgTrailer1.svg',
    });
  }, [setRange, setActiveTab]);

  const handleNext = useCallback(() => {
    setRange(2);

    setActiveTab({
      title: 'Incubators Info',
      Component: <AcceleratorIncubator />,
      src: '/angel/bgTrailer3.svg',
    });
  }, [setRange, setActiveTab]);

  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 justify-between py-6 px-4 h-full">
        <div className="relative">
          <Label
            htmlFor="companyEmail"
            className="text-base font-semibold bg-white absolute -top-1 left-6 px-1"
          >
            Company Email
          </Label>
          <Input
            type="text"
            id="companyEmail"
            placeholder="Registered Email"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="companyPhone"
            className="text-base font-semibold bg-white absolute -top-1 left-6 px-1"
          >
            Company Phone Number
          </Label>
          <Input
            id="companyPhone"
            placeholder="+234"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="BusinessDescription"
            className="text-base font-semibold bg-white absolute -top-1 left-6 px-1"
          >
            Company Address
          </Label>
          <Textarea
            id="companyAddress"
            placeholder="Your company address"
            className="w-full h-40 mt-2 py-3 px-6 border-custom-green-2 border-2 rounded-md resize-none focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="companyWebsite"
            className="text-base font-semibold bg-white absolute -top-1 left-6 px-1"
          >
            Company Website
          </Label>
          <Input
            type="text"
            id="companyWebsite"
            placeholder="www.yourcompany.com"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>

        <div className="col-span-2 flex items-end justify-between w-full mt-auto">
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
