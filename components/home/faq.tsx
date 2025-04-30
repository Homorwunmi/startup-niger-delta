'use client';

import React from 'react';
import QuestionMark from '@/public/images/question-mark.svg';
import FaqMain from '@/public/images/faq-main.svg';
import Mail from '@/public/images/mail.svg';

import Image from 'next/image';
import { faqs } from '@/lib/home';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiAtLine } from 'react-icons/ri';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function FrequentlyAsked(): React.JSX.Element {
  return (
    <section className="text-white relative">
      <div
        className="bg-custom-green w-full h-96 absolute top-0 -z-10"
        style={{
          backgroundImage: `url("/home/ecosystem-bg.svg")`,
          backgroundBlendMode: 'soft-light',
        }}
      />
      <div className="2xl:container 2xl:mx-auto relative">
        <div className="px-5 py-10 lg:p-16 lg:h-96 font-poppins flex flex-col gap-2">
          <h2 className="text-4xl lg:text-6xl 2xl:text-7xl font-medium decoration-light-custom-green underline-offset-[20px] underline mb-4 flex flex-col items-start">
            FAQ.
          </h2>
          <p className="capitalize text-2xl">Do you have questions?</p>
          <p className="text-4xl text-custom-green-4 font-semibold">
            Get in Touch.
          </p>

          <figure className="absolute top-32 lg:top-18 2xl:top-5 left-0 w-full">
            <Image
              src={QuestionMark}
              alt="question-mark-icon"
              className="w-full"
            />
          </figure>
        </div>

        <ul className="hidden lg:flex items-center gap-10 w-fit text-custom-green absolute top-1/5 2xl:top-1/6 left-20">
          <li className="w-48 h-48 bg-gray-100 rounded-md shadow-lg pt-10 flex flex-col items-center justify-center gap-7 transition-all duration-300 hover:bg-light-custom-green">
            <FaPhoneAlt size={45} />
            <p className="text-lg font-medium">Call</p>
          </li>
          <li className="w-48 h-48 bg-gray-100 rounded-md shadow-lg pt-10 flex flex-col items-center justify-center gap-7 transition-all duration-300 hover:bg-light-custom-green">
            <figure>
              <Image src={Mail} alt="mail-icon" />
            </figure>
            <p className="text-lg font-medium">Email</p>
          </li>
          <li className="w-48 h-48 bg-gray-100 rounded-md shadow-lg pt-10 flex flex-col items-center justify-center gap-7 transition-all duration-300 hover:bg-light-custom-green">
            <RiAtLine size={45} />
            <p className="text-lg font-medium">DM</p>
          </li>
        </ul>

        <div className="px-5 py-10 lg:p-20 bg-white flex items-stretch">
          <figure className="hidden lg:block w-1/2">
            <Image src={FaqMain} alt="faq-main" className="w-full h-auto" />
          </figure>

          <div className="flex-1">
            {faqs.map((faq, i) => (
              <Accordion type="single" collapsible key={`faqs-${i}`}>
                <AccordionItem
                  value="item-1"
                  className="bg-white text-black rounded-lg shadow-md mb-6 px-5 !py-[.5px]"
                >
                  <AccordionTrigger className="hover:no-underline 2xl:text-xl">
                    {faq.ques}
                  </AccordionTrigger>
                  <AccordionContent className="2xl:text-lg">
                    {faq.ans}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
