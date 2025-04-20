import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
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
        <OnboardingProvider>{children}</OnboardingProvider>
      </body>
    </html>
  );
}
