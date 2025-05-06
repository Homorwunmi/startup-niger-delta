'use client';

import { useEffect } from 'react';
import { acceleratorData } from '@/lib/data';
import Status from '@/components/shared/status';
import Sidebar from '@/components/shared/sidebar';
import OnboardingNavbar from '@/components/shared/onboarding-nav';
import AcceleratorProfile from '@/components/onboarding/accelerator/profile';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';

export default function Page() {
  const { setActiveTab } = useOnboardContext();

  useEffect(
    () =>
      setActiveTab({
        title: 'Company Profile',
        Component: <AcceleratorProfile />,
        src: '/angel/bgTrailer1.svg',
      }),
    [setActiveTab]
  );

  return (
    <main className="bg-[#C6D9B5] h-screen w-full flex flex-col items-stretch">
      <OnboardingNavbar />
      <Status />
      <Sidebar
        sidebarItems={acceleratorData}
        value="Accelerators, Innovation Hubs & Incubators Registration"
      />
    </main>
  );
}
