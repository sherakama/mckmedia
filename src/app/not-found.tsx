import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404: Page Not Found',
  description: 'This page has vanished into the void.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[80px]" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[60px] mix-blend-screen" />

        <h1 className="relative text-9xl font-bold tracking-tighter text-white/10 sm:text-[12rem]">
          404
        </h1>
      </div>

      <div className="relative z-10 -mt-12 space-y-6">
        <h2 className="text-3xl font-bold sm:text-4xl bg-linear-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
          Page Not Found
        </h2>

        <p className="mx-auto max-w-md text-lg text-gray-400">
          Oops! It seems this page has gone on a digital sabbatical.
          It might be hiding, or maybe it never existed in the first place.
        </p>

        <div className="pt-4">
          <Button href="/">
            Return to Reality
          </Button>
        </div>
      </div>
    </main>
  );
}
