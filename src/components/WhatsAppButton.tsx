import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { whatsappUrl } from "@/lib/site";

type Props = {
  topic?: string;
  size?: "md" | "lg";
  className?: string;
};

/** The single booking call to action. Same label everywhere on the page. */
export function WhatsAppButton({ topic, size = "lg", className = "" }: Props) {
  const sizing =
    size === "lg" ? "h-13 px-7 text-base gap-2.5" : "h-11 px-5 text-sm gap-2";
  return (
    <a
      href={whatsappUrl(topic)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-accent font-semibold text-on-accent transition-[background-color,transform] duration-200 hover:bg-accent-hover active:scale-[0.98] ${sizing} ${className}`}
    >
      <WhatsappLogo size={size === "lg" ? 22 : 18} weight="fill" aria-hidden />
      Book on WhatsApp
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}
