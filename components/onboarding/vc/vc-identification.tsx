/* eslint-disable import/no-cycle */

'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useCallback, useEffect } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { Textarea } from '../../ui/textarea';
import CapitalistInvestment from './vc-investment';

export default function CapitalistIdentification() {
  const { setRange, setActiveTab, setIsNext } = useOnboardContext();

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/venture-capitalist',
      title: 'Identification',
    });
  }, [setIsNext]);

  const handlePrev = useCallback(() => {
    setRange(2);

    setActiveTab({
      title: 'Investment Info',
      Component: <CapitalistInvestment />,
      src: '/angel/bgTrailer3.svg',
    });
  }, [setRange, setActiveTab]);

  return (
    <form action="flex flex-col h-full" style={{ height: '100%' }}>
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 justify-between py-6 px-4 h-full">
        <div className="relative">
          <Label
            htmlFor="meansofIdentification"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Means of Identification
          </Label>
          <Input
            type="text"
            id="meansofIdentification"
            placeholder="Choose verification method"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="Nationality"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Nationality
          </Label>
          <Input
            type="text"
            id="Nationality"
            placeholder="Country"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="investmentProof"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Investment Proof
          </Label>
          <Textarea
            id="investmentProof"
            placeholder="Body"
            className="w-full h-40 mt-2 py-3 px-6 border-custom-green-2 border-2 rounded-md resize-none focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="w-5/6 text-sm mb-3">
            By submitting this application, you agree to abide by the terms and
            conditions of the program, including attendance, code of conduct,
            and other program-specific requirements.
          </p>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="" id="option-one" />
              <Label htmlFor="option-one">Yes, I agree</Label>
            </div>
          </RadioGroup>
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
              // onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
