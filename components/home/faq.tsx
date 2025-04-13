"use client";

import React from "react";
import QuestionMark from "@/public/images/question-mark.svg";
import FaqMain from "@/public/images/faq-main.svg";
import Image from "next/image";
import { faqs } from "@/lib/home";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FrequentlyAsked(): React.JSX.Element {
  return (
    <section className="text-white">
      <div
        className="bg-custom-green p-20 h-96 font-poppins flex flex-col gap-2 relative"
        style={{
          backgroundImage: `url("/home/ecosystem-bg.svg")`,
          backgroundBlendMode: "soft-light",
        }}>
        <h2 className="text-4xl decoration-light-custom-green underline-offset-[20px] underline mb-4 flex flex-col items-start">
          FAQ.
        </h2>
        <p className="capitalize text-xl">Do you have questions?</p>
        <p className="text-3xl text-custom-green-4 font-semibold">
          Get in Touch
        </p>

        <figure className="absolute bottom-1 left-0 w-full">
          <Image
            src={QuestionMark}
            alt="question-mark-icon"
            className="w-full"
          />
        </figure>
      </div>

      <div className="p-20 bg-white flex items-stretch">
        <figure className="w-1/2">
          <Image src={FaqMain} alt="faq-main" className="w-full h-auto" />
        </figure>

        <div className="flex-1">
          {faqs.map((faq, i) => (
            <Accordion type="single" collapsible key={`faqs-${i}`}>
              <AccordionItem
                value="item-1"
                className="bg-white text-black rounded-lg shadow-md mb-6 px-5 !py-[.5px]">
                <AccordionTrigger className="hover:no-underline">
                  {faq.ques}
                </AccordionTrigger>
                <AccordionContent>{faq.ans}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
