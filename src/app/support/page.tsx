import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Support - Inner Wisdom",
  description:
    "Get help with Inner Wisdom. Find answers to common questions or contact our support team.",
  openGraph: {
    title: "Support - Inner Wisdom",
    description: "Get help with Inner Wisdom astrological guidance app.",
    url: "https://innerwisdomapp.com/support",
  },
};

const supportFaqs = [
  {
    question: "How do I update my birth time?",
    answer:
      "Go to your Profile in the app, tap on 'Birth Data,' and you can edit your birth date, time, and location. Your guidance will automatically update to reflect the new information.",
  },
  {
    question: "I'm not receiving my daily guidance notifications",
    answer:
      "Make sure notifications are enabled for Inner Wisdom in your device settings. In the app, go to Settings > Notifications and ensure daily guidance notifications are turned on. Notifications are typically sent in the early morning based on your timezone.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Subscriptions are managed through your device's app store. On iOS, go to Settings > Apple ID > Subscriptions. On Android, go to Google Play Store > Subscriptions. Find Inner Wisdom and select 'Cancel Subscription.'",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Refunds are handled by Apple App Store or Google Play Store according to their policies. You can request a refund through your respective app store. For any issues, please contact us and we'll do our best to help.",
  },
  {
    question: "Why is my birth time important?",
    answer:
      "Your exact birth time determines your Ascendant (Rising Sign) and the precise positions of planets in your chart houses. Even a few minutes can shift these positions significantly, affecting the accuracy of your personalized guidance.",
  },
  {
    question: "How is the daily audio generated?",
    answer:
      "Premium subscribers receive daily audio guidance generated using advanced AI text-to-speech technology (Coqui TTS). Each audio file is created fresh daily based on your unique guidance, providing a personal touch to your morning routine.",
  },
];

export default function Support() {
  return (
    <main className="pt-20">
      <Section className="bg-cosmic-gradient">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-4xl">💫</span>
          <h1 className="font-display text-4xl font-bold text-text-primary sm:text-5xl">
            How Can We Help?
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            We&apos;re here to support your journey with Inner Wisdom
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Email Support */}
            <div className="rounded-2xl border border-gold/30 bg-surface p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient">
                <svg
                  className="h-8 w-8 text-cosmic"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text-primary">
                Email Support
              </h2>
              <p className="mt-2 text-text-secondary">
                Get in touch with our support team
              </p>
              <a
                href="mailto:support@innerwisdomapp.com"
                className="mt-4 inline-block text-lg font-medium text-gold hover:text-gold-light"
              >
                support@innerwisdomapp.com
              </a>
              <p className="mt-2 text-sm text-text-muted">
                Response within 24-48 hours
              </p>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl border border-surface-light bg-surface/50 p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-mystic/20">
                <svg
                  className="h-8 w-8 text-mystic-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text-primary">
                When to Expect a Reply
              </h2>
              <p className="mt-2 text-text-secondary">
                Our team operates during business hours
              </p>
              <div className="mt-4 space-y-2 text-sm text-text-muted">
                <p>Monday – Friday: 9 AM – 6 PM (CET)</p>
                <p>Saturday – Sunday: Limited support</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Support Topics */}
      <Section className="bg-cosmic-dark">
        <SectionHeader
          title="What Do You Need Help With?"
          description="Choose a topic or browse our frequently asked questions below"
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "👤", title: "Account & Profile", href: "#faq" },
              { icon: "💳", title: "Billing & Subscriptions", href: "#faq" },
              { icon: "🔔", title: "Notifications", href: "#faq" },
              { icon: "✨", title: "Daily Guidance", href: "#faq" },
              { icon: "🎧", title: "Audio Features", href: "#faq" },
              { icon: "🐛", title: "Report a Bug", href: "mailto:support@innerwisdomapp.com?subject=Bug%20Report" },
            ].map((topic) => (
              <a
                key={topic.title}
                href={topic.href}
                className="flex items-center gap-4 rounded-xl border border-surface-light bg-surface/50 p-4 transition-all duration-300 hover:border-gold/30 hover:bg-surface"
              >
                <span className="text-2xl">{topic.icon}</span>
                <span className="font-medium text-text-primary">{topic.title}</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-background">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find quick answers to common questions"
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {supportFaqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-surface-light bg-surface/50 transition-colors hover:bg-surface [&[open]]:bg-surface"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4">
                <span className="pr-4 font-medium text-text-primary">
                  {faq.question}
                </span>
                <svg
                  className="h-5 w-5 shrink-0 text-gold transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Additional Resources */}
      <Section className="bg-cosmic-dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
            Still Need Help?
          </h2>
          <p className="mt-4 text-text-secondary">
            Can&apos;t find what you&apos;re looking for? Our team is happy to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:support@innerwisdomapp.com"
              className="btn-primary"
            >
              Contact Support
            </a>
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </Section>

      {/* Legal Links */}
      <Section className="bg-background py-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
            <Link href="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gold">
              Terms of Service
            </Link>
            <span>•</span>
            <a
              href="mailto:support@innerwisdomapp.com?subject=Data%20Request"
              className="hover:text-gold"
            >
              Data Request
            </a>
            <span>•</span>
            <a
              href="mailto:support@innerwisdomapp.com?subject=Delete%20Account"
              className="hover:text-gold"
            >
              Delete Account
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

