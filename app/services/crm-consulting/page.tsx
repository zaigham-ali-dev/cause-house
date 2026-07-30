import Link from "next/link";
import Image from "next/image";
import StartBuildingSection from "@/components/StartBuildingSection";
import FadeUp from "@/components/FadeUp";

const includedItems = [
  {
    number: "01",
    title: "CRM architecture &\ndesign",
    description: "We design a data architecture that reflects how your organization actually works — objects, relationships, naming conventions, and custom fields built for scale."
  },
  {
    number: "02",
    title: "CRM migrations",
    description: "Seamless migrations from legacy systems to Salesforce, HubSpot, Bloomerang, or EveryAction — with no data loss, no surprise downtime, and full validation."
  },
  {
    number: "03",
    title: "Deduplication & data\nhygiene",
    description: "We clean your contact records, merge duplicates, standardize formats, and set up processes to keep data clean going forward."
  },
  {
    number: "04",
    title: "Donor segmentation",
    description: "RFM analysis, lifecycle segments, lapsed donor tags, and communication preference groups — so every message goes to the right people."
  },
  {
    number: "05",
    title: "Automation setup",
    description: "Welcome series, re-engagement flows, stewardship automations, and task assignments wired directly to your CRM's data triggers."
  },
  {
    number: "06",
    title: "Reporting &\ndashboards",
    description: "Custom reports and dashboards for development teams, executive leadership, and board governance — built in your CRM, not a spreadsheet."
  }
];

const featuredWork = [
  {
    title: "HOPEHUB — MEMBER DATA & CRM",
    description: "Organized membership and transaction records, integrated Stripe with Circle, reviewed payment exports, and built ongoing data management structure for a solo founder running a paid widow support community.",
    badge: "CRM + PAYMENTS LIVE",
    image: "/case/2.webp",
  },
  {
    title: "CCT4NYC — DONOR DATA & CRM INTEGRATION",
    description: "Built custom data flows and CRM integrations for a Brooklyn City Council campaign — donor records, form submissions, and ActBlue transactions all flowing cleanly into a structured backend.",
    badge: "CUSTOM DATA ARCHITECTURE",
    image: "/case/1.webp",
  }
];

const faqItems = [
  {
    question: "Our data is a mess. Is it even worth migrating?",
    answer: "Yes — and a migration is actually the best time to clean it. We build the hygiene process into the migration itself, so you arrive at your new CRM with clean, organized data.",
  },
  {
    question: "Which CRMs do you work with?",
    answer: "Salesforce NPSP/NPC is our primary specialty. We also work with HubSpot, Bloomerang, EveryAction, Blackbaud NXT, DonorPerfect, and more.",
  },
  {
    question: "Can you help us if we just want to improve our existing CRM, not migrate?",
    answer: "Absolutely. A CRM health check and optimization engagement is one of our most common projects — no migration required.",
  },
  {
    question: "Do you train our team after the build?",
    answer: "Always. Every CRM engagement includes training sessions, documentation, and a recorded walkthrough your team can reference anytime.",
  }
];

