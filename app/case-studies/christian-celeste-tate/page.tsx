import StartBuildingSection from "@/components/StartBuildingSection";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export default function ChristianCelesteTatePage() {
  return (
    <div className="bg-[#F7F0E6] min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="bg-[#1D2B1F] px-5 sm:px-8 md:px-10 py-24 md:py-32 lg:py-40 text-[#F7F0E6]">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-start gap-8">
                {/* Top Tags */}
                <FadeUp delay={0}>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-[#F7F0E6]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] uppercase">Case Study</span>
                    <span className="rounded-full border border-[#F7F0E6]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] uppercase">Campaign Website</span>
                    <span className="rounded-full border border-[#F7F0E6]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] uppercase">Multilingual Platform</span>
                  </div>
                </FadeUp>

                {/* Heading */}
                <FadeUp delay={100}>
                  <h1 className="text-[64px] sm:text-[80px] md:text-[96px] lg:text-[110px] font-bold leading-[0.9] tracking-[-0.02em]" style={{ fontFamily: "var(--font-fraunces), serif" }}>
                    CCT4NYC
                  </h1>
                </FadeUp>

                {/* Description */}
                <FadeUp delay={200}>
                  <p className="text-[17px] md:text-[19px] leading-[1.6] text-[#F7F0E6]/75 font-[family-name:var(--font-inter)] max-w-[540px]">
                    Designing and building a fully custom, multilingual digital platform for a New York Assembly campaign — fast, distinctive, and built to mobilize a community.
                  </p>
                </FadeUp>

                {/* Bottom Tags */}
                <FadeUp delay={300}>
                  <div className="flex flex-wrap gap-2.5 mt-2">
                    <span className="rounded-full border border-[#F7F0E6]/30 px-3.5 py-1 text-[10px] font-bold tracking-[0.1em] uppercase">Wordpress</span>
                    <span className="rounded-full border border-[#F7F0E6]/30 px-3.5 py-1 text-[10px] font-bold tracking-[0.1em] uppercase">Multilingual</span>
                    <span className="rounded-full border border-[#F7F0E6]/30 px-3.5 py-1 text-[10px] font-bold tracking-[0.1em] uppercase">ActBlue</span>
                    <span className="rounded-full border border-[#F7F0E6]/30 px-3.5 py-1 text-[10px] font-bold tracking-[0.1em] uppercase">Custom Dev</span>
                    <span className="rounded-full border border-[#F7F0E6]/30 px-3.5 py-1 text-[10px] font-bold tracking-[0.1em] uppercase">UX Design</span>
                  </div>
                </FadeUp>

                {/* Button */}
                <FadeUp delay={400}>
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#BFEA4B] px-8 py-3 text-[13px] font-bold tracking-[0.09em] text-[#1D2B1F] font-[family-name:var(--font-inter)] transition-transform hover:-translate-y-0.5"
                      style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.3)" }}
                    >
                      VISIT THE LIVE SITE &rarr;
                    </Link>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column - Image */}
              <FadeUp delay={200} className="lg:col-span-5 relative w-full h-full flex justify-center lg:justify-end">
                <div className="relative w-full aspect-[4/3] sm:max-w-[80%] lg:max-w-none lg:h-[350px] xl:h-[400px]">
                  <Image 
                    src="/case/1.webp" 
                    alt="CCT4NYC Website" 
                    fill 
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* At a Glance Section */}
        <section className="bg-[#F7F0E6] px-5 sm:px-8 md:px-10 py-20 lg:py-32">
          <div className="mx-auto max-w-[1200px]">
            <FadeUp delay={0}>
              <div className="mb-12">
                <span className="inline-block rounded-full border border-[#1D2B1F]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] uppercase mb-6">
                  AT A GLANCE
                </span>
                <h2 
                  className="text-[40px] leading-[1.05] sm:text-[52px] md:text-[64px] lg:text-[76px] font-bold text-[#1D2B1F] max-w-4xl tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  A grassroots campaign. A community to reach. One platform to do it all.
                </h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Card 1 */}
              <FadeUp delay={100}>
                <div className="bg-[#1D2B1F] rounded-xl p-8 h-full flex flex-col">
                  <h3 className="text-[#BFEA4B] text-[11px] font-bold tracking-[0.1em] uppercase mb-4">THE CAMPAIGN</h3>
                  <p className="text-[15px] leading-[1.7] text-[#F7F0E6]/90 font-[family-name:var(--font-inter)]">
                    Christian Celeste Tate is running for the New York State Assembly in Brooklyn&apos;s 54th District — a modern grassroots political movement that needed a platform to match.
                  </p>
                </div>
              </FadeUp>

              {/* Card 2 */}
              <FadeUp delay={200}>
                <div className="bg-[#1D2B1F] rounded-xl p-8 h-full flex flex-col">
                  <h3 className="text-[#BFEA4B] text-[11px] font-bold tracking-[0.1em] uppercase mb-4">THE DISTRICT</h3>
                  <p className="text-[15px] leading-[1.7] text-[#F7F0E6]/90 font-[family-name:var(--font-inter)]">
                    Brooklyn&apos;s 54th Assembly District is linguistically and culturally diverse. Reaching every corner required multilingual capability and community-first design, from the ground up.
                  </p>
                </div>
              </FadeUp>

              {/* Card 3 */}
              <FadeUp delay={300}>
                <div className="bg-[#1D2B1F] rounded-xl p-8 h-full flex flex-col">
                  <h3 className="text-[#BFEA4B] text-[11px] font-bold tracking-[0.1em] uppercase mb-4">THE ROLE</h3>
                  <p className="text-[15px] leading-[1.7] text-[#F7F0E6]/90 font-[family-name:var(--font-inter)]">
                    Full UX strategy, UI design, front-end development, WordPress CMS architecture, multilingual infrastructure, and campaign tech integration. Everything except the logo.
                  </p>
                </div>
              </FadeUp>

              {/* Card 4 */}
              <FadeUp delay={400}>
                <div className="bg-[#1D2B1F] rounded-xl p-8 h-full flex flex-col">
                  <h3 className="text-[#BFEA4B] text-[11px] font-bold tracking-[0.1em] uppercase mb-4">THE OUTCOME</h3>
                  <p className="text-[15px] leading-[1.7] text-[#F7F0E6]/90 font-[family-name:var(--font-inter)]">
                    A fully custom bilingual campaign site that communicates platform, processes ActBlue donations, mobilizes volunteers, and lets campaign staff manage content independently.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="bg-[#1D2B1F] px-5 sm:px-8 md:px-10 py-20 lg:py-32 text-[#F7F0E6]">
          <div className="mx-auto max-w-[1200px]">
            <FadeUp delay={0}>
              <div className="mb-12 md:mb-16 max-w-3xl">
                <span className="inline-block rounded-full border border-[#F7F0E6]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] uppercase mb-6">
                  THE CHALLENGE
                </span>
                <h2 
                  className="text-[40px] leading-[1.05] sm:text-[52px] md:text-[64px] font-bold tracking-[-0.02em] mb-6"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  Political campaigns move fast. The website needed to <span className="text-[#BFEA4B]">keep up.</span>
                </h2>
                <p className="text-[17px] md:text-[21px] leading-[1.6] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)] max-w-2xl">
                  The challenge wasn&apos;t just building something that looked good. It was building something that could actually win.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {/* Card 1 */}
              <FadeUp delay={100}>
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 md:p-10 h-full">
                  <h3 
                    className="text-[22px] md:text-[26px] font-bold leading-[1.2] mb-4 flex items-start gap-3"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    <span className="text-[#BFEA4B] text-[18px] mt-1 font-sans">→</span>
                    <span>Generic templates killing the brand</span>
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)] pl-7">
                    Most campaign sites rely on rigid off-the-shelf templates that flatten every candidate into the same visual mold. CCT needed a site as distinctive as the campaign itself.
                  </p>
                </div>
              </FadeUp>

              {/* Card 2 */}
              <FadeUp delay={200}>
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 md:p-10 h-full">
                  <h3 
                    className="text-[22px] md:text-[26px] font-bold leading-[1.2] mb-4 flex items-start gap-3"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    <span className="text-[#BFEA4B] text-[18px] mt-1 font-sans">→</span>
                    <span>A multilingual district with one language</span>
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)] pl-7">
                    Brooklyn&apos;s 54th District is home to a deeply diverse community. A site that only spoke English was leaving half the constituency behind before the conversation even started.
                  </p>
                </div>
              </FadeUp>

              {/* Card 3 */}
              <FadeUp delay={300}>
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 md:p-10 h-full">
                  <h3 
                    className="text-[22px] md:text-[26px] font-bold leading-[1.2] mb-4 flex items-start gap-3"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    <span className="text-[#BFEA4B] text-[18px] mt-1 font-sans">→</span>
                    <span>Campaign staff locked out of their own site</span>
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)] pl-7">
                    A fast-paced campaign can&apos;t wait on a developer for every content update. The team needed to publish, edit, and manage independently — without touching a line of code.
                  </p>
                </div>
              </FadeUp>

              {/* Card 4 */}
              <FadeUp delay={400}>
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 md:p-10 h-full">
                  <h3 
                    className="text-[22px] md:text-[26px] font-bold leading-[1.2] mb-4 flex items-start gap-3"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    <span className="text-[#BFEA4B] text-[18px] mt-1 font-sans">→</span>
                    <span>Fundraising infrastructure that had to work from day one</span>
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)] pl-7">
                    Donations are the lifeblood of a campaign. The platform needed trusted progressive fundraising tools — without friction, without delay.
                  </p>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={500}>
              <div className="text-center">
                <p 
                  className="text-[#BFEA4B] text-[18px] md:text-[22px] lg:text-[26px] tracking-[0.05em]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  THIS CAMPAIGN DESERVED MORE THAN A TEMPLATE. IT DESERVED A PLATFORM.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Before and After Section */}
        <section className="bg-[#F7F0E6] px-5 sm:px-8 md:px-10 py-20 lg:py-32">
          <div className="mx-auto max-w-[1200px]">
            {/* BEFORE Section */}
            <FadeUp delay={0}>
              <div className="flex items-center gap-4 mb-10">
                <span className="inline-block rounded-full bg-[#E6DFD3] px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] uppercase">
                  BEFORE
                </span>
                <div className="h-[1px] flex-1 bg-[#1D2B1F]/10"></div>
              </div>

              <div className="mb-12">
                <h2 
                  className="text-4xl md:text-5xl font-bold text-[#1D2B1F] mb-4 tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  The old site
                </h2>
                <p className="text-lg md:text-[21px] text-[#1D2B1F]/70 font-[family-name:var(--font-inter)] max-w-3xl leading-[1.6]">
                  What the campaign was working with — a rigid template that couldn&apos;t match the ambition of the movement.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
              {['new', 'new1', 'new2', 'new3'].map((img, i) => (
                <FadeUp delay={100 + (i * 100)} key={img} className="h-full">
                  <div className="group relative flex h-full flex-col rounded-xl overflow-hidden border border-[#1D2B1F]/10 bg-white cursor-pointer shadow-sm">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F0E6]">
                      <Image src={`/studie/${img}.webp`} alt={`Old site ${i+1}`} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                    </div>
                    <div className="flex items-center justify-between bg-[#2A3730] p-4 text-[#F7F0E6] mt-auto">
                      <span className="rounded-full bg-[#1D2B1F] border border-[#F7F0E6]/10 px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase">BEFORE</span>
                      <span className="text-[11px] font-bold tracking-[0.05em] text-[#F7F0E6]/80 group-hover:text-white transition-colors">CLICK TO EXPAND &rarr;</span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* AFTER Section */}
            <FadeUp delay={0}>
              <div className="flex items-center gap-4 mb-10">
                <span className="inline-block rounded-full bg-[#BFEA4B] px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] uppercase shadow-[2px_2px_0px_rgba(0,0,0,0.15)]">
                  AFTER
                </span>
                <div className="h-[1px] flex-1 bg-[#1D2B1F]/10"></div>
              </div>

              <div className="mb-12">
                <h2 
                  className="text-4xl md:text-5xl font-bold text-[#1D2B1F] mb-4 tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  The new platform
                </h2>
                <p className="text-lg md:text-[21px] text-[#1D2B1F]/70 font-[family-name:var(--font-inter)] max-w-3xl leading-[1.6]">
                  A fully custom campaign website — bold, bilingual, and built to win. <Link href="https://cct4nyc.com" className="underline hover:text-[#1D2B1F]">See it live at cct4nyc.com &rarr;</Link>
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {['new4', 'new5', 'new6', 'new7', 'new8', 'new9', 'new10', 'new11'].map((img, i) => (
                <FadeUp delay={100 + ((i % 4) * 100)} key={img} className="h-full">
                  <div className={`group relative flex h-full flex-col rounded-xl overflow-hidden border ${i === 0 ? 'border-[#BFEA4B] shadow-[0_0_15px_rgba(191,234,75,0.3)]' : 'border-[#1D2B1F]/10 shadow-sm'} bg-white cursor-pointer`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F0E6]">
                      <Image src={`/studie/${img}.webp`} alt={`New platform ${i+1}`} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                    </div>
                    <div className="flex items-center justify-between bg-[#2A3730] p-4 text-[#F7F0E6] mt-auto">
                      <span className="rounded-full bg-[#BFEA4B] text-[#1D2B1F] px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase">AFTER</span>
                      <span className="text-[11px] font-bold tracking-[0.05em] text-[#F7F0E6]/80 group-hover:text-white transition-colors">CLICK TO EXPAND &rarr;</span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={200}>
              <div className="mt-16 text-center">
                <Link href="https://cct4nyc.com" className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#1D2B1F] px-8 py-3.5 text-[13px] font-bold tracking-[0.09em] text-[#F7F0E6] font-[family-name:var(--font-inter)] transition-transform hover:-translate-y-0.5">
                  EXPLORE THE LIVE SITE &rarr;
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Scope of Work Section */}
        <section className="bg-[#1D2B1F] px-5 sm:px-8 md:px-10 py-20 lg:py-32 text-[#F7F0E6]">
          <div className="mx-auto max-w-[1200px]">
            <FadeUp delay={0}>
              <div className="mb-12 md:mb-16 max-w-3xl">
                <span className="inline-block rounded-full border border-[#F7F0E6]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] uppercase mb-6">
                  SCOPE OF WORK
                </span>
                <h2 
                  className="text-[40px] leading-[1.05] sm:text-[52px] md:text-[64px] font-bold tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  From strategy to deployment — a <span className="text-[#BFEA4B]">complete campaign platform.</span>
                </h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Card 1 */}
              <FadeUp delay={100} className="h-full">
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 h-full">
                  <h3 
                    className="text-[#BFEA4B] text-[24px] md:text-[28px] font-bold leading-[1.2] mb-6"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    UX & interface design
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Designed the full user experience from scratch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Created bold visual identity aligned with grassroots political aesthetics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Prioritized clear issue positioning and donation pathways</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Optimized navigation for voters, volunteers, and donors</span>
                    </li>
                  </ul>
                </div>
              </FadeUp>

              {/* Card 2 */}
              <FadeUp delay={200} className="h-full">
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 h-full">
                  <h3 
                    className="text-[#BFEA4B] text-[24px] md:text-[28px] font-bold leading-[1.2] mb-6"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    Custom front-end development
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Fully custom-coded front-end — no prebuilt theme</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">High-performance, fully responsive across all devices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Optimized for speed during a fast-paced campaign</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Pixel-perfect to the campaign&apos;s visual brand</span>
                    </li>
                  </ul>
                </div>
              </FadeUp>

              {/* Card 3 */}
              <FadeUp delay={300} className="h-full">
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 h-full">
                  <h3 
                    className="text-[#BFEA4B] text-[24px] md:text-[28px] font-bold leading-[1.2] mb-6"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    WordPress CMS architecture
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Connected custom front-end to WordPress backend</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Built with Gutenberg blocks and Advanced Custom Post Types</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Campaign staff can update all content independently</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">No developer involvement required for routine updates</span>
                    </li>
                  </ul>
                </div>
              </FadeUp>

              {/* Card 4 */}
              <FadeUp delay={400} className="h-full">
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 h-full">
                  <h3 
                    className="text-[#BFEA4B] text-[24px] md:text-[28px] font-bold leading-[1.2] mb-6"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    Multilingual infrastructure
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Full English and Spanish language support live</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Architecture designed to expand to additional languages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Reflects the linguistic diversity of Brooklyn&apos;s 54th District</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Enables the campaign to reach every corner of the community</span>
                    </li>
                  </ul>
                </div>
              </FadeUp>

              {/* Card 5 */}
              <FadeUp delay={500} className="h-full">
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 h-full">
                  <h3 
                    className="text-[#BFEA4B] text-[24px] md:text-[28px] font-bold leading-[1.2] mb-6"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    Campaign infrastructure
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Integrated Solidarity Tech fundraising infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Connected to ActBlue for secure progressive donation processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Volunteer and supporter mobilization pathways built in</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#BFEA4B] text-[16px] mt-0.5 font-sans">→</span>
                      <span className="text-[15px] leading-[1.5] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">Scalable platform ready to grow with the campaign</span>
                    </li>
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="bg-[#F7F0E6] px-5 sm:px-8 md:px-10 py-20 lg:py-32">
          <div className="mx-auto max-w-[1200px]">
            <FadeUp delay={0}>
              <div className="mb-10 max-w-4xl">
                <span className="inline-block rounded-full border border-[#1D2B1F]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] uppercase mb-6">
                  TECHNOLOGY STACK
                </span>
                <h2 
                  className="text-[40px] leading-[1.05] sm:text-[52px] md:text-[64px] lg:text-[76px] font-bold tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  <span className="text-[#1D2B1F]">Trusted tools. </span>
                  <span className="text-[#D44A31]">Custom implementation.</span>
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  "WordPress",
                  "Gutenberg Block Editor",
                  "Advanced Custom Post Types",
                  "Custom Front-End Development",
                  "Multilingual Infrastructure",
                  "Solidarity Tech",
                  "ActBlue"
                ].map((tech, i) => (
                  <div 
                    key={i} 
                    className="bg-[#1D2B1F] text-[#F7F0E6] rounded-xl px-6 py-3.5 text-[15px] font-[family-name:var(--font-inter)] shadow-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Outcomes & Impact Section */}
        <section className="bg-[#1D2B1F] px-5 sm:px-8 md:px-10 py-20 lg:py-32 text-[#F7F0E6]">
          <div className="mx-auto max-w-[1200px]">
            <FadeUp delay={0}>
              <div className="mb-12 md:mb-16 max-w-3xl">
                <span className="inline-block rounded-full border border-[#F7F0E6]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] uppercase mb-6">
                  OUTCOMES & IMPACT
                </span>
                <h2 
                  className="text-[40px] leading-[1.05] sm:text-[52px] md:text-[64px] font-bold tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  A platform ready to communicate, <span className="text-[#BFEA4B]">fundraise, and mobilize.</span>
                </h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              {/* Stat 1 */}
              <FadeUp delay={100} className="h-full">
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 md:p-10 h-full">
                  <p 
                    className="text-[#BFEA4B] text-[72px] md:text-[88px] font-bold leading-[1] mb-1 tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    100%
                  </p>
                  <p className="text-[#BFEA4B] text-[11px] font-bold tracking-[0.1em] uppercase mb-5">CUSTOM BUILT</p>
                  <p className="text-[16px] leading-[1.7] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">
                    No themes. No templates. Every line of the front-end written specifically for this campaign — optimized for performance, brand, and conversion.
                  </p>
                </div>
              </FadeUp>

              {/* Stat 2 */}
              <FadeUp delay={200} className="h-full">
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 md:p-10 h-full">
                  <p 
                    className="text-[#BFEA4B] text-[72px] md:text-[88px] font-bold leading-[1] mb-1 tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    2
                  </p>
                  <p className="text-[#BFEA4B] text-[11px] font-bold tracking-[0.1em] uppercase mb-5">LANGUAGES LIVE</p>
                  <p className="text-[16px] leading-[1.7] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">
                    English and Spanish live on launch — with infrastructure already in place to add more languages as the campaign grows.
                  </p>
                </div>
              </FadeUp>

              {/* Stat 3 */}
              <FadeUp delay={300} className="h-full">
                <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#1D2B1F] p-8 md:p-10 h-full">
                  <p 
                    className="text-[#BFEA4B] text-[72px] md:text-[88px] font-bold leading-[1] mb-1 tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    ∞
                  </p>
                  <p className="text-[#BFEA4B] text-[11px] font-bold tracking-[0.1em] uppercase mb-5">STAFF EMPOWERED</p>
                  <p className="text-[16px] leading-[1.7] text-[#F7F0E6]/80 font-[family-name:var(--font-inter)]">
                    Campaign staff can update every page, add events, publish press coverage, and manage content entirely on their own — no developer required.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Quote Block */}
            <FadeUp delay={400}>
              <div className="rounded-2xl border border-[#F7F0E6]/10 bg-[#2A3730] p-10 md:p-14 max-w-4xl mx-auto">
                <p 
                  className="text-[22px] md:text-[28px] lg:text-[32px] leading-[1.35] italic text-[#F7F0E6]/90 mb-6 tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  &ldquo;A campaign website isn&apos;t just a digital brochure. It&apos;s the front door of a movement. Every voter who visits decides in seconds whether this candidate is worth their attention, their vote, and their donation.&rdquo;
                </p>
                <p className="text-[#BFEA4B] text-[11px] font-bold tracking-[0.1em] uppercase">
                  A CAMPAIGN PLATFORM BUILT TO MOVE AT THE SPEED OF DEMOCRACY.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Our Role Section */}
        <section className="bg-[#F7F0E6] px-5 sm:px-8 md:px-10 py-20 lg:py-32">
          <div className="mx-auto max-w-[1200px]">
            <FadeUp delay={0}>
              <div className="mb-10 max-w-4xl">
                <span className="inline-block rounded-full border border-[#1D2B1F]/30 px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] uppercase mb-6">
                  OUR ROLE
                </span>
                <h2 
                  className="text-[40px] leading-[1.05] sm:text-[52px] md:text-[64px] lg:text-[76px] font-bold tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  <span className="text-[#1D2B1F]">From first wireframe to </span>
                  <span className="text-[#D44A31] italic">final deployment.</span>
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {[
                  "UX STRATEGY",
                  "UI DESIGN",
                  "FRONT-END DEVELOPMENT",
                  "WORDPRESS CMS ARCHITECTURE",
                  "MULTILINGUAL PLATFORM SETUP",
                  "CAMPAIGN INFRASTRUCTURE INTEGRATION"
                ].map((role, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 bg-[#1D2B1F] text-[#F7F0E6] rounded-xl px-6 py-4 text-[13px] font-bold tracking-[0.08em] font-[family-name:var(--font-inter)]"
                  >
                    <span className="text-[#BFEA4B] text-[16px]">✓</span>
                    {role}
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="text-[16px] md:text-[17px] leading-[1.6] text-[#1D2B1F]/60 italic font-[family-name:var(--font-inter)] max-w-4xl">
                The only element not created by us was the campaign logo and color palette, which was provided by <span className="text-[#1D2B1F] not-italic font-medium">Robert Espinosa</span>.
              </p>
            </FadeUp>
          </div>
        </section>
      </main>
      
      {/* Bottom section above footer */}
      <StartBuildingSection />
    </div>
  );
}
