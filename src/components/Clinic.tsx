"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Clock, MapPin } from "@phosphor-icons/react";
import { doctor, mapsUrl } from "@/lib/site";
import { EASE, Reveal } from "./Motion";

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const fullDay: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

export function Clinic() {
  return (
    <section id="clinic" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Clinic hours and location
        </h2>
      </Reveal>

      <div className="mt-10 border-t border-line pt-10">
        <div className="flex items-center gap-3">
          <Clock size={26} weight="duotone" className="text-accent" aria-hidden />
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {doctor.hours}
          </p>
        </div>

        <ol className="mt-6 grid grid-cols-7 gap-1.5 sm:gap-3">
          {week.map((d, i) => {
            const open = doctor.days.includes(d);
            return (
              <motion.li
                key={d}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className={`flex flex-col items-center gap-1 rounded-card py-4 text-center sm:py-6 ${
                  open
                    ? "bg-navy text-on-navy"
                    : "border border-line text-muted"
                }`}
              >
                <span className="text-sm font-semibold sm:text-lg" aria-hidden>
                  {d}
                </span>
                <span className="sr-only">
                  {fullDay[d]}: {open ? `open ${doctor.hours}` : "closed"}
                </span>
                <span
                  className={`hidden text-xs sm:block ${
                    open ? "text-on-navy-muted" : ""
                  }`}
                  aria-hidden
                >
                  {open ? "Open" : "Closed"}
                </span>
              </motion.li>
            );
          })}
        </ol>
        <p className="mt-4 text-muted">
          Tuesday, Thursday and Saturday. Message ahead to confirm your slot.
        </p>
      </div>

      <Reveal className="mt-12 border-t border-line pt-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex gap-3">
            <MapPin
              size={26}
              weight="duotone"
              className="mt-1 shrink-0 text-accent"
              aria-hidden
            />
            <address className="not-italic">
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {doctor.hospital}
              </p>
              <p className="mt-1 text-lg text-muted">
                {doctor.clinic}, {doctor.area}
              </p>
            </address>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-full border border-line bg-surface px-5 text-sm font-semibold transition-colors duration-200 hover:border-accent active:scale-[0.98] sm:self-auto"
          >
            Open in Google Maps
            <ArrowUpRight size={16} weight="bold" aria-hidden />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
