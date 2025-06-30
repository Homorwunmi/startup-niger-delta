import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Logo from '@/public/images/Logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';

export default function Navbar() {
  return (
    <NavigationMenu className="py-4 px-5 lg:px-20 2xl:py-10 text-green-900 font-medium border-b-2 border-green-900 border-opacity-50 max-w-screen">
      <NavigationMenuList className="w-full">
        <figure className="mr-auto 2xl:w-64">
          <Image src={Logo} alt="Niger Delta Logo" className="w-full h-full" />
        </figure>

        <NavigationMenuItem className="hidden lg:flex items-center gap-8 text-custom-green">
          <NavigationMenuLink
            href="/home"
            className="hover:bg-transparent p-0 2xl:!text-2xl"
          >
            Home
          </NavigationMenuLink>
          <NavigationMenu className="hover:bg-transparent hover:p-0 p-0 2xl:!text-2xl">
            Explores
          </NavigationMenu>
          <NavigationMenu className="hover:bg-transparent p-0 2xl:!text-2xl">
            <Link href="#funding">Funding</Link>
          </NavigationMenu>
          <NavigationMenuLink className="hover:bg-transparent p-0 2xl:!text-2xl">
            Reports
          </NavigationMenuLink>
          <NavigationMenu className="hover:bg-transparent p-0 2xl:!text-2xl">
            <Link href="/news">News</Link>
          </NavigationMenu>
          <NavigationMenuLink className="hover:bg-transparent p-0 2xl:!text-2xl">
            <Link href="/events">Events</Link>
          </NavigationMenuLink>
          <NavigationMenuLink className="hover:bg-transparent p-0 2xl:!text-2xl">
            FAQ
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden lg:flex items-center gap-4 2xl:gap-10 ml-auto">
          <NavigationMenuLink
            href="/login"
            className="underline hover:bg-transparent p-0 2xl:!text-2xl"
          >
            Login
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/sign-up"
            className="bg-custom-orange hover:bg-gradient-to-b hover:from-custom-orange hover:via-custom-orange hover:to-custom-orange-dark text-white hover:text-white px-5 py-2 text-center 2xl:!text-2xl"
          >
            Get Started
          </NavigationMenuLink>
        </NavigationMenuItem>

        <RxHamburgerMenu size={32} className="lg:hidden" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
