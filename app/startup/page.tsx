'use client';

import { useEffect } from 'react';
import { startUpData } from '@/lib/data';
import OnboardingNavbar from '@/components/shared/onboarding-nav';
import StartupProfile from '@/components/startup/startup-profile';
import Sidebar from '@/components/shared/sidebar';
import Status from '@/components/shared/status';
import { useOnboardContext } from '../contexts/OnboardingContext';

export default function Page() {
  const { setActiveTab } = useOnboardContext();

  useEffect(
    () =>
      setActiveTab({
        title: 'Company Profile',
        Component: <StartupProfile />,
        src: '/angel/bgTrailer1.svg',
      }),
    [setActiveTab]
  );

  return (
    <section className="bg-[#C6D9B5] h-screen w-full">
      <OnboardingNavbar />

      <Status />

      <Sidebar
        sidebarItems={startUpData}
        value="Startup Registration"
        // setActiveTab={setActiveTab}
        // activeTab={activeTab}
      />
    </section>
  );
}
