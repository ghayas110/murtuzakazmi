import { Clinic } from "@/components/Clinic";
import { Consult } from "@/components/Consult";
import { Hero } from "@/components/Hero";
import { MotionProvider, Reveal } from "@/components/Motion";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { doctor } from "@/lib/site";

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
      >
        Skip to services
      </a>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Consult />
        <Clinic />

        <section className="bg-navy text-on-navy">
          <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 sm:px-6 md:py-24">
            <p className="max-w-[18ch] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Whole family. Better health. Brighter future.
            </p>
            <WhatsAppButton />
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <span className="font-semibold text-ink">{doctor.name}</span>,{" "}
          {doctor.credentials}. {doctor.title}.
        </p>
        <p>Your health, our priority.</p>
      </footer>
    </MotionProvider>
  );
}
