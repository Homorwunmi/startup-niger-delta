import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Logo from "@/public/images/Logo.svg";

export default function Page() {
  return (
    <main>
      <NavigationMenu className="py-4 px-20 text-green-900 font-medium border-b-2 border-green-900 border-opacity-50" style={{maxWidth: "100%"}}>
        <NavigationMenuList className="">
          <figure className="mr-auto">
            <Image src={Logo} alt="Niger Delta Logo" />
          </figure>

          <NavigationMenuItem className="flex items-center gap-8">
          <NavigationMenuLink href="/home" className="hover:bg-transparent p-0">Home</NavigationMenuLink>
            <NavigationMenuTrigger className="hover:bg-transparent hover:p-0 p-0">Explore</NavigationMenuTrigger>
            <NavigationMenuLink href="/funding" className="hover:bg-transparent p-0">Funding</NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-transparent p-0">Reports</NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-transparent p-0">News</NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-transparent p-0">Events</NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-transparent p-0">FAQ</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex items-center gap-4 ml-auto">
            <NavigationMenuLink href="/login" className="underline hover:bg-transparent p-0">Login</NavigationMenuLink>
            <NavigationMenuLink href="/get-started" className="gradient-button w-30 text-center">
              Get Started
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  );
}
