'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useOnboardContext } from '@/app/contexts/OnboardingContext';
import { SidebarProps } from '@/types/Onboarding.d';
import { usePathname } from 'next/navigation';

import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export default function Sidebar({ sidebarItems, value }: SidebarProps) {
  const { range, setRange, activeTab, setActiveTab, isNext } =
    useOnboardContext();
  const pathname = usePathname();

  function handleChange(
    title: string,
    Component: React.JSX.Element,
    src: string,
    number: number
  ) {
    // if (!isNext) return;

    setActiveTab({
      title,
      Component,
      src,
    });

    setRange(number);
  }

  function getRangeHeight(heightRange: number): string {
    if (
      heightRange === 0 &&
      isNext.pathname === pathname &&
      isNext.title.toLowerCase() === activeTab.title.toLowerCase()
    )
      return 'h-1/4';
    if (
      heightRange === 1 &&
      isNext.pathname === pathname &&
      isNext.title.toLowerCase() === activeTab.title.toLowerCase()
    )
      return 'h-1/2';
    if (
      heightRange === 2 &&
      isNext.pathname === pathname &&
      isNext.title.toLowerCase() === activeTab.title.toLowerCase()
    )
      return 'h-4/5';
    if (
      heightRange >= 3 &&
      isNext.pathname === pathname &&
      isNext.title.toLowerCase() === activeTab.title.toLowerCase()
    )
      return 'h-full';

    return '';
  }

  return (
    <main className="w-full h-screen bg-custom-green-3 relative flex-1">
      <div className="flex items-start gap-10 absolute left-20 top-6 w-[80%] z-20">
        <section className="flex flex-col items-start gap-10 w-1/4">
          <h1 className="text-custom-green font-poppins font-semibold text-2xl">
            {value}
          </h1>

          <ul className="flex flex-col items-start gap-16 relative px-6">
            <div className="absolute top-0 left-0 bg-white w-1 h-full">
              <div className={`w-full bg-red-400 ${getRangeHeight(range)}`} />
            </div>

            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Button
                  type="button"
                  className={`bg-transparent hover:bg-transparent cursor-pointer shadow-none text-light-custom-green-1 font-bold pl-0 text-xl ${range === index ? 'text-black' : ''}`}
                  onClick={() =>
                    handleChange(item.title, item.Component, item.src, index)
                  }
                >
                  {item.title}
                </Button>
              </li>
            ))}
          </ul>
        </section>

        {activeTab.Component && (
          <section className="flex flex-col flex-1 bg-white h-[35rem] rounded-xl px-5 font-poppins">
            {/* Top Navigation Bar */}
            <ul className="flex items-center text-sm gap-3 text-custom-green-2 border-b-1 w-11/12 mx-auto py-4">
              <li>
                <RadioGroup defaultValue="option-one">
                  <Link
                    href="/onboarding/startup"
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value="startup"
                      id="startup"
                      checked={pathname === '/onboarding/startup'}
                    />
                    <Label htmlFor="startup">Startup</Label>
                  </Link>
                </RadioGroup>
              </li>
              <li>
                <RadioGroup defaultValue="option-one">
                  <Link
                    href="/onboarding/angel-investor"
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value="angel-investor"
                      id="angel-investor"
                      checked={pathname === '/onboarding/angel-investor'}
                    />
                    <Label htmlFor="angel-investor">Angel Investor</Label>
                  </Link>
                </RadioGroup>
              </li>
              <li>
                <RadioGroup defaultValue="option-one">
                  <Link
                    href="/onboarding/venture-capitalist"
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value="venture-capitalist"
                      id="venture-capitalist"
                      checked={pathname === '/onboarding/venture-capitalist'}
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
                    href="/onboarding/accelerator"
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value="accelerator"
                      id="accelerator"
                      checked={pathname === '/onboarding/accelerator'}
                    />
                    <Label htmlFor="accelerator">
                      Accelerators, Innovation Hubs & Incubators
                      Registration{' '}
                    </Label>
                  </Link>
                </RadioGroup>
              </li>
            </ul>

            {/* Render the component here */}
            <div className="h-full text-custom-green-2">
              {activeTab.Component}
            </div>
          </section>
        )}
      </div>

      <figure className="w-full absolute -bottom-0 left-0">
        <Image
          src={activeTab.src}
          alt="Angel Background"
          width={100}
          height={100}
          className="w-full object-cover"
        />
      </figure>
    </main>
  );
}