export default function CRMConsultingPage() {
  return (
    <div className="bg-[#F3EBDD]">
      <section className="border-b border-[#F7F0E6]/20 bg-[#1D2B1F] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp delay={0}>
            <span className="inline-flex rounded-full border border-[#F7F0E6]/45 px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#F7F0E6] font-[family-name:var(--font-inter)]">
              NONPROFIT CRM CONSULTING
            </span>
          </FadeUp>

          <FadeUp delay={100}>
            <h1
              className="mt-6 max-w-[22ch] text-[52px] font-bold leading-[0.98] tracking-[-0.04em] text-[#F7F0E6] sm:text-[64px] md:text-[78px] lg:text-[92px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              The data infrastructure<br />your donors <span className="text-[#BFEA4B]">deserve.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mt-7 max-w-[650px] text-[18px] leading-[1.7] text-[#F7F0E6] md:text-[19px] font-[family-name:var(--font-inter)]">
              CRM architecture, migrations, deduplication, automation, and reporting — all built around how nonprofits actually work, not how software companies think they should.
            </p>
          </FadeUp>

          <FadeUp delay={300}>
            <div className="mt-9 flex flex-wrap gap-4 md:mt-10">
              <Link
                href="/work-with-us"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#BFEA4B] px-6 py-3 text-[12px] font-bold tracking-[0.09em] text-[#1D2B1F] font-[family-name:var(--font-inter)]"
              >
                START YOUR CRM PROJECT
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#F7F0E6]/45 px-6 py-3 text-[12px] font-bold tracking-[0.09em] text-[#F7F0E6] font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_rgba(247,240,230,0.16)]"
              >
                &larr; ALL SERVICES
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-[#1D2B1F] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp delay={0}>
            <span className="inline-flex rounded-full border border-[#1D2B1F] px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
              WHAT&apos;S INCLUDED
            </span>
          </FadeUp>

          <FadeUp delay={100}>
            <h2
              className="mt-6 max-w-3xl text-[50px] font-bold leading-[1.02] tracking-[-0.035em] text-[#1D2B1F] sm:text-[58px] md:text-[60px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              The CRM work that keeps the whole house running.
            </h2>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mt-5 max-w-[700px] text-[18px] leading-[1.6] text-[#66786F] md:text-[19px] font-[family-name:var(--font-inter)]">
              Your CRM is the foundation every other system is built on. We make sure it&apos;s solid.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {includedItems.map((item, index) => (
              <FadeUp key={item.number} delay={(index % 3) * 100}>
                <article
                  className="min-h-[280px] rounded-xl border-2 border-[#1D2B1F] bg-[#F3EBDD] p-6 shadow-[5px_5px_0px_0px_#1D2B1F] sm:p-7 md:min-h-[305px]"
                >
                  <p className="text-[11px] font-bold tracking-[0.1em] text-[#66786F] font-[family-name:var(--font-inter)]">
                    {item.number}
                  </p>
                  <h3
                    className="mt-4 whitespace-pre-line text-[30px] font-bold leading-[1.05] tracking-[-0.025em] text-[#1D2B1F] sm:text-[32px]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[17px] leading-[1.6] text-[#66786F] font-[family-name:var(--font-inter)]">
                    {item.description}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#F7F0E6]/20 bg-[#1D2B1F] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp delay={0}>
            <span className="inline-flex rounded-full border border-[#F7F0E6]/45 px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#F7F0E6] font-[family-name:var(--font-inter)]">
              OUR WORK
            </span>
          </FadeUp>

          <FadeUp delay={100}>
            <h2
              className="mt-6 max-w-[700px] text-[50px] font-bold leading-[1.02] tracking-[-0.035em] text-[#F7F0E6] sm:text-[58px] md:text-[60px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              CRM & data work that changed operations.
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {featuredWork.map((project, index) => (
              <FadeUp key={project.title} delay={(index % 4) * 100}>
                <Link
                  href="/case-studies"
                  className="group block overflow-hidden rounded-xl border-2 border-[#F7F0E6]/25 bg-[#1D2B1F] transition-colors hover:border-[#BFEA4B]"
                >
                  <div className="relative aspect-[1.38/1] overflow-hidden border-b border-[#F7F0E6]/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 right-3 rounded-full border border-[#1D2B1F] bg-[#BFEA4B] px-3 py-1 text-[9px] font-bold tracking-[0.08em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                      {project.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[16px] font-bold tracking-[0.08em] text-[#BFEA4B] font-[family-name:var(--font-inter)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 min-h-12 text-[16px] leading-snug text-[#F7F0E6]/75 font-[family-name:var(--font-inter)]">
                      {project.description}
                    </p>
                    <span className="mt-5 inline-block text-[12px] font-bold tracking-[0.08em] text-[#BFEA4B] font-[family-name:var(--font-inter)]">
                      READ THE FULL CASE STUDY &rarr;
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/case-studies"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#BFEA4B] px-6 py-3 text-[12px] font-bold tracking-[0.08em] text-[#1D2B1F] font-[family-name:var(--font-inter)]"
            >
              EXPLORE ALL CASE STUDIES &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1D2B1F] bg-[#F7F0E6] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp delay={0}>
            <span className="inline-flex rounded-full border border-[#1D2B1F] px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
              QUESTIONS
            </span>
          </FadeUp>

          <FadeUp delay={100}>
            <h2
              className="mt-6 max-w-3xl text-[50px] font-bold leading-[1.02] tracking-[-0.035em] text-[#1D2B1F] sm:text-[58px] md:text-[60px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Before we dig into the data room.
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {faqItems.map((item, index) => (
              <FadeUp key={index} delay={(index % 2) * 100}>
                <article
                  className="h-full rounded-xl border-2 border-[#1D2B1F] bg-[#F7F0E6] p-6 shadow-[5px_5px_0px_0px_#1D2B1F] sm:p-7"
                >
                  <h3
                    className="text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1D2B1F] sm:text-[28px]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    {item.question}
                  </h3>
                  <p className="mt-4 text-[17px] leading-[1.6] text-[#66786F] font-[family-name:var(--font-inter)]">
                    {item.answer}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <StartBuildingSection />
    </div>
  );
}
