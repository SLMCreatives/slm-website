import {
  Compass,
  Eye,
  Gauge,
  Handshake,
  LineChart,
  MessagesSquare,
  Palette,
  Rocket,
  Share2,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "SLM Creatives",
  tagline: "We create stories for brands that matter.",
  description:
    "An honest, simple and effective digital marketing agency in Malaysia. We help founders and family businesses grow through brand, marketing technology and social.",
  url: "https://slmcreatives.com",
  locale: "en_MY",
  // TODO: confirm the public contact email before launch.
  email: "hello@slmcreatives.com",
  phone: "+601121292383",
  // Malaysia-first local SEO signals.
  areaServed: "MY",
  address: {
    locality: "Kelana Jaya",
    region: "Selangor",
    country: "Malaysia",
    countryCode: "MY",
  },
  // TODO: add real profile URLs — these power entity/"sameAs" signals that
  // help search + AI engines confidently identify you.
  sameAs: [
    // "https://www.linkedin.com/company/slmcreatives",
    // "https://www.instagram.com/slmcreatives",
    // "https://www.facebook.com/slmcreatives",
  ],
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "How we work", href: "#approach" },
  { label: "What we do", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "The team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export type Service = {
  title: string;
  blurb: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Brand",
    blurb:
      "Identity, positioning and the creative direction that makes people remember you.",
    icon: Palette,
    points: ["Brand strategy", "Visual identity", "Creative direction"],
  },
  {
    title: "Marketing Technology",
    blurb:
      "The stack, data and automation that turn attention into measurable growth.",
    icon: LineChart,
    points: ["Analytics & tracking", "Marketing automation", "Performance"],
  },
  {
    title: "Social",
    blurb:
      "Content and community that keep your audience talking — and coming back.",
    icon: Share2,
    points: ["Content strategy", "Community", "Campaigns"],
  },
];

export type Founder = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  // E-E-A-T: real expertise areas power Person schema and author credibility.
  expertise: string[];
  // TODO: add each founder's public profile (LinkedIn preferred) for "sameAs".
  sameAs?: string[];
};

export const founders: Founder[] = [
  {
    name: "Sulaiman",
    role: "Brand Specialist",
    specialty: "Brand",
    bio: "Shapes the identity, story and creative direction so every brand feels unmistakably its own.",
    expertise: ["Brand strategy", "Visual identity", "Creative direction"],
    sameAs: [],
  },
  {
    name: "Zahin",
    role: "Marketing Technology Expert",
    specialty: "MarTech",
    bio: "Builds the stack, data and automation that turn creative work into measurable growth.",
    expertise: ["Marketing technology", "Analytics", "Marketing automation"],
    sameAs: [],
  },
  {
    name: "Abel",
    role: "Social Media Expert",
    specialty: "Social",
    bio: "Grows audiences and communities with content that earns attention and keeps it.",
    expertise: ["Social media marketing", "Content strategy", "Community"],
    sameAs: [],
  },
];

// --- The problem (empathy — speaks to founders & family businesses) ---------

export const painPoints: string[] = [
  "You've paid an agency before and got dashboards full of numbers, but no more customers.",
  "Every \"expert\" speaks in jargon, and you're left unsure what you actually paid for.",
  "You're running the business — you don't have time to learn ad platforms and algorithms.",
  "You know your brand could look and sound sharper, but you don't know where to start.",
];

// --- How we work (the honest / simple / effective principles) ---------------

export type Principle = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const principles: Principle[] = [
  {
    title: "Honest",
    description:
      "Plain language, transparent pricing, and the truth about what will and won't move the needle — even when it's not what you hoped to hear.",
    icon: Eye,
  },
  {
    title: "Simple",
    description:
      "One clear plan, not a wall of tactics. We handle the complexity so you can stay focused on running your business.",
    icon: Compass,
  },
  {
    title: "Effective",
    description:
      "We measure what matters — leads, sales and reputation — not vanity metrics. If it doesn't grow the business, we don't do it.",
    icon: Gauge,
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Listen",
    description:
      "We start with a conversation about your business, your customers and your goals — no pitch, no jargon.",
    icon: MessagesSquare,
  },
  {
    step: "02",
    title: "Plan",
    description:
      "You get one clear, prioritised plan across brand, marketing technology and social — and exactly what it costs.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Build",
    description:
      "We do the work: the identity, the campaigns, the tracking — built to last, not to lock you in.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Grow",
    description:
      "We review real results together, keep what works, and improve from there. You always know where your money went.",
    icon: Handshake,
  },
];

// --- Results / case studies -------------------------------------------------
// TODO: replace with real client case studies (name or anonymised industry,
// the challenge, what we did, and the measurable outcome). Keep the metric
// honest and verifiable — the placeholders below are illustrative only.

export type CaseStudy = {
  client: string;
  industry: string;
  summary: string;
  metric: string;
  metricLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Family-owned retailer",
    industry: "Retail",
    summary:
      "Refreshed the brand and set up proper tracking so every ringgit of ad spend could finally be measured.",
    metric: "—",
    metricLabel: "TODO: add real result",
  },
  {
    client: "Founder-led services firm",
    industry: "B2B services",
    summary:
      "Built a simple social and content engine that turned the founder's expertise into a steady stream of enquiries.",
    metric: "—",
    metricLabel: "TODO: add real result",
  },
  {
    client: "Local F&B business",
    industry: "Food & beverage",
    summary:
      "One clear campaign across social and search that filled quiet weekdays without discounting the brand.",
    metric: "—",
    metricLabel: "TODO: add real result",
  },
];

// --- FAQ (objection handling + FAQPage schema for GEO) ----------------------

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How much should a small business spend on marketing?",
    answer:
      "A common guideline is 5–10% of revenue, but the honest answer is: only spend what you can measure and afford. We'd rather start you small with tight tracking, prove what works, and scale from there — not talk you into a big retainer on day one.",
  },
  {
    question: "Do I need a brand, or should I just run ads?",
    answer:
      "Ads get you attention; a brand is what makes that attention convert and stick. If people don't understand or trust who you are, you pay more for every click. For most founders the smart move is a clear, simple brand foundation first, then ads that build on it.",
  },
  {
    question: "We're a family business — do we really need marketing technology?",
    answer:
      "You don't need enterprise software. You do need to know which marketing actually brings in customers. Marketing technology, for us, just means setting up the tracking and simple automation so you can see what's working and stop wasting money on what isn't.",
  },
  {
    question: "How soon will we see results?",
    answer:
      "Brand and tracking work shows up in weeks; meaningful growth in leads and sales usually takes a few months of consistent effort. We're upfront about this — anyone promising overnight results isn't being honest with you.",
  },
  {
    question: "Do you lock us into long contracts?",
    answer:
      "No. We earn the next month of work by making this one worth it. You'll always know what you're paying for and be free to stop — locking clients in is the opposite of how we want to work.",
  },
  {
    question: "What makes SLM Creatives different from other agencies?",
    answer:
      "Three specialist founders instead of a faceless team, plain language instead of jargon, and results measured in revenue instead of impressions. We're built for founders and family businesses who want an honest partner, not a vendor.",
  },
];
