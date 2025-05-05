import { ReactElement } from 'react';
import AngelForm from '@/components/onboarding/angel/Angel-form-profile';
import AngelFormInfo from '@/components/onboarding/angel/Angel-form-info';
import AngelFormInvestment from '@/components/onboarding/angel/Angel-form-investment';
import AngelFormIdentify from '@/components/onboarding/angel/Angel-form-identify';
import StartupProfile from '@/components/onboarding/startup/startup-profile';
import StartupInfo from '@/components/onboarding/startup/startup-info';
import StartupFounder from '@/components/onboarding/startup/startup-founder';
import StartupIdentity from '@/components/onboarding/startup/startup-identification';

interface SideBarItem {
  title: string;
  Component: ReactElement;
  src: string;
}

export const startUpData: SideBarItem[] = [
  {
    title: 'Company Profile',
    Component: <StartupProfile />,
    src: '/angel/bgTrailer1.svg',
  },
  {
    title: 'Contact Info',
    Component: <StartupInfo />,
    src: '/angel/bgTrailer2.svg',
  },
  {
    title: 'Founder/Co-founder Profile',
    Component: <StartupFounder />,
    src: '/angel/bgTrailer3.svg',
  },
  {
    title: 'Identification',
    Component: <StartupIdentity />,
    src: '/angel/bgTrailer4.svg',
  },
];

export const angelInvestorData: SideBarItem[] = [
  {
    title: 'Company Profile',
    Component: <AngelForm />,
    src: '/angel/bgTrailer1.svg',
  },
  {
    title: 'Contact Info',
    Component: <AngelFormInfo />,
    src: '/angel/bgTrailer2.svg',
  },
  {
    title: 'Investment Info',
    Component: <AngelFormInvestment />,
    src: '/angel/bgTrailer3.svg',
  },
  {
    title: 'Identification',
    Component: <AngelFormIdentify />,
    src: '/angel/bgTrailer4.svg',
  },
];
