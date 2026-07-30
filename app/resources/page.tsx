import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import StartBuildingSection from "@/components/StartBuildingSection";

const guides = [
  {
    title: "Free SROI Calculator",
    subtitle:
      "Prove your nonprofit's social value in minutes — no spreadsheet required.",
    description:
      "Calculate your Social Return on Investment with pre-loaded proxy values from WSIPP, HACT Social Value Bank, Robin Hood Foundation, and more. Free, browser-based, no signup.",
  },
  {
    title: "Google Ad Grants",
    subtitle: "$120,000/year in Search ad credit — if you use it right.",
    description:
      "Eligibility for 501(c)(3)s, TechSoup, the application path, strict compliance rules, and practical optimization so your account stays active and your mission shows up when people search.",
  },
  {
    title: "Website redesign",
    subtitle: "Checklist, cost, timeline, and SEO-safe migration.",
    description:
      "Refresh vs full rebuild, what to fix before design starts, realistic budgets and timelines, donor UX essentials, WCAG 2.1 AA baseline, and how to launch without tanking organic rankings.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="w-full bg-[#F7F0E6]">
      {/* Hero section */}
      <section className="w-full border-b border-[#1D2B1F] bg-[#1D2B1F] px-5 pb-24 pt-32 text-[#F7F0E6] md:px-10 md:pb-28 md:pt-36 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-[1204px]">
          <FadeUp>
            <div className="mb-7 inline-block">
              <span className="rounded-full border border-[#F7F0E6]/45 px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.15em] text-[#F7F0E6] md:text-[13px] font-[family-name:var(--font-inter)]">
                RESOURCES
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1
              className="max-w-[1180px] text-[56px] font-bold leading-[0.92] text-[#F7F0E6] md:text-[90px] lg:text-[96px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Guides for teams building{" "}
              <span className="text-[#BFEA4B]">serious digital systems.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-7 max-w-[710px] text-[18px] leading-[1.55] text-[#F7F0E6]/78 md:text-[20px] font-[family-name:var(--font-inter)]">
              Deep-dive resources from CauseHouse — the same frameworks we use
              with nonprofit and mission-driven clients. No fluff. Just what you
              need to plan, apply, and launch with confidence.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Guides section */}
      <section className="w-full border-b border-[#1D2B1F] bg-[#F3EBDD] px-5 py-16 text-[#1D2B1F] md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1204px]">
          <FadeUp>
            <div className="mb-6 inline-block">
              <span className="rounded-full bg-[#1D2B1F] px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.15em] text-[#F7F0E6] md:text-[13px] font-[family-name:var(--font-inter)]">
                GUIDES
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2
              className="max-w-[760px] text-[40px] font-bold leading-[0.98] text-[#1D2B1F] md:text-[62px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Start with what moves the{" "}
              <span className="text-[#BFEA4B] [text-shadow:2px_2px_0_#1D2B1F]">
                needle most.
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 max-w-[650px] text-[18px] leading-[1.55] text-[#5E756F] md:text-[20px] font-[family-name:var(--font-inter)]">
              Each guide is written to stand alone — pick the topic that matches
              where you are today.
            </p>
          </FadeUp>

          <div className="mt-16 flex flex-col gap-0 border-b border-[#1D2B1F]/30 md:mt-20">
            {guides.map((guide, index) => (
              <FadeUp key={guide.title} delay={300 + index * 100}>
                <article className="grid gap-8 border-t border-[#1D2B1F]/30 bg-[#F3EBDD] px-4 py-12 transition-colors duration-300 hover:rounded-[10px] hover:bg-[#F7F0E6] md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:px-6 md:py-16">
                  <div className="max-w-[780px]">
                    <h3
                      className="text-[34px] font-bold leading-[1.05] text-[#061914] md:text-[46px]"
                      style={{ fontFamily: "var(--font-fraunces), serif" }}
                    >
                      {guide.title}
                    </h3>
                    <p
                      className="mt-4 text-[24px] font-bold leading-[1.14] text-[#061914] md:text-[31px]"
                      style={{ fontFamily: "var(--font-fraunces), serif" }}
                    >
                      {guide.subtitle}
                    </p>
                    <p className="mt-4 text-[17px] leading-[1.55] text-[#5E756F] md:text-[20px] font-[family-name:var(--font-inter)]">
                      {guide.description}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex w-fit items-center justify-center rounded-full bg-[#1D2B1F] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#F7F0E6] shadow-[5px_5px_0_0_rgba(29,43,31,0.28)] transition-transform duration-300 hover:-translate-y-1 md:px-7 md:text-[13px] font-[family-name:var(--font-inter)]"
                  >
                    READ THE GUIDE <span className="ml-1" aria-hidden="true">&rarr;</span>
                  </Link>
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
