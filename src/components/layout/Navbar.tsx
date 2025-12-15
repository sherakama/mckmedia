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
        <div className="flex items-center gap-4">
          {[
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/10 to-orange-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
