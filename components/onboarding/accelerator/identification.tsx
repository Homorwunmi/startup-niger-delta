/* eslint-disable import/no-cycle */

'use client';

import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';
import { acceleratorInvestmentIdentificationSchema } from 'helpers/validation';
import { AcceleratorInitialType } from 'types/Onboarding';
import { Label } from 'components/ui/label';
import { useCallback, useEffect, useState, useMemo } from 'react';
import { useOnboardContext } from '@/(frontend)/contexts/OnboardingContext';
import { Textarea } from '../../ui/textarea';
import AcceleratorIncubator from './incubator';
import AcceleratorReview from './review';

export default function AcceleratorIdentification() {
  const {
    setRange,
    setActiveTab,
    setIsNext,
    acceleratorDispatch,
    acceleratorState,
    setError,
    error: errorMessage,
  } = useOnboardContext();

  useEffect(() => {
    setIsNext({
      pathname: '/onboarding/accelerator',
      title: 'Identification',
    });
  }, [setIsNext]);

  const [agreed, setAgreed] = useState(false);

  const [acceleratorIdentificationData, setAcceleratorIdentificationData] =
    useState<Partial<AcceleratorInitialType>>({
      identification: '',
      nationality: '',
      message: '',
    });

  useEffect(() => {
    if (acceleratorState) {
      setAcceleratorIdentificationData({
        identification: acceleratorState.identification || '',
        nationality: acceleratorState.nationality || '',
        message: acceleratorState.message || '',
      });
      setError(null); // Clear error when state is set
    }
  }, [acceleratorState, setError]);

  const data = useMemo(
    () =>
      acceleratorInvestmentIdentificationSchema.safeParse({
        identification: acceleratorIdentificationData.identification,
        nationality: acceleratorIdentificationData.nationality,
        message: acceleratorIdentificationData.message,
      }),
    [acceleratorIdentificationData]
  );

  const handlePrev = useCallback(() => {
    setRange(2);

    setActiveTab({
      title: 'Incubators Info',
      Component: <AcceleratorIncubator />,
      src: '/angel/bgTrailer3.svg',
    });
  }, [setRange, setActiveTab]);

  const handleNext = useCallback(() => {
    if (!data.success)
      setError(data.error.errors.map((err) => err.message).join(', '));

    acceleratorDispatch({
      type: 'UPDATE_ACCELERATOR_PROOF',
      ...acceleratorIdentificationData,
    });
    setActiveTab({
      title: '',
      Component: <AcceleratorReview />,
      src: '/angel/bgTrailer4.svg',
    });
  }, [
    setActiveTab,
    acceleratorDispatch,
    acceleratorIdentificationData,
    data,
    setError,
  ]);

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
            value={acceleratorIdentificationData.identification}
            onChange={(e) =>
              setAcceleratorIdentificationData((prev) => ({
                ...prev,
                identification: e.target.value,
              }))
            }
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
            value={acceleratorIdentificationData.nationality}
            onChange={(e) =>
              setAcceleratorIdentificationData((prev) => ({
                ...prev,
                nationality: e.target.value,
              }))
            }
            className="mt-2 p-6 border-custom-green-2 border-2 rounded-md outline-none focus-visible:ring-0 focus-visible:border-custom-green-2 w-full"
          />
        </div>
        <div className="relative">
          <Label
            htmlFor="message"
            className="text-base bg-white absolute -top-1 left-6 px-1"
          >
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Body"
            value={acceleratorIdentificationData.message}
            onChange={(e) =>
              setAcceleratorIdentificationData((prev) => ({
                ...prev,
                message: e.target.value,
              }))
            }
            className="w-full h-40 mt-2 py-3 px-6 border-custom-green-2 border-2 rounded-md resize-none focus-visible:ring-0 focus-visible:border-custom-green-2"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="w-5/6 text-sm mb-3">
            By submitting this application, you agree to abide by the terms and
            conditions of the program, including attendance, code of conduct,
            and other program-specific requirements.
          </p>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              value="I agree to the terms and condition"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(!!checked)}
              className="cursor-pointer"
            />
            <Label htmlFor="terms" className="">
              I agree to the terms and condition
            </Label>
          </div>
        </div>

        <div className="col-span-2 flex items-end justify-between w-full mt-auto">
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
              disabled={!data.success || !agreed}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
