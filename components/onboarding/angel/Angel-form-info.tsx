/* eslint-disable import/no-cycle */

import { useCallback, useEffect, useState, useMemo } from 'react';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { angelContactInfoSchema } from 'helpers/validation';
import { AngelInitialType } from 'types/Onboarding';
import { useOnboardContext } from '@/(frontend)/contexts/OnboardingContext';
import { Label } from '../../ui/label';
import AngelForm from './Angel-form-profile';
import AngelFormInvestment from './Angel-form-investment';

export default function AngelFormInfo() {
  const {
    setRange,
    setActiveTab,
    setIsNext,
    angelDispatch,
    angelState,
    setError,
    error: errorMessage,
  } = useOnboardContext();

  const [angelInfo, setAngelInfo] = useState<Partial<AngelInitialType>>({
    companyEmail: '',
    companyPhone: '',
    companyAddress: '',
    companyWebsite: '',
  });

  useEffect(() => {
    if (angelState) {
      setAngelInfo({
        companyEmail: angelState.companyEmail || '',
        companyPhone: angelState.companyPhone || '',
        companyAddress: angelState.companyAddress || '',
        companyWebsite: angelState.companyWebsite || '',
      });
      setError(null);
    }
  }, [angelState, setError]);

  const data = useMemo(
    () =>
      angelContactInfoSchema.safeParse({
        companyEmail: angelInfo.companyEmail,
        companyPhone: angelInfo.companyPhone,
        companyAddress: angelInfo.companyAddress,
        companyWebsite: angelInfo.companyWebsite,
      }),
    [angelInfo]
  );

  useEffect(() => {
    setError(null);
    if (!data.success) {
      setError(data.error.errors.map((err) => err.message).join(', '));
    } else {
      setError(null);
    }
  }, [data, setError]);

  const handlePrev = useCallback(() => {
    setRange(0);

    setActiveTab({
      title: 'Company Profile',
      Component: <AngelForm />,
      src: '/angel/bgTrailer1.svg',
    });
  }, [setRange, setActiveTab]);

  const handleNext = useCallback(() => {
    if (!data.success)
      return setError(data.error.errors.map((err) => err.message).join(', '));

    angelDispatch({
      type: 'UPDATE_CONTACT_INFO',
      ...angelInfo,
    });

    setRange(2);

    setActiveTab({
      title: 'Investment Info',
      Component: <AngelFormInvestment />,
      src: '/angel/bgTrailer2.svg',
    });

    setError(null);

    return setIsNext({
      pathname: '/onboarding/angel-investor',
      title: 'Investment Info',
    });
  }, [
    setRange,
    setActiveTab,
    setIsNext,
    angelDispatch,
    angelInfo,
    data,
    setError,
  ]);

  return (
    <form className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-y-6 gap-x-10 justify-between py-6 px-4 h-full">
        <div className="relative">
          <Label
            htmlFor="companyEmail"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Email
          </Label>
          <Input
            type="text"
            id="companyEmail"
            placeholder="Registered Email"
            onChange={(e) =>
              setAngelInfo({ ...angelInfo, companyEmail: e.target.value })
            }
            value={angelInfo.companyEmail}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="companyPhone"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Phone Number
          </Label>
          <Input
            id="companyPhone"
            placeholder="+234"
            onChange={(e) =>
              setAngelInfo({ ...angelInfo, companyPhone: e.target.value })
            }
            value={angelInfo.companyPhone}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="BusinessDescription"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Address
          </Label>
          <Textarea
            id="companyAddress"
            placeholder="Your company address"
            onChange={(e) =>
              setAngelInfo({ ...angelInfo, companyAddress: e.target.value })
            }
            value={angelInfo.companyAddress}
            className="w-full h-40 mt-2 py-3 px-6 border-custom-green-2 border-2 rounded-md resize-none focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="companyWebsite"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Company Website
          </Label>
          <Input
            type="text"
            id="companyWebsite"
            placeholder="www.yourcompany.com"
            onChange={(e) =>
              setAngelInfo({ ...angelInfo, companyWebsite: e.target.value })
            }
            value={angelInfo.companyWebsite}
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>

        <div className="col-span-2 flex items-end justify-between w-full mt-auto">
          <p className="text-custom-orange">{errorMessage}</p>
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
              className="px-10 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark cursor-pointer"
              onClick={handleNext}
              disabled={errorMessage !== null || !data.success}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
