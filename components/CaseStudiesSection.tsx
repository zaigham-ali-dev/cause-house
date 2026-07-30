import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      image: "/logos/card1.webp",
      badge: "NEW DONOR JOURNEY",
      category: "HUMANITARIAN ORGANIZATION",
      title: "Taabu Club",
      tags: ["WEB DESIGN", "HUMANITARIAN", "INFRASTRUCTURE"],
      href: "/case-studies/taabu-club"
    },
    {
      image: "/logos/card2.webp",
      badge: "MULTILINGUAL PLATFORM",
      category: "CAMPAIGN WEBSITE · MULTILINGUAL",
      title: "Christian Celeste Tate",
      tags: ["WORDPRESS", "MULTILINGUAL", "ACTBLUE"],
      href: "/case-studies/christian-celeste-tate"
    },
    {
      image: "/logos/card3.webp",
      badge: "48HR TURNAROUND",
      category: "ADVOCACY WEBSITE REDESIGN",
      title: "Tax the Rich NY",
      tags: ["WORDPRESS", "WEB DESIGN", "FAST TURNAROUND"],
      href: "/case-studies/tax-the-rich-ny"
    }
  ];

  return (
    <section className="w-full bg-[#1D2B1F] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

        {/* Top Row: Badge + Button */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="px-[14px] py-[6px] border border-[#F7F0E6]/30 rounded-full text-[11px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
              CASE STUDIES
            </span>
          </div>

          {/* All Case Studies Button */}
          <Link
            href="/case-studies"
            className="hidden md:inline-flex items-center justify-center px-6 min-h-[48px] bg-transparent border border-[#F7F0E6]/30 rounded-full text-[13px] font-bold text-[#F7F0E6] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] hover:bg-[#F7F0E6]/10 transition-all"
          >
            ALL CASE STUDIES
          </Link>
        </div>

        {/* Heading */}
        <h2
          className="text-[36px] md:text-[60px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-[#F7F0E6] font-bold mb-5"
          style={{ fontFamily: "var(--font-fraunces), serif" }}
        >
          What growth looks like<br className="hidden md:block" />
          in practice.
        </h2>

        {/* Subtitle + Plant Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-28 mb-12 md:mb-16">
          <p className="text-[19px] lg:text-[16px] xl:text-[19px] text-[#F7F0E6]/60 font-[family-name:var(--font-inter)] leading-relaxed max-w-xl">
            From nonprofit websites and fundraising infrastructure to campaign systems and supporter journeys — the digital foundations we&apos;ve helped build.
          </p>

          {/* Plant Image */}
          <div className="relative w-[140px] md:w-[224px] h-[140px] md:h-[224px] shrink-0 md:-mt-[140px]">
            <Image
              src="/logos/plant.webp"
              alt="Growing plant"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Mobile All Case Studies Button */}
        <div className="md:hidden flex justify-center mb-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 min-h-[48px] bg-transparent border border-[#F7F0E6]/30 rounded-full text-[13px] font-bold text-[#F7F0E6] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] hover:bg-[#F7F0E6]/10 transition-all"
          >
            ALL CASE STUDIES
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-[#F7F0E6]/[0.06] border border-[#F7F0E6]/15 rounded-xl overflow-hidden flex flex-col group hover:bg-[#F7F0E6]/[0.1] transition-colors shadow-[6px_6px_0px_0px_rgba(247,240,230,0.1)]"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                />
                {/* Badge on image */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-[#1D2B1F] border border-[#BFEA4B] rounded-full text-[9.6px] font-bold text-[#BFEA4B] tracking-[0.08em] uppercase font-[family-name:var(--font-inter)]">
                    {study.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 md:p-4 lg:p-5 xl:p-6 flex flex-col flex-1">
                {/* Category */}
                <p className="text-[10px] md:text-[9px] xl:text-[11px] text-[#F7F0E6]/50 font-bold tracking-[0.12em] uppercase font-[family-name:var(--font-inter)] mb-2">
                  {study.category}
                </p>

                {/* Title */}
                <h3
                  className="text-[26px] md:text-[18px] lg:text-[22px] xl:text-[30px] text-[#F7F0E6] font-bold leading-[1.15] mb-4 md:mb-3 xl:mb-5 flex-1"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  {study.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 xl:px-3 py-1 border border-[#F7F0E6]/20 rounded-full text-[8.5px] lg:text-[9px] xl:text-[10px] font-bold text-[#F7F0E6]/60 tracking-[0.08em] uppercase font-[family-name:var(--font-inter)] whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={study.href}
                  className="mt-auto inline-flex items-center gap-2 text-[13px] md:text-[11px] xl:text-[14px] font-bold text-[#BFEA4B] tracking-[0.05em] uppercase font-[family-name:var(--font-inter)] hover:opacity-80 transition-opacity"
                >
                  READ <span className="text-[16px] md:text-[14px] xl:text-[16px]">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Testimonials CTA */}
        <div className="mt-20 md:mt-24 pt-10 md:pt-14 border-t border-[#F7F0E6]/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p 
            className="text-[30px] lg:text-[24px] xl:text-[30px] text-[#F7F0E6] font-bold leading-tight max-w-lg"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Our clients love our work — 24 five-star reviews on Google.
          </p>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[12px] md:text-[13px] font-bold text-[#BFEA4B] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] hover:opacity-80 transition-opacity"
          >
            VIEW TESTIMONIALS <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
