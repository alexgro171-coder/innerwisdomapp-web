import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy - Inner Wisdom",
  description:
    "Learn how Inner Wisdom collects, uses, and protects your personal information. Your privacy is our priority.",
  openGraph: {
    title: "Privacy Policy - Inner Wisdom",
    description:
      "Learn how Inner Wisdom collects, uses, and protects your personal information.",
    url: "https://innerwisdomapp.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-20">
      <Section className="bg-cosmic-gradient">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-4xl">🔒</span>
          <h1 className="font-display text-4xl font-bold text-text-primary sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-text-secondary">
            Last updated: December 23, 2024
          </p>
        </div>
      </Section>

      <Section className="bg-background">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="rounded-2xl border border-gold/20 bg-surface/50 p-6 mb-8">
              <p className="text-gold font-medium mb-2">Our Commitment</p>
              <p className="text-text-secondary m-0">
                We do not sell your data. Your profile data is used exclusively to 
                personalize your astrological guidance. Your privacy is fundamental 
                to our service.
              </p>
            </div>

            <article className="space-y-8 text-text-secondary">
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  1. Information We Collect
                </h2>
                <p>
                  Inner Wisdom collects information necessary to provide personalized 
                  astrological guidance. This includes:
                </p>
                <h3 className="text-xl font-medium text-text-primary mt-6 mb-3">
                  1.1 Personal Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-text-primary">Account Information:</strong> Email address, 
                    password (encrypted), and display name
                  </li>
                  <li>
                    <strong className="text-text-primary">Birth Data:</strong> Date of birth, exact 
                    time of birth, and place of birth (used to calculate your natal chart)
                  </li>
                  <li>
                    <strong className="text-text-primary">Personal Context (Premium):</strong> Life 
                    situation, current concerns, goals, and focus areas you choose to share
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-text-primary mt-6 mb-3">
                  1.2 Usage Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>App usage patterns and feature interactions</li>
                  <li>Device information (device type, operating system)</li>
                  <li>Log data (access times, pages viewed, app crashes)</li>
                </ul>

                <h3 className="text-xl font-medium text-text-primary mt-6 mb-3">
                  1.3 Payment Information
                </h3>
                <p>
                  Payment processing is handled by Apple App Store and Google Play Store. 
                  We do not store your credit card or payment details directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  2. How We Use Your Information
                </h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-text-primary">Provide Personalized Guidance:</strong> Your 
                    birth data is used to calculate your natal chart and generate daily 
                    guidance based on current planetary transits
                  </li>
                  <li>
                    <strong className="text-text-primary">Enhance Personalization:</strong> Your personal 
                    context (Premium) helps us tailor guidance to your specific life situation
                  </li>
                  <li>
                    <strong className="text-text-primary">Generate Audio Content:</strong> For Premium 
                    subscribers, we generate daily audio guidance using AI text-to-speech technology
                  </li>
                  <li>
                    <strong className="text-text-primary">Improve Our Service:</strong> Usage data helps 
                    us understand how to make Inner Wisdom better
                  </li>
                  <li>
                    <strong className="text-text-primary">Send Notifications:</strong> Daily guidance 
                    notifications and important service updates
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  3. Data Sharing and Disclosure
                </h2>
                <div className="rounded-xl border border-gold/20 bg-gold/5 p-4 mb-4">
                  <p className="text-gold font-medium m-0">
                    We do not sell, rent, or trade your personal information to third parties.
                  </p>
                </div>
                <p>We may share data only in these limited circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-text-primary">Service Providers:</strong> Trusted third 
                    parties who help us operate our service (hosting, analytics, AI processing) 
                    under strict confidentiality agreements
                  </li>
                  <li>
                    <strong className="text-text-primary">Legal Requirements:</strong> When required 
                    by law or to protect our legal rights
                  </li>
                  <li>
                    <strong className="text-text-primary">Business Transfer:</strong> In connection 
                    with a merger, acquisition, or sale of assets (with user notification)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  4. Data Security
                </h2>
                <p>
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption in transit (HTTPS/TLS) and at rest</li>
                  <li>Secure password hashing using bcrypt</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication for our systems</li>
                  <li>Secure cloud infrastructure with redundant backups</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  5. Data Retention
                </h2>
                <p>
                  We retain your personal information for as long as your account is 
                  active or as needed to provide services. Upon account deletion:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal data is deleted within 30 days</li>
                  <li>Anonymized usage data may be retained for analytics</li>
                  <li>Backup copies are purged within 90 days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  6. Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-text-primary">Access:</strong> Request a copy of 
                    your personal data
                  </li>
                  <li>
                    <strong className="text-text-primary">Correction:</strong> Update or correct 
                    your information
                  </li>
                  <li>
                    <strong className="text-text-primary">Deletion:</strong> Delete your account 
                    and associated data
                  </li>
                  <li>
                    <strong className="text-text-primary">Portability:</strong> Export your data 
                    in a standard format
                  </li>
                  <li>
                    <strong className="text-text-primary">Opt-out:</strong> Disable non-essential 
                    notifications and data collection
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:support@innerwisdomapp.com" className="text-gold hover:text-gold-light">
                    support@innerwisdomapp.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  7. Third-Party Services
                </h2>
                <p>Inner Wisdom uses the following third-party services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-text-primary">Cloud Hosting:</strong> For secure 
                    data storage and processing
                  </li>
                  <li>
                    <strong className="text-text-primary">AI Services:</strong> For generating 
                    personalized guidance and audio content
                  </li>
                  <li>
                    <strong className="text-text-primary">Astrology API:</strong> For accurate 
                    planetary calculations
                  </li>
                  <li>
                    <strong className="text-text-primary">Push Notifications:</strong> Firebase 
                    Cloud Messaging for daily notifications
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  8. Children&apos;s Privacy
                </h2>
                <p>
                  Inner Wisdom is not intended for users under 13 years of age. We do 
                  not knowingly collect personal information from children under 13. If 
                  you believe a child has provided us with personal information, please 
                  contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  9. International Data Transfers
                </h2>
                <p>
                  Your information may be transferred to and processed in countries other 
                  than your country of residence. We ensure appropriate safeguards are in 
                  place to protect your data in accordance with applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  10. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you 
                  of any significant changes by posting the new policy on this page and 
                  updating the &quot;Last updated&quot; date. We encourage you to review this 
                  policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  11. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy or our data 
                  practices, please contact us:
                </p>
                <div className="mt-4 rounded-xl border border-surface-light bg-surface p-6">
                  <p className="font-medium text-text-primary mb-2">Inner Wisdom App</p>
                  <p className="text-text-secondary">
                    Email:{" "}
                    <a href="mailto:support@innerwisdomapp.com" className="text-gold hover:text-gold-light">
                      support@innerwisdomapp.com
                    </a>
                  </p>
                </div>
              </section>
            </article>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="text-gold hover:text-gold-light">
              ← Back to Home
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}

