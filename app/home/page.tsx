"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Logo from "@/public/images/Logo.svg";
import headerImage from "@/public/images/header-image.svg";
import headerBg from "@/public/images/header-bg.svg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { Subscription } from "@/types/User";
import { subscriptionSchema } from "@/helpers/validation";

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
            <NavigationMenuTrigger className="hover:bg-transparent hover:p-0 p-0">
              Explore
            </NavigationMenuTrigger>
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
              href="/get-started"
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
                          className="w-full rounded-r-none custom-input"
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        className="gradient-button rounded-l-none w-30"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Button className="gradient-button self-start rounded-full flex items-center justify-center gap-2 px-4">
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
    </main>
  );
}
