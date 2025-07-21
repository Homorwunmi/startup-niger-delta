'use client';

import React from 'react';
import AlertLogo from 'public/images/alert-logo.svg';
import Range from 'public/images/range.svg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const fundingTypes = {
  type: [
    'Angel Investors',
    'Venture Capitalists (VCs)',
    'Corporate Venture Capital (CVC)',
    'Seed Investors',
    'Accelerators',
    'Incubators',
  ],
  category: [
    'Fintech',
    'E-commerce',
    'Biotech',
    'AgriTech',
    'Health Tech',
    'EdTech',
    'Artificial Intelligence (AI)',
    'Gaming',
    'Robotics',
    'Others',
  ],
  year: ['2020', '2021', '2022', '2023', '2024', '2025'],
};

function SplideCenterMode() {
  const splideOptions = {
    type: 'loop',
    focus: 'center',
    perPage: 3,
    gap: '1rem',
    padding: '1.7rem',
    margin: '1rem',
    arrows: true,
    pagination: true,
    // autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    breakpoints: {
      800: {
        perPage: 1,
        width: '100%',
      },
      1200: {
        perPage: 3,
        width: '100%',
      },
      1400: {
        perPage: 3,
        width: '100%',
      },
    },
  };

  return (
    <Splide options={splideOptions}>
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <SplideSlide key={i}>
            <Card
              className="border-2 border-custom-green p-2 xl:p-8 shadow-custom-green/10"
              style={{
                boxShadow: '0px 0px 10px rgba(21, 50, 48, 0.8)',
              }}
            >
              <CardHeader className="px-0 flex flex-col items-center">
                <CardTitle>
                  <Image src={AlertLogo} alt="alert-card-logo" />
                </CardTitle>
                <CardDescription className="text-sm text-custom-green">
                  LogoHere Bong fuinte Niger Delta
                </CardDescription>
              </CardHeader>
              <CardDescription>
                <div className="flex items-center justify-between font-semibold uppercase text-[10px]">
                  <p>index</p>
                  <p className="flex flex-col items-center">
                    <span className="font-bold text-custom-green">
                      Fund Manager
                    </span>
                    <span>Logo Brown</span>
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 my-8">
                  <h3 className="text-2xl text-custom-green font-bold">
                    $400k
                  </h3>

                  <div>
                    <p className="flex items-center justify-between text-xs uppercase">
                      <span>Raised</span>
                      <span>2024</span>
                    </p>

                    <figure>
                      <Image src={Range} alt="range-length" />
                    </figure>
                  </div>
                </div>

                <div className="w-full overflow-hidden flex items-center justify-center">
                  <Table className="w-full">
                    <TableHeader className="bg-light-custom-green-1 w-full hover:bg-light-custom-green-1">
                      <TableRow className="py-2 px-1 flex items-center justify-between gap-2 w-full">
                        <TableHead className="px-0 h-fit font-bold">
                          Geography
                        </TableHead>
                        <TableHead className="px-0 h-fit font-bold">
                          Reference
                        </TableHead>
                        <TableHead className="px-0 h-fit text-center font-bold">
                          Industry focus
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="flex items-center justify-between p-2">
                        <TableCell className="px-0 h-fit">Africa</TableCell>
                        <TableCell className="px-0 h-fit">Seed %</TableCell>
                        <TableCell className="px-0 h-fit">Agrotech</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <Button className="block mx-auto mt-4 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark">
                  Learn More
                </Button>
              </CardDescription>
            </Card>
          </SplideSlide>
        ))}
    </Splide>
  );
}

export default function Alert(): React.JSX.Element {
  return (
    <section className="p-5 lg:p-20 bg-gray-200" id="funding">
      <div className="flex flex-col items-center gap-8 relative 2xl:container 2xl:mx-auto">
        <h2 className="text-xl lg:text-6xl font-medium font-poppins flex flex-col items-center gap-6">
          <span>Funding Alerts.</span>
          <span className="w-1/3 h-1 bg-light-custom-green" />
        </h2>

        <div className="flex items-center justify-between font-semibold bg-white shadow-md relative text-xs lg:text-base w-5/6 lg:w-1/2">
          <div className="group w-full hover:bg-custom-green-3 flex items-center justify-center px-5 py-3">
            <h3 className="uppercase underline underline-offset-4">Type</h3>
            <ul className="hidden absolute top-12 group-hover:block z-20">
              {fundingTypes.type.map((type, index) => (
                <li
                  key={index}
                  className="px-2 py-3 bg-custom-green-3 cursor-pointer text-center border border-white"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="group w-full hover:bg-custom-green-3 flex items-center justify-center px-5 py-3">
            <h3 className="uppercase underline underline-offset-4">Category</h3>
            <ul className="hidden absolute top-12 group-hover:block z-20">
              {fundingTypes.category.map((type, index) => (
                <li
                  key={index}
                  className="px-2 py-3 bg-custom-green-3 cursor-pointer text-center border border-white"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="group w-full hover:bg-custom-green-3 flex items-center justify-center px-5 py-3">
            <h3 className="uppercase underline underline-offset-4">Year</h3>
            <ul className="hidden absolute top-12 w-52 group-hover:block z-20">
              {fundingTypes.year.map((type, index) => (
                <li
                  key={index}
                  className="px-2 py-3 bg-custom-green-3 cursor-pointer text-center border border-white"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SplideCenterMode />
      </div>
    </section>
  );
}
