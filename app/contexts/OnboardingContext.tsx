/* eslint-disable react/jsx-no-useless-fragment */

import { startUpData } from '@/lib/data';
import { initialStartData, initialAngelData } from '@/lib/onboardingData';
import {
  ActiveTab,
  StartupInitialType,
  AngelInitialType,
} from '@/types/Onboarding';
import {
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
  angelDispatch: React.ActionDispatch<
    [action: Partial<AngelInitialType> & { type: string }]
  >;
  startupDispatch: React.ActionDispatch<
    [action: Partial<StartupInitialType> & { type: string }]
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
  activeTab: { title: '', Component: <></>, src: '' },
  isNext: { pathname: '', title: '' },
  setIsNext: () => {},
  setRange: () => {},
  startupDispatch: () => {},
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
  console.log(state);
  switch (action.type) {
    case 'UPDATE_COMPANY_PROFILE':
      return {
        ...state,
        ...action,
      };
    case 'UPDATE_CONTACT_INFO':
      return {
        ...state,
        ...action,
      };
    case 'UPDATE_STARTUP_IDENTITY':
      return {
        ...state,
        ...action,
      };
    case 'UPDATE_STARTUP_PROOF':
      return {
        ...state,
        ...action,
      };
    default:
      break;
  }

  return state;
}

function angelReducer(
  state: AngelInitialType,
  action: Partial<AngelInitialType> & { type: string }
): AngelInitialType {
  console.log(state);
  switch (action.type) {
    case 'UPDATE_COMPANY_PROFILE':
      return {
        ...state,
        ...action,
      };
    case 'UPDATE_CONTACT_INFO':
      return {
        ...state,
        ...action,
      };
    case 'UPDATE_ANGEL_IDENTITY':
      return {
        ...state,
        ...action,
      };
    case 'UPDATE_ANGEL_PROOF':
      return {
        ...state,
        ...action,
      };
    default:
  }

  return state;
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
  ); // startup form data
  const [angelState, angelDispatch] = useReducer(
    angelReducer,
    initialAngelData
  ); // angel form data
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
      startupDispatch: startupDispatch,
      angelDispatch: angelDispatch,
      setError,
      error,
      isPrev: { range: isPrev.range },
      setIsPrev,
      startupState: startupState,
      angelState: angelState,
    }),
    [range, activeTab, isNext, error]
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
