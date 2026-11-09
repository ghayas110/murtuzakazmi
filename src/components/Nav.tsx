import { doctor } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { href: "#services", label: "Services" },
  { href: "#consult", label: "Consultation" },
  { href: "#clinic", label: "Clinic hours" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex min-w-0 flex-col leading-tight">
          <span className="truncate text-base font-bold tracking-tight">
            {doctor.name}
          </span>
          <span className="hidden truncate text-xs text-muted sm:block">{doctor.title}</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton size="md" />
      </div>
    </header>
  );
}
