"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does Inner Wisdom create personalized guidance?",
    answer:
      "Inner Wisdom uses your exact birth date, time, and location to calculate your unique natal chart. We then analyze the current planetary transits in relation to your chart to provide daily guidance that's specifically relevant to you.",
  },
  {
    question: "What's the difference between Standard and Premium?",
    answer:
      "Standard gives you daily text guidance and focus of the day based on your natal chart. Premium adds deep personalization using your personal context (life situation, goals, concerns), plus a daily audio version of your guidance in MP3 format.",
  },
  {
    question: "How does the daily audio feature work?",
    answer:
      "Premium subscribers receive a personalized audio version of their daily guidance, generated fresh each day. It's like having your personal astrologer speak directly to you every morning. The audio is available as an MP3 that you can listen to anytime.",
  },
  {
    question: "Is my birth data and personal information secure?",
    answer:
      "Absolutely. We take privacy seriously. Your birth data and personal context are used solely to personalize your guidance. We do not sell your data to third parties. Read our Privacy Policy for complete details.",
  },
  {
    question: "Can I try Premium before subscribing?",
    answer:
      "Yes! We offer a 3-day free trial for Premium. You'll have full access to all Premium features including personalized guidance and daily audio. Cancel anytime during the trial if it's not for you.",
  },
  {
    question: "What life areas does Inner Wisdom cover?",
    answer:
      "We provide guidance across six key life areas: Health & Energy, Career & Job, Business Decisions, Money, Love & Relationships, and Partnerships & Growth. You can set your daily focus to prioritize guidance in areas that matter most to you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-surface-light bg-surface/50 transition-colors hover:bg-surface"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="pr-4 font-medium text-text-primary">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-gold transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
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
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-4 text-text-secondary">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

