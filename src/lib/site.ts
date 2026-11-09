import type { Icon } from "@phosphor-icons/react";
import {
  UsersThree,
  Heartbeat,
  Wind,
  BowlFood,
  Baby,
  GenderFemale,
  PersonSimpleWalk,
  Bandaids,
  ShieldCheck,
  Brain,
} from "@phosphor-icons/react/dist/ssr";

export const doctor = {
  name: "Dr Murtaza Kazmi",
  credentials: "MBBS, MCPS",
  title: "Family Medicine Specialist",
  hospital: "Karachi Central Hospital",
  clinic: "Consultant Clinic",
  area: "Water Pump, Karachi",
  days: ["Tue", "Thu", "Sat"],
  hours: "2:30 to 3:30 pm",
  whatsappDisplay: "+92 332 2204377",
  whatsappNumber: "923322204377",
};

export type Service = {
  title: string;
  detail: string;
  icon: Icon;
};

// Services exactly as listed on the clinic's "What Family Medicine Deals With" post.
export const services: Service[] = [
  { title: "General Health Care", detail: "For the whole family", icon: UsersThree },
  { title: "Chronic Diseases", detail: "Diabetes, hypertension and more", icon: Heartbeat },
  { title: "Respiratory Problems", detail: "Cough, asthma, COPD", icon: Wind },
  { title: "Digestive Issues", detail: "Indigestion, gastric, IBS", icon: BowlFood },
  { title: "Child Health & Immunization", detail: "Growth, development, vaccines", icon: Baby },
  { title: "Women's Health", detail: "Pregnancy care, contraception, menopause", icon: GenderFemale },
  { title: "Elderly Care", detail: "Multiple morbidities, geriatric care", icon: PersonSimpleWalk },
  { title: "Minor Procedures", detail: "Wound care, suturing, I&D", icon: Bandaids },
  { title: "Preventive Care", detail: "Health screening, lifestyle advice", icon: ShieldCheck },
  { title: "Mental Health Support", detail: "Stress, anxiety, depression", icon: Brain },
];

export function consultMessage(topic?: string) {
  const about = topic ? ` regarding ${topic}` : "";
  return `Assalam o Alaikum ${doctor.name}, I would like to book a consultation${about}.`;
}

export function whatsappUrl(topic?: string) {
  return `https://wa.me/${doctor.whatsappNumber}?text=${encodeURIComponent(consultMessage(topic))}`;
}

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Karachi+Central+Hospital+Water+Pump+Karachi";
