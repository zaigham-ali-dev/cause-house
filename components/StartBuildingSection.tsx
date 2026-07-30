import Link from "next/link";
import React from "react";
import FadeUp from "@/components/FadeUp";

export default function StartBuildingSection() {
  return (
    <section className="w-full bg-[#BFEA4B] py-12 md:py-16 lg:py-20 overflow-hidden border-t-2 border-[#1D2B1F]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="flex-1">
            {/* Badge */}
            <FadeUp delay={0}>
              <div className="inline-block mb-6 md:mb-8">
                <span className="px-[14px] py-[6px] bg-[#1D2B1F] rounded-full text-[12px] md:text-[13px] font-bold text-[#F7F0E6] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)]">
                  START BUILDING
                </span>
              </div>
            </FadeUp>

            {/* Heading */}
            <FadeUp delay={100}>
              <h2
                className="text-[48px] md:text-[60px] lg:text-[72px] xl:text-[92px] leading-[1.05] tracking-tight text-[#1D2B1F] font-bold max-w-[18ch]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Ready to build a stronger house for your mission?
              </h2>
            </FadeUp>
          </div>

          {/* Right Column */}
          <FadeUp delay={200}>
            <div className="flex-shrink-0 lg:mt-0 mt-4 lg:mr-12 xl:mr-24">
              <Link
                href="/work-with-us"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#1D2B1F] rounded-full text-[15px] md:text-[18px] font-bold text-white tracking-[0.05em] uppercase font-[family-name:var(--font-inter)] transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
              >
                WORK WITH US
              </Link>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
