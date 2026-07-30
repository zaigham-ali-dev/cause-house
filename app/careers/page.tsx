import Link from "next/link";
import StartBuildingSection from "@/components/StartBuildingSection";
import FadeUp from "@/components/FadeUp";

const rolesFaq = [
  {
    question: "Do you hire designers?",
    answer: "Yes, when capacity allows. We look for people who can move between brand systems, campaign creative, and web/UI work for mission-driven clients — not only pixel polish, but clarity, accessibility, and conversion-aware layouts."
  },
  {
    question: "What about SEO and organic search roles?",
    answer: "We regularly need strategists who understand technical SEO, content structure, and measurement (Search Console, GA4). Nonprofit sites often have legacy architecture and thin content; we value people who can prioritize fixes that actually move rankings and donations."
  },
  {
    question: "Is local SEO a separate focus?",
    answer: "It can be. Several clients depend on geographic visibility (clinics, local programs, community orgs). Experience with Google Business Profile, local landing pages, reviews, and localized content is a plus when those projects are in flight."
  },
  {
    question: "Do you hire for social media?",
    answer: "Sometimes — especially when clients need editorial calendars, paid social support, or creative that matches larger campaigns. We care more about channel fit and clear reporting than chasing every platform trend."
  },
  {
    question: "What roles exist in paid advertising?",
    answer: "Search and performance campaigns — including Google Ads, Ad Grants compliance, and occasional paid social — show up often. We need people who respect account structure, conversion tracking, and nonprofit budgets."
  },
  {
    question: "Are there account executive or client-facing roles?",
    answer: "Yes. Account leads, strategists, and client partners who can scope work, set expectations, and keep projects moving are central to how we operate. Comfort with nonprofits, fundraising rhythms, and multi-stakeholder approvals matters."
  },
  {
    question: "What does operations cover?",
    answer: "Project coordination, scheduling, contracts and SOW hygiene, tooling, and the glue between creative, technical, and client teams. Strong ops people keep delivery predictable so strategists and makers can focus on outcomes."
  },
  {
    question: "Do you list other roles (e.g. developers, CRM)?",
    answer: "When we hire for engineering, CRM, or specialized technical roles, we post them here the same way. If your background is adjacent — send a resume and a short note on what you want to do; we file strong general applications for future openings."
  }
];

export default function CareersPage() {
  return (
    <div className="bg-[#F3EBDD]">
      <section className="bg-[#1D2B1F] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="md:pl-20 lg:pl-40 xl:pl-[200px]">
            <FadeUp delay={0}>
              <span className="inline-flex rounded-full border border-[#F7F0E6]/45 px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#F7F0E6] font-[family-name:var(--font-inter)] uppercase">
                CAREERS
              </span>
            </FadeUp>

            <FadeUp delay={100}>
              <h1
                className="mt-6 max-w-[22ch] text-[52px] font-bold leading-[0.98] tracking-[-0.04em] text-[#F7F0E6] sm:text-[64px] md:text-[78px] lg:text-[92px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Work with a<br />team that builds<br /><span className="text-[#BFEA4B]">mission-driven<br />systems.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 max-w-2xl text-[19px] leading-[1.7] text-[#F7F0E6]/70 font-[family-name:var(--font-inter)]">
                CauseHouse partners with nonprofits and mission-driven organizations across web, fundraising, CRM, ads, and growth. When we grow our team, we post roles here first.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32 flex justify-center">
        <div className="w-full max-w-[650px]">
          <FadeUp delay={0}>
            <div className="mb-16">
              <h2 
                className="text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1D2B1F] sm:text-[40px] md:text-[46px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Open positions
              </h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#66786F] font-[family-name:var(--font-inter)]">
                We are <strong className="text-[#1D2B1F]">not hiring</strong> at the moment. When that changes, every open role — title, location or remote status, and how to apply — will be listed on this page.
              </p>
              <p className="mt-4 text-[17px] leading-[1.7] text-[#66786F] font-[family-name:var(--font-inter)]">
                Check back periodically, or follow us on <a href="#" className="font-bold text-[#1D2B1F] underline decoration-[#1D2B1F]/30 underline-offset-4 hover:decoration-[#1D2B1F]">LinkedIn</a> for updates.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div>
              <h2 
                className="text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1D2B1F] sm:text-[40px] md:text-[46px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Send your resume
              </h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#66786F] font-[family-name:var(--font-inter)]">
                We still welcome hearing from you. Feel free to send your resume and a short introduction to <strong className="text-[#1D2B1F]">hello@causehouse.co</strong>. We will keep your details on file and reach out if a role opens that looks like a strong fit.
              </p>
              
              <div className="mt-8">
                <Link
                  href="/work-with-us"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D2B1F] px-6 py-3 text-[11px] font-bold tracking-[0.09em] text-[#F7F0E6] font-[family-name:var(--font-inter)] transition-transform hover:-translate-y-0.5"
                  style={{ boxShadow: "0px 4px 10px rgba(29, 43, 31, 0.15)" }}
                >
                  CLIENT INQUIRIES — WORK WITH US
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-[#1D2B1F] bg-[#F7F0E6] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32 flex justify-center">
        <div className="w-full max-w-3xl">
          <FadeUp delay={0}>
            <span className="inline-flex rounded-full border border-[#1D2B1F] px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] font-[family-name:var(--font-inter)] uppercase">
              FAQ
            </span>
          </FadeUp>

          <FadeUp delay={100}>
            <h2 
              id="careers-faq-heading"
              className="mt-4 max-w-[28ch] text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1D2B1F] sm:text-[50px] md:text-[60px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Types of roles we hire for
            </h2>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mt-5 max-w-[650px] text-[17px] leading-[1.7] text-[#66786F] font-[family-name:var(--font-inter)]">
              We do not always have every function open at once. Below is how different disciplines typically show up on our team.
            </p>
          </FadeUp>

          <div className="mt-12 border-t border-[#1D2B1F]/20">
            {rolesFaq.map((item, index) => (
              <FadeUp key={index} delay={(index % 4) * 50}>
                <details className="group border-b border-[#1D2B1F]/20">
                  <summary className="-mx-4 flex cursor-pointer list-none items-center justify-between px-4 py-5 transition-colors hover:bg-[#EFE8DD] group-open:bg-[#EFE8DD] [&::-webkit-details-marker]:hidden">
                    <span 
                      className="min-w-0 flex-1 pr-4 text-[24px] font-bold leading-tight text-[#1D2B1F] sm:text-[30px]"
                      style={{ fontFamily: "var(--font-fraunces), serif" }}
                    >
                      {item.question}
                    </span>
                    <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-[#1D2B1F] text-[#1D2B1F] transition-colors hover:bg-[#1D2B1F] hover:text-[#EFE8DD]">
                      <svg className="block group-open:hidden" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                      <svg className="hidden group-open:block" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="-mx-4 bg-[#EFE8DD] px-4 pb-6">
                    <p className="text-[17px] leading-[1.7] text-[#66786F] font-[family-name:var(--font-inter)]">
                      {item.answer}
                    </p>
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <StartBuildingSection />
    </div>
  );
}
