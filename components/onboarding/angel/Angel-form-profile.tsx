/* eslint-disable import/no-cycle */

'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useOnboardContext } from '@/(frontend)/contexts/OnboardingContext';
import { angelProfileSchema } from 'helpers/validation';
import { AngelInitialType } from 'types/Onboarding';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import AngelFormInfo from './Angel-form-info';

export default function AngelForm() {
  const {
    setRange,
    setActiveTab,
    setIsNext,
    isPrev,
    angelDispatch,
    angelState,
    error: errorMessage,
    setError,
  } = useOnboardContext();

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/angel-investor',
      title: 'Company Profile',
    });
  }, [setIsNext]);

  const [angelProfileData, setAngelProfileData] = useState<
    Partial<AngelInitialType>
  >({
    companyName: '',
    industry: '',
    description: '',
    fundingInterest: '',
  });

  useEffect(() => {
    if (angelState) {
      setAngelProfileData({
        companyName: angelState.companyName || '',
        industry: angelState.industry || '',
        description: angelState.description || '',
        fundingInterest: angelState.fundingInterest || '',
      });
      setError(null);
    }
  }, [angelState, setError]);

  const data = useMemo(
    () =>
      angelProfileSchema.safeParse({
        companyName: angelProfileData.companyName,
        industry: angelProfileData.industry,
        description: angelProfileData.description,
        fundingInterest: angelProfileData.fundingInterest,
      }),
    [angelProfileData]
  );

  useEffect(() => {
    setError(null);
    if (!data.success) {
      setError(data.error.errors.map((err) => err.message).join(', '));
    } else {
      setError(null);
    }
  }, [data, setError]);

  const handleNext = useCallback(() => {
    if (!data.success)
      return setError(data.error.errors.map((err) => err.message).join(', '));

    angelDispatch({
      type: 'UPDATE_COMPANY_PROFILE',
      ...angelProfileData,
    });

    setRange(1);

    setActiveTab({
      title: 'Contact Info',
      Component: <AngelFormInfo />,
      src: '/angel/bgTrailer2.svg',
    });

    setError(null);

    return setIsNext({
      pathname: '/onboarding/angel-investor',
      title: 'Contact Info',
    });
  }, [
    setRange,
    setActiveTab,
    setIsNext,
    angelDispatch,
    angelProfileData,
    data,
    setError,
  ]);

  return (
    <form className="w-full" style={{ height: '100%' }}>
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 justify-between py-6 px-4 h-full">
        <div className="relative w-full">
          <Label
            htmlFor="companyName"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company / Individual Name
          </Label>
          <Input
            type="text"
            id="companyName"
            name="compnayName"
            placeholder="Registered name"
            onChange={(e) => {
              setAngelProfileData((prev) => ({
                ...prev,
                companyName: e.target.value,
              }));
            }}
            value={angelProfileData.companyName}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="Industry"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Industry
          </Label>
          <Input
            type="text"
            id="Industry"
            placeholder="Select Your Industry"
            onChange={(e) => {
              setAngelProfileData((prev) => ({
                ...prev,
                industry: e.target.value,
              }));
            }}
            value={angelProfileData.industry}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative w-full">
          <Label
            htmlFor="BusinessDescription"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Business Description
          </Label>
          <Textarea
            id="BusinessDescription"
            placeholder="Your solution in one sentence"
            onChange={(e) => {
              setAngelProfileData((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
            value={angelProfileData.description}
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
            onChange={(e) => {
              setAngelProfileData((prev) => ({
                ...prev,
                fundingInterest: e.target.value,
              }));
            }}
            value={angelProfileData.fundingInterest}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>

        <div className="col-span-2 flex items-end justify-between w-full mt-auto">
          <p className="text-custom-orange">{errorMessage}</p>
          <div className="flex gap-3">
            <Button
              type="button"
              className="px-10 bg-gray-200 hover:bg-gray-200"
              disabled={isPrev.range === 0}
            >
              Back
            </Button>
            <Button
              type="button"
              className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark cursor-pointer"
              onClick={handleNext}
              disabled={errorMessage != null || !data.success}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
