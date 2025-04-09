import { ReactElement } from "react";
import AngelForm from "@/components/angel/Angel-form-profile";
import AngelFormInfo from "@/components/angel/Angel-form-info";
import AngelFormInvestment from "@/components/angel/Angel-form-investment";
import AngelFormIdentify from "@/components/angel/Angel-form-identify";

interface SideBarItem {
  title: string;
  Component: ReactElement;
  src: string;
}

export const sideBarData: SideBarItem[] = [
  {
    title: "Company Profile",
    Component: <AngelForm />,
    src: "/angel/bgTrailer1.svg",
  },
  {
    title: "Contact Info",
    Component: <AngelFormInfo />,
    src: "/angel/bgTrailer2.svg",
  },
  {
    title: "Investment Info",
    Component: <AngelFormInvestment />,
    src: "/angel/bgTrailer3.svg",
  },
  {
    title: "Identification",
    Component: <AngelFormIdentify />,
    src: "/angel/bgTrailer4.svg",
  },
];

export const startUpData: SideBarItem[] = [
  {
    title: "Company Profile",
    Component: <AngelForm />,
    src: "/angel/bgTrailer1.svg",
  },
  {
    title: "Contact Info",
    Component: <AngelFormInfo />,
    src: "/angel/bgTrailer2.svg",
  },
  {
    title: "Investment Info",
    Component: <AngelFormInvestment />,
    src: "/angel/bgTrailer3.svg",
  },
  {
    title: "Identification",
    Component: <AngelFormIdentify />,
    src: "/angel/bgTrailer4.svg",
  },
];
