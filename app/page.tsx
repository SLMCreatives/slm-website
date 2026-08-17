import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Approach } from "@/components/approach";
import { Services } from "@/components/services";
import { Results } from "@/components/results";
import { Team } from "@/components/team";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { faqGraph } from "@/lib/structured-data";
import { faqs } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={faqGraph(faqs)} />
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Services />
        <Results />
        <Team />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
