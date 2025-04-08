"use client";
import { useState, ReactElement } from "react";
import AngelForm from "../angel/Angel-form-profile";
import Image from "next/image";

interface SidebarProps {
  sidebarItems: {
    title: string;
    Component: ReactElement;
    src: string;
  }[];
  value: string;
}
export default function Sidebar({ sidebarItems, value }: SidebarProps) {
  const [activeTab, setActiveTab] = useState({
    title: "Company Profile",
    Component: <AngelForm />,
    src: "/angel/bgTrailer1.svg",
  });
  return (
    <section className="w-full pt-6">
      <h1 className="w-[392px] text-[#184341] font-poppins font-semibold text-3xl px-20">
        {value}
      </h1>
      <section className="flex gap-[222px] z-20 px-20">
        <div className="flex flex-col gap-10 mt-11">
          {sidebarItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <ul>
                <li
                  className={`text-[#184341] font-semibold text-lg cursor-pointer ${activeTab.title === item.title ? "text-black text-xl" : ""}`}
                  onClick={() => {
                    setActiveTab({
                      title: item.title,
                      Component: item.Component,
                      src: item.src,
                    });
                  }}
                >
                  {item.title}
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="h-[496px]">
          {activeTab.Component && (
            <div className="flex flex-col bg-white w-[45rem] rounded-xl px-5">
              {/* Render the component here */}
              <div>{activeTab.Component}</div>
            </div>
          )}
        </div>
      </section>

      <Image
        src={activeTab.src}
        alt="Angel Background"
        width={100}
        height={100}
        className="absolute bottom-0 right-0 w-full"
      />
    </section>
  );
}
