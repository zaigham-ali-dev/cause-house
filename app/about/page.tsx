"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How much do you charge?",
      answer: "It depends on scope — we do not do one-size-fits-all pricing. Nonprofit websites often start around $4K for focused builds and can range up to roughly $200K+ for large programs with deep strategy, custom systems, integrations, and ongoing optimization. Campaign work, Salesforce, and retainers are scoped separately. On a call we will give you a realistic range for your goals and constraints."
    },
    {
      question: "How long does a project usually take?",
      answer: "Timelines vary by deliverables: a tight site or landing initiative might be a few weeks; a full site with content, integrations, and QA is often several months. We will share a phased plan with milestones so your team knows what happens when — and we build in room for your approvals and fundraising reality."
    },
    {
      question: "Do you only work with large nonprofits?",
      answer: "No. We work with mission-driven organizations at different stages — from lean teams that need a strong digital foundation to national brands modernizing CRM and campaigns. What matters is fit: clear goals, willingness to collaborate, and a commitment to putting constituents first."
    },
    {
      question: "What happens on a first call?",
      answer: "We listen. You share what you are trying to grow, what is broken or missing, and any deadlines or grants in play. We ask clarifying questions, outline realistic options, and if there is a fit we suggest a sensible first project — no pressure and no jargon wall."
    },
    {
      question: "Can you work with our existing Salesforce or CRM?",
      answer: "Yes. We regularly extend and clean up Salesforce NPSP and connected tools, and we can partner with your admin or lead technical stakeholders. If you are on another platform, we will still help you map journeys and integrations so donors and staff are not stuck in silos."
    },
    {
      question: "Do you offer support after launch?",
      answer: "Most clients want iteration after go-live: analytics, A/B tests, campaign builds, and small product improvements. We offer ongoing support and retainers scoped to your roadmap so you are not left maintaining a complex stack alone."
    },
    {
      question: "How do we get started?",
      answer: "Start with a conversation — use Work with us to book a call or send context on what you need. We will respond with next steps, and if we are the right partner we will propose a clear scope and timeline."
    }
  ];

  return (
    <div className="bg-[#F7F0E6]">

      {/* ── HERO ── */}
      <section className="w-full bg-[#1D2B1F] pt-16 md:pt-24 lg:pt-28 xl:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <FadeUp>
            <div className="inline-block mb-6 md:mb-8">
              <span className="inline-block px-[14px] py-[6px] border border-[#F7F0E6]/30 rounded-full text-[11px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                ABOUT CAUSEHOUSE
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1
              className="mt-6 max-w-[20ch] text-[#F7F0E6] text-[48px] md:text-[60px] lg:text-[60px] xl:text-[92px] leading-[1.05] tracking-tight font-bold"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              The people and principles<br />behind <span className="inline-block text-[#BFEA4B]">the house.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-7 max-w-2xl text-[16px] md:text-[19px] lg:text-[16px] xl:text-[19px] text-[#F7F0E6]/70 font-[family-name:var(--font-inter)] leading-relaxed">
              We are a nonprofit-focused digital studio — websites, fundraising systems, CRM, analytics, and creative — wired together so your mission can scale.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <Link
              href="#about"
              className="mt-10 inline-flex items-center justify-center min-h-[52px] px-6 md:px-8 bg-[#BFEA4B] text-[#1D2B1F] rounded-full text-[12px] md:text-[13px] font-bold tracking-[0.05em] uppercase font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_#4F5952] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#4F5952] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none duration-300"
            >
              EXPLORE CAUSEHOUSE ↓
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── WHAT IS CAUSEHOUSE ── */}
      <section id="what-is-causehouse" className="w-full bg-[#F7F0E6] py-16 md:py-24 lg:py-24 xl:py-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 max-w-2xl">
              <FadeUp>
                <div className="inline-block mb-6">
                  <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">WHAT IS CAUSEHOUSE?</span>
                </div>
              </FadeUp>
              <FadeUp delay={100}>
                <h2 className="text-[36px] md:text-[52px] lg:text-[48px] xl:text-[56px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-6" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  A nonprofit digital studio<br className="hidden lg:block" />
                  that wires <span style={{ color: "#BFEA4B", WebkitTextStroke: "1.5px #1D2B1F", textShadow: "3px 3px 0px #1D2B1F" }}>everything</span><br className="hidden lg:block" />
                  together.
                </h2>
              </FadeUp>
              <FadeUp delay={200}>
                <div className="space-y-6 text-[16px] md:text-[19px] lg:text-[16px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                  <p>CauseHouse is a full-service digital marketing and growth studio built for nonprofits. We treat every engagement as one connected system — not a one-off website or a disconnected CRM project — so donors, advocates, and staff get one coherent experience.</p>
                  <p>Whether you need a new site, a fundraising funnel, Salesforce NPSP, or reporting leadership actually uses, we scope work for your stage and build it to connect to the next room when you are ready.</p>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={300}>
              <div className="flex-shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto">
                <div className="rounded-xl border-[2px] border-[#1D2B1F] bg-[#F7F0E6] px-10 py-12 md:px-14 md:py-14 shadow-[6px_6px_0px_0px_#1D2B1F] text-center flex flex-col items-center justify-center">
                  <p className="font-extrabold leading-none tracking-tight text-[#1D2B1F] text-[64px] md:text-[80px]" style={{ fontFamily: "var(--font-fraunces), serif" }}>$10M+</p>
                  <p className="text-[14px] md:text-[15px] text-[#6B7A6D] font-[family-name:var(--font-inter)] mt-3 leading-snug">in fundraising infrastructure<br />supported</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section id="how-we-work" className="w-full bg-[#F3EBDD] py-16 md:py-24 lg:py-24 xl:py-32 border-t border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="max-w-2xl mb-12 lg:mb-20">
            <FadeUp>
              <div className="inline-block mb-6">
                <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  HOW WE WORK
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-[36px] md:text-[52px] lg:text-[48px] xl:text-[56px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-6" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                Mission first. Systems<br />always.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-[16px] md:text-[19px] lg:text-[16px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                Most agencies sell a room. We wire the house — so your site, forms, CRM, and reporting reinforce each other instead of fighting for attention. That is how you scale without doubling headcount.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <FadeUp delay={300} className="h-full">
              <div className="h-full flex flex-col rounded-xl border-[2px] border-[#1D2B1F] bg-[#F7F0E6] p-8 lg:p-7 xl:p-10 shadow-[6px_6px_0px_0px_#1D2B1F] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1D2B1F] cursor-pointer">
                <div className="inline-flex items-center justify-center px-[10px] py-[4px] rounded-full bg-[#1D2B1F] text-[#BFEA4B] text-[11px] font-bold tracking-widest mb-6 self-start">01</div>
                <h3 className="text-[24px] md:text-[28px] lg:text-[22px] xl:text-[28px] leading-[1.2] text-[#1D2B1F] font-bold mb-4" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  Systems, not one-off<br />projects
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[14px] xl:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-auto">
                  We map the full supporter journey — first visit, donation, follow-up, retention — so every touchpoint works as one connected system.
                </p>
              </div>
            </FadeUp>
            
            {/* Card 2 */}
            <FadeUp delay={400} className="h-full">
              <div className="h-full flex flex-col rounded-xl border-[2px] border-[#1D2B1F] bg-[#F7F0E6] p-8 lg:p-7 xl:p-10 shadow-[6px_6px_0px_0px_#1D2B1F] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1D2B1F] cursor-pointer">
                <div className="inline-flex items-center justify-center px-[10px] py-[4px] rounded-full bg-[#1D2B1F] text-[#BFEA4B] text-[11px] font-bold tracking-widest mb-6 self-start">02</div>
                <h3 className="text-[24px] md:text-[28px] lg:text-[22px] xl:text-[28px] leading-[1.2] text-[#1D2B1F] font-bold mb-4" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  Creative with<br />accountability
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[14px] xl:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-auto">
                  Messaging, UX, campaign creative, and reporting live inside one measurable framework built for long-term growth.
                </p>
              </div>
            </FadeUp>

            {/* Card 3 */}
            <FadeUp delay={500} className="h-full">
              <div className="h-full flex flex-col rounded-xl border-[2px] border-[#1D2B1F] bg-[#F7F0E6] p-8 lg:p-7 xl:p-10 shadow-[6px_6px_0px_0px_#1D2B1F] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1D2B1F] cursor-pointer">
                <div className="inline-flex items-center justify-center px-[10px] py-[4px] rounded-full bg-[#1D2B1F] text-[#BFEA4B] text-[11px] font-bold tracking-widest mb-6 self-start">03</div>
                <h3 className="text-[24px] md:text-[28px] lg:text-[22px] xl:text-[28px] leading-[1.2] text-[#1D2B1F] font-bold mb-4" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  Connected<br />infrastructure
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[14px] xl:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-auto">
                  Your website, donor journey, CRM, and reporting should be one ecosystem — not a patchwork of tools that barely talk.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section id="our-story" className="w-full bg-[#F7F0E6] py-16 md:py-24 lg:py-24 xl:py-32 border-t border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Image Column */}
            <FadeUp className="w-full lg:w-4/12 xl:w-1/3 flex-shrink-0">
              <div className="sticky top-32 inline-block w-full max-w-sm">
                <div className="rounded-[16px] border-[2px] border-[#1D2B1F] bg-[#F7F0E6] overflow-hidden shadow-[6px_6px_0px_0px_#1D2B1F]">
                  <Image 
                    src="/pictured/headshot.webp" 
                    alt="Yeshaya Shapiro, founder of CauseHouse" 
                    width={400} 
                    height={500} 
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </FadeUp>

            {/* Text Column */}
            <div className="w-full lg:w-8/12 xl:w-2/3 flex-1">
              <FadeUp>
                <div className="inline-block mb-6">
                  <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                    OUR STORY
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={100}>
                <h2 className="text-[36px] md:text-[52px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-6 max-w-[28ch]" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  From the field to a nonprofit-only studio.
                </h2>
              </FadeUp>
              
              <div className="space-y-6 text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                <FadeUp delay={200}>
                  <p>
                    CauseHouse was founded by Yeshaya Shapiro. The work began as Yeshaya.dev — a digital practice built to bring serious web and marketing craft to mission-driven organizations. As nonprofit engagements grew, the focus narrowed to nonprofits and mission-led groups almost exclusively, and that practice became CauseHouse. Today Shapiro leads the studio with his brother and a small team.
                  </p>
                </FadeUp>
                <FadeUp delay={300}>
                  <p>
                    Shapiro did not start as a developer. He came up through grassroots activism — organizing, coalition-building, and campaigns — and saw how hard nonprofit teams work, and how often impact is capped by weak tooling and dated digital strategy.
                  </p>
                </FadeUp>
                <FadeUp delay={400}>
                  <p>
                    He learned to code to build what those movements needed, then combined engineering with ethical, data-aware marketing so digital work could multiply reach and fundraising instead of getting in the way. Yeshaya.dev was founded on the idea that nonprofits deserve the same rigor as large brands: custom, high-performance systems instead of templates and cookie-cutter sites.
                  </p>
                </FadeUp>
                <FadeUp delay={500}>
                  <p>
                    The arc runs from on-the-ground organizing in 2020 through self-taught development, nonprofit campaigns, and first nonprofit builds in the years that followed, to launching Yeshaya.dev in 2024 as a full-service agency dedicated to nonprofits and mission-driven brands. That path — activism to code, marketing to mission — is what shaped CauseHouse into the studio it is now.
                  </p>
                </FadeUp>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PARTNERSHIPS ── */}
      <section id="partnerships" className="w-full bg-[#F3EBDD] py-16 md:py-24 lg:py-24 xl:py-32 border-t border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-8">
            <div className="w-full lg:max-w-2xl">
              <FadeUp>
                <div className="inline-block mb-6">
                  <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                    PARTNERSHIPS
                  </span>
                </div>
              </FadeUp>
              <FadeUp delay={100}>
                <h2 className="text-[36px] md:text-[52px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-6" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                  The stacks we<br />implement beside your<br />mission.
                </h2>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                  From Salesforce and Blackbaud to Donorbox, Fundraise Up, Engaging Networks, and the automation layer in between — CauseHouse goes deep where your roadmap points. Read how each partner fits, when we recommend them, and how to reach us if you build nonprofit software.
                </p>
              </FadeUp>
            </div>
            
            <FadeUp delay={300}>
              <div className="flex-shrink-0 lg:mr-12 xl:mr-24 mt-4 lg:mt-0">
                <Link href="/partners" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#1D2B1F] rounded-full text-[13px] md:text-[15px] font-bold text-white tracking-[0.05em] uppercase font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_#6B7A6D] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#6B7A6D] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none duration-300">
                  VIEW PARTNERSHIPS
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── EXPLORE ── */}
      <section id="explore" className="w-full bg-[#F3EBDD] py-16 md:py-24 lg:py-24 xl:py-32 border-t border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="mb-12 md:mb-16">
            <FadeUp>
              <div className="inline-block mb-6">
                <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  EXPLORE
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-[36px] md:text-[52px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-6" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                Stories, proof, and next steps.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                Pick where you want to go — each page opens another door in the house.
              </p>
            </FadeUp>
          </div>
          
          <div className="flex flex-col border-b border-[#1D2B1F]/20">
            {[
              {
                title: "How we work",
                subtitle: "Our principles, systems thinking, and what we optimize for.",
                text: "Mission, accountability, and the connected infrastructure approach behind every website, CRM, fundraising, and reporting project we take on.",
                href: "/how-we-work"
              },
              {
                title: "Institutional website risk review",
                subtitle: "How we evaluate operational risk before recommending a redesign.",
                text: "Governance, accessibility, migration planning, publishing structure, and long-term maintainability — procurement-aware framing for nonprofits, associations, public agencies, and civic institutions.",
                href: "/risk-review"
              },
              {
                title: "Insights",
                subtitle: "Blog & articles on nonprofit digital strategy and systems.",
                text: "Fundraising, CRM, campaigns, and the occasional sharp take from the field — practical writing for leaders who ship.",
                href: "/insights"
              },
              {
                title: "Testimonials",
                subtitle: "What clients say — in their own words.",
                text: "Full Google reviews for CauseHouse: nonprofit web, campaigns, and growth work, quoted verbatim.",
                href: "/testimonials"
              },
              {
                title: "Careers",
                subtitle: "Join the team — or get on our radar for later.",
                text: "Open roles are posted here when we are hiring. You can still send a resume anytime; we keep strong candidates in mind.",
                href: "/careers"
              },
              {
                title: "Work with us",
                subtitle: "Book a call, send a message, or reach us directly.",
                text: "Calendly, contact form, email, and phone — we read every note and help you scope the right first project.",
                href: "/work-with-us"
              }
            ].map((item, i) => (
              <FadeUp key={i} delay={300 + (i * 100)}>
                <Link href={item.href} className="group block border-t border-[#1D2B1F]/20 py-8 md:py-12 transition-all">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="max-w-3xl pr-4">
                      <h3 className="text-[28px] md:text-[36px] lg:text-[28px] xl:text-[36px] text-[#1D2B1F] font-bold mb-2" style={{ fontFamily: "var(--font-fraunces), serif" }}>{item.title}</h3>
                      <h4 className="text-[18px] md:text-[22px] lg:text-[18px] xl:text-[22px] text-[#6B7A6D] font-bold mb-3" style={{ fontFamily: "var(--font-fraunces), serif" }}>{item.subtitle}</h4>
                      <p className="text-[15px] md:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-2 flex-shrink-0">
                      <span className="text-[11px] font-bold text-[#1D2B1F]/60 tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] flex items-center gap-1 group-hover:text-[#1D2B1F] transition-colors">
                        EXPLORE <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="w-full bg-[#F7F0E6] py-16 md:py-24 lg:py-24 xl:py-32 border-t border-[#1D2B1F]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="mb-12 md:mb-16">
            <FadeUp>
              <div className="inline-block mb-6">
                <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  FAQ
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="text-[36px] md:text-[52px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-6" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                Straight answers before you<br className="hidden md:block" /> reach out.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[18px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                Common questions about pricing, timelines, and how we work with<br className="hidden md:block" /> nonprofit teams — so you know what to expect.
              </p>
            </FadeUp>
          </div>
          
          <div className="flex flex-col border-b border-[#1D2B1F]/20">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={300 + (i * 50)}>
                <div className="border-t border-[#1D2B1F]/20">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full py-6 md:py-8 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <h3 className="text-[20px] md:text-[24px] lg:text-[20px] xl:text-[24px] text-[#1D2B1F] font-bold pr-8 transition-colors group-hover:text-[#6B7A6D]" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#1D2B1F] text-[#1D2B1F] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-[15px] md:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── START BUILDING ── */}
      <section className="w-full bg-[#BFEA4B] py-12 md:py-16 lg:py-20 border-t-2 border-[#1D2B1F]">
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

