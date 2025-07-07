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

export interface ActiveTab {
  title: string;
  Component: ReactElement;
  src: string;
}

export interface StartupInitialType {
  companyName: string;
  incorporation: string;
  rcNumber: string;
  industry: string;
  description: string;
  fundingInterest: string;
  companyEmail: string;
  companyWebsite: string;
  companyAddress: string;
  companyPhone: string;
  founderName: string;
  founderEmail: string;
  founderAddress: string;
  founderMobile: string;
  founderNo: string;
  certificate: File;
  logo: File;
}

export interface AngelInitialType {
  companyName: string;
  industry: string;
  description: string;
  fundingInterest: string;
  companyEmail: string;
  companyWebsite: string;
  companyAddress: string;
  companyPhone: string;
  angelName: string;
  investmentExperience: string;
  investmentProof: File | null;
  investmentSize: string;
  identification: File | null;
  nationality: string;
  message: string;
}

export interface VentureCapitalistInitialType {
  companyName: string;
  industry: string;
  description: string;
  fundingInterest: string;
  companyEmail: string;
  companyWebsite: string;
  companyAddress: string;
  companyPhone: string;
  generalPartner: string;
  investmentExperience: string;
  investmentProof: File | null;
  investmentSize: string;
  identification: File | null;
  nationality: string;
  message: string;
}

export interface AcceleratorInitialType {
  companyName: string;
  industry: string;
  description: string;
  fundingInterest: string;
  companyEmail: string;
  companyWebsite: string;
  companyAddress: string;
  companyPhone: string;
  investmentExperience: string;
  investmentProof: File | null;
  investmentSize: string;
  identification: File | null;
  nationality: string;
  message: string;
}

export interface initialTypes {
  startup: StartupInitialType;
}
