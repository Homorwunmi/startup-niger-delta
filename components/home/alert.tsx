'use client';

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function SplideCenterMode() {
  const splideOptions = {
    type: 'loop',
    focus: 'center',
    perPage: 3,
    gap: '1rem',
    padding: '1rem',
    arrows: true,
    pagination: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    breakpoints: {
      768: {
        perPage: 1,
        padding: '2rem',
      },
    },
  };

  return (
    <Splide options={splideOptions}>
      <SplideSlide>
        <div className="bg-gray-500">Slide 1</div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-gray-500">Slide 2</div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-gray-500">Slide 3</div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-gray-500">Slide 4</div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-gray-500">Slide 5</div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-gray-500">Slide 6</div>
      </SplideSlide>
    </Splide>
  );
}

export default function Alert(): React.JSX.Element {
  return (
    <section className="p-20 bg-gray-200 flex flex-col items-center gap-8">
      <h2 className="text-5xl font-medium flex flex-col items-center gap-4">
        <span>Funding Alerts.</span>
        <span className="w-1/3 h-1 bg-light-custom-green" />
      </h2>

      <div className="flex items-center justify-between w-1/2 px-24 py-4 font-semibold bg-white shadow-md">
        <h3 className="uppercase underline underline-offset-4">Type</h3>
        <h3 className="uppercase underline underline-offset-4">Category</h3>
        <h3 className="uppercase underline underline-offset-4">Year</h3>
      </div>

      <SplideCenterMode />
    </section>
  );
}
