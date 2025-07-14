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
  certificate: File | string;
  logo: File | string;
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
  investmentProof: string;
  investmentSize: string;
  identification: string;
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
  investmentProof: string;
  investmentSize: string;
  identification: string;
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
  principalPromoter: string;
  investmentExperience: string;
  investmentProof: string;
  investmentSize: string;
  identification: string;
  nationality: string;
  message: string;
}

export interface UpdatedStartupType
  extends Omit<StartupInitialType, 'certificate' | 'logo'> {
  certificate: string;
  logo: string;
  userId: string;
}

export interface UpdatedVCType {
  companyName: string;
  incorporation: string;
  rcNumber: string;
  industry: string;
  description: string;
  investmentFocus: string;
  fundSize: string;
  minInvestment: string;
  maxInvestment: string;
  // Contact info
  email: string;
  phone: string;
  address: string;
  website?: string;
  // Files
  registrationFile?: string;
  logoFile?: string;
}

export interface UpdatedAngelType {
  fullName: string;
  profession: string;
  experience: string;
  industry: string;
  investmentRange: string;
  minInvestment: string;
  maxInvestment: string;
  // Contact info
  email: string;
  phone: string;
  address: string;
  linkedin?: string;
  // Files
  registrationFile?: string;
  logoFile?: string;
}

export interface UpdatedAcceleratorType {
  organizationName: string;
  establishedYear: string;
  programDuration: string;
  industryFocus: string;
  description: string;
  applicationDeadline: string;
  batchSize: string;
  // Contact info
  email: string;
  phone: string;
  address: string;
  website?: string;
  // Files
  registrationFile?: string;
  logoFile?: string;
}
