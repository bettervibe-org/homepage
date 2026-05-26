export interface PricingTier {
  name: string;
  description: string;
  price: number;
  featured?: boolean;
  badge?: string;
}

export interface Sponsor {
  name: string;
  url: string;
  logo: string;
}

export interface WorkshopEvent {
  slug: string;
  date: string;
  dateDisplay: string;
  dayOfWeek: string;
  time: string;
  venue: string;
  city: string;
  lumaUrl: string;
  pricing: PricingTier[];
  sponsors: Sponsor[];
  status?: "sold-out";
  attendeeCount?: number;
  recap?: string;
}

const sponsors: Sponsor[] = [
  { name: "Fluensy", url: "https://fluensy.app/", logo: "/public/fluensy-logotext.svg" },
  { name: "Lithus", url: "https://lithus.eu/", logo: "/public/lithus-logo.svg" },
  { name: "Marbles", url: "https://usemarbles.com/", logo: "/public/marbles-logo.svg" },
];

const pricing: PricingTier[] = [
  { name: "Bootstrap / Startup", description: "Solopreneurs and early-stage founders", price: 75, featured: true },
  { name: "Early Bird", description: "Individual developers", price: 125 },
  { name: "Regular", description: "Standard ticket", price: 250 },
];

export const events: WorkshopEvent[] = [
  {
    slug: "2026-06-26-munich",
    date: "2026-06-26",
    dateDisplay: "June 26, 2026",
    dayOfWeek: "Friday",
    time: "1:00 PM – 6:00 PM CEST",
    venue: "WERK1, Munich",
    city: "Munich",
    lumaUrl: "https://luma.com/TODO",
    pricing,
    sponsors,
  },
  {
    slug: "2026-05-13-munich",
    date: "2026-05-13",
    dateDisplay: "May 13, 2026",
    dayOfWeek: "Wednesday",
    time: "1:00 PM – 6:00 PM CEST",
    venue: "WERK1, Munich",
    city: "Munich",
    lumaUrl: "https://luma.com/lj9niymo",
    pricing,
    sponsors,
    attendeeCount: 15,
  },
];
