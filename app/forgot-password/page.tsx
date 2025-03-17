'use client';
import Logo from "@/public/images/Logo.svg";
import Image from "next/image";
import Particle from "@/components/particle";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email(),
});

export default function Page() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(formSchema),
  });
  return (
    <section className="grid min-h-svh lg:grid-cols-7">
      <div className="flex flex-col items-center justify-center gap-10 col-span-2 bg-white p-6 md:p-14">
        <figure>
          <Image src={Logo} alt="Niger Delta Logo" />
        </figure>

        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Enter your registered email" />
                </FormControl>
              </FormItem>}
            />
          </form>
          <Button type="submit" className="w-full">Reset Password</Button>
        </Form>
      </div>

      <Particle />
    </section>
  );
}
