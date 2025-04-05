"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";

import { Subscription } from "@/types/User";
import { subscriptionSchema } from "@/helpers/validation";

import Logo from "@/public/images/Logo.svg";
import headerImage from "@/public/images/header-image.svg";
import headerBg from "@/public/images/header-bg.svg";
import { Ecosystem, InvestmentList, Partners, resourcesList } from "@/lib/home";
import Investment from "@/public/home/investment.svg";
import Link from "next/link";

export default function Page() {
  const form = useForm<Subscription>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(subscriptionSchema),
  });

  return (
    <main>
      <NavigationMenu
        className="py-4 px-20 text-green-900 font-medium border-b-2 border-green-900 border-opacity-50"
        style={{ maxWidth: "100%" }}
      >
        <NavigationMenuList className="">
          <figure className="mr-auto">
            <Image src={Logo} alt="Niger Delta Logo" />
          </figure>

          <NavigationMenuItem className="flex items-center gap-8 text-custom-green">
            <NavigationMenuLink
              href="/home"
              className="hover:bg-transparent p-0"
            >
              Home
            </NavigationMenuLink>
            <NavigationMenu className="hover:bg-transparent hover:p-0 p-0">
              Explore
            </NavigationMenu>
            <NavigationMenuLink
              href="/funding"
              className="hover:bg-transparent p-0"
            >
              Funding
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-transparent p-0">
              Reports
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-transparent p-0">
              News
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-transparent p-0">
              Events
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-transparent p-0">
              FAQ
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex items-center gap-4 ml-auto">
            <NavigationMenuLink
              href="/login"
              className="underline hover:bg-transparent p-0"
            >
              Login
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/sign-up"
              className="gradient-button w-30 text-center"
            >
              Get Started
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <header className="flex items-center gap-3 px-20 h-[80vh]">
        <section className="flex flex-col justify-center gap-4 w-[70%]">
          <h1 className="text-5xl font-bold text-custom-green leading-tight">
            Niger Delta Innovation Ecosystem
          </h1>

          <p className="text-gray-800 font-semibold text-4xl w-3/4">
            Unlocking The Next Startup Innovative & Burgeoning Opportunities
          </p>

          <Form {...form}>
            <form className="w-3/4 mt-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal italic">
                      Subscribe to our newsletter
                    </FormLabel>
                    <div className="flex items-center">
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full rounded-r-none py-5 px-8 custom-input"
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        className="gradient-button rounded-l-none py-5 px-8 w-30"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Button className="gradient-button self-start rounded-full flex items-center justify-center gap-2 px-8 py-5">
            <span>How we work</span>
            <MdOutlinePlayCircleFilled color="bg-gray-900" />
          </Button>
        </section>

        <section className="relative h-full">
          <Image
            src={headerImage}
            alt="Niger Delta Logo"
            className="block transform translate-y-10 -translate-x-10"
          />
          <Image
            src={headerBg}
            alt="Niger Delta Logo"
            className="absolute top-0 -right-20 block w-full h-full -z-10"
          />
        </section>
      </header>

      {/* Our Ecosystem */}
      <section className="flex flex-col items-center gap-16 p-20 bg-gray-100">
        <h2 className="text-4xl flex flex-col items-center gap-3">
          <span>Our Ecosystem</span>
          <span className="w-1/4 h-1 bg-custom-orange" />
        </h2>

        <div className="flex items-stretch justify-center gap-16 w-full">
          {Ecosystem.map((item, index) => (
            <Card
              key={item.title}
              className={`relative flex items-center gap-4 w-1/3 px-3 pt-12 pb-0 ${(index + 1) % 2 !== 0 ? "bg-custom-green text-white" : "bg-light-custom-green text-custom-green"}`}
              style={{
                backgroundImage: `url("/home/ecosystem-bg.svg")`,
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
              }}
            >
              <div
                className={`absolute top-0 w-4/5 h-3 ${(index + 1) % 2 !== 0 ? "bg-light-custom-green" : "bg-custom-green"}`}
              />

              <div
                className={`absolute bottom-0 right-0 w-50 h-60 rounded-b-xl ${(index + 1) % 2 !== 0 ? "bg-custom-green" : "bg-light-custom-green"}`}
                style={{
                  clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
                }}
              />

              <CardHeader className="relative w-full gap-3">
                <CardTitle
                  className="font text-3xl"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  {item.title}
                </CardTitle>
                <CardDescription
                  className={`text-sm font-poppins leading-5 ${(index + 1) % 2 !== 0 ? "text-white" : "text-custom-green"}`}
                >
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative flex mt-auto">
                <Button className="px-7 py-6 text-base bg-custom-orange hover:bg-custom-orange self-center mt-8">
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
      </section>

      {/* Investment and Opportunities */}
      <section
        className="grid grid-cols-2 gap-16 pt-20 px-20 bg-custom-green"
        style={{
          backgroundImage: `url("/home/ecosystem-bg.svg")`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col items-start gap-6 text-white">
          <h2 className="text-5xl flex flex-col items-start gap-3 font-poppins">
            <span>Investment &</span>
            <span>Opportunities.</span>
          </h2>

          <span className="w-1/5 h-1 bg-light-custom-green" />

          <p className="text-lg font-poppins">
            Join our exclusive network of a thriving community of digital
            technology pioneers, explore investment opportunities, and stay at
            the cutting edge of technological advancements.{" "}
          </p>
        </div>

        <figure>
          <Image src={Investment} alt="Investment and Opportunities" />
        </figure>

        <ul className="flex items-stretch justify-between w-full col-span-2">
          {InvestmentList.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-start gap-4 bg-custom-green-1 bg-opacity-50 px-5 pt-12 pb-5 rounded-t-3xl w-1/5"
            >
              <figure className="w-16 h-16">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </figure>
              <figcaption className="text-white font-bold text-lg font-poppins">
                {item.title}
              </figcaption>
            </li>
          ))}
        </ul>
      </section>

      {/* Partners */}
      <section className="carousel-container">
        <ul className="carousel-track">
          {Partners.map((partner, index) => (
            <li key={`partner-${index}`} className="carousel-card">
              <Image
                src={partner.image}
                alt="Partner Logo"
                width={100}
                height={100}
              />
            </li>
          ))}
          {Partners.map((partner, index) => (
            <li key={`partner-duplicate-${index}`} className="carousel-card">
              <Image
                src={partner.image}
                alt="Partner Logo Duplicate"
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* resources */}
      <section
        className="flex items-center gap-10 p-20 bg-custom-green"
        style={{
          backgroundImage: `url("/home/ecosystem-bg.svg")`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col items-start gap-5 text-white w-3/5">
          <h2 className="text-5xl font-medium flex flex-col items-start gap-3 font-poppins">
            Resources.
          </h2>

          <span className="w-1/5 h-1 bg-light-custom-green" />

          <p className="mt-5 text-xl font-medium font-poppins">
            SNG is proud to offer such a wide variety of technology assets
            within the geographical locations on its platform. All these
            encompass our goal of turbo-charging investments towards
            sustainable, innovative and most importantly inclusive growth.
          </p>

          <Link href="/sign-up">
            <Button className="px-7 py-6 text-base bg-custom-orange hover:bg-custom-orange mt-8 hover:cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>

        <ul className="flex-1 flex flex-col gap-5">
          {resourcesList.map((resource) => (
            <li
              key={resource.title}
              className="flex items-center gap-4 bg-gray-100 py-2 px-3 rounded-lg"
            >
              <figure className="w-14 h-14">
                <Image
                  src={resource.img}
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full"
                />
              </figure>

              <div className="leading-tight">
                <h3 className="font-semibold">{resource.title}</h3>
                <p>{resource.desc}</p>
              </div>

              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center ml-auto">
                ?
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
