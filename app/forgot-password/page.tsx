import Logo from "@/public/images/Logo.svg";
import Image from "next/image";
import Particle from "@/components/particle";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
              render={({ field }) => <FormItem></FormItem>}
            />
          </form>
        </Form>
      </div>

      <Particle />
    </section>
  );
}
