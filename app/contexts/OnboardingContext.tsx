/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { startData } from '@/lib/onboardingData';
import { ActiveTab, StartupInitialData } from '@/types/Onboarding';
import { createContext, useContext, useState, useMemo } from 'react';

interface IsNextType {
  pathname: string;
  title: string;
}

const OnboardContext = createContext<{
  range: number;
  startupData: StartupInitialData;
  setStartupData: React.Dispatch<React.SetStateAction<StartupInitialData>>;
  setRange: React.Dispatch<React.SetStateAction<number>>;
  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
  isNext: IsNextType;
  setIsNext: React.Dispatch<React.SetStateAction<IsNextType>>;
}>({
  range: 0,
  startupData: startData,
  activeTab: { title: '', Component: <></>, src: '' },
  isNext: { pathname: '', title: '' },
  setIsNext: () => {},
  setRange: () => {},
  setStartupData: () => {},
  setActiveTab: () => {},
});

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNext, setIsNext] = useState<IsNextType>({
    pathname: '',
    title: '',
  });
  const [startupData, setStartupData] = useState<StartupInitialData>(startData);
  const [activeTab, setActiveTab] = useState<ActiveTab>({
    title: '',
    Component: <></>,
    src: '/angel/bgTrailer1.svg',
  });
  const [range, setRange] = useState<number>(0);

  const contextValue = useMemo(
    () => ({
      range,
      setRange,
      activeTab,
      isNext,
      setIsNext,
      setActiveTab,
      startupData,
      setStartupData,
    }),
    [range, activeTab, startupData, isNext]
  );

  return (
    <OnboardContext.Provider value={contextValue}>
      {children}
    </OnboardContext.Provider>
  );
}

export function useOnboardContext() {
  return useContext(OnboardContext);
}
