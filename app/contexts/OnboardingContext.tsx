'use client';

import React, { createContext, useContext, useState } from 'react';

const OnboardContext = createContext<{
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}>({ range: 0, setRange: () => {} });

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [range, setRange] = useState<number>(0);

  const contextValue = React.useMemo(() => ({ range, setRange }), [range]);

  return (
    <OnboardContext.Provider value={contextValue}>
      {children}
    </OnboardContext.Provider>
  );
}

export function useOnboardContext() {
  return useContext(OnboardContext);
}
