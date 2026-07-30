import React from 'react';
import FadeUp from "@/components/FadeUp";

export default function HowWeWorkSection() {
  const steps = [
    {
      number: "01",
      title: "Lay the foundation",
      description: "We audit your website, donor journey, CRM, and campaign systems to understand what's holding growth back and where the strongest foundation needs to be rebuilt."
    },
    {
      number: "02",
      title: "Frame the structure",
      description: "We shape the messaging, user experience, donation flow, and supporter journey into a clear structure built to earn trust and drive action."
    },
    {
      number: "03",
      title: "Wire the house",
      description: "We connect websites, fundraising flows, CRM systems, reporting, and automations so every room of the organization works together."
    },
    {
      number: "04",
      title: "Make it livable",
      description: "Once launched, we optimize the full experience so your team can grow support, measure performance, and scale without friction."
    }
  ];

  return (
    <section className="w-full bg-[#F7F0E6] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            {/* Badge */}
            <FadeUp delay={0}>
              <div className="inline-block mb-8">
                <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  HOW WE WORK
                </span>
              </div>
            </FadeUp>

            {/* Heading */}
            <FadeUp delay={100}>
              <h2
                className="text-[40px] md:text-[60px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                How we build the<br />house.
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={200}>
            <div className="max-w-md pb-2">
              <p className="text-[19px] lg:text-[16px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed lg:pb-1">
                From strategy to systems, built to scale — so your mission has a digital home that grows with you.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Steps Container */}
        <FadeUp delay={100}>
          <ul className="grid list-none grid-cols-1 lg:grid-cols-4 border-2 border-[#0A0F0B] rounded-[24px] overflow-hidden divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0A0F0B]">
            {steps.map((step, index) => (
              <li
                key={index}
                className="flex flex-col p-6 lg:p-5 xl:p-8"
              >
                {/* Number Badge */}
                <div className="w-[42px] h-[42px] bg-[#BFEA4B] border-2 border-[#0A0F0B] shadow-[3px_3px_0px_0px_#0A0F0B] rounded-full flex items-center justify-center text-[15px] font-bold text-[#1D2B1F] mb-6 shrink-0 font-[family-name:var(--font-inter)]">
                  {step.number}
                </div>

                {/* Title */}
                <h3
                  className="text-[30px] lg:text-[22px] xl:text-[30px] text-[#1D2B1F] font-bold leading-tight mb-3"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[17px] lg:text-[14px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed flex-1">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </FadeUp>

      </div>
    </section>
  );
}
