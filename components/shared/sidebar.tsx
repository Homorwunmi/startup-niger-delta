"use client";

import React, { ReactElement } from "react";
import Image from "next/image";
// import AngelForm from "../angel/Angel-form-profile";
import { Button } from "../ui/button";

interface SidebarProps {
  sidebarItems: {
    title: string;
    Component: ReactElement;
    src: string;
  }[];
  value: string;
  activeTab: {
    title: string;
    Component: React.JSX.Element;
    src: string;
  };
  setActiveTab: React.Dispatch<
    React.SetStateAction<{
      title: string;
      Component: React.JSX.Element;
      src: string;
    }>
  >;
}

export default function Sidebar({
  sidebarItems,
  value,
  activeTab,
  setActiveTab,
}: SidebarProps) {
  return (
    <section className="w-full pt-6">
      <h1 className="w-2/5 text-custom-green font-poppins font-semibold text-3xl px-20">
        {value}
      </h1>
      <section className="flex gap-[222px] z-20 px-20">
        <div className="flex flex-col gap-10 mt-11">
          {sidebarItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <ul>
                <li key={index}>
                  <Button
                    type="button"
                    className={`bg-transparent hover:bg-transparent cursor-pointer shadow-none text-lg text-light-custom-green-1 font-semibold ${activeTab.title === item.title ? "text-black text-xl" : ""}`}
                    onClick={() => {
                      setActiveTab({
                        title: item.title,
                        Component: item.Component,
                        src: item.src,
                      });
                    }}>
                    {item.title}
                  </Button>
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

      <figure className="w-full absolute bottom-0 left-0">
        <Image
          src={activeTab.src}
          alt="Angel Background"
          width={100}
          height={100}
          className="w-full object-cover"
        />
      </figure>
    </section>
  );
}
