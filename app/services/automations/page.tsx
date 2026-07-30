import Link from "next/link";
import Image from "next/image";
import StartBuildingSection from "@/components/StartBuildingSection";
import FadeUp from "@/components/FadeUp";

const questions = [
  {
    title: "What email platform do you build automations in?",
    answer: "We work in Mailchimp, Klaviyo, Pardot, HubSpot, Constant Contact, ActiveCampaign, and most major platforms. We'll build in what you have or help you choose a better fit."
  },
  {
    title: "Do the automations connect to our CRM?",
    answer: "Yes — CRM integration is a core part of every automation build. Every action taken in email syncs back to your donor record so your data stays clean and current."
  },
  {
    title: "Will we be able to edit the automations ourselves after launch?",
    answer: "Yes. We document everything and train your team so you can adjust timing, copy, and triggers without coming back to us for every change."
  },
  {
    title: "How long does it take to set up a full automation system?",
    answer: "A welcome series can be live in 1-2 weeks. A full automation stack covering welcome, stewardship, re-engagement, and upgrade flows typically takes 4-6 weeks."
  }
];

export default function AutomationsPage() {
  return (
    <div className="bg-[#F3EBDD]">
      <section className="border-b border-[#F7F0E6]/20 bg-[#1D2B1F] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp delay={0}>
            <span className="inline-flex rounded-full border border-[#F7F0E6]/45 px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#F7F0E6] font-[family-name:var(--font-inter)]">
              MARKETING AUTOMATION FOR NONPROFITS
            </span>
          </FadeUp>

          <FadeUp delay={100}>
            <h1
              className="mt-6 max-w-[22ch] text-[52px] font-bold leading-[0.98] tracking-[-0.04em] text-[#F7F0E6] sm:text-[64px] md:text-[78px] lg:text-[92px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Your mission on <span className="text-[#BFEA4B]">autopilot.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mt-7 max-w-[650px] text-[18px] leading-[1.7] text-[#F7F0E6] md:text-[19px] font-[family-name:var(--font-inter)]">
              Marketing automation for nonprofits means welcome flows, re-engagement campaigns, stewardship sequences, and upgrade asks running while your team focuses on the work that actually needs humans.
            </p>
          </FadeUp>

          <FadeUp delay={300}>
            <div className="mt-9 flex flex-wrap gap-4 md:mt-10">
              <Link
                href="/work-with-us"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#BFEA4B] px-6 py-3 text-[12px] font-bold tracking-[0.09em] text-[#1D2B1F] font-[family-name:var(--font-inter)]"
              >
                BUILD YOUR AUTOMATION SYSTEM
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
              The systems that run every room on schedule.
            </h2>
          </FadeUp>

          <FadeUp delay={200}>
            <p className="mt-5 max-w-[700px] text-[18px] leading-[1.6] text-[#66786F] md:text-[19px] font-[family-name:var(--font-inter)]">
              From the moment someone joins your list to the moment they become a monthly donor &mdash; every touchpoint can be automated, personalized, and CRM-connected.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {[
              {
                number: "01",
                title: "Welcome series",
                description: "A thoughtfully sequenced onboarding experience for new donors, subscribers, and supporters \u2014 built to convert initial interest into long-term relationship."
              },
              {
                number: "02",
                title: "Donor stewardship\nflows",
                description: "Automated thank-you sequences, impact updates, anniversary messages, and upgrade asks that keep donors engaged between campaigns."
              },
              {
                number: "03",
                title: "Re-engagement\ncampaigns",
                description: "Lapsed donor and subscriber win-back sequences triggered by inactivity thresholds \u2014 designed to reactivate dormant relationships before they\u2019re lost."
              },
              {
                number: "04",
                title: "Event follow-up\nsequences",
                description: "Post-event email sequences that convert attendees into donors or recurring supporters while their experience is still fresh."
              },
              {
                number: "05",
                title: "Monthly giving\nupgrade flows",
                description: "Automated asks to upgrade one-time donors to monthly giving \u2014 timed, tested, and personalized based on gift history and engagement."
              },
              {
                number: "06",
                title: "CRM-triggered\nnotifications",
                description: "Internal team notifications, task assignments, and alerts triggered by CRM data \u2014 so nothing falls through the cracks between systems."
              }
            ].map((item, index) => (
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
              Infrastructure that lets founders focus on the mission.
            </h2>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="mt-12 group overflow-hidden rounded-xl border-2 border-[#F7F0E6]/25 bg-[#1D2B1F] transition-colors hover:border-[#BFEA4B]">
              <Link href="/case-studies" className="flex flex-col lg:flex-row">
                <div className="relative aspect-[1.6/1] w-full border-b border-[#F7F0E6]/20 lg:w-[55%] lg:aspect-auto lg:min-h-[400px] lg:border-b-0 lg:border-r">
                  <Image
                    src="/case/2.webp"
                    alt="HOPEHUB"
                    fill
                    sizes="(max-width: 1023px) 100vw, 55vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 right-3 rounded-full border border-[#1D2B1F] bg-[#BFEA4B] px-3 py-1 text-[9px] font-bold tracking-[0.08em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                    PLATFORM + PAYMENTS AUTOMATED
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-[45%] lg:p-12">
                  <h3 className="text-[14px] font-bold tracking-[0.08em] text-[#BFEA4B] font-[family-name:var(--font-inter)]">
                    HOPEHUB &mdash; COMMUNITY PLATFORM AUTOMATION
                  </h3>
                  <p className="mt-5 text-[18px] leading-[1.5] text-[#F7F0E6]/90 lg:text-[20px] font-[family-name:var(--font-inter)]">
                    Integrated Stripe recurring payments with Circle platform, automated member access and payment flows end-to-end, and organized CRM data &mdash; so Jennifer Newberg could focus entirely on her community of widows instead of managing technology.
                  </p>
                  <span className="mt-8 inline-block text-[13px] font-bold tracking-[0.08em] text-[#BFEA4B] font-[family-name:var(--font-inter)]">
                    READ THE FULL CASE STUDY &rarr;
                  </span>
                </div>
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={300}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/case-studies"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#BFEA4B] px-6 py-3 text-[12px] font-bold tracking-[0.08em] text-[#1D2B1F] font-[family-name:var(--font-inter)]"
              >
                EXPLORE ALL CASE STUDIES &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-[#1D2B1F] bg-[#F7F0E6] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <FadeUp delay={0}>
            <span className="inline-flex rounded-full border-[#1D2B1F] border px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
              QUESTIONS
            </span>
          </FadeUp>

          <FadeUp delay={100}>
            <h2
              className="mt-6 max-w-3xl text-[50px] font-bold leading-[1.02] tracking-[-0.035em] text-[#1D2B1F] sm:text-[58px] md:text-[60px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Before we wire the automation system.
            </h2>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {questions.map((item, index) => (
              <FadeUp key={index} delay={(index % 2) * 100}>
                <article
                  className="h-full rounded-xl border-2 border-[#1D2B1F] bg-[#F3EBDD] p-6 shadow-[5px_5px_0px_0px_#1D2B1F] sm:p-7"
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
