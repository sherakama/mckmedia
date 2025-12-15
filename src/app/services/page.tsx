import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Expert web development, AI integration, and enterprise architecture services. From AI integration to enterprise architecture, we build the web of tomorrow.',
};

const services = [
  {
    title: 'AI Use & Integration',
    description: 'Leverage the power of artificial intelligence to streamline your business operations and enhance user experiences. We help you identify practical AI applications that deliver real value.',
  },
  {
    title: 'Research',
    description: 'Data-driven insights to guide your digital strategy. We analyze your market, audience, and competitors to ensure your web presence is built on a solid foundation.',
  },
  {
    title: 'Web Management',
    description: 'Take over your existing site and make it better. We provide ongoing maintenance, performance optimization, and security updates so you can focus on your business.',
  },
  {
    title: 'Platform & Enterprise Architecture',
    description: 'Scalable solutions for when you want to go big. We design and build robust architectures that can handle high traffic and complex business logic.',
  },
  {
    title: 'Ecommerce',
    description: 'Create seamless shopping experiences that convert. From custom storefronts to platform integrations, we build ecommerce solutions that drive sales.',
  },
  {
    title: 'CMS Solutions',
    description: 'Headless and decoupled CMS implementations that give you the freedom to manage content your way. We specialize in Storyblok, Contentful, and Sanity.',
  },
  {
    title: 'Composable Architecture',
    description: 'Future-proof your stack with composable architecture. We build modular systems that allow you to swap out components as your needs evolve.',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-48 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-16 max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-gray-400">
                Comprehensive digital solutions tailored to your business needs. From AI integration to enterprise architecture, we build the web of tomorrow.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="absolute inset-0 -z-10 bg-linear-to-br from-pink-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={services.length * 0.1}>
              <Link
                href="/contact"
                className="group relative flex h-full flex-col items-start justify-center overflow-hidden rounded-2xl bg-linear-to-br from-pink-500 to-orange-400 p-8 text-white transition-transform hover:scale-[1.01]"
              >
                <h3 className="mb-2 text-2xl font-bold">Ready to start?</h3>
                <p className="mb-6 text-white/90">
                  Let&apos;s turn your vision into reality. Reach out today.
                </p>
                <div className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 font-semibold backdrop-blur-sm transition-colors group-hover:bg-white/30">
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
