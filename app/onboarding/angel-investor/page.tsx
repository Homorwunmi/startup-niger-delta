'use client';

import OnboardingNavbar from '@/components/shared/onboarding-nav';
import Status from '@/components/shared/status';
import Sidebar from '@/components/shared/sidebar';
import { angelInvestorData } from '@/lib/data';
import { useEffect } from 'react';
import AngelForm from '@/components/onboarding/angel/Angel-form-profile';
import { useOnboardContext } from '@/app/contexts/OnboardingContext';

export default function Page() {
  const { setActiveTab } = useOnboardContext();

  useEffect(
    () =>
      setActiveTab({
        title: 'Company Profile',
        Component: <AngelForm />,
        src: '/angel/bgTrailer1.svg',
      }),
    [setActiveTab]
  );

  return (
    <section className="bg-[#C6D9B5] h-screen w-full flex flex-col items-stretch">
      <OnboardingNavbar />
      <Status />
      <Sidebar
        sidebarItems={angelInvestorData}
        value="Angel Investor Registration"
      />
    </section>
  );
}
