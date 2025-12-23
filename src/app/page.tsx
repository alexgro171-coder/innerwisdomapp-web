import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { PricingCards } from "@/components/PricingCards";
import { FAQ } from "@/components/FAQ";

const howItWorks = [
  {
    step: "01",
    title: "Create your natal profile",
    description:
      "Enter your birth date, exact time, and location. We calculate your unique natal chart with planetary positions.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Set your daily focus",
    description:
      "Choose which life areas matter most to you today. Share your current concerns for deeper personalization.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Receive today's guidance",
    description:
      "Get personalized daily insights aligned with current planetary transits and your natal chart.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const categories = [
  { name: "Health & Energy", icon: "💪", description: "Physical vitality and wellness insights" },
  { name: "Career & Job", icon: "💼", description: "Professional growth and opportunities" },
  { name: "Business Decisions", icon: "📊", description: "Strategic timing for important choices" },
  { name: "Money", icon: "💰", description: "Financial flow and abundance guidance" },
  { name: "Love & Relationships", icon: "💕", description: "Connection and emotional harmony" },
  { name: "Partnerships & Growth", icon: "🤝", description: "Collaborations and personal evolution" },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-cosmic-gradient" />
        <div className="stars-bg absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        
        {/* Decorative elements */}
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-mystic/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-float">
            <span className="mb-6 inline-block text-6xl">✦</span>
          </div>
          
          <h1 className="font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Your Personal
            <span className="block gradient-text">Daily Guidance</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl">
            Personal daily guidance, aligned to your natal chart and today&apos;s transits.
            Discover what the stars reveal for your unique journey.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/#pricing" className="btn-primary text-lg">
              Start Free Trial
            </Link>
            <Link href="/support" className="btn-secondary">
              Contact Us
            </Link>
          </div>

          <p className="mt-6 text-sm text-text-muted">
            Available on iOS & Android • 3-day Premium free trial
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="h-6 w-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <Section id="how-it-works" className="bg-background">
        <SectionHeader
          badge="Simple Process"
          title="How It Works"
          description="Get started in minutes and receive your first personalized guidance today."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {howItWorks.map((item) => (
            <div
              key={item.step}
              className="group relative rounded-2xl border border-surface-light bg-surface/50 p-8 transition-all duration-300 hover:border-gold/30 hover:bg-surface"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-cosmic">
                {item.icon}
              </div>
              <span className="absolute right-6 top-6 font-display text-4xl font-bold text-surface-light">
                {item.step}
              </span>
              <h3 className="mb-2 text-xl font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Daily Guidance Categories */}
      <Section className="bg-cosmic-dark">
        <SectionHeader
          badge="Life Areas"
          title="Daily Guidance Categories"
          description="Receive insights tailored to the areas of life that matter most to you."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-start gap-4 rounded-xl border border-surface-light/50 bg-surface/30 p-5 transition-all duration-300 hover:border-gold/30 hover:bg-surface/50"
            >
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h3 className="font-semibold text-text-primary">{category.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Focus of the Day */}
      <Section className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-mystic/20 px-4 py-1.5 text-sm font-medium text-mystic-light">
              Daily Feature
            </span>
            <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Focus of the Day
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Each morning, receive a focused theme based on the day&apos;s planetary alignments 
              and your natal chart. Know where to direct your energy for maximum benefit.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Personalized daily themes",
                "Optimal timing suggestions",
                "Energy alignment tips",
                "Actionable insights",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-primary">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-mystic/20 blur-3xl" />
            <div className="relative rounded-3xl border border-surface-light bg-surface p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-text-muted">Today&apos;s Focus</span>
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gold">
                Creative Expression
              </h3>
              <p className="text-text-secondary">
                Venus trines your natal Sun today, making it an ideal time for creative 
                projects and self-expression. Your charm is enhanced—use it wisely.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs text-gold">Venus ∆ Sun</span>
                <span className="rounded-full bg-mystic/10 px-3 py-1 text-xs text-mystic-light">Creativity</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-cosmic-dark">
        <SectionHeader
          badge="Pricing"
          title="Choose Your Journey"
          description="Start with a 3-day Premium free trial. Cancel anytime."
        />
        <PricingCards />
      </Section>

      {/* Audio Premium Feature */}
      <Section className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gold/10 blur-3xl" />
              <div className="relative rounded-3xl border border-gold/30 bg-surface p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient">
                    <svg className="h-8 w-8 text-cosmic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-gold">Premium Feature</span>
                    <h3 className="text-xl font-semibold text-text-primary">Daily Audio Guidance</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-xl bg-surface-light/50 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-cosmic">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 h-2 w-full rounded-full bg-surface-light">
                        <div className="h-2 w-2/3 rounded-full bg-gold" />
                      </div>
                      <div className="flex justify-between text-xs text-text-muted">
                        <span>2:34</span>
                        <span>3:45</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Your guidance for December 23, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-medium text-gold">
              Premium Only
            </span>
            <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Listen to Your Daily Guidance
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Premium subscribers receive a fresh audio version of their personalized 
              guidance every day. Generated using advanced AI voice technology, it&apos;s 
              like having your personal astrologer speak directly to you.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Fresh MP3 generated daily",
                "Natural AI-powered voice",
                "Listen anytime, anywhere",
                "Download for offline access",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-primary">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/#pricing" className="btn-primary mt-8 inline-flex">
              Try Premium Free
            </Link>
          </div>
        </div>
      </Section>

      {/* Privacy & Trust */}
      <Section className="bg-cosmic-dark">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-4xl">🔒</span>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            Your Privacy Matters
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            We take your privacy seriously. Your birth data and personal context are 
            used solely to personalize your guidance.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-surface-light bg-surface/50 p-6">
              <svg className="mx-auto mb-3 h-8 w-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-semibold text-text-primary">We Don&apos;t Sell Your Data</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Your information stays with us. Period.
              </p>
            </div>
            <div className="rounded-xl border border-surface-light bg-surface/50 p-6">
              <svg className="mx-auto mb-3 h-8 w-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="font-semibold text-text-primary">Secure & Encrypted</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Your data is protected with modern encryption.
              </p>
            </div>
          </div>
          <Link href="/privacy" className="mt-8 inline-flex items-center gap-2 text-gold hover:text-gold-light">
            Read our Privacy Policy
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-background">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Got questions? We've got answers."
        />
        <FAQ />
      </Section>

      {/* Final CTA */}
      <Section className="bg-cosmic-gradient relative overflow-hidden">
        <div className="stars-bg absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block animate-float text-5xl">✦</span>
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Begin Your Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
            Discover what the stars have in store for you. Get personalized 
            guidance aligned to your unique natal chart.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/#pricing" className="btn-primary text-lg">
              Start 3-Day Free Trial
            </Link>
            <Link href="/support" className="btn-secondary">
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
