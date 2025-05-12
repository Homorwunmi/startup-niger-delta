'use client';

import { useEffect } from 'react';
import { startUpData } from '@/lib/data';
import OnboardingNavbar from '@/components/shared/onboarding-nav';
import Sidebar from '@/components/shared/sidebar';
import Status from '@/components/shared/status';
import StartupProfile from '@/components/onboarding/startup/startup-profile';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';

export default function Page() {
  const { setActiveTab, setIsNext } = useOnboardContext();

  useEffect(() => {
    setActiveTab({
      title: 'Company Profile',
      Component: <StartupProfile />,
      src: '/angel/bgTrailer1.svg',
    });

    setIsNext({
      pathname: '/onboarding/startup',
      title: 'Company Profile',
    });
  }, [setActiveTab, setIsNext]);

  return (
    <section className="bg-[#C6D9B5] h-screen w-full flex flex-col items-stretch">
      <OnboardingNavbar />

      <Status />

      <Sidebar sidebarItems={startUpData} value="Startup Registration" />
    </section>
  );
}
