'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Image from 'next/image';

import { Subscription } from '@/types/User';
import { subscriptionSchema } from '@/helpers/validation';

import Logo from '@/public/images/Logo.svg';
import headerImage from '@/public/images/header-image.svg';
import headerBg from '@/public/images/header-bg.svg';
import { Ecosystem, InvestmentList, Partners, resourcesList } from '@/lib/home';
import Investment from '@/public/home/investment.svg';
import Link from 'next/link';
import RecentNews from '@/components/home/recent-news';
import Events from '@/components/home/events';
import Testimonial from '@/components/home/testimonial';
import FrequentlyAsked from '@/components/home/faq';
import Alert from '@/components/home/alert';
import Footer from '@/components/shared/footer';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Page() {
  const form = useForm<Subscription>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(subscriptionSchema),
  });

  return (
    <>
      <main className="overflow-hidden">
        <NavigationMenu className="py-4 px-5 lg:px-20 2xl:py-10 text-green-900 font-medium border-b-2 border-green-900 border-opacity-50 max-w-screen">
          <NavigationMenuList className="w-full">
            <figure className="mr-auto 2xl:w-64">
              <Image
                src={Logo}
                alt="Niger Delta Logo"
                className="w-full h-full"
              />
            </figure>

            <NavigationMenuItem className="hidden lg:flex items-center gap-8 text-custom-green">
              <NavigationMenuLink
                href="/home"
                className="hover:bg-transparent p-0 2xl:!text-3xl"
              >
                Home
              </NavigationMenuLink>
              <NavigationMenu className="hover:bg-transparent hover:p-0 p-0 2xl:!text-3xl">
                Explores
              </NavigationMenu>
              <NavigationMenuLink
                href="/funding"
                className="hover:bg-transparent p-0 2xl:!text-3xl"
              >
                Funding
              </NavigationMenuLink>
              <NavigationMenuLink className="hover:bg-transparent p-0 2xl:!text-3xl">
                Reports
              </NavigationMenuLink>
              <NavigationMenuLink className="hover:bg-transparent p-0 2xl:!text-3xl">
                News
              </NavigationMenuLink>
              <NavigationMenuLink className="hover:bg-transparent p-0 2xl:!text-3xl">
                Events
              </NavigationMenuLink>
              <NavigationMenuLink className="hover:bg-transparent p-0 2xl:!text-3xl">
                FAQ
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden lg:flex items-center gap-4 2xl:gap-10 ml-auto">
              <NavigationMenuLink
                href="/login"
                className="underline hover:bg-transparent p-0 2xl:!text-3xl"
              >
                Login
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/sign-up"
                className="bg-gradient-to-b from-custom-orange via-custom-orange to-custom-orange-dark text-white hover:text-white px-10 py-4 text-center 2xl:!text-3xl"
              >
                Get Started
              </NavigationMenuLink>
            </NavigationMenuItem>

            <RxHamburgerMenu size={32} className="lg:hidden" />
          </NavigationMenuList>
        </NavigationMenu>

        <header className="flex flex-col lg:flex-row items-stretch gap-3 lg:pl-20 lg:min-h-[80vh] 2xl:h-fit 2xl:mx-auto">
          <section className="flex flex-col items-center lg:items-stretch justify-center gap-4 p-5 lg:p-0 lg:w-[60%]">
            <h1 className="text-3xl text-center font-bold text-custom-green leading-none lg:text-6xl lg:text-left 2xl:w-[60%] 2xl:text-5xl niger-heading">
              Niger Delta Innovation Ecosystem
            </h1>

            <p className="text-gray-800 text-lg text-center font-semibold lg:text-4xl lg:text-left lg:w-[60%] 2xl:text-4xl">
              Unlocking The Next Startup Innovative & Burgeoning Opportunities
            </p>

            <Form {...form}>
              <form className="lg:w-1/2 2xl:w-[40%] mt-2 form-subscription">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal italic hidden lg:block 2xl:text-lg">
                        Subscribe to our newsletter
                      </FormLabel>
                      <div className="flex items-center">
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded-r-none py-5 px-4 lg:px-8 custom-input focus-visible:border-none bg-gray-100 2xl:text-lg"
                          />
                        </FormControl>
                        <Button
                          type="submit"
                          className="bg-custom-orange hover:bg-linear-to-b hover:from-custom-orange-dark hover:to-custom-orange hover:cursor-pointer rounded-l-none !rounded-r-sm py-5 px-8 w-30 font-bold border border-custom-orange hover:border-none 2xl:text-lg"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </FormItem>
                  )}
                />
              </form>
            </Form>

            <Button className="gradient-button lg:self-start rounded-full flex items-center justify-center gap-2 px-8 py-5 2xl:text-2xl 2xl:!px-10 2xl:!py-8">
              <span>How we work</span>
              <MdOutlinePlayCircleFilled color="bg-gray-900" size={32} />
            </Button>
          </section>

          <section className="relative h-96 lg:flex-1 lg:h-[80vh] pt-10 lg:w-auto">
            <Image
              src={headerImage}
              alt="app-dashboard-img"
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-1/3 z-10 move-up-down-animation w-full h-full"
            />

            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={headerBg}
                alt="header-background"
                className="hidden w-full h-full object-cover rounded-tl-[5rem] lg:block 2xl:scale-100 2xl:h-screen"
              />
            </div>

            <div
              className="absolute top-0 left-0 bg-light-custom-green w-full h-full -z-10 lg:hidden"
              style={{
                backgroundImage: `url("/home/ecosystem-bg.svg")`,
                backgroundSize: '50%',
                backgroundBlendMode: 'overlay',
              }}
            />
          </section>
        </header>

        {/* Our Ecosystem */}
        <section className="bg-gray-100 p-5 lg:p-20">
          <div className="flex flex-col items-center gap-16 2xl:container 2xl:mx-auto">
            <h2 className="text-4xl lg:text-6xl 2xl:text-7xl font-medium font-poppins text-custom-green flex flex-col items-center gap-6">
              <span>Our Ecosystem.</span>
              <span className="w-1/4 2xl:w-1/3 h-1 2xl:h-2 bg-custom-orange" />
            </h2>

            <div className="flex flex-col items-center lg:flex-row lg:items-stretch justify-center gap-16 w-full">
              {Ecosystem.map((item, index) => (
                <Card
                  key={item.title}
                  className={`relative flex items-center gap-4 lg:w-1/3 px-3 pt-12 pb-0 ${(index + 1) % 2 !== 0 ? 'bg-custom-green text-white' : 'bg-light-custom-green text-custom-green'}`}
                  style={{
                    backgroundImage: `url("/home/ecosystem-bg.svg")`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'overlay',
                  }}
                >
                  <div
                    className={`absolute top-0 w-4/5 h-3 ${(index + 1) % 2 !== 0 ? 'bg-light-custom-green' : 'bg-custom-green'}`}
                  />

                  <div
                    className={`absolute bottom-0 right-0 w-50 h-60 rounded-b-xl ${(index + 1) % 2 !== 0 ? 'bg-custom-green' : 'bg-light-custom-green'}`}
                    style={{
                      clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
                    }}
                  />

                  <CardHeader className="relative w-full gap-3">
                    <CardTitle
                      className="font text-3xl 2xl:text-5xl"
                      style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                      {item.title}
                    </CardTitle>
                    <CardDescription
                      className={`text-sm font-poppins leading-5 2xl:text-lg 2xl:leading-tight ${(index + 1) % 2 !== 0 ? 'text-white' : 'text-custom-green'}`}
                    >
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative flex mt-auto">
                    <Button className="px-7 py-6 text-base bg-custom-orange hover:bg-linear-to-b hover:from-custom-orange-dark hover:to-custom-orange self-center mt-8">
                      Meet them
                    </Button>
                    <figure>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={200}
                      />
                    </figure>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment and Opportunities */}
        <section
          className="pt-20 px-5 lg:px-20 bg-custom-green"
          style={{
            backgroundImage: `url("/home/ecosystem-bg.svg")`,
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 2xl:container 2xl:mx-auto">
            <div className="flex flex-col items-start gap-6 text-white col-span-2 lg:col-span-1">
              <h2 className="text-3xl lg:text-5xl 2xl:text-7xl flex flex-col items-start lg:gap-3 font-poppins">
                <span>Investment &</span>
                <span>Opportunities.</span>
              </h2>

              <span className="w-1/5 h-1 bg-light-custom-green" />

              <p className="text-lg 2xl:text-3xl  font-poppins">
                Join our exclusive network of a thriving community of digital
                technology pioneers, explore investment opportunities, and stay
                at the cutting edge of technological advancements.{' '}
              </p>
            </div>

            <figure className="col-span-2 flex items-center justify-center lg:col-span-1">
              <Image src={Investment} alt="Investment and Opportunities" />
            </figure>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-end lg:justify-between gap-10 w-full col-span-2 lg:h-[350px]">
              {InvestmentList.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col items-start gap-4 2xl:gap-3 bg-custom-green-1 hover:bg-custom-orange transition-all duration-300 bg-opacity-50 px-5 pt-12 pb-5 2xl:pb-12 rounded-t-3xl lg:w-1/4 group lg:h-[200px] transition-all delay-100 duration-500 hover:h-[350px]"
                >
                  <figure className="w-16 h-16 2xl:w-20 2xl:h-20">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-full h-full"
                    />
                  </figure>
                  <figcaption className="text-white font-bold text-lg font-poppins 2xl:text-2xl">
                    {item.title}
                  </figcaption>

                  <p className=" transition-all delay-300 text-white 2xl:text-xl lg:hidden group-hover:block group-hover:w-full group-hover:h-full">
                    {item.content}
                  </p>

                  <Button className="flex items-center justify-center bg-white hover:text-white text-black font-semibold 2xl:text-lg hidden transition-all delay-300 hover:bg-custom-green-2 group-hover:block">
                    Connect
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Partners */}
        <section className="carousel-container">
          <ul className="carousel-track">
            {Partners.map((partner, index) => (
              <li key={`partner-${index}`} className="carousel-card">
                <Image
                  src={partner.image}
                  alt="Partner Logo"
                  width={300}
                  height={300}
                />
              </li>
            ))}
            {Partners.map((partner, index) => (
              <li key={`partner-duplicate-${index}`} className="carousel-card">
                <Image
                  src={partner.image}
                  alt="Partner Logo Duplicate"
                  width={300}
                  height={300}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* resources */}
        <section
          className="px-5 py-10 lg:p-20 bg-custom-green"
          style={{
            backgroundImage: `url("/home/ecosystem-bg.svg")`,
            backgroundBlendMode: 'soft-light',
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 2xl:container 2xl:mx-auto">
            <div className="flex flex-col items-start gap-5 text-white lg:w-3/5">
              <h2 className="text-5xl 2xl:text-7xl font-medium flex flex-col items-start gap-3 font-poppins">
                Resources.
              </h2>

              <span className="w-1/5 h-1 2xl:h-2 bg-light-custom-green" />

              <p className="mt-5 text-base lg:text-xl 2xl:text-2xl font-medium font-poppins">
                SNG is proud to offer such a wide variety of technology assets
                within the geographical locations on its platform. All these
                encompass our goal of turbo-charging investments towards
                sustainable, innovative and most importantly inclusive growth.
              </p>

              <Button className="!flex hidden lg:inline-block px-7 py-6 text-base bg-custom-orange hover:bg-linear-to-b hover:from-custom-orange-dark hover:to-custom-orange hover:cursor-pointer 2xl:text-xl">
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </div>

            <ul className="flex-1 flex flex-col gap-5">
              {resourcesList.map((resource) => (
                <li
                  key={resource.title}
                  className="flex items-center gap-4 text-white lg:text-custom-green lg:bg-gray-100 py-2 px-3 rounded-lg"
                >
                  <figure className="w-14 h-14 2xl:w-20 2xl:h-20">
                    <Image
                      src={resource.img}
                      alt=""
                      width={400}
                      height={400}
                      className="w-full h-full"
                    />
                  </figure>

                  <div className="leading-tight 2xl:text-2xl">
                    <h3 className="font-semibold">{resource.title}</h3>
                    <p>{resource.desc}</p>
                  </div>

                  <div className="hidden w-6 h-6 2xl:w-10 2xl:h-10 2xl:text-xl rounded-full bg-custom-green text-white lg:flex items-center justify-center ml-auto">
                    ?
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Alert />

        <Testimonial />

        <RecentNews />

        <Events />

        <FrequentlyAsked />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
