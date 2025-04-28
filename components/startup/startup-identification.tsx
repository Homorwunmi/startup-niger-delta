/* eslint-disable import/no-cycle */

'use client';

import { RxUpload } from 'react-icons/rx';

import { useCallback, useState } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import dynamic from 'next/dynamic';

const StartupFounder = dynamic(() => import('./startup-founder'));
const StartupReview = dynamic(() => import('./startup-review'));

export default function StartupIdentity() {
  const [review, setReview] = useState<boolean>(() =>
    Boolean(sessionStorage.getItem('reviewState'))
  );
  const { setRange, setActiveTab } = useOnboardContext();

  const handleNext = useCallback(() => {
    sessionStorage.setItem('reviewState', 'true');
    setReview(true);
  }, []);

  const handlePrev = useCallback(() => {
    setRange(2);

    setActiveTab({
      title: 'Founder/Co-founder Profile',
      Component: <StartupFounder />,
      src: '/angel/bgTrailer1.svg',
    });
  }, [setRange, setActiveTab]);

  if (review) return <StartupReview />;

  if (!review)
    return (
      <form className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-y-6 gap-x-10 py-6 px-4">
          <div className="relative w-full">
            <Label
              htmlFor="cac-certificate"
              className="text-base bg-white absolute -top-1 left-6 z-10 px-1"
            >
              CAC Certificate
            </Label>
            <div className="relative mt-2">
              <Input
                type="file"
                id="cac-certificate"
                name="cac-certificate"
                className="hidden"
              />
              <Label
                htmlFor="cac-certificate"
                className="flex items-center justify-center gap-4 py-10 px-5 border-custom-green-2 border-2 rounded-md cursor-pointer text-gray-300"
              >
                <RxUpload size={28} />
                <span className="text-lg">Upload CAC Certificate</span>
              </Label>
            </div>
          </div>
          <div className="relative w-full">
            <Label
              htmlFor="company-logo"
              className="text-base bg-white absolute -top-1 left-6 z-10 px-1"
            >
              Company Logo
            </Label>
            <div className="relative mt-2">
              <Input
                type="file"
                id="company-logo"
                name="company-logo"
                className="hidden"
              />
              <Label
                htmlFor="company-logo"
                className="flex items-center justify-center gap-2 p-10 border-custom-green-2 border-2 rounded-md cursor-pointer text-gray-300"
              >
                <RxUpload size={28} />
                <span className="text-lg">Upload Company Logo</span>
              </Label>
            </div>
          </div>
        </div>

        <div className="col-span-2 flex items-end justify-between w-full mt-auto pb-8 px-4">
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
