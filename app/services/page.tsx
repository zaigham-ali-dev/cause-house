"use client";

import Link from "next/link";
import { useState } from "react";
import FadeUp from "@/components/FadeUp";

/* ─── DATA ─────────────────────────────────────────────────── */

const services = [
  { number: "01", title: "Web Design & Dev",       subtitle: "Websites that earn trust and drive donations.",           description: "High-converting nonprofit websites built for accessibility, speed, and donor action — from strategy through launch." },
  { number: "02", title: "Fundraising Strategy",   subtitle: "Campaigns and donor journeys built to compound.",         description: "Monthly giving programs, GivingTuesday campaigns, and full-funnel donor journeys engineered for recurring revenue." },
  { number: "03", title: "CRM Consulting",         subtitle: "Clean data. Smart segmentation. Better retention.",       description: "CRM architecture, migrations, deduplication, and automation — the connective tissue every growing nonprofit needs." },
  { number: "04", title: "Salesforce NPSP",        subtitle: "Salesforce built for the way nonprofits actually work.",  description: "NPSP implementation, Flows, reporting, and custom architecture designed by consultants who live in the nonprofit world." },
  { number: "05", title: "Landing Pages",          subtitle: "Pages built to convert, not just look good.",            description: "Donation pages, petition pages, event sign-ups — every landing page is conversion-engineered and CRM-connected." },
  { number: "06", title: "Analytics & Reporting",  subtitle: "Know exactly what's working and what's not.",            description: "Dashboards, donor journey mapping, CRM health checks, and conversion reporting built for every team size." },
  { number: "07", title: "Automations",            subtitle: "Your mission on autopilot between campaigns.",           description: "Welcome series, re-engagement flows, event follow-ups, and donor stewardship automations that run while your team sleeps." },
  { number: "08", title: "Creative & Branding",    subtitle: "A brand your donors feel before they give.",             description: "Brand strategy, visual identity, campaign creative, and messaging systems that make your mission unmistakable." },
];

const steps = [
  { number: "01", title: "Audit the foundation",  description: "We map your digital footprint — website, CRM, campaigns, donor journey — and find exactly what's blocking growth." },
  { number: "02", title: "Architect the system",  description: "We design the full stack: messaging, UX, donor flows, CRM schema, and reporting in one connected blueprint." },
  { number: "03", title: "Wire every room",        description: "We build and connect every layer — website, forms, automations, data — so the whole house works as one system." },
  { number: "04", title: "Optimize and scale",     description: "Post-launch, we track performance and keep iterating so your mission has a home that grows as fast as you do." },
];

const industries = [
  { name: "Social Service Nonprofits",  subtitle: "Food security, housing, youth & family programs, and crisis response.",                        detail: "We design donation and volunteer funnels that speak to urgency without exploiting pain, wire program outcomes into reporting your board can trust, and structure CRM data so case work and development stay aligned — without turning beneficiaries into marketing assets." },
  { name: "Advocacy & Policy",          subtitle: "Grassroots campaigns, coalitions, and policy shops that need to move people fast.",              detail: "Rapid-response landing pages, petition and action flows, email capture tied to CRM segments, and analytics that show which messages convert — so your organizers spend time on strategy, not wrestling with broken forms or siloed supporter data." },
  { name: "Environmental Orgs",         subtitle: "Climate, conservation, and outdoor access — missions that depend on long-term trust.",            detail: "We build recurring giving and membership journeys that match how supporters actually engage, pair storytelling with conversion-focused UX, and connect every touchpoint to clean attribution so you know what funding actually scales." },
  { name: "Health & Wellness",          subtitle: "Clinics, mental health, recovery, and community wellness — where credibility is everything.",    detail: "Sensitive-topic messaging, HIPAA-aware workflows where they apply, appointment and referral paths that reduce friction, and fundraising systems that respect patient dignity while still driving sustainable revenue for care delivery." },
  { name: "Community Foundations",      subtitle: "Donor-advised funds, grantmaking, and place-based philanthropy with many stakeholders.",         detail: "We clarify donor journeys across annual, endowed, and field-of-interest giving; make grant and scholarship stories discoverable; and integrate CRM + web so donor services, finance, and communications aren't fighting three different sources of truth." },
  { name: "Educational Nonprofits",     subtitle: "Schools, literacy, scholarships, and out-of-school programs reaching families and funders.",     detail: "Enrollment and inquiry flows, multilingual content where communities need it, scholarship and alumni storytelling, and reporting that connects student outcomes to donor impact — built so program staff can update the site without a developer on speed dial." },
  { name: "Arts & Culture",             subtitle: "Theaters, museums, music, and cultural institutions balancing audiences and donors.",             detail: "Membership and subscription models, campaign microsites for productions and exhibits, patron data that flows into CRM for stewardship, and donation experiences that feel as polished as your programming." },
];

