"use client";

import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

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
  const pathname = usePathname();

  return (
    <section className="w-full h-screen bg-custom-green-3 pt-6 relative">
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
                    }}
                  >
                    {item.title}
                  </Button>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="h-[496px]">
          {activeTab.Component && (
            <div className="flex flex-col bg-white flex-1 rounded-xl px-5">
              {/* Top Navigation Bar */}
              <ul className="flex items-center text-sm gap-3 border-b-1 w-5/6 mx-auto py-4">
                <li>
                  <RadioGroup defaultValue="option-one">
                    <Link
                      href="/startup"
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value="startup"
                        id="startup"
                        checked={pathname === "/startup"}
                      />
                      <Label htmlFor="startup">Startup</Label>
                    </Link>
                  </RadioGroup>
                </li>
                <li>
                  <RadioGroup defaultValue="option-one">
                    <Link
                      href="/angel-investor"
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value="angel-investor"
                        id="angel-investor"
                        checked={pathname === "/angel-investor"}
                      />
                      <Label htmlFor="angel-investor">Angel Investor</Label>
                    </Link>
                  </RadioGroup>
                </li>
                <li>
                  <RadioGroup defaultValue="option-one">
                    <Link
                      href="/venture-capitalist"
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value="venture-capitalist"
                        id="venture-capitalist"
                        checked={pathname === "/venture-capitalist"}
                      />
                      <Label htmlFor="venture-capitalist">
                        Venture Capitalist
                      </Label>
                    </Link>
                  </RadioGroup>
                </li>
                <li className="w-2/5">
                  <RadioGroup defaultValue="option-one">
                    <Link
                      href="/accelerator"
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value="accelerator"
                        id="accelerator"
                        checked={pathname === "/accelerator"}
                      />
                      <Label htmlFor="accelerator">
                        Accelerators, Innovation Hubs & Incubators
                        Registration{" "}
                      </Label>
                    </Link>
                  </RadioGroup>
                </li>
              </ul>

              {/* Render the component here */}
              <div>{activeTab.Component}</div>
            </div>
          )}
        </div>
      </section>

      <figure className="w-full absolute -bottom-0 left-0">
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
