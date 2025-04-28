import React, { ReactElement } from 'react';

export interface SidebarProps {
  sidebarItems: {
    title: string;
    Component: ReactElement;
    src: string;
  }[];
  value: string;
  activeTab?: {
    title: string;
    Component: React.JSX.Element;
    src: string;
  };
  setActiveTab?: React.Dispatch<
    React.SetStateAction<{
      title: string;
      Component: React.JSX.Element;
      src: string;
    }>
  >;
}
