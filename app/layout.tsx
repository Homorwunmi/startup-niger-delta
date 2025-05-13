import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { OnboardingProvider } from './contexts/OnboardingContext';
import ClientLayout from './client-layout';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <OnboardingProvider>
          <ClientLayout>{children}</ClientLayout>
        </OnboardingProvider>
      </body>
    </html>
  );
}
