import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import Logo from '@/public/images/Logo.svg'

export default function LoginPage() {
  return (
    <section className="grid min-h-svh lg:grid-cols-7">
      <div className="flex flex-col items-center justify-center gap-4 col-span-2 p-6 md:p-14">
        <figure>
          <Image src={Logo} alt="Niger Delta Logo" />
        </figure>
        
          <LoginForm />
      </div>

      <div className="relative hidden bg-muted col-span-5 lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </section>
  );
}
