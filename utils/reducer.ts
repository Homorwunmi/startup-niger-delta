function reducer({
  state,
  action,
}: {
  state: {
    range: number;
    startupData: Record<string, any>;
    activeTab: { title: string; Component: React.JSX.Element; src?: string };
    isNext: { pathname: string; title: string } | null;
    error: string | null;
  };
  action: {
    type: string;
    payload?: any;
  };
}) {
  switch (action.type) {
    case 'SET_RANGE':
      return { ...state, range: action.payload };
    case 'SET_STARTUP_DATA':
      return {
        ...state,
        startupData: { ...state.startupData, ...action.payload },
      };
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };
    case 'SET_IS_NEXT':
      return { ...state, isNext: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
