import { founders, services, siteConfig } from "@/lib/site";

/**
 * Central JSON-LD builders. Everything is expressed as a single @graph so
 * search + AI engines resolve "SLM Creatives" to one confident entity, with
 * the founders linked as People and the services as offered services.
 *
 * @id anchors let nodes reference each other (e.g. the org "founder" points at
 * the Person nodes) instead of duplicating data.
 */

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;
const personId = (name: string) =>
  `${siteConfig.url}/#person-${name.toLowerCase()}`;

function compact<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => {
      if (v == null) return false;
      if (typeof v === "string" && v.trim() === "") return false;
      if (Array.isArray(v) && v.length === 0) return false;
      return true;
    }),
  ) as T;
}

function personNodes() {
  return founders.map((f) =>
    compact({
      "@type": "Person",
      "@id": personId(f.name),
      name: f.name,
      jobTitle: f.role,
      description: f.bio,
      knowsAbout: f.expertise,
      worksFor: { "@id": ORG_ID },
      sameAs: f.sameAs ?? [],
    }),
  );
}

function organizationNode() {
  const hasAddress =
    siteConfig.address.locality || siteConfig.address.region;

  return compact({
    // ProfessionalService is a LocalBusiness subtype — right fit for a
    // Malaysia-based agency targeting local founders.
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email || undefined,
    telephone: siteConfig.phone || undefined,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/logo.png`,
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
    address: hasAddress
      ? compact({
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.locality,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.countryCode,
        })
      : undefined,
    founder: founders.map((f) => ({ "@id": personId(f.name) })),
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "Digital marketing",
      "Brand strategy",
      "Marketing technology",
      "Social media marketing",
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.blurb,
      },
    })),
  });
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-MY",
  };
}

/** Site-wide graph: Organization + WebSite + Founders. Rendered in the root layout. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), ...personNodes()],
  };
}

/** FAQPage graph — pass the same Q&A you render on the page so answers can be cited. */
export function faqGraph(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
