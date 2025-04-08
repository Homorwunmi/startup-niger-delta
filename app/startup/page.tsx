"use client";

import Navbar from "@/components/shared/Navbar";
import Status from "@/components/shared/status";
import Sidebar from "@/components/shared/sidebar";
import { sideBarData } from "@/lib/data";
import { useState } from "react";
import AngelForm from "@/components/angel/Angel-form-profile";

export default function Page() {
  const [activeTab, setActiveTab] = useState({
    title: "Company Profile",
    Component: <AngelForm />,
    src: "/angel/bgTrailer1.svg",
  });

  return (
    <section className="bg-[#C6D9B5] h-screen w-full">
      <Navbar />
      <Status />
      <Sidebar
        sidebarItems={sideBarData}
        value="Startup Registration"
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </section>
  );
}
