import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-gray-400 sm:flex-row">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Image
              src="/logos/just-the-logo-pink-orange.png"
              alt="McKMedia"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="font-bold tracking-wide text-white">McKMedia</span>
          </Link>
          <span className="hidden h-4 w-px bg-white/10 sm:block" />
          <p className="hidden sm:block">Modern Web. Made Human.</p>
        </div>

        <p className="sm:hidden">Modern Web. Made Human.</p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <p>&copy; {new Date().getFullYear()} McKMedia. All rights reserved.</p>
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