const testimonials = [
  { quote: "CauseHouse didn't just build us a website — they built us a system. Our donation rate jumped significantly within the first quarter.", author: "Executive Director", org: "Community Nonprofit" },
  { quote: "They understood the nonprofit world immediately. No learning curve, just results. Our CRM finally makes sense.",                      author: "Development Manager", org: "Advocacy Organization" },
  { quote: "The house metaphor is real — they really do build everything together. Our campaigns, site, and CRM finally talk to each other.",     author: "Campaign Director",   org: "Political Campaign" },
];

const faqs = [
  { q: "Do you work with small nonprofits or only large organizations?",       a: "We work with nonprofits at every stage — from scrappy teams of three to organizations with eight-figure budgets. Our systems scale with you." },
  { q: "Do I need to buy all the services, or can I start with one?",          a: "Most clients start with one service and expand over time. We can begin with a website redesign, a CRM cleanup, or a single campaign — and build the full house from there." },
  { q: "How long does a typical engagement take?",                             a: "Depends on scope. A campaign landing page can be live in two weeks. A full CRM migration and website rebuild typically runs 8–16 weeks. We'll give you a clear timeline upfront." },
  { q: "We're not tech-savvy. Will we be able to manage our own systems?",     a: "Yes. We build everything with your team's capacity in mind. Every project includes documentation, training, and a handoff plan so you own the house we build." },
  { q: "What CRMs do you work with?",                                          a: "Salesforce NPSP/NPC is our primary specialty. We also work with HubSpot, Bloomerang, EveryAction, Blackbaud, and more." },
  { q: "Do you offer ongoing retainer support?",                               a: "Yes — many clients stay on a monthly retainer after launch for optimization, reporting, and campaign support. It's how the biggest gains happen." },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openIndustry, setOpenIndustry] = useState<number | null>(null);

  return (
    <div className="bg-[#F7F0E6]">

      {/* ── HERO ── */}
      <section className="w-full bg-[#1D2B1F] pt-16 md:pt-24 lg:pt-28 xl:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

          {/* Badge */}
          <FadeUp>
            <div className="inline-block mb-6 md:mb-8">
              <span className="px-[14px] py-[6px] border border-[#F7F0E6]/30 rounded-full text-[11px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                NONPROFIT MARKETING SERVICES
              </span>
            </div>
          </FadeUp>

          {/* Heading */}
          <FadeUp delay={100}>
            <h1
              className="text-[52px] md:text-[72px] lg:text-[72px] xl:text-[104px] leading-[1.02] tracking-[-0.02em] text-[#F7F0E6] font-bold max-w-[20ch] mb-6 md:mb-8"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Every room your mission<br />needs to grow.
            </h1>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={200}>
            <p className="text-[19px] lg:text-[16px] xl:text-[19px] text-[#F7F0E6] font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl mb-8 md:mb-10">
              CauseHouse builds the full digital house — websites, fundraising systems, CRM infrastructure, analytics, and creative — all wired together so your nonprofit can scale trust, donations, and impact.
            </p>
          </FadeUp>

          {/* Buttons */}
          <FadeUp delay={300}>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-16 md:mb-24">
              <Link
                href="/work-with-us"
                className="px-8 min-h-[52px] inline-flex items-center justify-center bg-[#BFEA4B] rounded-full text-[12.881px] font-bold text-[#1D2B1F] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] shadow-[0_0_0_6px_rgba(247,240,230,0.15)]"
              >
                WORK WITH US
              </Link>
              <Link
                href="#services"
                className="px-8 min-h-[52px] inline-flex items-center justify-center border border-[#F7F0E6]/40 rounded-full text-[12.881px] font-bold text-[#F7F0E6] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] shadow-[0_0_0_3px_rgba(247,240,230,0.15)]"
              >
                EXPLORE SERVICES ↓
              </Link>
            </div>
          </FadeUp>

          {/* Stats Row */}
          <FadeUp delay={400}>
            <div className="w-full pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "$10M+", label: "IN FUNDRAISING\nSYSTEMS SUPPORTED" },
                { value: "50+",   label: "NONPROFIT CLIENTS SERVED" },
                { value: "8+",    label: "SERVICES UNDER ONE ROOF" },
                { value: "100%",  label: "MISSION-FOCUSED WORK" },
              ].map((s) => (
                <div key={s.value} className="text-center md:text-left">
                  <p
                    className="font-extrabold leading-none tracking-tight text-[#BFEA4B] text-[52px] md:text-[64px] lg:text-[52px] xl:text-[72px]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[10px] md:text-[11px] text-[#F7F0E6] font-[family-name:var(--font-inter)] font-bold tracking-[0.12em] mt-2 leading-snug whitespace-pre-line">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section id="services" className="w-full bg-[#F7F0E6] py-16 md:py-24 lg:py-24 xl:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

          <FadeUp>
            <div className="inline-block mb-4">
              <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                WHAT WE BUILD
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-[40px] md:text-[56px] lg:text-[48px] xl:text-[68px] leading-[1.05] tracking-tight text-[#1D2B1F] font-bold mb-3" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              Eight services. One house.
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[15px] md:text-[17px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed max-w-sm mb-10">
              Every service is designed to work standalone — or connect with every other room we build. Start anywhere. Grow everywhere.
            </p>
          </FadeUp>

          <div className="border-t border-[#1D2B1F]/15">
            {services.map((svc, i) => (
              <FadeUp key={i} delay={i * 50}>
                <div className="flex items-start justify-between gap-6 py-8 md:py-10 border-b border-[#1D2B1F]/15 group cursor-pointer hover:bg-[#1D2B1F]/[0.02] transition-colors">
                  <div className="flex items-start gap-2 flex-1">
                    <span className="text-[11px] text-[#6B7A6D] font-bold font-[family-name:var(--font-inter)] mt-3 shrink-0">{svc.number}</span>
                    <div className="flex-1">
                      <h3 className="text-[44px] lg:text-[36px] xl:text-[44px] text-[#1D2B1F] font-bold leading-tight mb-2" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                        {svc.title}
                      </h3>
                      <p className="text-[30px] lg:text-[24px] xl:text-[30px] text-[#6B7A6D] font-bold leading-snug mb-2" style={{ fontFamily: "var(--font-fraunces), serif" }}>{svc.subtitle}</p>
                      <p className="text-[19px] lg:text-[16px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl">{svc.description}</p>
                    </div>
                  </div>
                  <span className="text-[#1D2B1F]/30 group-hover:text-[#1D2B1F] transition-colors text-[20px] mt-2 shrink-0">→</span>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="w-full bg-[#1D2B1F] py-16 md:py-24 lg:py-24 xl:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

          {/* Header */}
          <div className="mb-14 md:mb-20">
            <FadeUp>
              <div className="inline-block mb-8">
                <span className="px-[14px] py-[6px] border border-[#F7F0E6]/30 rounded-full text-[11px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">HOW WE WORK</span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-[60px] lg:text-[48px] xl:text-[60px] leading-[1.02] tracking-tight text-[#F7F0E6] font-bold mb-5" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                The house method.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-[19px] lg:text-[16px] xl:text-[19px] text-[#F7F0E6]/65 font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl">
                Four phases. One connected result. Every engagement follows the same foundation.
              </p>
            </FadeUp>
          </div>

          {/* Steps Grid */}
          <FadeUp delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-4 border border-[#F7F0E6]/25 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-[#F7F0E6]/25">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col p-8">
                  <div className="w-[36px] h-[36px] bg-[#BFEA4B] rounded-full flex items-center justify-center text-[13px] font-bold text-[#1D2B1F] mb-6 shrink-0 font-[family-name:var(--font-inter)]">
                    {step.number}
                  </div>
                  <h3 className="text-[30px] lg:text-[24px] xl:text-[30px] text-[#F7F0E6] font-bold leading-tight mb-3" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-[19px] lg:text-[16px] xl:text-[19px] text-[#F7F0E6]/65 font-[family-name:var(--font-inter)] leading-relaxed mt-3">{step.description}</p>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="w-full bg-[#F3EBDD] py-16 md:py-24 lg:py-24 xl:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

          <FadeUp>
            <div className="inline-block mb-6">
              <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">INDUSTRIES SERVED</span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-[40px] md:text-[56px] lg:text-[48px] xl:text-[68px] leading-[1.05] tracking-tight text-[#1D2B1F] font-bold mb-4" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              Built for the full<br />mission landscape.
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-[15px] md:text-[17px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed max-w-lg mb-12">
              Open any sector to see how we typically partner — websites, CRM, campaigns, and analytics tuned to how your field actually operates.
            </p>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="border-t border-[#1D2B1F]/20">
              {industries.map((ind, i) => (
                <div key={i} className="border-b border-[#1D2B1F]/20">
                  <button
                    onClick={() => setOpenIndustry(openIndustry === i ? null : i)}
                    className="w-full flex items-center justify-between py-8 md:py-10 text-left px-4 hover:bg-[#F3EBDD]/60 transition-colors rounded-sm"
                  >
                    <div>
                      <p
                        className="text-[26px] md:text-[30px] lg:text-[24px] xl:text-[30px] text-[#1D2B1F] font-bold leading-tight"
                        style={{ fontFamily: "var(--font-fraunces), serif" }}
                      >
                        {ind.name}
                      </p>
                      <p className="text-[15px] md:text-[17px] text-[#6B7A6D] font-[family-name:var(--font-inter)] mt-1 leading-snug">
                        {ind.subtitle}
                      </p>
                    </div>
                    <svg
                      className={`shrink-0 ml-6 w-4 h-4 text-[#1D2B1F] transition-transform duration-300 ${openIndustry === i ? "rotate-180" : ""}`}
                      viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {openIndustry === i && (
                    <div className="pb-8 px-4">
                      <div className="bg-[#F7F0E6] rounded-lg p-6 md:p-7">
                        <p className="text-[16px] md:text-[17px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">{ind.detail}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="w-full bg-[#F7F0E6] py-10 md:py-14 border-t border-b border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <FadeUp>
            <div className="inline-block mb-6">
              <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">WHAT CLIENTS SAY</span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2
              className="text-[40px] md:text-[56px] lg:text-[48px] xl:text-[56px] leading-[1.05] tracking-tight text-[#1D2B1F] font-bold mb-10 md:mb-12"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Trusted by nonprofit<br />teams doing real work.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 100}>
                <article className="rounded-xl border border-[#1D2B1F] bg-[#F3EBDD] p-6 flex flex-col h-full shadow-[4px_4px_0px_0px_#1D2B1F]">
                  <p className="text-[14px] md:text-[15px] text-[#1D2B1F]/75 font-[family-name:var(--font-inter)] leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-[#1D2B1F]/10 pt-4">
                    <p className="text-[11px] text-[#1D2B1F] font-bold tracking-[0.12em] uppercase font-[family-name:var(--font-inter)]">{t.author}</p>
                    <p className="text-[13px] text-[#6B7A6D] font-[family-name:var(--font-inter)] mt-1">{t.org}</p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full bg-[#F3EBDD] py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

          <FadeUp>
            <div className="inline-block mb-6">
              <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">COMMON QUESTIONS</span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-[48px] md:text-[60px] lg:text-[48px] xl:text-[60px] leading-[1.05] tracking-tight text-[#1D2B1F] font-bold mb-10 md:mb-12 max-w-2xl" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              Before we break ground, let&apos;s clear the air.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div className="border-2 border-[#1D2B1F] rounded-xl bg-[#F7F0E6] p-6 flex flex-col h-full shadow-[4px_4px_0px_0px_#1D2B1F]">
                  <h3
                    className="text-[22px] md:text-[26px] lg:text-[22px] xl:text-[26px] text-[#1D2B1F] font-bold leading-snug mb-3"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    {faq.q}
                  </h3>
                  <p className="text-[16px] md:text-[17px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-3">
                    {faq.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* ── CASE STUDIES CTA ── */}
      <section className="w-full bg-[#F7F0E6] py-20 md:py-28 border-t border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

          <FadeUp>
            <div className="inline-block mb-4">
              <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">GO DEEPER</span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-[60px] lg:text-[48px] xl:text-[60px] leading-[1.05] tracking-tight text-[#1D2B1F] font-bold mb-4" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              Case studies and<br />insights.
            </h2>
            <p className="text-[19px] lg:text-[16px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed max-w-2xl mb-12">
              See how we&apos;ve applied these services for real nonprofits — and read the strategy behind the work.
            </p>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  label: "CASE STUDIES",
                  text: "Real results for real nonprofits — web design, CRM, SEO, and fundraising systems in action.",
                  link: "/case-studies",
                  cta: "VIEW ALL CASE STUDIES →",
                },
                {
                  label: "INSIGHTS & STRATEGY",
                  text: "Playbooks, definitions, and practical guides for nonprofit marketing, CRM, and digital fundraising.",
                  link: "/resources",
                  cta: "BROWSE INSIGHTS →",
                },
                {
                  label: "WORK WITH US",
                  text: "Ready to build? Book a 30-minute call or send a message — we reply to every serious inquiry.",
                  link: "/work-with-us",
                  cta: "GET IN TOUCH →",
                },
              ].map((card, i) => (
                <Link key={i} href={card.link} className="group flex flex-col gap-3 rounded-xl border-2 border-[#1D2B1F] bg-[#F3EBDD] p-6 shadow-[4px_4px_0px_0px_#1D2B1F] hover:shadow-[2px_2px_0px_0px_#1D2B1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <span className="text-[12.881px] font-semibold tracking-[0.12em] uppercase text-[#1D2B1F] font-[family-name:var(--font-inter)]">{card.label}</span>
                  <p className="text-[19px] lg:text-[16px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed flex-1">{card.text}</p>
                  <span className="text-[12px] font-bold text-[#1D2B1F] tracking-[0.08em] uppercase font-[family-name:var(--font-inter)] group-hover:opacity-70 transition-opacity">{card.cta}</span>
                </Link>
              ))}
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ── START BUILDING ── */}
      <section className="w-full bg-[#BFEA4B] py-12 md:py-16 lg:py-20 overflow-hidden border-t-2 border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
            <div className="flex-1">
              <FadeUp>
                <div className="inline-block mb-6 md:mb-8">
                  <span className="px-[14px] py-[6px] bg-[#1D2B1F] rounded-full text-[12px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)]">START BUILDING</span>
                </div>
              </FadeUp>
              <FadeUp delay={100}>
                <h2 className="text-[48px] md:text-[60px] lg:text-[60px] xl:text-[92px] leading-[1.05] tracking-tight text-[#1D2B1F] font-bold max-w-[18ch]" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  Ready to build a stronger house for your mission?
                </h2>
              </FadeUp>
            </div>
            <FadeUp delay={200}>
              <div className="flex-shrink-0 lg:mr-12 xl:mr-24">
                <Link href="/work-with-us" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#1D2B1F] rounded-full text-[15px] md:text-[18px] font-bold text-white tracking-[0.05em] uppercase font-[family-name:var(--font-inter)] transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
                  WORK WITH US
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

    </div>
  );
}
