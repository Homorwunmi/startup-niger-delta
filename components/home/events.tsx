'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';

import NewsImage1 from '@/public/images/news-image-1.svg';
import NewsImage2 from '@/public/images/news-image-2.svg';
import NewsImage3 from '@/public/images/news-image-3.svg';
import Image from 'next/image';
import { Button } from '../ui/button';

function MultipleItems() {
  const images = [NewsImage1, NewsImage2, NewsImage3];

  const getImageForIndex = (index: number) => {
    if (index % 2 === 0) {
      return images[1];
    }
    if (index % 3 === 0) {
      return images[2];
    }
    return images[0];
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    vertical: true,
    verticalSwiping: true,

    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  return (
    <ul className="slider-container !relative">
      <Slider {...settings}>
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <li
              key={`card-${i}`}
              className="!grid auto-rows-max lg:auto-rows-min grid-cols-10 items-center gap-4 mt-4 bg-white/70 rounded-lg shadow-lg px-4 lg:px-10 py-4"
            >
              <div className="row-start-2 lg:row-start-1 col-span-4 lg:col-span-1 2xl:text-xl flex flex-col items-start gap-3">
                <p className="font-bold hidden lg:block">27 Sep 2024</p>
                <p className="font-bold flex flex-col items-start leading-none lg:font-medium">
                  10:30 am <span>-</span> 3:30 pm{' '}
                </p>
              </div>

              <figure className="col-span-4 lg:col-span-2 w-full h-full lg:w-auto lg:h-auto">
                <Image
                  src={getImageForIndex(i)}
                  alt="card-image"
                  className="w-full h-full lg:w-auto lg:h-auto object-cover rounded-lg"
                />
              </figure>

              <div className="col-span-6 lg:col-span-6 flex flex-col items-stretch gap-1">
                <h3 className="font-bold text-lg 2xl:text-3xl">Conference</h3>
                <p className="text-sm lg:text-lg lg:w-5/6 2xl:text-xl">
                  Join industry leaders and innovators at our Tech Innovation
                  Summit 2022 for insightful discussions, networking
                  opportunities, and the latest technological trends and
                  developments.
                </p>
              </div>

              <Button className="col-span-3 lg:col-span-1 bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark 2xl:text-xl">
                Action
              </Button>
            </li>
          ))}
      </Slider>
    </ul>
  );
}

// Events component
export default function Events(): React.JSX.Element {
  return (
    <section className="px-5 py-10 lg:p-20 bg-light-custom-green/70">
      <div className="flex flex-col items-stretch gap-10 2xl:container 2xl:mx-auto">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-4xl lg:text-6xl 2xl:text-7xl text-center text-custom-green font-medium font-poppins flex flex-col items-center gap-6">
            <span>Events.</span>
            <span className="w-4/5 h-1 2xl:h-2 bg-custom-orange inline-block" />
          </h2>
          <p className="lg:w-2/3 text-center text-custom-green font-medium 2xl:text-2xl">
            Discover upcoming events, business conferences, trade shows,
            seminars, networking meets, and workshops. Additionally, a list of
            past events within the last 6 months.
          </p>
        </div>

        <MultipleItems />
      </div>
    </section>
  );
}
