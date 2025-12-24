import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service - Inner Wisdom",
  description:
    "Read the Terms of Service for Inner Wisdom. Understand your rights and responsibilities when using our astrological guidance app.",
  openGraph: {
    title: "Terms of Service - Inner Wisdom",
    description:
      "Read the Terms of Service for Inner Wisdom astrological guidance app.",
    url: "https://innerwisdomapp.com/terms",
  },
};

export default function TermsOfService() {
  return (
    <main className="pt-20">
      <Section className="bg-cosmic-gradient">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-4xl">📜</span>
          <h1 className="font-display text-4xl font-bold text-text-primary sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-text-secondary">
            Last updated: December 23, 2024
          </p>
        </div>
      </Section>

      <Section className="bg-background">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="rounded-2xl border border-mystic/20 bg-surface/50 p-6 mb-8">
              <p className="text-mystic-light font-medium mb-2">Agreement</p>
              <p className="text-text-secondary m-0">
                By downloading, accessing, or using Inner Wisdom, you agree to be 
                bound by these Terms of Service. If you do not agree, please do not 
                use our service.
              </p>
            </div>

            <article className="space-y-8 text-text-secondary">
              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your use of the Inner Wisdom 
                  mobile application and related services (collectively, the &quot;Service&quot;) 
                  provided by Inner Wisdom Hub FZO (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                </p>
                <p className="mt-4">
                  By creating an account or using the Service, you represent that you are 
                  at least 13 years old and have the legal capacity to enter into these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  2. Description of Service
                </h2>
                <p>
                  Inner Wisdom is a mobile application that provides personalized daily 
                  astrological guidance based on your natal chart and current planetary 
                  transits. The Service includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Personalized daily guidance text</li>
                  <li>Focus of the day insights</li>
                  <li>Multiple life area categories</li>
                  <li>Premium features including deep personalization and audio guidance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  3. Account Registration
                </h2>
                <p>To use Inner Wisdom, you must:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Create an account with accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate accounts that violate 
                  these Terms or engage in fraudulent activity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  4. Subscription and Billing
                </h2>
                <h3 className="text-xl font-medium text-text-primary mt-6 mb-3">
                  4.1 Subscription Plans
                </h3>
                <p>
                  Inner Wisdom offers Standard and Premium subscription plans with 
                  monthly and annual billing options. Current pricing is displayed 
                  in the app and on our website.
                </p>

                <h3 className="text-xl font-medium text-text-primary mt-6 mb-3">
                  4.2 Free Trial
                </h3>
                <p>
                  We offer a 3-day free trial for Premium features. If you do not 
                  cancel before the trial ends, you will be charged for the selected 
                  subscription plan.
                </p>

                <h3 className="text-xl font-medium text-text-primary mt-6 mb-3">
                  4.3 Billing
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Subscriptions are billed through Apple App Store or Google Play Store
                  </li>
                  <li>Charges are processed at the beginning of each billing period</li>
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Price changes will be notified in advance</li>
                </ul>

                <h3 className="text-xl font-medium text-text-primary mt-6 mb-3">
                  4.4 Cancellation and Refunds
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You may cancel your subscription at any time through your device&apos;s 
                    app store settings
                  </li>
                  <li>
                    Cancellation takes effect at the end of the current billing period
                  </li>
                  <li>
                    Refunds are handled according to Apple App Store or Google Play 
                    Store policies
                  </li>
                  <li>No partial refunds for unused portions of a subscription period</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  5. User Conduct
                </h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Use the Service for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Service</li>
                  <li>Reverse engineer, decompile, or disassemble the app</li>
                  <li>Share your account credentials with others</li>
                  <li>Use automated systems to access the Service</li>
                  <li>Resell or redistribute our content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  6. Intellectual Property
                </h2>
                <p>
                  All content, features, and functionality of Inner Wisdom—including 
                  but not limited to text, graphics, logos, icons, images, audio, 
                  software, and the underlying code—are the exclusive property of 
                  Inner Wisdom Hub FZO or its licensors and are protected by 
                  international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="mt-4">
                  You are granted a limited, non-exclusive, non-transferable license 
                  to use the Service for personal, non-commercial purposes only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  7. Disclaimer of Warranties
                </h2>
                <div className="rounded-xl border border-gold/20 bg-gold/5 p-4 mb-4">
                  <p className="text-gold font-medium m-0">
                    Important: Astrological guidance is for entertainment and 
                    self-reflection purposes only.
                  </p>
                </div>
                <p>
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT 
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT 
                  NOT LIMITED TO:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Implied warranties of merchantability or fitness for a particular purpose</li>
                  <li>Accuracy, reliability, or completeness of any guidance or content</li>
                  <li>Uninterrupted or error-free operation of the Service</li>
                  <li>Compatibility with all devices or operating systems</li>
                </ul>
                <p className="mt-4">
                  Inner Wisdom does not provide medical, financial, legal, or 
                  professional advice. Always consult qualified professionals for 
                  important life decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  8. Limitation of Liability
                </h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOUR COMPANY NAME LTD. 
                  AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE 
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR 
                  PUNITIVE DAMAGES ARISING FROM:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Your use or inability to use the Service</li>
                  <li>Any content or guidance provided through the Service</li>
                  <li>Unauthorized access to your data</li>
                  <li>Any third-party conduct or content</li>
                </ul>
                <p className="mt-4">
                  Our total liability shall not exceed the amount you paid for the 
                  Service in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  9. Indemnification
                </h2>
                <p>
                  You agree to indemnify and hold harmless Inner Wisdom Hub FZO 
                  from any claims, damages, losses, or expenses (including reasonable 
                  attorneys&apos; fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Your misuse of the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  10. Modifications to Service and Terms
                </h2>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part 
                  of the Service at any time. We may also update these Terms from 
                  time to time. Material changes will be communicated through the 
                  app or email.
                </p>
                <p className="mt-4">
                  Continued use of the Service after changes constitutes acceptance 
                  of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  11. Termination
                </h2>
                <p>
                  We may terminate or suspend your access to the Service immediately, 
                  without prior notice, for any reason, including breach of these Terms.
                </p>
                <p className="mt-4">
                  Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Your right to use the Service ceases immediately</li>
                  <li>You may request deletion of your data per our Privacy Policy</li>
                  <li>Provisions that should survive termination will remain in effect</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  12. Governing Law and Disputes
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with 
                  the laws of [Your Jurisdiction], without regard to conflict of law 
                  principles.
                </p>
                <p className="mt-4">
                  Any disputes arising from these Terms or the Service shall be 
                  resolved through binding arbitration, except where prohibited by 
                  law. You waive any right to participate in class action lawsuits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  13. Severability
                </h2>
                <p>
                  If any provision of these Terms is found to be unenforceable, the 
                  remaining provisions will continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  14. Entire Agreement
                </h2>
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire 
                  agreement between you and Inner Wisdom Hub FZO regarding the Service 
                  and supersede any prior agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  15. Contact Information
                </h2>
                <p>
                  For questions about these Terms, please contact us:
                </p>
                <div className="mt-4 rounded-xl border border-surface-light bg-surface p-6">
                  <p className="font-medium text-text-primary mb-2">Inner Wisdom Hub FZO</p>
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

          <div className="mt-12 flex justify-center gap-6">
            <Link href="/privacy" className="text-gold hover:text-gold-light">
              Privacy Policy
            </Link>
            <span className="text-text-muted">•</span>
            <Link href="/" className="text-gold hover:text-gold-light">
              Back to Home
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}

