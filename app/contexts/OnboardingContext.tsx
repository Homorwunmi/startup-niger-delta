/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { startUpData } from '@/lib/data';
import { ActiveTab, StartupInitialData } from '@/types/Onboarding';
import React, { createContext, useContext, useState } from 'react';

const OnboardContext = createContext<{
  range: number;
  startupData: StartupInitialData;
  setStartupData: React.Dispatch<React.SetStateAction<StartupInitialData>>;
  setRange: React.Dispatch<React.SetStateAction<number>>;
  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
}>({
  range: 0,
  startupData: startUpData,
  setStartupData: () => {},
  setRange: () => {},
  activeTab: { title: '', Component: <></>, src: '' },
  setActiveTab: () => {},
});

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [startupData, setStartupData] =
    useState<StartupInitialData>(startUpData);
  const [activeTab, setActiveTab] = useState<ActiveTab>({
    title: '',
    Component: <></>,
    src: '/angel/bgTrailer1.svg',
  });
  const [range, setRange] = useState<number>(0);

  const contextValue = React.useMemo(
    () => ({
      range,
      setRange,
      activeTab,
      setActiveTab,
      startupData,
      setStartupData,
    }),
    [range, activeTab, startupData]
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
