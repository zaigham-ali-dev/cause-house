import Link from "next/link";
import Image from "next/image";
import StartBuildingSection from "@/components/StartBuildingSection";
import FadeUp from "@/components/FadeUp";

const includedItems = [
  {
    number: "01",
    title: "Website strategy &\narchitecture",
    description:
      "We start with your donor journey, not a design tool. Every page hierarchy, navigation path, and content structure is mapped to move visitors toward action.",
  },
  {
    number: "02",
    title: "UX + accessibility",
    description:
      "WCAG-compliant, screen-reader-ready, and fast on every device. Accessibility isn't a checkbox — it's how your mission reaches more people.",
  },
  {
    number: "03",
    title: "Conversion\noptimization",
    description:
      "Every CTA, form, and donation button is tested, placed, and worded to convert. We eliminate friction between intent and action.",
  },
  {
    number: "04",
    title: "Donation flow design",
    description:
      "From the donate button to the thank-you page, we design the full giving experience to maximize one-time and recurring donations.",
  },
  {
    number: "05",
    title: "CRM integration",
    description:
      "Your website and CRM are wired together — so every form submission, donation, and page visit enriches your donor data automatically.",
  },
  {
    number: "06",
    title: "Performance & SEO",
    description:
      "Core Web Vitals, semantic HTML, and on-page SEO built in from day one. Fast, found, and trustworthy in every search result.",
  },
];

const featuredWork = [
  {
    title: "CCT4NYC",
    description: "Campaign website, multilingual",
    badge: "100% CUSTOM BUILT",
    image: "/case/1.webp",
  },
  {
    title: "TAABU CLUB",
    description: "Humanitarian org, Cairo",
    badge: "GLOBAL DONATION READY",
    image: "/case/3.webp",
  },
  {
    title: "CHILD ARISE TN",
    description: "501(c)(3) nonprofit, Nashville",
    badge: "FULL FUNDRAISING STACK",
    image: "/case/4.webp",
  },
  {
    title: "CLOCKWORK BJJ",
    description: "Local SEO + conversion, NYC",
    badge: "2X+ ORGANIC TRAFFIC",
    image: "/case/8.webp",
  },
];

