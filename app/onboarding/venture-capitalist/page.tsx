'use client';

import { useEffect } from 'react';
import OnboardingNavbar from '@/components/shared/onboarding-nav';
import Status from '@/components/shared/status';
import Sidebar from '@/components/shared/sidebar';
import { ventureCapitalistData } from '@/lib/data';
import CapitalistProfile from '@/components/onboarding/vc/vc-profile';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';

export default function Page() {
  const { setActiveTab, setIsNext } = useOnboardContext();

  useEffect(() => {
    setActiveTab({
      title: 'Company Profile',
      Component: <CapitalistProfile />,
      src: '/angel/bgTrailer1.svg',
    });

    setIsNext({
      pathname: '/onboarding/venture-capitalist',
      title: 'Company Profile',
    });
  }, [setActiveTab, setIsNext]);

  return (
    <section className="bg-[#C6D9B5] h-screen w-full flex flex-col items-stretch">
      <OnboardingNavbar />
      <Status />
      <Sidebar
        sidebarItems={ventureCapitalistData}
        value="Venture Capitalist Registration"
      />
    </section>
  );
}
