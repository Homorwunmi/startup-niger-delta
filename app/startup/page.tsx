// import {
//   Form,
//   FormControl,
//   // FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   // FormMessage,
// } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Logo from "@/public/images/Logo.svg";
import Image from "next/image";

export default function Page() {
  return (
    <section className="">
      <div
        className="flex items-center justify-between px-20 py-4 bg-custom-green-2"
        style={{
          backgroundImage: `url("/home/ecosystem-bg.svg")`,
          backgroundBlendMode: "overlay",
        }}
      >
        <figure className="w-40">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </figure>

        <p className="font-bold flex items-center justify-center gap-4">
          <span>Need Help</span>
          <span className="rounded-full block bg-black text-white w-4 h-4 p-3 flex items-center justify-center">
            ?
          </span>
        </p>
      </div>

      <div className="bg-custom-green-3 h-screen px-20 py-10 flex items-start gap-10">
        <div className="flex flex-col gap-3 w-[30%]">
          <h2 className="text-2xl">Startup Registration</h2>

          <ul>
            <li>Company Profile</li>
            <li>Contact Info</li>
            <li>Founder/Co-founder Profile</li>
            <li>Founder&apos;s Identification</li>
          </ul>
        </div>

        <div className="flex-1 bg-white shadow px-8 py-5 rounded-lg">
          <form className="grid grid-cols-2 gap-8 w-full">
            <div className="flex flex-col gap-2">
              <Label>Company Name</Label>
              <Input
                type="text"
                placeholder="Registered name"
                className="border-custom-green-1 focus-visible:ring-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Year of Incorporation</Label>
              <Input
                type="text"
                placeholder="Registered name"
                className="focus-visible:ring-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>RC Number</Label>
              <Input
                type="text"
                placeholder="Registered number"
                className="focus-visible:ring-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Industry</Label>
              <Input
                type="text"
                placeholder="Registered name"
                className="focus-visible:ring-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Startup Description</Label>
              <Textarea
                placeholder="Solution"
                className="h-48 focus-visible:ring-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Funding Interest</Label>
              <Input type="text" placeholder="Investment interest" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
