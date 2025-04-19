'use client';

import React from 'react';
import AlertLogo from '@/public/images/alert-logo.svg';
import Range from '@/public/images/range.svg';
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

function SplideCenterMode() {
  const splideOptions = {
    type: 'loop',
    focus: 'center',
    perPage: 3,
    gap: '1rem',
    padding: '1rem',
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
    },
  };

  return (
    <Splide options={splideOptions}>
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <SplideSlide key={i}>
            <Card
              className="border-2 border-custom-green p-8 shadow-custom-green/10"
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

                <Table>
                  <TableHeader>
                    <TableRow className="bg-light-custom-green-1 hover:bg-light-custom-green-1 p-2 flex items-center gap-2">
                      <TableHead className="px-0 h-fit">Geography</TableHead>
                      <TableHead className="px-0 h-fit">Reference</TableHead>
                      <TableHead className="px-0 h-fit">
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
    <section className="p-5 lg:p-20 bg-gray-200 flex flex-col items-center gap-8 relative">
      <h2 className="text-xl lg:text-5xl font-medium flex flex-col items-center gap-4">
        <span>Funding Alerts.</span>
        <span className="w-1/3 h-1 bg-light-custom-green" />
      </h2>

      <div className="flex items-center justify-between w-5/6 px-5 text-xs lg:text-base lg:w-1/2 lg:px-24 py-4 font-semibold bg-white shadow-md">
        <h3 className="uppercase underline underline-offset-4">Type</h3>
        <h3 className="uppercase underline underline-offset-4">Category</h3>
        <h3 className="uppercase underline underline-offset-4">Year</h3>
      </div>

      <SplideCenterMode />
    </section>
  );
}
