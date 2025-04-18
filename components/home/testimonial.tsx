'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import TestimonialImage from '@/public/images/testimonial.svg';
import QuoteImage from '@/public/images/quotation.svg';
import { IoMdStar } from 'react-icons/io';

function SimpleSlider() {
  const name = [
    'Olatunji Salawu',
    'Muhyideen Akanni',
    'Tolulope Ayo',
    'Jesutofunmi Ayoola',
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <ul className="slider-container absolute top-1/2 left-10 transform -translate-y-1/2 h-1/2 w-3/5 bg-white shadow-lg z-10">
      <Slider {...settings}>
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <li
              key={i}
              className="!flex flex-col items-stretch justify-center gap-4 h-full mt-12 px-10 py-4 relative"
            >
              <div className="flex items-center gap-5">
                <figure className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={TestimonialImage}
                    alt="testimonial-image"
                    className="w-full h-full rounded-full"
                  />
                </figure>
                <div>
                  <figure className="flex items-center">
                    {Array(5)
                      .fill(null)
                      .map((__, index) => (
                        <IoMdStar
                          key={index}
                          size={22}
                          className="text-custom-orange mb-4"
                        />
                      ))}
                  </figure>
                  <h3 className="text-2xl font-semibold">{name[i]}</h3>
                  <p className="text-custom-orange text-lg font-semibold">
                    Head of Linie House Group
                  </p>
                </div>
              </div>

              <figure className="absolute top-0 right-10 w-20 h-20">
                <Image
                  src={QuoteImage}
                  alt="quotation-mark"
                  className="w-full h-full"
                />
              </figure>

              <p className="text-xl text-gray-500">
                SNG serves as an ideal platform for showcasing, connecting, and
                securing funds for innovative projects. It provides a strategic
                avenue to foster the growth and success of startups and their
                stakeholders.
              </p>
            </li>
          ))}
      </Slider>
    </ul>
  );
}

export default function Testimonial() {
  return (
    <section className="bg-white relative min-h-[650px]">
      <SimpleSlider />

      <div
        className="absolute right-0 top-0 w-4/5 h-full bg-custom-green p-20 flex flex-col items-end gap-4"
        style={{
          backgroundImage: `url("/home/ecosystem-bg.svg")`,
          backgroundBlendMode: 'soft-light',
        }}
      >
        <h2 className="text-4xl text-center text-white font-semibold flex flex-col items-end gap-3">
          <span className="uppercase">Testimonies.</span>
          <span className="w-1/3 h-1 bg-custom-orange inline-block" />
        </h2>
        <p className="text-2xl text-white">What people say about us</p>
      </div>
    </section>
  );
}
