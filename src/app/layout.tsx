import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import '@/app/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mckmedia.ca'),
  title: {
    default: 'McKMedia | Digital Experiences',
    template: '%s | McKMedia',
  },
  description: 'Professional web development and digital marketing services. We build digital experiences that sit at the intersection of modern technology and human-centered design.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://mckmedia.ca',
    siteName: 'McKMedia',
    title: 'McKMedia | Digital Experiences',
    description: 'Professional web development and digital marketing services.',
    images: [
      {
        url: '/logos/logo-pink-orange.png',
        width: 1200,
        height: 630,
        alt: 'McKMedia Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'McKMedia | Digital Experiences',
    description: 'Professional web development and digital marketing services.',
    images: ['/logos/logo-pink-orange.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
