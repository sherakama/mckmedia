import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | MCK Media',
  description: 'Get in touch with MCK Media for your web development and digital strategy needs.',
};
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-48 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="mb-12 text-xl text-gray-400">
                Ready to start your next project? We&apos;d love to hear from you. Fill out the form or reach out directly.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white">Contact Info</h3>
                  <div className="mt-4 space-y-4 text-gray-400">
                    <p className="flex items-center gap-3">
                      <span className="text-pink-500">Phone:</span>
                      <a href="tel:+17788399132" className="hover:text-white transition-colors">
                        (778) 839-9132
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-pink-500">Email:</span>
                      <a href="mailto:shea@mckmedia.ca" className="hover:text-white transition-colors">
                        shea@mckmedia.ca
                      </a>
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <h3 className="mb-2 text-lg font-semibold text-white">Office Hours</h3>
                  <p className="text-gray-400">
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM PT
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 sm:p-12 backdrop-blur-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
