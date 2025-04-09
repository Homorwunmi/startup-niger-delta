"use client";

import Navbar from "@/components/shared/Navbar";
import Status from "@/components/shared/status";
import Sidebar from "@/components/shared/sidebar";
import { startUpData } from "@/lib/data";
import { useState } from "react";
import StartupProfile from "@/components/startup/startup-profile";

export default function Page() {
  const [activeTab, setActiveTab] = useState({
    title: "Company Profile",
    Component: <StartupProfile />,
    src: "/angel/bgTrailer1.svg",
  });

  return (
    <section className="bg-[#C6D9B5] h-screen w-full">
      <Navbar />
      <Status />
      <Sidebar
        sidebarItems={startUpData}
        value="Startup Registration"
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </section>
  );
}
