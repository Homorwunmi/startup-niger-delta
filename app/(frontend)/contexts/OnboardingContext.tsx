/* eslint-disable react/jsx-no-useless-fragment */

import {
  initialStartData,
  initialAngelData,
  initialVentureCapitalist,
  initialAcceleratorData,
} from 'lib/onboardingData';
import {
  ActiveTab,
  StartupInitialType,
  AngelInitialType,
  VentureCapitalistInitialType,
  AcceleratorInitialType,
} from 'types/Onboarding';
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useReducer,
} from 'react';

interface IsNextType {
  pathname: string;
  title: string;
}

interface IsPrevType {
  range: number;
}

const OnboardContext = createContext<{
  range: number;
  startupState: StartupInitialType;
  angelState: AngelInitialType;
  capitalistState: VentureCapitalistInitialType;
  acceleratorState: AcceleratorInitialType;
  angelDispatch: React.ActionDispatch<
    [action: Partial<AngelInitialType> & { type: string }]
  >;
  startupDispatch: React.ActionDispatch<
    [action: Partial<StartupInitialType> & { type: string }]
  >;
  capitalistDispatch: React.ActionDispatch<
    [action: Partial<VentureCapitalistInitialType> & { type: string }]
  >;
  acceleratorDispatch: React.ActionDispatch<
    [action: Partial<AcceleratorInitialType> & { type: string }]
  >;
  setRange: React.Dispatch<React.SetStateAction<number>>;
  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
  isNext: IsNextType;
  setIsNext: React.Dispatch<React.SetStateAction<IsNextType>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  error: string | null;
  isPrev: IsPrevType;
  setIsPrev: React.Dispatch<React.SetStateAction<IsPrevType>>;
}>({
  range: 0,
  startupState: initialStartData,
  angelState: initialAngelData,
  capitalistState: initialVentureCapitalist,
  acceleratorState: initialAcceleratorData,
  activeTab: { title: '', Component: <></>, src: '' },
  isNext: { pathname: '', title: '' },
  setIsNext: () => {},
  setRange: () => {},
  startupDispatch: () => {},
  capitalistDispatch: () => {},
  acceleratorDispatch: () => {},
  angelDispatch: () => {},
  setActiveTab: () => {},
  setError: () => {},
  error: null,
  isPrev: { range: 0 },
  setIsPrev: () => {},
});

function startupReducer(
  state: StartupInitialType,
  action: Partial<StartupInitialType> & { type: string }
): StartupInitialType {
  switch (action.type) {
    case 'UPDATE_COMPANY_PROFILE': {
      const { type: _, ...actionData } = action;
      return {
        ...state,
        ...actionData,
      };
    }
    case 'UPDATE_CONTACT_INFO': {
      const { type: _, ...contactActionData } = action;
      return {
        ...state,
        ...contactActionData,
      };
    }
    case 'UPDATE_STARTUP_IDENTITY': {
      const { type: _, ...identityActionData } = action;
      const identityState = {
        ...state,
        ...identityActionData,
      };
      return identityState;
    }
    case 'UPDATE_STARTUP_PROOF': {
      const { type: _, ...proofActionData } = action;
      const proofState = {
        ...state,
        ...proofActionData,
      };
      return proofState;
    }
    default:
      return state;
  }
}

function angelReducer(
  state: AngelInitialType,
  action: Partial<AngelInitialType> & { type: string }
): AngelInitialType {
  switch (action.type) {
    case 'UPDATE_COMPANY_PROFILE': {
      const { type: _, ...actionData } = action;
      const newState = {
        ...state,
        ...actionData,
      };
      return newState;
    }
    case 'UPDATE_CONTACT_INFO': {
      const { type: _, ...contactActionData } = action;
      const contactState = {
        ...state,
        ...contactActionData,
      };
      return contactState;
    }
    case 'UPDATE_ANGEL_IDENTITY': {
      const { type: _, ...identityActionData } = action;
      const identityState = {
        ...state,
        ...identityActionData,
      };
      return identityState;
    }
    case 'UPDATE_ANGEL_PROOF': {
      const { type: _, ...proofActionData } = action;
      const proofState = {
        ...state,
        ...proofActionData,
      };
      return proofState;
    }
    default:
      return state;
  }
}

function capitalistReducer(
  state: VentureCapitalistInitialType,
  action: Partial<VentureCapitalistInitialType> & { type: string }
): VentureCapitalistInitialType {
  switch (action.type) {
    case 'UPDATE_COMPANY_PROFILE': {
      const { type: _, ...actionData } = action;
      const newState = {
        ...state,
        ...actionData,
      };
      return newState;
    }
    case 'UPDATE_CONTACT_INFO': {
      const { type: _, ...contactActionData } = action;
      const contactState = {
        ...state,
        ...contactActionData,
      };
      return contactState;
    }
    case 'UPDATE_VC_IDENTITY': {
      const { type: _, ...identityActionData } = action;
      const identityState = {
        ...state,
        ...identityActionData,
      };
      return identityState;
    }
    case 'UPDATE_VC_PROOF': {
      const { type: _, ...proofActionData } = action;
      const proofState = {
        ...state,
        ...proofActionData,
      };
      return proofState;
    }
    default:
      return state;
  }
}

function acceleratorReducer(
  state: AcceleratorInitialType,
  action: Partial<AcceleratorInitialType> & { type: string }
): AcceleratorInitialType {
  switch (action.type) {
    case 'UPDATE_COMPANY_PROFILE': {
      const { type: _, ...actionData } = action;
      const newState = {
        ...state,
        ...actionData,
      };
      return newState;
    }
    case 'UPDATE_CONTACT_INFO': {
      const { type: _, ...contactActionData } = action;
      const contactState = {
        ...state,
        ...contactActionData,
      };
      return contactState;
    }
    case 'UPDATE_ACCELERATOR_IDENTITY': {
      const { type: _, ...identityActionData } = action;
      const identityState = {
        ...state,
        ...identityActionData,
      };
      return identityState;
    }
    case 'UPDATE_ACCELERATOR_PROOF': {
      const { type: _, ...proofActionData } = action;
      const proofState = {
        ...state,
        ...proofActionData,
      };
      return proofState;
    }
    default:
      return state;
  }
}

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [error, setError] = useState<string | null>(null);
  const [isNext, setIsNext] = useState<IsNextType>({
    pathname: '',
    title: '',
  });

  const [isPrev, setIsPrev] = useState<IsPrevType>({
    range: 0,
  });
  const [startupState, startupDispatch] = useReducer(
    startupReducer,
    initialStartData
  );
  const [angelState, angelDispatch] = useReducer(
    angelReducer,
    initialAngelData
  );
  const [capitalistState, capitalistDispatch] = useReducer(
    capitalistReducer,
    initialVentureCapitalist
  );
  const [acceleratorState, acceleratorDispatch] = useReducer(
    acceleratorReducer,
    initialAcceleratorData
  );
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
      angelReducer,
      startupDispatch,
      angelDispatch,
      setError,
      error,
      isPrev: { range: isPrev.range },
      setIsPrev,
      startupState,
      angelState,
      capitalistState,
      capitalistDispatch,
      acceleratorState,
      acceleratorDispatch,
    }),
    [
      range,
      activeTab,
      isNext,
      error,
      isPrev,
      startupState,
      angelState,
      capitalistState,
      acceleratorState,
    ]
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
