import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#1D2B1F] pt-16 md:pt-20 lg:pt-28 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* Stats Card */}
        <FadeUp>
          <div className="mb-16 rounded-2xl border-2 border-[#F7F0E6]/20 bg-[#F7F0E6]/5 p-8 lg:p-10 xl:p-14 flex flex-col md:flex-row items-center gap-8 lg:gap-10 xl:gap-16">
            {/* Big Number */}
            <p
              className="shrink-0 font-extrabold leading-[0.82] tracking-tight text-[#BFEA4B] text-[80px] md:text-[120px] lg:text-[100px] xl:text-[198px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              $10M+
            </p>
            {/* Stats Text */}
            <div className="flex flex-col gap-4">
              <p
                className="text-[28px] lg:text-[28px] xl:text-[44px] leading-[1.1] text-[#F7F0E6] text-balance font-bold"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                in fundraising and supporter systems supported
              </p>
              <p className="text-[16px] lg:text-[14px] xl:text-[19px] text-[#F7F0E6]/55 font-[family-name:var(--font-inter)] leading-relaxed max-w-xl">
                Across nonprofits, campaigns, and mission-driven organizations through systems leadership, consulting, and advisory work.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {/* Badge */}
            <FadeUp delay={0}>
              <div className="inline-block">
                <span className="px-4 py-2 border-2 border-[#F7F0E6]/30 rounded-full text-[10px] md:text-[11px] font-bold text-[#F7F0E6] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  ABOUT CAUSEHOUSE
                </span>
              </div>
            </FadeUp>

            {/* Heading */}
            <FadeUp delay={100}>
              <h2
                className="text-[28px] min-[400px]:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[44px] xl:text-[60px] text-[#F7F0E6] font-bold leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                <span className="whitespace-nowrap">Websites, fundraising</span><br />
                <span className="whitespace-nowrap">systems, and growth</span><br />
                <span className="whitespace-nowrap">infrastructure for</span><br />
                <span className="whitespace-nowrap">nonprofits.</span>
              </h2>
            </FadeUp>

            {/* Body Text Wrapper */}
            <FadeUp delay={200}>
              <div className="space-y-4 max-w-[624px] text-[#F7F0E6]/75 font-[family-name:var(--font-inter)] text-[16px] lg:text-[16px] xl:text-[19px] leading-relaxed">
                <p>
                  We help nonprofit teams build the digital systems behind sustainable growth — from high-converting websites and donor funnels to CRM-connected campaigns, reporting, and supporter journeys.
                </p>
                <p>
                  Everything is designed to work together, so trust, donations, and long-term engagement can scale.
                </p>
              </div>
            </FadeUp>

            {/* Button */}
            <FadeUp delay={300}>
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#F7F0E6]/40 rounded-full text-[11px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] hover:bg-[#F7F0E6]/10 transition-all"
                >
                  LEARN MORE ABOUT US
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Card 01 */}
            <FadeUp delay={100}>
              <article className="rounded-xl border border-[#F7F0E6]/15 bg-[#F7F0E6]/5 p-5 xl:p-6 flex gap-4">
                <span className="text-[12px] xl:text-[13px] text-[#BFEA4B] font-bold font-[family-name:var(--font-inter)] shrink-0 mt-2">01</span>
                <div>
                  <h3
                    className="text-[24px] lg:text-[22px] xl:text-[30px] text-[#F7F0E6] font-bold"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    Systems, not one-off projects
                  </h3>
                  <p className="text-[15px] lg:text-[14px] xl:text-[19px] text-[#F7F0E6]/65 mt-2 font-[family-name:var(--font-inter)] leading-relaxed">
                    We map the full supporter journey — from first visit to donation, follow-up, and retention — so every touchpoint works as one connected system.
                  </p>
                </div>
              </article>
            </FadeUp>

            {/* Card 02 */}
            <FadeUp delay={200}>
              <article className="rounded-xl border border-[#F7F0E6]/15 bg-[#F7F0E6]/5 p-5 xl:p-6 flex gap-4">
                <span className="text-[12px] xl:text-[13px] text-[#BFEA4B] font-bold font-[family-name:var(--font-inter)] shrink-0 mt-2">02</span>
                <div>
                  <h3
                    className="text-[24px] lg:text-[22px] xl:text-[30px] text-[#F7F0E6] font-bold"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    Creative with accountability
                  </h3>
                  <p className="text-[15px] lg:text-[14px] xl:text-[19px] text-[#F7F0E6]/65 mt-2 font-[family-name:var(--font-inter)] leading-relaxed">
                    Messaging, UX, campaign creative, and reporting all live inside one measurable framework built for long-term growth.
                  </p>
                </div>
              </article>
            </FadeUp>

            {/* Card 03 */}
            <FadeUp delay={300}>
              <article className="rounded-xl border border-[#F7F0E6]/15 bg-[#F7F0E6]/5 p-5 xl:p-6 flex gap-4">
                <span className="text-[12px] xl:text-[13px] text-[#BFEA4B] font-bold font-[family-name:var(--font-inter)] shrink-0 mt-2">03</span>
                <div>
                  <h3
                    className="text-[24px] lg:text-[22px] xl:text-[30px] text-[#F7F0E6] font-bold"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    Connected infrastructure
                  </h3>
                  <p className="text-[15px] lg:text-[14px] xl:text-[19px] text-[#F7F0E6]/65 mt-2 font-[family-name:var(--font-inter)] leading-relaxed">
                    Your website, donor journey, CRM, and campaign reporting should work as one ecosystem — not a patchwork of disconnected tools.
                  </p>
                </div>
              </article>
            </FadeUp>
          </div>

        </div>



      </div>
    </section>
  );
}
