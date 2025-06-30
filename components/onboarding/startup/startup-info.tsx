/* eslint-disable import/no-cycle */

'use client';

import { useCallback, useEffect, useState } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';

import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import StartupFounder from './startup-founder';
import StartupProfile from './startup-profile';
import { startupContactInfoSchema } from '@/helpers/validation';

export default function StartupInfo() {
  const {
    setRange,
    setActiveTab,
    dispatch,
    state,
    setIsNext,
    setError,
    error,
    isNext,
  } = useOnboardContext();

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Contact Info',
    });
  }, [setIsNext]);

  const [touched, setTouched] = useState({
    companyEmail: false,
    companyWebsite: false,
    companyAddress: false,
    companyPhone: false,
  });

  const data = startupContactInfoSchema.safeParse({
    companyEmail: state.companyEmail,
    companyWebsite: state.companyWebsite,
    companyAddress: state.companyAddress,
    companyPhone: state.companyPhone,
  });

  useEffect(() => {
    if (!touched.companyPhone) return;
    if (data.success) {
      setError(null);
    } else {
      setError(data.error.errors.map((err) => err.message).join(', '));
    }
  }, [data, touched.companyEmail]);

  const handleNext = useCallback(() => {
    setRange(2);
    setActiveTab({
      title: 'Founder/Co-Founder Profile',
      Component: <StartupFounder />,
      src: '/angel/bgTrailer3.svg',
    });

    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Founder/Co-Founder Profile',
    });
  }, [setRange, setActiveTab, setIsNext]);

  const handlePrev = useCallback(() => {
    setRange(0);
    setError(null);
    setActiveTab({
      title: 'Company Profile',
      Component: <StartupProfile />,
      src: '/angel/bgTrailer1.svg',
    });

    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Company Profile',
    });
  }, [setRange, setActiveTab, setIsNext]);

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
            value={state.companyEmail}
            onChange={(e) => {
              dispatch({
                type: 'UPDATE_CONTACT_INFO',
                companyEmail: e.target.value,
              });
            }}
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
            value={state.companyWebsite}
            onChange={(e) => {
              dispatch({
                type: 'UPDATE_CONTACT_INFO',
                companyWebsite: e.target.value,
              });
            }}
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
            value={state.companyAddress}
            onChange={(e) => {
              dispatch({
                type: 'UPDATE_CONTACT_INFO',
                companyAddress: e.target.value,
              });
            }}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="phone-number"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Phone
          </Label>
          <Input
            type="tel"
            id="phone-number"
            placeholder="+234"
            value={state.companyPhone}
            onChange={(e) => {
              dispatch({
                type: 'UPDATE_CONTACT_INFO',
                companyPhone: e.target.value,
              });
              setTouched((prev) => ({ ...prev, companyPhone: true }));
            }}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md h-10 focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
      </div>

      <div className="col-span-2 flex items-end justify-between w-full mt-auto pb-6">
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
            disabled={error !== null || !isNext}
            className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark cursor-pointer"
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
