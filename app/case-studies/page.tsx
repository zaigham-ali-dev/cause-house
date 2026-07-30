"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import StartBuildingSection from "@/components/StartBuildingSection";

const selectedWork = [
  {
    image: "/case/1.webp",
    badge: "100% CUSTOM BUILT",
    category: "CAMPAIGN WEBSITE",
    categoryDetail: "MULTILINGUAL PLATFORM",
    title: "Christian Celeste Tate",
    tags: ["WORDPRESS", "MULTILINGUAL", "ACTBLUE"],
    href: "/case-studies/christian-celeste-tate",
  },
  {
    image: "/case/2.webp",
    badge: "5 WEEK DELIVERY",
    category: "ADVOCACY WEBSITE",
    categoryDetail: "FAST TURNAROUND",
    title: "Tax the Rich NY",
    tags: ["WORDPRESS", "WEB DESIGN", "FAST TURNAROUND"],
    href: "/case-studies/tax-the-rich-ny",
  },
  {
    image: "/case/3.webp",
    badge: "GLOBAL DONATION READY",
    category: "HUMANITARIAN ORGANIZATION",
    categoryDetail: "",
    title: "Taabu Club",
    tags: ["WEB DESIGN", "HUMANITARIAN", "INFRASTRUCTURE"],
    href: "/case-studies/taabu-club",
  },
  {
    image: "/case/4.webp",
    badge: "FULL FUNDRAISING STACK",
    category: "501(C)(3) NONPROFIT",
    categoryDetail: "",
    title: "Child Arise TN",
    tags: ["WEB DESIGN", "NONPROFIT", "INFRASTRUCTURE"],
    href: "/case-studies/child-arise-tn",
  },
  {
    image: "/case/5.webp",
    badge: "LIVE PAYING COMMUNITY",
    category: "COMMUNITY PLATFORM",
    categoryDetail: "MEMBERSHIP INFRASTRUCTURE",
    title: "HopeHub",
    tags: ["CIRCLE", "STRIPE PAYMENTS", "CRM"],
    href: "/case-studies/hopehub",
  },
  {
    image: "/case/6.webp",
    badge: "TOP 1-2 PAGE RANKINGS",
    category: "WELLNESS COACHING",
    categoryDetail: "BILINGUAL SEO",
    title: "Di Wellness",
    tags: ["WEB DESIGN", "SEO STRATEGY", "BILINGUAL"],
    href: "/case-studies/di-wellness",
  },
  {
    image: "/case/7.webp",
    badge: "2X+ ORGANIC TRAFFIC",
    category: "SEO STRATEGY",
    categoryDetail: "PPC MANAGEMENT",
    title: "Innate Ketamine",
    tags: ["SEO STRATEGY", "PPC", "HEALTHCARE"],
    href: "/case-studies/innate-ketamine",
  },
  {
    image: "/case/8.webp",
    badge: "2X+ ORGANIC TRAFFIC",
    category: "LOCAL SEO",
    categoryDetail: "CONVERSION WEBSITE",
    title: "Clockwork BJJ",
    tags: ["WEB DESIGN", "LOCAL SEO", "CONVERSION"],
    href: "/case-studies/clockwork-bjj",
  },
];
const caseFaqs = [
  {
    question: "What will I find inside each case study?",
    answer:
      "Every write-up is structured around the real problem, what we built or changed, how the work was sequenced, and outcomes we can share. You will see stack choices when they matter and honest context about constraints like budget, timeline, or compliance.",
  },
  {
    question: "Are these results typical for every nonprofit?",
    answer:
      "No. Missions, markets, and starting points differ. Use them as reference architectures and realistic ranges, not as a promise that your organization will see identical percentages.",
  },
  {
    question:
      "Why do some studies emphasize SEO or ads and others emphasize websites or CRM?",
    answer:
      "Because that is where the leverage was. The tags on each card hint at the primary lever \u2014 open the full story to see how pieces connect.",
  },
  {
    question: "Can CauseHouse do a similar engagement for us?",
    answer:
      "Often yes \u2014 but fit matters. We look for clarity on goals, realistic timelines, and willingness to collaborate. Reading a case study is a great prep step before reaching out.",
  },
  {
    question: "How do I move from reading to a project conversation?",
    answer:
      "Use Work with us to book time or send a message with your mission, URL, and what you want to improve. Mentioning a case study you related to helps us orient fast.",
  },
];
export default function CaseStudiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="w-full bg-[#1D2B1F] px-5 pb-16 pt-32 text-[#F7F0E6] md:px-10 md:pb-24 md:pt-36 lg:px-16 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-[1204px]">
          <div className="max-w-[1080px]">
            <FadeUp delay={0}>
              <div className="inline-block mb-6 md:mb-8">
                <span className="px-[14px] py-[6px] border border-[#F7F0E6]/30 rounded-full text-[11px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  CASE STUDIES
                </span>
              </div>
            </FadeUp>
            
            <FadeUp delay={100}>
              <h1 
                className="mb-6 max-w-[1080px] text-[56px] font-bold leading-[0.92] text-[#F7F0E6] md:mb-7 md:text-[88px] lg:text-[96px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Growth that happened in the real world.
              </h1>
            </FadeUp>
            
            <FadeUp delay={200}>
              <p className="max-w-[690px] text-[18px] leading-[1.55] text-[#F7F0E6]/80 md:text-[20px] font-[family-name:var(--font-inter)]">
                From nonprofit campaigns and fundraising infrastructure to campaign platforms, community builds, and SEO &mdash; the digital foundations we&apos;ve helped build.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={300}>
            <div className="mt-10 flex flex-wrap gap-x-14 gap-y-8 md:mt-12 lg:gap-x-20">
              <div>
                <h3 className="text-[40px] md:text-[48px] font-bold text-[#BFEA4B] leading-none mb-1" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  8
                </h3>
                <p className="text-[11px] md:text-[12px] text-[#F7F0E6]/70 font-bold tracking-[0.1em] uppercase font-[family-name:var(--font-inter)]">
                  CASE STUDIES
                </p>
              </div>
              <div>
                <h3 className="text-[40px] md:text-[48px] font-bold text-[#BFEA4B] leading-none mb-1" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  $10M+
                </h3>
                <p className="text-[11px] md:text-[12px] text-[#F7F0E6]/70 font-bold tracking-[0.1em] uppercase font-[family-name:var(--font-inter)]">
                  IN SUPPORTED FUNDRAISING
                </p>
              </div>
              <div>
                <h3 className="text-[40px] md:text-[48px] font-bold text-[#BFEA4B] leading-none mb-1" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  2x+
                </h3>
                <p className="text-[11px] md:text-[12px] text-[#F7F0E6]/70 font-bold tracking-[0.1em] uppercase font-[family-name:var(--font-inter)]">
                  AVG TRAFFIC GROWTH
                </p>
              </div>
              <div>
                <h3 className="text-[40px] md:text-[48px] font-bold text-[#BFEA4B] leading-none mb-1" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  100%
                </h3>
                <p className="text-[11px] md:text-[12px] text-[#F7F0E6]/70 font-bold tracking-[0.1em] uppercase font-[family-name:var(--font-inter)]">
                  MISSION-DRIVEN WORK
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Case grid section */}
      <section className="w-full border-y border-[#17291B] bg-[#F2E9DA] px-5 py-20 text-[#1D2B1F] md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1204px]">
          <FadeUp delay={0}>
            <div className="max-w-[690px]">
              <h2
                className="mb-4 text-[44px] font-bold leading-[0.98] text-[#1D2B1F] md:text-[62px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Selected work
              </h2>
              <p className="max-w-[690px] text-[18px] leading-[1.55] text-[#5E756F] md:text-[20px] font-[family-name:var(--font-inter)]">
                Real projects across advocacy, community platforms, healthcare, and local SEO &mdash; each card opens the full story.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="mt-12 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-4 lg:gap-x-5 lg:gap-y-6">
              {selectedWork.map((work) => (
                <Link
                  key={work.title}
                  href={work.href}
                  className="group relative block aspect-[4/3] min-h-[260px] overflow-hidden rounded-[14px] border-2 border-[#16291B] bg-[#14261A] shadow-[4px_5px_0_0_#16291B] outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-[#BFEA4B]/70 sm:aspect-[7/4] sm:min-h-[300px] md:min-h-[300px] lg:min-h-[320px] xl:min-h-[340px]"
                  aria-label={`Read ${work.title} case study`}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(min-width: 1280px) 590px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#17251B]/35" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(242,233,218,0.16)_0%,rgba(16,29,20,0.12)_32%,rgba(16,29,20,0.82)_100%)]" />

                  <div className="absolute right-3 top-3 z-10 max-w-[calc(100%-1.5rem)] rounded-full border border-[#BFEA4B] bg-[#16291B] px-3 py-1.5 text-[8px] font-black uppercase leading-none tracking-[0.06em] text-[#BFEA4B] shadow-[0_2px_0_rgba(191,234,75,0.5)] sm:text-[9px] md:right-4 md:top-4 md:text-[8px] lg:text-[10px] xl:right-5 xl:text-[11px] font-[family-name:var(--font-inter)]">
                    {work.badge}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-[#F7F0E6] sm:p-5 md:p-4 lg:p-5 xl:p-6">
                    <p className="mb-1 text-[10px] font-black uppercase leading-tight tracking-[0.05em] text-[#F7F0E6]/75 sm:text-[11px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-[family-name:var(--font-inter)]">
                      {work.category}
                      {work.categoryDetail ? (
                        <>
                          {" "}
                          <span className="text-[#F7F0E6]/55">&middot;</span>{" "}
                          {work.categoryDetail}
                        </>
                      ) : null}
                    </p>
                    <h3
                      className="mb-4 text-[26px] font-bold leading-[0.95] text-[#F7F0E6] sm:text-[30px] md:text-[26px] lg:text-[30px] xl:mb-5 xl:text-[34px]"
                      style={{ fontFamily: "var(--font-fraunces), serif" }}
                    >
                      {work.title}
                    </h3>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4 md:flex-col md:items-start lg:flex-row lg:items-end lg:justify-between">
                      <div className="flex flex-wrap gap-1.5 xl:gap-2">
                        {work.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#F7F0E6]/35 bg-[#F7F0E6]/18 px-2.5 py-1 text-[8px] font-black uppercase leading-none tracking-[0.04em] text-[#F7F0E6] backdrop-blur-sm lg:text-[9px] xl:px-3 xl:text-[10px] font-[family-name:var(--font-inter)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.06em] text-[#BFEA4B] lg:text-[11px] xl:text-[12px] font-[family-name:var(--font-inter)]">
                        READ <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ section */}
      <section className="w-full border-t border-[#1D2B1F] bg-[#F7F0E6] px-5 py-16 text-[#1D2B1F] md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1204px]">
          <div className="mb-12 md:mb-14">
            <FadeUp>
              <div className="mb-6 inline-block">
                <span className="rounded-full border border-[#1D2B1F] px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.15em] text-[#1D2B1F] md:text-[13px] font-[family-name:var(--font-inter)]">
                  FAQ
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2
                className="mb-5 max-w-[820px] text-[38px] font-bold leading-[0.98] text-[#1D2B1F] md:text-[60px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Deeper answers about these projects.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="max-w-[690px] text-[18px] leading-[1.55] text-[#5E756F] md:text-[20px] font-[family-name:var(--font-inter)]">
                Context on what each story includes, how to interpret outcomes, and how to turn reading into a productive conversation with our team.
              </p>
            </FadeUp>
          </div>

          <div className="flex flex-col border-b border-[#1D2B1F]/20">
            {caseFaqs.map((item, index) => (
              <FadeUp key={item.question} delay={300 + index * 80}>
                <div className={`border-t border-[#1D2B1F]/20 transition-colors duration-300 ${openFaq === index ? "bg-[#F3EBDD]" : "hover:bg-[#F3EBDD]"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-1 py-7 text-left md:px-2 md:py-8"
                    aria-expanded={openFaq === index}
                  >
                    <h3
                      className="text-[25px] font-bold leading-[1.05] text-[#061914] md:text-[32px]"
                      style={{ fontFamily: "var(--font-fraunces), serif" }}
                    >
                      {item.question}
                    </h3>
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1D2B1F] text-[#1D2B1F] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden px-1 transition-all duration-300 ease-in-out md:px-2 ${openFaq === index ? "max-h-[240px] opacity-100 pb-8" : "max-h-0 opacity-0"}`}>
                    <p className="max-w-[1080px] text-[17px] leading-[1.55] text-[#5E756F] md:text-[20px] font-[family-name:var(--font-inter)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <StartBuildingSection />
    </div>
  );
}
