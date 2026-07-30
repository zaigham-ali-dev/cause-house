import React from 'react';
import FadeUp from "@/components/FadeUp";

export default function WhoWeServeSection() {
  const cards = [
    {
      number: "01",
      title: "Nonprofits ready to grow",
      text: "For organizations that need websites, donor journeys, and reporting systems built to support the next stage of growth."
    },
    {
      number: "02",
      title: "Advocacy & campaign teams",
      text: "Fast-moving campaigns that need high-converting landing pages, supporter funnels, and systems that can move as quickly as the mission."
    },
    {
      number: "03",
      title: "Fundraising & development teams",
      text: "Donation flows, CRM-connected supporter journeys, and reporting infrastructure built to increase trust and revenue."
    },
    {
      number: "04",
      title: "Mission-driven organizations rebuilding",
      text: "For teams modernizing outdated websites, disconnected tools, and fragmented supporter experiences."
    }
  ];

  return (
    <section className="w-full bg-[#F3EBDD] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 md:mb-24">
          <div className="flex-1 max-w-3xl">
            {/* Badge */}
            <FadeUp delay={0}>
              <div className="inline-block mb-8">
                <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  WHO WE SERVE
                </span>
              </div>
            </FadeUp>

            {/* Heading */}
            <FadeUp delay={100}>
              <h2 
                className="text-[40px] md:text-[60px] lg:text-[48px] xl:text-[60px] leading-[1.05] tracking-tight text-[#1D2B1F] font-bold"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Built for teams that<br className="hidden md:block" />
                need every system<br className="hidden md:block" />
                working together.
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={200}>
            <div className="flex-1 max-w-lg lg:pb-4">
              <p className="text-[17px] md:text-[19px] lg:text-[16px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed">
                From fast-moving campaigns to established nonprofit teams, we build the digital infrastructure behind growth, fundraising, and long-term supporter engagement.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <FadeUp key={index} delay={index * 100}>
              <div 
                className="bg-[#F7F0E6] rounded-xl border-2 border-[#1D2B1F] p-5 lg:p-4 xl:p-6 flex flex-col h-full min-h-[300px] lg:min-h-[340px] xl:min-h-[380px] transition-transform hover:-translate-y-1 hover:-translate-x-1 duration-300 group"
                style={{ boxShadow: "4px 4px 0px 0px #1D2B1F" }}
              >
                {/* Number Badge */}
                <div className="mb-8">
                  <span className="inline-flex items-center justify-center px-3 py-1 bg-[#1D2B1F] rounded-full text-[12px] font-bold text-[#BFEA4B] font-[family-name:var(--font-inter)] leading-none">
                    {card.number}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-[26px] md:text-[22px] lg:text-[20px] xl:text-[30px] text-[#1D2B1F] font-bold leading-[1.1]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  {card.title}
                </h3>

                {/* Text */}
                <p className="text-[17px] md:text-[15px] lg:text-[14px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mt-3 flex-1">
                  {card.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
