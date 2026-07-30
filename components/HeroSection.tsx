import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F0E6]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 pt-12 pb-0 md:pt-16 md:pb-0 lg:pt-24 lg:pb-[200px] xl:pt-28 xl:pb-[300px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-16">

          {/* Left Content */}
          <div className="flex-1 max-w-full lg:max-w-2xl z-10">
            {/* Badge */}
            <FadeUp delay={0}>
              <div className="inline-block mb-6 md:mb-8">
                <span className="px-[14px] py-[6px] bg-[#BFEA4B] border-2 border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  NONPROFIT MARKETING AGENCY
                </span>
              </div>
            </FadeUp>

            {/* Main Heading */}
            <FadeUp delay={100}>
              <h1
                className="text-[48px] sm:text-[52px] md:text-[56px] lg:text-[58px] xl:text-[92px] text-[#1D2B1F] font-bold leading-[1.05] tracking-[-0.02em] mb-6 md:mb-8 lg:w-[120%]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                {/* Mobile: natural flow, Desktop: forced 3-line layout */}
                <span className="hidden lg:inline">Build the house<br /></span>
                <span className="lg:hidden">Build the house </span>
                your{" "}
                <span 
                  className="relative inline-block text-[#BFEA4B]"
                  style={{ 
                    WebkitTextStroke: "2px #1D2B1F",
                    textShadow: "2px 2px 0px #1D2B1F"
                  }}
                >
                  mission
                </span>
                {" "}
                <span className="hidden lg:inline"><br /></span>
                grows in.
              </h1>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={200}>
              <p className="text-[15px] md:text-[16px] lg:text-[15px] xl:text-[19px] text-[#6B7A6D] leading-snug mb-8 md:mb-10 max-w-[46ch] font-[family-name:var(--font-inter)]">
                Websites, fundraising systems, CRM, analytics, and campaign
                infrastructure — designed to work as one for growing
                mission-driven teams.
              </p>
            </FadeUp>

            {/* Buttons */}
            <FadeUp delay={300}>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link
                  href="/work-with-us"
                  className="inline-flex items-center justify-center px-5 md:px-6 lg:px-8 min-h-[44px] md:min-h-[48px] lg:min-h-[52px] bg-[#BFEA4B] border-2 border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_#1D2B1F] hover:shadow-[2px_2px_0px_0px_#1D2B1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                >
                  WORK WITH US
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-5 md:px-6 lg:px-8 min-h-[44px] md:min-h-[48px] lg:min-h-[52px] bg-transparent border-2 border-[#1D2B1F] rounded-full text-[11px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] hover:bg-[#1D2B1F]/5 transition-all"
                >
                  EXPLORE SERVICES
                </Link>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>

      {/* Mobile Illustration - Below content, visible on mobile/tablet only */}
      <div className="lg:hidden relative w-full mt-6 z-20">
        <Image
          src="/pictured/greenpic.png"
          alt="CauseHouse hero illustration"
          width={600}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Desktop Illustration - Anchored to bottom right */}
      <div className="hidden lg:block absolute bottom-0 right-0 lg:right-[5%] xl:right-[8%] lg:w-[420px] xl:w-[580px] z-20 pointer-events-none">
        <Image
          src="/pictured/greenpic.png"
          alt="CauseHouse hero illustration"
          width={600}
          height={600}
          className="w-full h-auto object-contain object-bottom"
          priority
        />
      </div>

      {/* Right Side - Clouds Illustration (desktop only) */}
      <div className="hidden lg:block absolute left-[50%] xl:left-[45%] top-0 w-[50%] xl:w-[55%] h-full pointer-events-none"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 85%, transparent 100%)",
        }}
      >
        {/* Cloud 1 - Top center */}
        <svg className="absolute top-[10%] left-[25%] w-[120px]" viewBox="0 0 160 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 55 C20 55, 5 55, 5 42 C5 32, 15 25, 28 28 C28 15, 42 5, 58 8 C72 3, 95 2, 110 12 C125 6, 148 10, 150 28 C158 30, 160 40, 152 48 C155 55, 148 60, 135 58 C130 62, 115 62, 108 58 C95 65, 70 63, 58 58 C45 62, 30 60, 20 55Z" fill="white" />
        </svg>

        {/* Cloud 2 - Top right */}
        <svg className="absolute top-[14%] left-[50%] w-[140px]" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 48 C15 48, 3 48, 3 38 C3 28, 14 22, 25 25 C28 14, 42 6, 55 10 C65 4, 85 3, 98 12 C108 8, 128 12, 132 26 C138 28, 140 36, 134 42 C136 48, 130 52, 120 50 C115 54, 102 54, 96 50 C85 56, 65 55, 52 50 C40 54, 25 52, 15 48Z" fill="white" />
        </svg>

        {/* Cloud 3 - Center */}
        <svg className="absolute top-[30%] left-[35%] w-[130px] z-10" viewBox="0 0 160 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 52 C18 52, 4 52, 4 40 C4 30, 14 24, 26 26 C28 14, 40 5, 55 8 C68 2, 90 2, 105 10 C118 5, 145 10, 148 26 C156 28, 158 38, 150 44 C152 52, 146 56, 132 54 C128 58, 112 58, 105 54 C92 60, 68 58, 55 54 C42 58, 28 56, 18 52Z" fill="white" />
        </svg>

        {/* Bird flying through clouds */}
        <style>{`
          @keyframes birdFly {
            0%   { transform: translateX(-60px) translateY(0px);   opacity: 0; }
            8%   { opacity: 1; }
            30%  { transform: translateX(120px) translateY(-12px); opacity: 1; }
            55%  { transform: translateX(260px) translateY(4px);   opacity: 1; }
            75%  { transform: translateX(390px) translateY(-8px);  opacity: 1; }
            88%  { opacity: 1; }
            100% { transform: translateX(520px) translateY(-4px);  opacity: 0; }
          }
          .bird-animate {
            animation: birdFly 8s ease-in-out infinite;
          }
        `}</style>
        <div
          className="bird-animate absolute z-[5]"
          style={{ top: "calc(30% + 28px)", left: "10%" }}
        >
          <svg width="88" height="44" viewBox="0 0 52 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 18 C8 8, 18 4, 26 13 C34 4, 44 8, 50 18"
              stroke="#1D2B1F"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Cloud 4 - Right middle (in front of bird) */}
        <svg className="absolute top-[38%] left-[45%] w-[125px] z-10" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 48 C15 48, 3 48, 3 38 C3 28, 14 22, 25 25 C28 14, 42 6, 55 10 C65 4, 85 3, 98 12 C108 8, 128 12, 132 26 C138 28, 140 36, 134 42 C136 48, 130 52, 120 50 C115 54, 102 54, 96 50 C85 56, 65 55, 52 50 C40 54, 25 52, 15 48Z" fill="white" />
        </svg>

        {/* Cloud 5 - Bottom center */}
        <svg className="absolute top-[50%] left-[22%] w-[110px]" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 38 C10 38, 2 38, 2 30 C2 22, 10 18, 19 20 C22 12, 32 5, 44 8 C52 3, 68 3, 78 9 C86 6, 108 9, 110 20 C116 22, 118 28, 112 34 C114 38, 108 42, 100 40 C96 44, 86 44, 80 40 C70 46, 54 45, 44 40 C34 44, 18 42, 10 38Z" fill="white" />
        </svg>
      </div>

    </section>
  );
}
