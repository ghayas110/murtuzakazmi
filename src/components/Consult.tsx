"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { consultMessage, doctor, services } from "@/lib/site";
import { EASE, Reveal } from "./Motion";
import { WhatsAppButton } from "./WhatsAppButton";

const topics = services.map((s) => s.title);

export function Consult() {
  const [topic, setTopic] = useState<string | undefined>(undefined);

  return (
    <section id="consult" className="bg-tint">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-14 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Book a consultation on WhatsApp
          </h2>
          <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-muted">
            Pick what you need help with and we will start the message for you.
            You can edit it before sending.
          </p>

          <fieldset className="mt-8">
            <legend className="text-sm font-semibold">
              What is the visit about? (optional)
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {topics.map((t) => {
                const selected = topic === t;
                return (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setTopic(selected ? undefined : t)}
                    className={`relative inline-flex h-11 cursor-pointer items-center rounded-full border px-4 text-sm font-medium transition-colors duration-200 active:scale-[0.98] ${
                      selected
                        ? "border-transparent text-on-navy"
                        : "border-line bg-surface text-ink hover:border-accent"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="topic-pill"
                        className="absolute inset-0 rounded-full bg-navy"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{t}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center">
          <div className="shadow-soft rounded-card border border-line bg-surface p-6 sm:p-8">
            <p className="text-sm font-semibold text-muted">
              Your message to {doctor.whatsappDisplay}
            </p>
            <div className="mt-4 min-h-24" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={topic ?? "general"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: EASE }}
                  className="text-xl leading-snug font-medium text-pretty"
                >
                  {consultMessage(topic)}
                </motion.p>
              </AnimatePresence>
            </div>
            <WhatsAppButton topic={topic} className="mt-6 w-full sm:w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              For a medical emergency, do not wait for a reply. Go to the
              nearest emergency department.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
