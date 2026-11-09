"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { doctor } from "@/lib/site";
import { EASE } from "./Motion";
import { WhatsAppButton } from "./WhatsAppButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid items-center gap-10 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:py-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.14em] text-accent"
          >
            {doctor.title}, {doctor.credentials}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            One family doctor for every age and stage.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted"
          >
            Your first point of care for a wide range of health problems, from
            newborns to the elderly.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <WhatsAppButton />
            <a
              href="#services"
              className="inline-flex h-11 items-center font-semibold text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors duration-200 hover:decoration-accent"
            >
              See what is treated
            </a>
          </motion.div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="shadow-soft overflow-hidden rounded-card border border-line bg-tint">
            <Image
              src="/dr-murtaza-kazmi.jpg"
              alt="Dr Murtaza Kazmi in his clinic, wearing a stethoscope"
              width={335}
              height={266}
              priority
              sizes="(min-width: 768px) 440px, 90vw"
              className="aspect-[5/4] w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-4 flex flex-col gap-0.5 text-sm">
            <span className="font-semibold">{doctor.name}</span>
            <span className="text-muted">
              {doctor.clinic}, {doctor.hospital}
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
