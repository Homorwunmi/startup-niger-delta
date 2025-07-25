import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppSidebar } from 'components/dashboard-sidebar';
import React from 'react';

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
        <main className="flex items-stretch">
          <AppSidebar />
          <section className="flex-1">{children}</section>
        </main>
      </body>
    </html>
  );
}
