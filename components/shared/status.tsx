import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { JSX, useCallback } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

function Circle({ prop }: { prop: number }): JSX.Element {
  const { range } = useOnboardContext();

  function bgColor(propNum: number): string {
    if (range === propNum) return 'bg-green-600/50';
    if (range > propNum) return 'bg-green-700';

    return 'bg-white';
  }

  return (
    <div
      className={`w-10 h-10 border-3 border-custom-orange rounded-full flex items-center justify-center ${bgColor(prop)}`}
    >
      {range > prop ? <IoMdCheckmark size={24} className="text-white" /> : prop}
    </div>
  );
}

function StatusBar({
  getStatusBarWidth,
}: {
  getStatusBarWidth: () => void;
}): JSX.Element {
  return (
    <div className="w-64 relative">
      <div className="border-2 border-light-custom-green-1 w-full absolute top-0 left-0" />
      <div
        className={`border-2 border-custom-orange absolute top-0 left-0 ${getStatusBarWidth()}`}
      />
    </div>
  );
}

function Status(): JSX.Element {
  const { range } = useOnboardContext();

  const getStatusBarWidthFirst = useCallback(() => {
    if (range === 1) return 'w-1/2';
    if (range === 2) return 'w-full';
    if (range >= 3) return 'w-full';

    return '';
  }, [range]);

  const getStatusBarWidthSec = useCallback(() => {
    if (range === 2) return 'w-1/2';
    if (range >= 3) return 'w-full';

    return '';
  }, [range]);

  return (
    <section
      className="bg-light-custom-green w-full px-20 py-3 flex items-center gap-10"
      style={{
        backgroundImage: `url("/home/ecosystem-bg.svg")`,
        backgroundBlendMode: 'soft-light',
        backgroundSize: '30%',
      }}
    >
      <div className="h-full flex flex-col items-start justify-center w-1/3 py-2 text-[#153230]">
        <h3 className="font-semibold text-base leading-none font-poppins">
          Status of your application
        </h3>
        <p className="text-sm font-poppins font-normal">
          Your application completion level:{' '}
          <span className="font-semibold">60% </span>
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Circle prop={1} />
        <StatusBar getStatusBarWidth={getStatusBarWidthFirst} />
        <Circle prop={2} />
        <StatusBar getStatusBarWidth={getStatusBarWidthSec} />
        <Circle prop={3} />
      </div>
    </section>
  );
}

export default Status;
