import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { OnboardingProvider } from './contexts/OnboardingContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const metadata: Metadata = {
  title: 'Startup Niger Delta',
  description: 'The next tech evolution...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< Updated upstream
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <OnboardingProvider>{children}</OnboardingProvider>
=======
  const pathname = usePathname();
  const showNavFooter = ['dashboard'].some((path) => pathname.includes(path));

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <OnboardingProvider>
          {showNavFooter ? (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          ) : (
            <main>{children}</main>
          )}
        </OnboardingProvider>
>>>>>>> Stashed changes
      </body>
    </html>
  );
}
