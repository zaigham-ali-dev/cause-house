"use client";

import { useState } from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import StartBuildingSection from "@/components/StartBuildingSection";

export default function WhoWeServePage() {
  const [openClient, setOpenClient] = useState<number | null>(null);
  const [openIndustry, setOpenIndustry] = useState<number | null>(null);

  const toggleClient = (index: number) => {
    setOpenClient(openClient === index ? null : index);
  };

  const toggleIndustry = (index: number) => {
    setOpenIndustry(openIndustry === index ? null : index);
  };

  const industries = [
    {
      title: "Social Service Nonprofits",
      paragraphs: [
        "Food banks, shelters, housing navigation, family services, and crisis response teams sit at the intersection of dignity and logistics. Your site has to work for people under stress, volunteers on the ground, and funders who need proof that dollars turn into outcomes.",
        "We build clear program pages, intake-friendly flows, donation and volunteer journeys, and CRM setups so case notes, grants, and marketing aren't living in three disconnected tools."
      ]
    },
    {
      title: "Advocacy & Policy Orgs",
      paragraphs: [
        "Coalitions, research shops, and policy campaigns win on narrative speed. That means landing pages that convert, email and ads tied to real segments, and analytics that show what actually moved someone to act.",
        "We help you wire petitions, legislator tools, and fundraising so supporter data flows into one system. When the cycle ends, you still own the list, the content, and the learnings."
      ]
    },
    {
      title: "Environmental Organizations",
      paragraphs: [
        "Conservation and climate work spans field science, local organizing, and national campaigns. Donors want to see impact — and your digital stack should connect advocacy actions, memberships, and major-gift conversations without duplicate entry.",
        "We focus on story-led sites, campaign hubs, and reporting that ties channels to revenue and engagement."
      ]
    },
    {
      title: "Health & Wellness Nonprofits",
      paragraphs: [
        "Community clinics, peer networks, mental health collaboratives, and public-health nonprofits need trust at first click — and systems that respect privacy, multilingual audiences, and staff who are already stretched thin.",
        "We design donation and referral paths with clarity, integrate CRM and forms where it makes sense, and train teams so updates don't require a developer for every board meeting."
      ]
    },
    {
      title: "Community Foundations",
      paragraphs: [
        "Place-based foundations balance donor stewardship, competitive grant cycles, scholarship funds, and community storytelling. Your digital experience has to speak to philanthropists, nonprofits, and the public.",
        "We build structured grant and fund pages, donor-advised fund journeys, and dashboards or reports that boards can stand behind."
      ]
    },
    {
      title: "Educational Nonprofits",
      paragraphs: [
        "Charter networks, out-of-school-time programs, literacy orgs, and education nonprofits compete for attention from families, districts, and donors simultaneously.",
        "We connect enrollment or program interest to CRM, automate nurture where it helps, and align fundraising with alumni or supporter pipelines."
      ]
    },
    {
      title: "Arts & Culture",
      paragraphs: [
        "Theaters, museums, music nonprofits, and community arts orgs sell experiences — but digital is often where first impressions happen. Season announcements, memberships, and donor circles need the same polish as opening night.",
        "We build ticketing-adjacent storytelling, campaign calendars tied to CRM, and email journeys that don't feel generic."
      ]
    },
    {
      title: "Faith-Based Organizations",
      paragraphs: [
        "Congregations, ministries, and faith-rooted nonprofits balance stewardship language, recurring giving, and volunteer energy — often across generations and channels.",
        "We design recurring donation flows, event and serve sign-ups, and content structures that scale as you add campuses or programs."
      ]
    },
    {
      title: "Civic & Democracy Orgs",
      paragraphs: [
        "Voter engagement, ballot initiatives, and democracy-defense groups run on deadlines and trust. People need to know who you are, what you're asking them to do, and that their information will be handled responsibly.",
        "We build fast-deploy landing pages, SMS and email capture tied to CRM, and compliance-minded setups so you can scale volunteers and donors without losing auditability."
      ]
    },
    {
      title: "Political Campaigns",
      paragraphs: [
        "Campaigns live in weeks, not quarters: rapid response, surrogate content, fundraising thermometers, and field data that has to reconcile.",
        "We ship high-converting donation pages, integrate with the tools your team already runs, and build reporting that finance and digital can agree on."
      ]
    },
    {
      title: "Housing & Homelessness",
      paragraphs: [
        "Housing-first providers, tenant unions, and shelter networks navigate policy, philanthropy, and human crisis at once.",
        "We emphasize legible program information, advocacy funnels, and CRM that connects grants, campaigns, and communications."
      ]
    },
    {
      title: "Youth-Serving Organizations",
      paragraphs: [
        "Mentorship, after-school, foster-youth, and leadership programs work with young people and the adults who care for them. Sites and forms have to be age-appropriate, accessible, and mindful of consent.",
        "We pair clear program and impact storytelling with fundraising and CRM that grow as you add sites or cohorts."
      ]
    }
  ];

  const clients = [
    {
      title: "Nonprofits ready to grow",
      subtitle: "Organizations that need the full house — wired.",
      description: "You've outgrown your patchwork of tools. Donors give once and disappear. Your website is years behind your mission. You need a connected digital system — website, CRM, fundraising flows, and reporting — built to scale what you're already doing well.",
      tags: ["ESTABLISHED NONPROFITS", "GROWTH STAGE", "CRM MIGRATIONS", "WEBSITE REBUILDS"]
    },
    {
      title: "Advocacy & campaign teams",
      subtitle: "Fast-moving missions that can't afford to move slowly.",
      description: "You're running on tight cycles, fighting for every signature and dollar. You need high-converting landing pages, supporter funnels, and digital infrastructure that can move as quickly as the campaign — without breaking in the stretch run.",
      tags: ["POLITICAL CAMPAIGNS", "ADVOCACY ORGS", "BALLOT INITIATIVES", "RAPID RESPONSE"]
    },
    {
      title: "Fundraising & development teams",
      subtitle: "Systems built to turn first-time donors into lifelong supporters.",
      description: "You know the donors are out there — you need the infrastructure to find them, convert them, and keep them giving. We build donation flows, CRM-connected supporter journeys, and reporting that gives your team a real picture of what's working.",
      tags: ["DEVELOPMENT TEAMS", "MAJOR GIFTS", "MONTHLY GIVING", "DONOR RETENTION"]
    },
    {
      title: "Mission-driven orgs rebuilding their digital presence",
      subtitle: "A fresh foundation for teams modernizing their digital home.",
      description: "Your tools are disconnected. Your website doesn't reflect where you are. Your donor data is everywhere and nowhere at once. We come in, audit what you have, and build a modern connected system that finally makes sense.",
      tags: ["REBRANDS & REBUILDS", "TECH MODERNIZATION", "DISCONNECTED TOOLS", "LEGACY MIGRATIONS"]
    }
  ];

  return (
    <div className="bg-[#F7F0E6]">

      {/* ── HERO ── */}
      <section className="w-full bg-[#1D2B1F] pt-16 md:pt-24 lg:pt-24 xl:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <FadeUp>
            <div className="inline-block mb-6 md:mb-8">
              <span className="inline-block px-[14px] py-[6px] border border-[#F7F0E6]/30 rounded-full text-[11px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                WHO WE SERVE
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="text-[48px] md:text-[64px] lg:text-[64px] xl:text-[92px] leading-[1.05] tracking-tight text-[#F7F0E6] font-bold max-w-[18ch]" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              Built for every team fighting for real change.
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#F7F0E6]/70 font-[family-name:var(--font-inter)] leading-relaxed max-w-xl">
              Whether you&apos;re a scrappy advocacy team running on momentum, a development shop trying to scale recurring giving, or a nonprofit that&apos;s simply outgrown its tools — CauseHouse builds the digital infrastructure that turns mission energy into measurable impact.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
              <Link href="/work-with-us" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#BFEA4B] rounded-full text-[13px] md:text-[15px] font-bold text-[#1D2B1F] tracking-[0.05em] uppercase font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_#6B7A6D] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#6B7A6D] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none duration-300">
                WORK WITH US
              </Link>
              <button onClick={() => { document.getElementById('who-we-work-with')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border border-[#F7F0E6]/30 rounded-full text-[13px] md:text-[15px] font-bold text-[#F7F0E6] tracking-[0.05em] uppercase font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_#6B7A6D] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#6B7A6D] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none duration-300">
                SEE WHO WE WORK WITH <span className="text-sm">↓</span>
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="w-full bg-[#F3EBDD] border-t-2 border-[#1D2B1F] py-10 md:py-14 lg:py-12 xl:py-14">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            <FadeUp>
              <div>
                <p className="text-[36px] md:text-[48px] lg:text-[40px] xl:text-[48px] font-bold text-[#1D2B1F] leading-none" style={{ fontFamily: "var(--font-fraunces), serif" }}>$10M+</p>
                <p className="text-[11px] md:text-[12px] font-bold text-[#6B7A6D] tracking-[0.15em] uppercase mt-2 font-[family-name:var(--font-inter)]">IN FUNDRAISING SYSTEMS<br />SUPPORTED</p>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div>
                <p className="text-[36px] md:text-[48px] lg:text-[40px] xl:text-[48px] font-bold text-[#1D2B1F] leading-none" style={{ fontFamily: "var(--font-fraunces), serif" }}>50+</p>
                <p className="text-[11px] md:text-[12px] font-bold text-[#6B7A6D] tracking-[0.15em] uppercase mt-2 font-[family-name:var(--font-inter)]">NONPROFIT CLIENTS SERVED</p>
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div>
                <p className="text-[36px] md:text-[48px] lg:text-[40px] xl:text-[48px] font-bold text-[#1D2B1F] leading-none" style={{ fontFamily: "var(--font-fraunces), serif" }}>8+</p>
                <p className="text-[11px] md:text-[12px] font-bold text-[#6B7A6D] tracking-[0.15em] uppercase mt-2 font-[family-name:var(--font-inter)]">SERVICES UNDER ONE ROOF</p>
              </div>
            </FadeUp>
            <FadeUp delay={300}>
              <div>
                <p className="text-[36px] md:text-[48px] lg:text-[40px] xl:text-[48px] font-bold text-[#1D2B1F] leading-none" style={{ fontFamily: "var(--font-fraunces), serif" }}>100%</p>
                <p className="text-[11px] md:text-[12px] font-bold text-[#6B7A6D] tracking-[0.15em] uppercase mt-2 font-[family-name:var(--font-inter)]">MISSION-FOCUSED WORK</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── OUR CLIENTS ── */}
      <section id="who-we-work-with" className="w-full bg-[#F7F0E6] py-16 md:py-24 lg:py-24 xl:py-32 border-t border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="mb-12 md:mb-16">
            <FadeUp>
              <div className="inline-block mb-6">
                <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  OUR CLIENTS
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-[36px] md:text-[52px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-6" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                Four types of teams. One purpose.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl">
                CauseHouse is built specifically for mission-driven organizations — the ones that need serious digital infrastructure but can&apos;t afford the waste of a generic agency.
              </p>
            </FadeUp>
          </div>

          <div className="flex flex-col border-b border-[#1D2B1F]/20">
            {clients.map((client, i) => (
              <FadeUp key={i} delay={300 + (i * 100)}>
                <div className={`border-t border-[#1D2B1F]/20 transition-colors duration-300 ${openClient === i ? 'bg-[#F3EBDD]' : 'hover:bg-[#F3EBDD]'}`}>
                  <button
                    onClick={() => toggleClient(i)}
                    className="w-full py-6 md:py-8 px-4 md:px-6 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <div className="pr-8">
                      <h3 className="text-[22px] md:text-[28px] lg:text-[22px] xl:text-[28px] text-[#1D2B1F] font-bold" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                        {client.title}
                      </h3>
                      <p className={`text-[15px] md:text-[16px] font-[family-name:var(--font-inter)] mt-1 transition-colors ${openClient === i ? 'text-[#1D2B1F]' : 'text-[#6B7A6D]'}`}>
                        {client.subtitle}
                      </p>
                    </div>
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#1D2B1F] text-[#1D2B1F] transition-transform duration-300 ${openClient === i ? 'rotate-180' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out px-4 md:px-6 ${openClient === i ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-2">
                      {client.description}
                    </p>
                    {client.tags && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {client.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 border border-[#1D2B1F] rounded-full text-[10px] md:text-[11px] font-bold text-[#1D2B1F] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES SERVED ── */}
      <section id="industries-served" className="w-full bg-[#F3EBDD] py-16 md:py-24 lg:py-24 xl:py-32 border-t border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="mb-12 md:mb-16">
            <FadeUp>
              <div className="inline-block mb-6">
                <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  INDUSTRIES SERVED
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-[36px] md:text-[52px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-4" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                Built for the full<br />mission landscape.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                If your organization moves the world forward, we know your world.
              </p>
            </FadeUp>
          </div>

          <div className="flex flex-col border-b border-[#1D2B1F]/20">
            {industries.map((industry, i) => (
              <FadeUp key={i} delay={300 + (i * 100)}>
                <div className={`border-t border-[#1D2B1F]/20 transition-colors duration-300 ${openIndustry === i ? 'bg-[#F7F0E6]' : 'hover:bg-[#F7F0E6]'}`}>
                  <button
                    onClick={() => toggleIndustry(i)}
                    className="w-full py-6 md:py-8 px-4 md:px-6 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <div className="pr-8">
                      <h3 className="text-[22px] md:text-[28px] lg:text-[22px] xl:text-[28px] text-[#1D2B1F] font-bold" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                        {industry.title}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#1D2B1F] text-[#1D2B1F] transition-transform duration-300 ${openIndustry === i ? 'rotate-180' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out px-4 md:px-6 ${openIndustry === i ? 'max-h-[800px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="space-y-4 mt-2">
                      {industry.paragraphs.map((para, pIndex) => (
                        <p key={pIndex} className="text-[15px] md:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CAUSEHOUSE ── */}
      <section id="why-causehouse" className="w-full bg-[#1D2B1F] py-16 md:py-24 lg:py-24 xl:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <FadeUp>
            <div className="inline-block mb-6 md:mb-8">
              <span className="px-[14px] py-[6px] border border-[#F7F0E6]/30 rounded-full text-[11px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                WHY CAUSEHOUSE
              </span>
            </div>
          </FadeUp>
          
          <FadeUp delay={100}>
            <h2 className="text-[36px] md:text-[52px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-white font-bold mb-16 md:mb-24" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              We don't do one-off projects. We build<br className="hidden md:block" /> houses.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <FadeUp delay={200} className="h-full">
              <div className="border border-[#F7F0E6]/20 rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#243326]">
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#BFEA4B] mb-4 leading-tight" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  We speak nonprofit<br /> fluently.
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#D1C9B9] font-[family-name:var(--font-inter)] leading-relaxed">
                  No explaining your donor segments, fiscal year, or board approval timelines. We've been inside the work — we know the constraints, the culture, and what it takes to build systems that actually get used.
                </p>
              </div>
            </FadeUp>

            {/* Card 2 */}
            <FadeUp delay={300} className="h-full">
              <div className="border border-[#F7F0E6]/20 rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#243326]">
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#BFEA4B] mb-4 leading-tight" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  Everything is built to<br /> connect.
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#D1C9B9] font-[family-name:var(--font-inter)] leading-relaxed">
                  Your website talks to your CRM. Your CRM talks to your donation forms. Your donation forms feed your reporting. Every room in the house is wired together from day one — not bolted on later.
                </p>
              </div>
            </FadeUp>

            {/* Card 3 */}
            <FadeUp delay={400} className="h-full">
              <div className="border border-[#F7F0E6]/20 rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#243326]">
                <h3 className="text-[24px] md:text-[28px] font-bold text-[#BFEA4B] mb-4 leading-tight" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  We stay until the house<br /> is livable.
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#D1C9B9] font-[family-name:var(--font-inter)] leading-relaxed">
                  We don't disappear after launch. We optimize, train your team, and keep iterating so the systems we built keep performing. Many clients stay on retainer for exactly this reason.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="w-full bg-[#F7F0E6] py-16 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <FadeUp>
            <div className="inline-block mb-6 md:mb-8">
              <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                WHAT CLIENTS SAY
              </span>
            </div>
          </FadeUp>
          
          <FadeUp delay={100}>
            <h2 className="text-[36px] md:text-[52px] lg:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-16 md:mb-24" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              Trusted by teams doing<br className="hidden md:block" /> real work.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <FadeUp delay={200} className="h-full">
              <div 
                className="border-[1.5px] border-[#1D2B1F] rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#F3EBDD]"
                style={{ boxShadow: "6px 6px 0px #1D2B1F" }}
              >
                <div className="flex-grow mb-8">
                  <p className="text-[17px] md:text-[18px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed italic">
                    "CauseHouse didn't just build us a website — they built us a system. Our donation rate jumped significantly within the first quarter."
                  </p>
                </div>
                <div className="pt-6 border-t border-[#1D2B1F]/20">
                  <h4 className="text-[11px] md:text-[12px] font-bold text-[#1D2B1F] uppercase tracking-[0.1em] mb-1">
                    EXECUTIVE DIRECTOR
                  </h4>
                  <p className="text-[14px] text-[#6B7A6D] font-[family-name:var(--font-inter)]">
                    Community Nonprofit
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Card 2 */}
            <FadeUp delay={300} className="h-full">
              <div 
                className="border-[1.5px] border-[#1D2B1F] rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#F3EBDD]"
                style={{ boxShadow: "6px 6px 0px #1D2B1F" }}
              >
                <div className="flex-grow mb-8">
                  <p className="text-[17px] md:text-[18px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed italic">
                    "They understood the nonprofit world immediately. No learning curve, no explanations needed. Just results. Our CRM finally makes sense."
                  </p>
                </div>
                <div className="pt-6 border-t border-[#1D2B1F]/20">
                  <h4 className="text-[11px] md:text-[12px] font-bold text-[#1D2B1F] uppercase tracking-[0.1em] mb-1">
                    DEVELOPMENT MANAGER
                  </h4>
                  <p className="text-[14px] text-[#6B7A6D] font-[family-name:var(--font-inter)]">
                    Advocacy Organization
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Card 3 */}
            <FadeUp delay={400} className="h-full">
              <div 
                className="border-[1.5px] border-[#1D2B1F] rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#F3EBDD]"
                style={{ boxShadow: "6px 6px 0px #1D2B1F" }}
              >
                <div className="flex-grow mb-8">
                  <p className="text-[17px] md:text-[18px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed italic">
                    "The house metaphor is real. Our campaigns, site, and CRM finally talk to each other. We actually know where our donors are coming from."
                  </p>
                </div>
                <div className="pt-6 border-t border-[#1D2B1F]/20">
                  <h4 className="text-[11px] md:text-[12px] font-bold text-[#1D2B1F] uppercase tracking-[0.1em] mb-1">
                    CAMPAIGN DIRECTOR
                  </h4>
                  <p className="text-[14px] text-[#6B7A6D] font-[family-name:var(--font-inter)]">
                    Political Campaign
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── COMMON QUESTIONS ── */}
      <section id="faq" className="w-full bg-[#F3EBDD] py-16 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <FadeUp>
            <div className="inline-block mb-6 md:mb-8">
              <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                COMMON QUESTIONS
              </span>
            </div>
          </FadeUp>
          
          <FadeUp delay={100}>
            <h2 className="text-[36px] md:text-[52px] lg:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-16 md:mb-24 max-w-[800px]" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              Before we break ground, let's clear the air.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <FadeUp delay={200} className="h-full">
              <div 
                className="border-[1.5px] border-[#1D2B1F] rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#F7F0E6]"
                style={{ boxShadow: "6px 6px 0px #1D2B1F" }}
              >
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#1D2B1F] mb-4 leading-tight" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  Do you work with small nonprofits or only large organizations?
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-2">
                  We work with nonprofits at every stage — from scrappy teams of three to organizations with eight-figure budgets. Our systems scale with you.
                </p>
              </div>
            </FadeUp>

            {/* Card 2 */}
            <FadeUp delay={300} className="h-full">
              <div 
                className="border-[1.5px] border-[#1D2B1F] rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#F7F0E6]"
                style={{ boxShadow: "6px 6px 0px #1D2B1F" }}
              >
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#1D2B1F] mb-4 leading-tight" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  We're a campaign team, not a traditional nonprofit. Do you work with us?
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-2">
                  Absolutely. Campaigns are some of our fastest-moving clients. We build landing pages, supporter funnels, and systems that work on campaign timelines — not six-month agency cycles.
                </p>
              </div>
            </FadeUp>

            {/* Card 3 */}
            <FadeUp delay={400} className="h-full">
              <div 
                className="border-[1.5px] border-[#1D2B1F] rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#F7F0E6]"
                style={{ boxShadow: "6px 6px 0px #1D2B1F" }}
              >
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#1D2B1F] mb-4 leading-tight" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  What if we're not sure exactly what we need?
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-2">
                  That's exactly why we start with an audit. We map your current digital footprint and tell you plainly what's worth keeping, what needs to be rebuilt, and what the fastest path to growth looks like.
                </p>
              </div>
            </FadeUp>

            {/* Card 4 */}
            <FadeUp delay={500} className="h-full">
              <div 
                className="border-[1.5px] border-[#1D2B1F] rounded-2xl p-8 md:p-10 flex flex-col h-full bg-[#F7F0E6]"
                style={{ boxShadow: "6px 6px 0px #1D2B1F" }}
              >
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#1D2B1F] mb-4 leading-tight" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  Do we need to buy all your services, or can we start with one?
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-2">
                  Most clients start with one room and expand. We can begin with a website rebuild, a CRM cleanup, or a single campaign — and grow the full house from there.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <StartBuildingSection />

    </div>
  );
}
