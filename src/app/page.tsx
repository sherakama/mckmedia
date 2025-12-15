import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: 'McKMedia | Modern Web. Made Human.',
  description: 'We build digital experiences that sit at the intersection of modern technology and human-centered design. Clarity over cleverness. Craft over shortcuts.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-pink-500/30">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[100px] mix-blend-screen" />
        </div>

        <FadeIn>
          <h1 className="mb-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Modern Web.
            <span className="block bg-linear-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Made Human.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mb-12 max-w-2xl text-xl text-gray-400 sm:text-2xl">
            We build digital experiences that sit at the intersection of modern technology and human-centered design.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">
              Start Your Project
            </Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* Differentiators Section */}
      <section className="px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Why McKMedia?</h2>
              <p className="mt-4 text-gray-400">Clarity over cleverness. Craft over shortcuts.</p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Human-Centered",
                desc: "We don't hide behind jargon. We guide you through complexity and make the web understandable.",
              },
              {
                title: "Technically Sharp",
                desc: "Built on the latest stacks for performance, accessibility, and scale.",
              },
              {
                title: "Partnership First",
                desc: "We believe in partnership over transactions. Your success is our success.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                  <h3 className="mb-4 text-xl font-semibold text-pink-500">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="relative border-t border-white/10 bg-zinc-950 px-6 py-32 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
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
          </FadeIn>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "AI Integration",
              "Web Management",
              "Enterprise Architecture",
              "Ecommerce Solutions",
            ].map((service, index) => (
              <FadeIn key={service} delay={index * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-xl bg-white/5 p-6 transition-colors hover:bg-white/10">
                  <h3 className="font-semibold text-white">{service}</h3>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-pink-500 to-orange-400 transition-all duration-300 group-hover:w-full" />
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.4} className="sm:col-span-2 lg:col-span-2">
              <Link
                href="/contact"
                className="group relative flex h-full flex-col items-start justify-center overflow-hidden rounded-xl bg-linear-to-br from-pink-500 to-orange-400 p-8 text-white transition-transform hover:scale-[1.01]"
              >
                <h3 className="text-2xl font-bold">Have a project in mind?</h3>
                <p className="mt-2 max-w-md text-white/90">
                  Let&apos;s collaborate to build a digital experience that matters.
                </p>
                <div className="mt-6 flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 font-semibold backdrop-blur-sm transition-colors group-hover:bg-white/30">
                  Get in Touch <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
