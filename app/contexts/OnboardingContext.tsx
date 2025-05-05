/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from 'react';

type ActiveTab = {
  title: string;
  Component: ReactElement;
  src: string;
};

const OnboardContext = createContext<{
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
}>({
  range: 0,
  setRange: () => {},
  activeTab: { title: '', Component: <></>, src: '' },
  setActiveTab: () => {},
});

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<ActiveTab>({
    title: '',
    Component: <></>,
    src: '/angel/bgTrailer1.svg',
  });
  const [range, setRange] = useState<number>(0);

  const contextValue = React.useMemo(
    () => ({ range, setRange, activeTab, setActiveTab }),
    [range, activeTab]
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
