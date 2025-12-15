import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image
            src="/logos/just-the-logo-pink-orange.png"
            alt="MCK Media"
            width={80}
            height={80}
            priority
            className="h-20 w-auto"
          />
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium text-white">
          <Link
            href="/services"
            className="transition-colors hover:text-pink-500"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-pink-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
