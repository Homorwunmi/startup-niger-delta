import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { OnboardingProvider } from './contexts/OnboardingContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Startup Niger Delta',
  description: 'The next tech evolution...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <OnboardingProvider>
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        </OnboardingProvider>
      </body>
    </html>
  );
}
