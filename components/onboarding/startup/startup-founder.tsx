/* eslint-disable import/no-cycle */
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { useCallback } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import StartupInfo from './startup-info';
import StartupIdentity from './startup-identification';

export default function StartupFounder() {
  const { setRange, setActiveTab } = useOnboardContext();

  const handleNext = useCallback(() => {
    setRange(3);

    setActiveTab({
      title: 'Company Profile',
      Component: <StartupIdentity />,
      src: '/angel/bgTrailer1.svg',
    });
  }, [setRange, setActiveTab]);

  const handlePrev = useCallback(() => {
    setRange(1);

    setActiveTab({
      title: 'Contact Info ',
      Component: <StartupInfo />,
      src: '/angel/bgTrailer1.svg',
    });
  }, [setRange, setActiveTab]);

  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 py-6 px-4">
        <div className="relative w-full">
          <Label
            htmlFor="founder-name"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Founder&apos;s name
          </Label>
          <Input
            type="text"
            id="founder-name"
            name="compnayName"
            placeholder="Full name"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="founder-email"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Founder&apos;s Email
          </Label>
          <Input
            type="date"
            id="founder-email"
            placeholder="username@domain.com"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="founder-address"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Founder&apos;s Address
          </Label>
          <Input
            type="text"
            id="founder-address"
            placeholder="Address information"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="founder-phone"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Founder&apos;s Phone
          </Label>
          <Input
            type="tel"
            id="founder-phone"
            placeholder="+234"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="founder-phone"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            No of Founder
          </Label>
          <Input
            type="text"
            id="founder-phone"
            placeholder="Choose number of founder"
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
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
