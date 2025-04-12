import React from "react";
import QuestionMark from "@/public/images/question-mark.svg";
import Image from "next/image";

export default function FrequentlyAsked(): React.JSX.Element {
  return (
    <section className="text-white">
      <div
        className="bg-custom-green p-20 h-96 font-poppins flex flex-col gap-2 relative"
        style={{
          backgroundImage: `url("/home/ecosystem-bg.svg")`,
          backgroundBlendMode: "soft-light",
        }}>
        <h2 className="text-4xl decoration-light-custom-green underline-offset-[15px] underline mb-4 flex flex-col items-start">
          <span>FAQ.</span>
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
      <div className="p-20 bg-white">Hello</div>
    </section>
  );
}
