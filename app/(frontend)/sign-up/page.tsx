'use client';

import Image from 'next/image';
import Logo from 'public/images/Logo.svg';
import { SignupForm } from 'components/signup-form';
import Particle from 'components/particle';

export default function LoginPage() {
  return (
    <section className="grid min-h-svh lg:grid-cols-7">
      <div className="flex flex-col items-center justify-center gap-10 col-span-2 bg-white p-6 md:p-14">
        <figure>
          <Image src={Logo} alt="Niger Delta Logo" />
        </figure>

        <SignupForm />
      </div>

      <Particle />
    </section>
  );
}
