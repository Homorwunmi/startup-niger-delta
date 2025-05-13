'use client';

import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { usePathname } from 'next/navigation';
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

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
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
