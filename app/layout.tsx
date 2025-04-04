import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from '@/app/Providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jobify Dev',
  description: 'Job application tracking system for job hunters',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <Providers>
          <body className={inter.className}>{children}</body>
        </Providers>
      </html>
    </ClerkProvider>
  );
}
