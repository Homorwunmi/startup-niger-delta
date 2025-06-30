'use client';

import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { AiFillQuestionCircle } from 'react-icons/ai';
import Image from 'next/image';

const Startups = [
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
  {
    image: '/images/100pay.svg',
    title: '100 pay',
    description: 'Fintech, Digital',
  },
];

const footerContent = [
  {
    title: 'Founded',
    value: '2022',
  },
  {
    title: 'Employees',
    value: '10 - 50',
  },
  {
    title: 'Founders',
    image: '/images/founders.svg',
  },
  {
    title: 'Interests',
    image: '/images/interest.svg',
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function StartupCard({ className }: CardProps) {
  return (
    <section className="font-inter grid grid-cols-4 gap-5 w-full">
      {Startups.map((card, index) => (
        <Card
          key={index}
          className={cn('w-[270px] border-none font-inter py-5', className)}
        >
          <CardHeader
            className={cn(
              'flex justify-between items-center w-full px-2.5',
              className
            )}
          >
            <Checkbox />
            <AiFillQuestionCircle size={20} className="text-[#153230]" />
          </CardHeader>
          <CardContent className="grid gap-4">
            <figure className="rounded-full h-30 w-30 mx-auto flex justify-center items-center shadow-md">
              <Image
                src={card.image}
                alt="hero"
                width={500}
                height={500}
                className="h-30 w-30 rounded-full"
              />
            </figure>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-lg font-bold text-[#153230]">{card.title}</h2>
              <p className="text-sm text-[#9595A0] font-medium">
                {card.description}
              </p>
            </div>
          </CardContent>
          <div className="flex px-2.5">
            <CardFooter
              className={cn(
                'bg-[#F0F7F7] rounded-sm border-[#DBDBDB] border-[0.5px] py-3.5 px-1',
                className
              )}
            >
              <div className="w-full flex flex-col gap-3">
                <p className="text-xs px-1 text-center">
                  Return and second life management solution for distributors
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {footerContent.map((item, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <h3 className="text-[10px] text-black font-bold">
                        {item.title}:
                      </h3>
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt="hero"
                          width={50}
                          height={50}
                          className=""
                        />
                      ) : (
                        <p className="text-sm font-semibold text-[#153230]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardFooter>
          </div>
        </Card>
      ))}
    </section>
  );
}
