"use client";

import { useState } from "react";

const plans = [
  {
    name: "Standard",
    description: "Essential daily guidance",
    monthlyPrice: 3,
    yearlyPrice: 30,
    features: [
      { text: "Daily text guidance", included: true },
      { text: "Focus of the day", included: true },
      { text: "6 life area categories", included: true },
      { text: "Basic natal chart insights", included: true },
      { text: "Deep personalization", included: false },
      { text: "Daily audio guidance", included: false },
    ],
    popular: false,
  },
  {
    name: "Premium",
    description: "Complete personalized experience",
    monthlyPrice: 4,
    yearlyPrice: 36,
    features: [
      { text: "Everything in Standard", included: true },
      { text: "Deep personalization", included: true },
      { text: "Personal context integration", included: true },
      { text: "Daily audio (MP3)", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced transit analysis", included: true },
    ],
    popular: true,
  },
];

export function PricingCards() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div>
      {/* Billing Toggle */}
      <div className="mb-10 flex items-center justify-center gap-4">
        <span
          className={`text-sm font-medium ${!isYearly ? "text-text-primary" : "text-text-muted"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative h-7 w-14 rounded-full transition-colors ${
            isYearly ? "bg-gold" : "bg-surface-light"
          }`}
          aria-label="Toggle billing period"
        >
          <span
            className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform ${
              isYearly ? "translate-x-7" : ""
            }`}
          />
        </button>
        <span
          className={`text-sm font-medium ${isYearly ? "text-text-primary" : "text-text-muted"}`}
        >
          Yearly
          <span className="ml-2 rounded-full bg-gold/20 px-2 py-0.5 text-xs text-gold">
            Save 17%
          </span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid gap-8 lg:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-8 transition-all duration-300 ${
              plan.popular
                ? "border-gold bg-surface shadow-xl shadow-gold/10"
                : "border-surface-light bg-surface/50 hover:border-surface-light hover:bg-surface"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-gold px-4 py-1 text-xs font-semibold text-cosmic">
                  MOST POPULAR
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-text-primary">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                {plan.description}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-text-primary">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-text-muted">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
              {isYearly && (
                <p className="mt-1 text-sm text-text-muted">
                  ${(plan.yearlyPrice / 12).toFixed(2)}/month, billed annually
                </p>
              )}
            </div>

            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-text-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <span
                    className={
                      feature.included ? "text-text-primary" : "text-text-muted"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full rounded-xl py-3 font-semibold transition-all ${
                plan.popular
                  ? "bg-gold text-cosmic hover:bg-gold-light"
                  : "border border-gold/50 text-gold hover:bg-gold/10"
              }`}
            >
              {plan.popular ? "Start 3-Day Free Trial" : "Get Started"}
            </button>

            {plan.popular && (
              <p className="mt-3 text-center text-xs text-text-muted">
                3-day Premium free trial • Cancel anytime
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