const questions = [
  {
    title: "Do you use a specific platform or CMS?",
    answer:
      "We build on the platform that best fits your team's capacity — most often WordPress (with ACF or Elementor Pro), or custom Next.js for organizations with dev teams. We never lock you in.",
  },
  {
    title: "How long does a website redesign take?",
    answer:
      "A full redesign typically takes 8–14 weeks from kickoff to launch. Smaller scoped projects or landing pages can move in 2–4 weeks.",
  },
  {
    title: "Will we be able to update the website ourselves after launch?",
    answer:
      "Yes. Every site includes a CMS your team can manage, plus a full training session and documentation so you're never dependent on us for routine updates.",
  },
  {
    title: "Do you handle hosting and maintenance?",
    answer:
      "We can recommend and set up hosting, or work with your existing infrastructure. Ongoing maintenance retainers are available but never required.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="bg-[#F3EBDD]">
      <section className="border-b border-[#F7F0E6]/20 bg-[#1D2B1F] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp delay={0}>
            <span className="inline-flex rounded-full border border-[#F7F0E6]/45 px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#F7F0E6] font-[family-name:var(--font-inter)]">
              NONPROFIT WEB DESIGN AGENCY
            </span>
          </FadeUp>

          <FadeUp delay={100}>
            <h1
              className="mt-6 max-w-[22ch] text-[52px] font-bold leading-[0.98] tracking-[-0.04em] text-[#F7F0E6] sm:text-[64px] md:text-[78px] lg:text-[92px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Websites that build <span className="text-[#BFEA4B]">trust<br />before</span> donors give.
            </h1>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mt-7 max-w-[650px] text-[18px] leading-[1.7] text-[#F7F0E6] md:text-[19px] font-[family-name:var(--font-inter)]">
              We design and develop high-converting nonprofit websites — built on strategy, wired to your CRM, and optimized for every screen, every supporter, every gift.
            </p>
          </FadeUp>

          <FadeUp delay={300}>
            <div className="mt-9 flex flex-wrap gap-4 md:mt-10">
              <Link
                href="/work-with-us"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#BFEA4B] px-6 py-3 text-[12px] font-bold tracking-[0.09em] text-[#1D2B1F] font-[family-name:var(--font-inter)]"
              >
                START YOUR REDESIGN
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#F7F0E6]/45 px-6 py-3 text-[12px] font-bold tracking-[0.09em] text-[#F7F0E6] font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_rgba(247,240,230,0.16)]"
              >
                SEE OUR WORK
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
              Every room of the web house.
            </h2>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mt-5 max-w-[700px] text-[18px] leading-[1.6] text-[#66786F] md:text-[19px] font-[family-name:var(--font-inter)]">
              No missing pieces. Every web design engagement covers strategy through launch, with every layer built to work together.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {includedItems.map((item, index) => (
              <FadeUp key={item.number} delay={(index % 3) * 100}>
                <article
                  className="h-full min-h-[280px] rounded-xl border-2 border-[#1D2B1F] bg-[#F3EBDD] p-6 shadow-[5px_5px_0px_0px_#1D2B1F] sm:p-7 md:min-h-[305px]"
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
              What a new front door does for a mission.
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {featuredWork.map((project, index) => (
              <FadeUp key={project.title} delay={(index % 4) * 100}>
                <Link
                  href="/case-studies"
                  className="group block h-full overflow-hidden rounded-xl border-2 border-[#F7F0E6]/25 bg-[#1D2B1F] transition-colors hover:border-[#BFEA4B]"
                >
                  <div className="relative aspect-[1.38/1] overflow-hidden border-b border-[#F7F0E6]/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
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
              EXPLORE ALL CASE STUDIES →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1D2B1F] bg-[#F7F0E6] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <span className="inline-flex rounded-full border border-[#1D2B1F] px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
            WHAT CLIENTS SAY
          </span>

          <h2
            className="mt-6 max-w-[700px] text-[50px] font-bold leading-[1.02] tracking-[-0.035em] text-[#1D2B1F] sm:text-[58px] md:text-[60px]"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            Real words from real clients.
          </h2>

          <article className="mt-10 max-w-[895px] rounded-xl border-2 border-[#1D2B1F] bg-[#F3EBDD] p-7 shadow-[7px_7px_0px_0px_#1D2B1F] sm:mt-12 sm:p-10 md:p-12">
            <blockquote
              className="text-[26px] font-semibold italic leading-[1.25] tracking-[-0.02em] text-[#1D2B1F] sm:text-[30px] md:text-[34px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              &quot;One of the most dedicated, authentic, and strategic people I&apos;ve worked with in my 25+ year career. A true collaborator, instrumental in helping me build a safe, supportive community on Circle.&quot;
            </blockquote>
            <div className="mt-7 border-t border-[#1D2B1F]/15 pt-5">
              <p className="text-[12px] font-bold tracking-[0.08em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                JENNIFER NEWBERG
              </p>
              <p className="mt-1 text-[16px] text-[#66786F] font-[family-name:var(--font-inter)]">
                Founder, HopeHub
              </p>
              <p className="mt-4 text-[18px] tracking-[0.18em] text-[#BFEA4B]" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-[#1D2B1F] bg-[#F3EBDD] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
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
              Before we dig into the site architecture.
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {questions.map((item, index) => (
              <FadeUp key={index} delay={(index % 2) * 100}>
                <article
                  className="h-full rounded-xl border-2 border-[#1D2B1F] bg-[#F7F0E6] p-6 shadow-[5px_5px_0px_0px_#1D2B1F] sm:p-7"
                >
                  <h3
                    className="text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1D2B1F] sm:text-[28px]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    {item.title}
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
