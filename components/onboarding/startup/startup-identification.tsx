/* eslint-disable import/no-cycle */

'use client';

import { RxUpload } from 'react-icons/rx';

import React, { useCallback, useEffect } from 'react';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { startupIdentitySchema } from '@/helpers/validation';
import { uploadIdentification } from '@/api/onboarding/onboarding';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import StartupFounder from './startup-founder';
import StartupReview from './startup-review';
import { toast } from 'sonner';
import { StartupInitialType } from '@/types/Onboarding';
import { renderFileInfo } from '@/helpers/utils';


export default function StartupIdentity() {
  const {
    setRange,
    setActiveTab,
    startupDispatch,
    startupState,
    setIsNext,
    setError,
    error: errorMessage,
  } = useOnboardContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [startupID, setStartupID] = React.useState<Partial<StartupInitialType>>(
    {
      certificate: '',
      logo: '',
    }
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      const file = files?.[0];
      if (!file) return;
      setStartupID((prev) => ({
        ...prev,
        certificate: file,
      }));
      setError(null);
    },
    [setError]
  );

  const handleLogoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (!files || files.length === 0) return;
      const file = files[0];
      setStartupID((prev) => ({
        ...prev,
        logo: file,
      }));

      setError(null);
    },
    [startupDispatch, setError]
  );

  const data = startupIdentitySchema.safeParse({
    certificate: startupID.certificate,
    logo: startupID.logo,
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
    // Validate that both files are File objects
    if (!(startupID.certificate instanceof File)) {
      setError('Please select a valid certificate file');
      return;
    }

    if (!(startupID.logo instanceof File)) {
      setError('Please select a valid logo file');
      return;
    }
    setIsLoading(true);

    if (!data.success) {
      setIsLoading(false);
      return setError(data.error.errors.map((err) => err.message).join(', '));
    }

    try {
      const response = await uploadIdentification(
        startupID.certificate,
        startupID.logo
      );
      if (response.message) {
        console.log(response);
        startupDispatch({
          type: 'UPDATE_STARTUP_PROOF',
          certificate: startupID.certificate,
          logo: startupID.logo,
        });
        setIsLoading(false);
        toast.success(response.message);
      }
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
  }, [data, setRange, setActiveTab, setIsNext, startupState, setError]);


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
                className={`${startupID.certificate && 'text-gray-800'}`}
              />
              <span
                className={`text-lg ${startupID.certificate ? 'text-gray-800' : 'text-gray-300'}`}
              >
                {renderFileInfo(startupID.certificate) ||
                  'Upload CAC Certificate'}
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
              <RxUpload
                size={28}
                className={`${startupID.logo && 'text-gray-800'}`}
              />
              <span className={`text-lg ${startupID.logo && 'text-gray-800'}`}>
                {renderFileInfo(startupID.logo) || 'Upload Company Logo'}
              </span>
            </Label>
          </div>
        </div>
      </div>

      <div className="col-span-2 flex items-end justify-between w-full mt-auto pb-8 px-4">
        <p className="text-custom-orange">{errorMessage}</p>
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
            disabled={errorMessage !== null}
          >
            {isLoading ? 'Uploading...' : 'Next'}
          </Button>
        </div>
      </div>
    </form>
  );
}
