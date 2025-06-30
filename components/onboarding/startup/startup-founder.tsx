/* eslint-disable import/no-cycle */
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { useCallback, useEffect, useState } from 'react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import StartupInfo from './startup-info';
import StartupIdentity from './startup-identification';
import { startupFounderInfoSchema } from '@/helpers/validation';

export default function StartupFounder() {
  const {
    setRange,
    setActiveTab,
    state,
    dispatch,
    setIsNext,
    setError,
    error,
  } = useOnboardContext();

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Founder/Co-Founder Profile',
    });
  }, [setIsNext]);

  const [touched, setTouched] = useState({
    founderName: false,
    founderEmail: false,
    founderAddress: false,
    founderMobile: false,
    founderNo: false,
  });

  const data = startupFounderInfoSchema.safeParse({
    founderName: state.founderName,
    founderEmail: state.founderEmail,
    founderAddress: state.founderAddress,
    founderMobile: state.founderMobile,
    founderNo: state.founderNo,
  });

  const isNext = data.success;

  useEffect(() => {
    if (!touched.founderNo) return;
    if (data.success) {
      setError(null);
    } else {
      setError(data.error.errors.map((err) => err.message).join(', '));
    }
  }, [data, touched.founderNo, setError]);

  const handleNext = useCallback(() => {
    setRange(3);

    setActiveTab({
      title: 'Company Profile',
      Component: <StartupIdentity />,
      src: '/angel/bgTrailer1.svg',
    });

    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Identification',
    });
  }, [setRange, setActiveTab, setIsNext]);

  const handlePrev = useCallback(() => {
    setRange(1);

    setActiveTab({
      title: 'Contact Info ',
      Component: <StartupInfo />,
      src: '/angel/bgTrailer4.svg',
    });

    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Founder/Co-Founder Profile',
    });
  }, [setRange, setActiveTab, setIsNext]);

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
            value={state.founderName}
            onChange={(e) => {
              dispatch({
                type: 'UPDATE_STARTUP_IDENTITY',
                founderName: e.target.value,
              });
            }}
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
            type="email"
            id="founder-email"
            placeholder="username@domain.com"
            value={state.founderEmail}
            onChange={(e) => {
              dispatch({
                type: 'UPDATE_STARTUP_IDENTITY',
                founderEmail: e.target.value,
              });
            }}
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
            value={state.founderAddress}
            onChange={(e) => {
              dispatch({
                type: 'UPDATE_STARTUP_IDENTITY',
                founderAddress: e.target.value,
              });
            }}
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
            value={state.founderMobile}
            onChange={(e) => {
              dispatch({
                type: 'UPDATE_STARTUP_IDENTITY',
                founderMobile: e.target.value,
              });
            }}
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
            id="founder-amount"
            placeholder="Choose number of founder"
            value={state.founderNo}
            onChange={(e) => {
              dispatch({
                type: 'UPDATE_STARTUP_IDENTITY',
                founderNo: e.target.value,
              });
              setTouched((prev) => ({ ...prev, founderNo: true }));
            }}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
      </div>

      <div className="col-span-2 flex items-end justify-between w-full mt-auto pb-8 px-4">
        <p className="text-custom-orange">{error}</p>
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
            disabled={!isNext}
            className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark cursor-pointer"
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
