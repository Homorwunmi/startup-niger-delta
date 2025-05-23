'use client';

import { useState } from 'react';
import Image from 'next/image';

type Article = {
  title: string;
  image: string;
  category: string;
  tagColor: string;
};

type Tabs = 'popular' | 'mostViewed';

const articles: Record<Tabs, Article[]> = {
  popular: [
    {
      title: 'How collaboration makes you better business person',
      image: '/new/sky.png',
      category: 'TECHNOLOGY',
      tagColor: '#0D726F',
    },
    {
      title: 'How collaboration makes you better business person',
      image: '/new/stand.png',
      category: 'INVESTMENT',
      tagColor: '#FFA500',
    },
    {
      title: 'How collaboration makes you better business person',
      image: '/new/person.png',
      category: 'POLITICS',
      tagColor: '#0D726F',
    },
    {
      title: 'How collaboration makes you better business person',
      image: '/new/ai.png',
      category: 'OPINION',
      tagColor: '#FFA500',
    },
  ],
  mostViewed: [
    {
      title: 'Most viewed content goes here',
      image: '/images/thumb1.jpg',
      category: 'FEATURED',
      tagColor: '#0D726F',
    },
  ],
};

export default function TabbedArticles(): JSX.Element {
  const [activeTab, setActiveTab] = useState<Tabs>('popular');

  return (
    <div className="space-y-6">
      {/* Tabs & Articles */}
      <div className="max-w-md w-full bg-[#F6F6F6] shadow rounded-md p-4 px-7">
        {/* Tabs */}
        <div className="flex justify-between text-[#153230] border-b text-base font-normal border-gray-200 mb-4">
          {(['Popular', 'Most Viewed'] as const).map((tabLabel) => {
            const tabKey: Tabs = tabLabel === 'Popular' ? 'popular' : 'mostViewed';
            return (
              <button
                key={tabLabel}
                onClick={() => setActiveTab(tabKey)}
                className={`px-4 py-2 text-base font-medium border-b-2 ${
                  activeTab === tabKey
                    ? 'border-orange-500 text-[#153230]'
                    : 'border-transparent text-gray-400'
                }`}
              >
                {tabLabel.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Articles */}
        <div className="space-y-4">
          {articles[activeTab].map((article, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="w-[105px] h-[96px] relative rounded overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <span
                  className="text-white text-xs font-semibold px-6 mb-2.5 py-0.5 inline-block rounded-sm"
                  style={{ backgroundColor: article.tagColor }}
                >
                  {article.category}
                </span>
                <h3 className="text-sm font-semibold text-[#153230] hover:text-custom-orange-dark cursor-pointer line-clamp-2 my-2.5 leading-4 ">
                  {article.title}
                </h3>
                <div className="text-xs text-[#153230] mt-2 flex gap-2 items-center">
                  <p>Jan 6, 2024</p>
                  <span>&bull;</span>
                  <p>2 min Read</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Place Your Ad */}
      <div className="w-full bg-[#f8f8f8] h-[300px] mt-10 rounded-md flex flex-col items-center justify-end p-6">
        <button className="bg-[#FF7D05] text-white text-sm font-semibold py-3 mb-12 px-5 rounded-full">
          PLACE YOUR AD
        </button>
      </div>
    </div>
  );
}
