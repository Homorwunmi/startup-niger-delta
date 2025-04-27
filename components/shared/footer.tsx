'use client';

import Image from 'next/image';
import Link from 'next/link';

import FooterLogo from '@/public/images/footer-logo.svg';
import Arrow from '@/public/images/arrow.svg';

import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer
      className="lg:gap-10 px-5 py-10 lg:p-20 text-white bg-custom-green relative"
      style={{
        backgroundImage: `url("/home/ecosystem-bg.svg")`,
        backgroundBlendMode: 'soft-light',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-custom-orange" />

      <div className="flex flex-col lg:grid lg:grid-cols-8 gap-5 2xl:container 2xl:mx-auto">
        <section className="col-span-3 flex flex-col items-stretch gap-4 lg:gap-8">
          <figure className="w-1/2">
            <Image
              src={FooterLogo}
              alt="footer-logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </figure>

          <p className="font-poppins font-light">
            We are actively involved in fostering a vibrant network of startups
            dedicated to advancing economic prosperity, preserving cultural
            heritage, and promoting environmental sustainability in the Niger
            Delta Region.
          </p>

          <Link href="/sign-up" className="self-start">
            <Button className="px-7 py-6 text-base bg-custom-orange hover:bg-custom-orange hover:cursor-pointer">
              Get Started
            </Button>
          </Link>
        </section>

        <section className="flex flex-col gap-5 lg:gap-20">
          <h3 className="text-xl flex flex-col items-start gap-4 self-start">
            <span>Quick Links</span>
            <span className="w-1/2 h-1 bg-custom-orange" />
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <Image src={Arrow} alt="arrow-icon" />
              <span>About</span>
            </li>
            <li className="flex items-center gap-3">
              <Image src={Arrow} alt="arrow-icon" />
              <span>Investors</span>
            </li>
            <li className="flex items-center gap-3">
              <Image src={Arrow} alt="arrow-icon" />
              <span>Event</span>
            </li>
            <li className="flex items-center gap-3">
              <Image src={Arrow} alt="arrow-icon" />
              <span>Funding</span>
            </li>
            <li className="flex items-center gap-3">
              <Image src={Arrow} alt="arrow-icon" />
              <span>Funding Blog</span>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-5 lg:gap-20 col-span-2">
          <h3 className="text-xl flex flex-col items-start gap-4 self-start">
            <span>Contact Info</span>
            <span className="w-1/2 h-1 bg-custom-orange" />
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <h4 className="font-bold">Phone Number</h4>
              <p>+234 90 200 000 0000 User@startupnigerdelta.gov.ng</p>
            </li>
            <li>
              <h4 className="font-bold">Address</h4>
              <p>22 Office Street, Somewhere Lane, Asaba, Delta NG</p>
            </li>
          </ul>
        </section>

        <section className="flex flex-col">
          <h3 className="text-xl flex flex-col items-start gap-4 self-start">
            <span>Gallery</span>
            <span className="w-1/2 h-1 bg-custom-orange" />
          </h3>
        </section>

        <div className="hidden lg:flex items-center justify-between absolute bottom-0 left-0 w-full px-20 py-4 bg-gray-800">
          <p>Copyright &copy; Startup Niger Delta right reserved</p>

          <ul className="flex items-center gap-4">
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
