'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { usePathname } from 'next/navigation';
import { Toaster } from '@/components/ui/sonner';
import React from 'react';
import { OnboardingProvider } from './contexts/OnboardingContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // const showNavFooter = ['dashboard'].some((path) => pathname.includes(path));

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/Logo.svg"
          type="image/svg+xml"
          sizes="400*400"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Toaster position="top-right" richColors />
        <OnboardingProvider>
          {pathname.includes('dashboard') ||
          pathname.includes('onboarding') ||
          pathname.includes('sign-up') ||
          pathname.includes('login') ? (
            <main>{children}</main>
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </OnboardingProvider>
      </body>
    </html>
  );
}
