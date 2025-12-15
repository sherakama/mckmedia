import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-pink-500/30">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 z-50 w-full px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image
              src="/logos/logo-pink-orange.png"
              alt="MCK Media"
              width={180}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[100px] mix-blend-screen" />
        </div>

        <h1 className="mb-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          Modern Web.
          <span className="block bg-gradient-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
            Made Human.
          </span>
        </h1>

        <p className="mb-12 max-w-2xl text-xl text-gray-400 sm:text-2xl">
          We build digital experiences that sit at the intersection of modern technology and human-centered design.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Start Your Project
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why MCK Media?</h2>
            <p className="mt-4 text-gray-400">Clarity over cleverness. Craft over shortcuts.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Human-Centered",
                desc: "We don't hide behind jargon. We guide you through complexity and make the web understandable.",
              },
              {
                title: "Technically Sharp",
                desc: "Built on the latest stack (Next.js 16, Tailwind v4) for performance, accessibility, and scale.",
              },
              {
                title: "Partnership First",
                desc: "We believe in partnership over transactions. Your success is our success.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-pink-500">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="relative border-t border-white/10 bg-zinc-950 px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Our Expertise</h2>
              <p className="mt-4 max-w-xl text-gray-400">
                From AI integration to enterprise architecture, we have the skills to bring your vision to life.
              </p>
            </div>
            <Link href="/services" className="group flex items-center gap-2 text-pink-500 hover:text-pink-400">
              View all services
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "AI Integration",
              "Web Management",
              "Enterprise Architecture",
              "Ecommerce Solutions",
            ].map((service) => (
              <div key={service} className="group relative overflow-hidden rounded-xl bg-white/5 p-6 transition-colors hover:bg-white/10">
                <h3 className="font-semibold text-white">{service}</h3>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-500 to-orange-400 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
