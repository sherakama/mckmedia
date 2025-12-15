import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for McKMedia. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-48 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl bg-linear-to-r from-pink-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="space-y-12 text-gray-400 leading-relaxed">
            <p className="text-lg">
              <strong className="text-white">Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <p>
              McKMedia (“we,” “us,” or “our”) values your privacy. This Privacy Policy explains how limited information is collected and used when you visit <strong className="text-white">mckmedia.ca</strong> (the “Site”).
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">Information We Collect</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 text-xl font-medium text-pink-500">Analytics Data</h3>
                  <p>
                    We use <strong className="text-white">Google Analytics</strong> to understand how visitors use our website. Google Analytics may collect limited, aggregated information such as:
                  </p>
                  <ul className="mt-4 list-disc pl-6 space-y-2 marker:text-pink-500">
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Browser and device type</li>
                    <li>Approximate geographic region (city-level)</li>
                  </ul>
                  <p className="mt-4">
                    This information helps us improve the performance and usability of the Site. We do <strong className="text-white">not</strong> use analytics data to identify individual visitors.
                  </p>
                  <p className="mt-4">
                    Google Analytics may set cookies in your browser. You can learn more about how Google uses data here: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors">https://policies.google.com/privacy</a>
                  </p>
                  <p className="mt-4">
                    You may opt out of Google Analytics tracking by using browser settings or Google’s opt-out tools.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-medium text-pink-500">Hosting & Technical Logs</h3>
                  <p>
                    Our website is hosted on <strong className="text-white">Netlify</strong>. Like most hosting providers, Netlify may automatically collect limited technical information for operational and security purposes, such as:
                  </p>
                  <ul className="mt-4 list-disc pl-6 space-y-2 marker:text-pink-500">
                    <li>IP addresses</li>
                    <li>Request logs</li>
                    <li>Error logs</li>
                  </ul>
                  <p className="mt-4">
                    This data is used to maintain site reliability, performance, and security and is not used by us for marketing or tracking purposes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">What We Do Not Collect</h2>
              <p>We do not:</p>
              <ul className="mt-4 list-disc pl-6 space-y-2 marker:text-pink-500">
                <li>Collect personal information such as names, email addresses, or phone numbers through the Site (except when voluntarily provided via our contact form)</li>
                <li>Use advertising trackers</li>
                <li>Sell or share visitor data with third parties for marketing purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">Cookies</h2>
              <p>
                Cookies may be used by Google Analytics to collect aggregated usage data. You can control or disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">Third-Party Services</h2>
              <p>We rely on the following third-party services to operate the Site:</p>
              <ul className="mt-4 list-disc pl-6 space-y-2 marker:text-pink-500">
                <li><strong className="text-white">Google Analytics</strong> – website usage analytics</li>
                <li><strong className="text-white">Netlify</strong> – website hosting and infrastructure</li>
              </ul>
              <p className="mt-4">
                These providers process data in accordance with their own privacy policies and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">Data Retention</h2>
              <p>
                Analytics and technical data are retained only as long as necessary for their intended purpose and according to the policies of the third-party services used.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">Your Rights</h2>
              <p>
                Depending on your location, you may have rights related to your personal data, including the right to access or request deletion of certain information. For Google Analytics data, controls are available through Google&apos;s privacy tools.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">Contact</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-semibold text-white">McKMedia</p>
                <p className="mt-2">Email: <a href="mailto:shea@mckmedia.ca" className="text-pink-500 hover:text-pink-400 transition-colors">shea@mckmedia.ca</a></p>
                <p>Website: <a href="https://mckmedia.ca" className="text-pink-500 hover:text-pink-400 transition-colors">mckmedia.ca</a></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
