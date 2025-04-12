"use client";

import React, { useState } from "react";

import { NewsType } from "@/types/Home";
import NewsImage1 from "@/public/images/news-image-1.svg";
import NewsImage2 from "@/public/images/news-image-2.svg";
import NewsImage3 from "@/public/images/news-image-3.svg";

import Image from "next/image";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function RecentNews(): React.JSX.Element {
  const [isActive, setIsActive] = useState<NewsType>("latest");
  const images = [NewsImage1, NewsImage2, NewsImage3];

  function handleSetActive(type: NewsType) {
    setIsActive(type);
  }

  return (
    <section className="flex flex-col items-stretch gap-10 p-20 bg-gray-200">
      <div className="flex items-end justify-between w-full">
        <h2 className="flex flex-col item-start gap-2 text-4xl">
          <span>Recent News.</span>
          <span className="w-1/2 h-1 bg-custom-orange" />
        </h2>

        <ul className="flex items-center gap-4">
          <li>
            <Button
              type="button"
              onClick={() => handleSetActive("latest")}
              className={`rounded-full px-10 shadow-none ${isActive === "latest" ? "text-white bg-custom-green hover:bg-custom-green" : "text-custom-green border-1 border-custom-green bg-transparent hover:bg-transparent"}`}
            >
              Latest
            </Button>
          </li>
          <li>
            <Button
              type="button"
              onClick={() => handleSetActive("news")}
              className={`rounded-full px-10 shadow-none ${isActive === "news" ? "text-white bg-custom-green hover:bg-custom-green" : "text-custom-green border-1 border-custom-green bg-transparent hover:bg-transparent"}`}
            >
              News
            </Button>
          </li>
          <li>
            <Button
              type="button"
              onClick={() => handleSetActive("funding")}
              className={`rounded-full px-10 shadow-none ${isActive === "funding" ? "text-white bg-custom-green hover:bg-custom-green" : "text-custom-green border-1 border-custom-green bg-transparent hover:bg-transparent"}`}
            >
              Funding
            </Button>
          </li>
        </ul>
      </div>

      <div className="flex items-center w-full gap-6">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Card
              className="w-1/3 shadow-none bg-transparent rounded-none gap-2"
              key={`card-${i}`}
            >
              <CardHeader className="px-0">
                <CardTitle className="text-xl">
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
                <p className="w-full">
                  Lorem ipsum dolor sit amet consectetur. Ont Condimentum
                  adipiscing at iaculis m wqwa adiscing convallis ut feugiat
                  morbi. Indo...
                </p>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
}
