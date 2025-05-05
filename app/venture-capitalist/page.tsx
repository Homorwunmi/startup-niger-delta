'use client';

import OnboardingNavbar from '@/components/shared/onboarding-nav';
import Status from '@/components/shared/status';
import Sidebar from '@/components/shared/sidebar';
import { angelInvestorData } from '@/lib/data';
import { useState } from 'react';
import AngelForm from '@/components/onboarding/angel/Angel-form-profile';

export default function Page() {
  const [activeTab, setActiveTab] = useState({
    title: 'Company Profile',
    Component: <AngelForm />,
    src: '/angel/bgTrailer1.svg',
  });

  return (
    <section className="bg-[#C6D9B5] h-screen w-full">
      <OnboardingNavbar />
      <Status />
      <Sidebar
        sidebarItems={angelInvestorData}
        value="Venture Capitalist Registration"
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </section>
  );
}
