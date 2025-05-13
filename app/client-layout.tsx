'use client';

import React from 'react';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showNavFooter = [
    'dashboard',
    'login',
    'sign-up',
    'forgot-password',
    'reset-password',
    'onboarding',
  ].some((path) => pathname.includes(path));

  return (
    <main>
      {!showNavFooter ? (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      ) : (
        <main>{children}</main>
      )}
    </main>
  );
}
