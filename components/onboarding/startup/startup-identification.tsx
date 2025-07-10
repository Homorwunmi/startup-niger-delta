/* eslint-disable import/no-cycle */

'use client';

import { RxUpload } from 'react-icons/rx';

import React, { useCallback, useEffect } from 'react';
import { startupIdentitySchema } from '@/helpers/validation';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';

import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import StartupFounder from './startup-founder';
import StartupReview from './startup-review';
import { startupIdentitySchema } from '@/helpers/validation';
import { uploadIdentification } from '@/api/onboarding/onboarding';

export default function StartupIdentity() {
  const {
    setRange,
    setActiveTab,
    dispatch,
    state,
    setIsNext,
    setError,
    error,
  } = useOnboardContext();
  const [logo, setLogo] = React.useState<string | null>(null);
  const [fileName, setFileName] = React.useState<string | null>(null);

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Identification',
    });
  }, [setIsNext]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      const file = files?.[0];
      if (!file) return;
      setFileName(file.name);
      if (files && files.length > 0) {
        dispatch({
          type: 'UPDATE_STARTUP_PROOF',
          certificate: file,
        });
      }
      setError(null);
    },
    [dispatch, setError]
  );

  const handleLogoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (!files || files.length === 0) return;
      const file = files[0];
      setLogo(file.name);
      if (files && files.length > 0) {
        dispatch({
          type: 'UPDATE_STARTUP_PROOF',
          logo: file,
        });
      }
    },
    [dispatch]
  );

  const data = startupIdentitySchema.safeParse({
    certificate: state.certificate,
    logo: state.logo,
  });

  const handlePrev = useCallback(() => {
    setRange(2);

    setActiveTab({
      title: 'Founder/Co-founder Profile',
      Component: <StartupFounder />,
      src: '/angel/bgTrailer1.svg',
    });

    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Founder/Co-founder Profile',
    });
  }, [setRange, setActiveTab, setIsNext]);

  const handleNext = useCallback(async () => {
    if (!data.success) {
      return setError(data.error.errors.map((err) => err.message).join(', '));
    }
    if (!state.certificate || !state.logo) {
      return setError('Please upload both CAC certificate and company logo.');
    }

    try {
      const response = await uploadIdentification(
        state.certificate,
        state.logo
      );
      console.log(response.message);
    } catch (error) {
      return setError(
        error instanceof Error ? error.message : 'Failed to upload files'
      );
    }

    setRange(3);

    setActiveTab({
      title: '',
      Component: <StartupReview />,
      src: '/angel/bgTrailer1.svg',
    });

    return setIsNext({
      pathname: '/onboarding/startup',
      title: '',
    });
  }, [data, dispatch, setRange, setActiveTab, setIsNext, state, setError]);

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
              onChange={handleFileChange}
            />
            <Label
              htmlFor="cac-certificate"
              className="flex items-center justify-center gap-4 py-10 px-5 border-custom-green-2 border-2 rounded-md cursor-pointer text-gray-300"
            >
              <RxUpload
                size={28}
                className={`${fileName && 'text-gray-800'}`}
              />
              <span
                className={`text-lg ${fileName ? 'text-gray-800' : 'text-gray-300'}`}
              >
                {fileName || 'Upload CAC Certificate'}
              </span>
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
              onChange={handleLogoChange}
            />
            <Label
              htmlFor="company-logo"
              className="flex items-center justify-center gap-2 p-10 border-custom-green-2 border-2 rounded-md cursor-pointer text-gray-300"
            >
              <RxUpload size={28} className={`${logo && 'text-gray-800'}`} />
              <span className={`text-lg ${logo && 'text-gray-800'}`}>
                {logo || 'Upload Company Logo'}
              </span>
            </Label>
          </div>
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
            className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark cursor-pointer"
            onClick={handleNext}
            disabled={error !== null || !data.success}
          >
            Next
          </Button>
        </div>
      </div>
    </form>
  );
}
