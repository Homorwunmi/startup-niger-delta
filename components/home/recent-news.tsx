'use client';

import React, { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { NewsType } from '@/types/Home';
import NewsImage1 from '@/public/images/news-image-1.svg';
import NewsImage2 from '@/public/images/news-image-2.svg';
import NewsImage3 from '@/public/images/news-image-3.svg';

import Image from 'next/image';

import Slider from 'react-slick';

import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

function MobileCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };

  const images = [NewsImage1, NewsImage2, NewsImage3];

  return (
    <div className="slider-container recent-container px-5 lg:hidden">
      <Slider {...settings}>
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Card
              className="shadow-none bg-transparent rounded-none gap-2"
              key={`card-${i}`}
            >
              <CardHeader className="px-0">
                <CardTitle className="text-base">
                  How collaboration makes us better business person
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full px-0 flex flex-col items-stretch gap-2">
                <figure className="w-full">
                  <Image src={images[i]} alt="news-image" className="w-full" />
                </figure>
                <p className="flex items-center justify-between">
                  <span>By Admin, NDS</span>
                  <span>Jan 6, 2024 - 2 min Read</span>
                </p>
                <p className="w-full text-sm">
                  Lorem ipsum dolor sit amet consectetur. Ont Condimentum
                  adipiscing at iaculis m wqwa adiscing convallis ut feugiat
                  morbi. Indo...
                </p>
              </CardContent>
            </Card>
          ))}
      </Slider>
    </div>
  );
}

export default function RecentNews(): React.JSX.Element {
  const [isActive, setIsActive] = useState<NewsType>('latest');
  const images = [NewsImage1, NewsImage2, NewsImage3];

  function handleSetActive(type: NewsType) {
    setIsActive(type);
  }
  return (
    <section className="lg:p-20 bg-gray-200">
      <div className="flex flex-col items-stretch lg:gap-10 py-5 2xl:container 2xl:mx-auto">
        <div className="flex items-end justify-between w-full px-5 lg:p-0">
          <h2 className="flex flex-col item-start gap-6 text-4xl font-poppins font-medium lg:text-6xl 2xl:text-7xl">
            <span>Recent News.</span>
            <span className="w-1/2 h-1 2xl:h-2 bg-custom-orange" />
          </h2>

          <ul className="hidden lg:flex items-center gap-4">
            <li>
              <Button
                type="button"
                onClick={() => handleSetActive('latest')}
                className={`rounded-full px-10 shadow-none 2xl:text-lg ${isActive === 'latest' ? 'text-white bg-custom-green hover:bg-custom-green' : 'text-custom-green border-1 border-custom-green bg-transparent hover:bg-transparent'}`}
              >
                Latest
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => handleSetActive('news')}
                className={`rounded-full px-10 shadow-none 2xl:text-lg ${isActive === 'news' ? 'text-white bg-custom-green hover:bg-custom-green' : 'text-custom-green border-1 border-custom-green bg-transparent hover:bg-transparent'}`}
              >
                News
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => handleSetActive('funding')}
                className={`rounded-full px-10 shadow-none 2xl:text-lg ${isActive === 'funding' ? 'text-white bg-custom-green hover:bg-custom-green' : 'text-custom-green border-1 border-custom-green bg-transparent hover:bg-transparent'}`}
              >
                Funding
              </Button>
            </li>
          </ul>
        </div>

        <MobileCarousel />

        <div className="hidden lg:flex lg:flex-row items-center w-full gap-6">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <Card
                className="lg:w-1/3 shadow-none bg-transparent rounded-none gap-2 group"
                key={`card-${i}`}
              >
                <CardHeader className="px-0">
                  <CardTitle className="text-xl group-hover:text-custom-orange 2xl:text-3xl">
                    How collaboration makes us better business person
                  </CardTitle>
                </CardHeader>
                <CardContent className="w-full px-0 flex flex-col items-stretch gap-2">
                  <figure className="w-full relative">
                    <Image
                      src={images[i]}
                      alt="news-image"
                      className="w-full"
                    />
                    <div className="hidden group-hover:block rounded-lg w-full h-full bg-black/50 absolute top-0 left-0 z-10" />
                  </figure>
                  <p className="flex items-center justify-between 2xl:text-xl">
                    <span>By Admin, NDS</span>
                    <span>Jan 6, 2024 - 2 min Read</span>
                  </p>
                  <p className="w-full 2xl:text-2xl group-hover:underline">
                    Lorem ipsum dolor sit amet consectetur. Ont Condimentum
                    adipiscing at iaculis m wqwa adiscing convallis ut feugiat
                    morbi. Indo...
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>

        <Button
          className="self-center bg-custom-orange hover:bg-linear-to-b hover:from-custom-orange-dark hover:to-custom-orange
         px-8 py-6 font-poppins font-semibold -mt-20 text-xl 2xl:text-2xl"
        >
          Load more...
        </Button>
      </div>
    </section>
  );
}
