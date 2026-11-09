"use client";

import { motion } from "motion/react";
import { services } from "@/lib/site";
import { EASE, Reveal } from "./Motion";

// The first two tiles are wide and tinted so the grid has rhythm: 2 wide + 8 regular = 10 services.
const tone = [
  "bg-navy text-on-navy border-transparent",
  "bg-tint text-ink border-transparent",
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What family medicine deals with
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">
          Ten areas of care, for every member of the family.
        </p>
      </Reveal>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const featured = i < 2;
          const Icon = s.icon;
          return (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06, ease: EASE }}
              whileHover={{ y: -4 }}
              className={`flex flex-col rounded-card border p-6 ${
                featured
                  ? `${tone[i]} lg:col-span-2 sm:min-h-44 sm:justify-between`
                  : "border-line bg-surface"
              }`}
            >
              <Icon
                size={featured ? 36 : 28}
                weight="duotone"
                aria-hidden
                className={i === 0 ? "text-on-navy" : "text-accent"}
              />
              <div className="mt-5">
                <h3
                  className={`font-semibold tracking-tight ${
                    featured ? "text-2xl" : "text-lg"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-1 leading-snug ${
                    i === 0 ? "text-on-navy-muted" : "text-muted"
                  }`}
                >
                  {s.detail}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
