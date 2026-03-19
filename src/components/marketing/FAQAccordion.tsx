"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="marketing-card overflow-hidden rounded-[22px]">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="border-b border-[var(--mk-border)] last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
            >
              <span className="text-base font-medium text-[var(--mk-text)]">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-[var(--mk-text-muted)] transition ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open ? (
              <div className="px-6 pb-6 sm:px-8">
                <p className="max-w-3xl text-sm leading-7 text-[var(--mk-text-soft)]">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
