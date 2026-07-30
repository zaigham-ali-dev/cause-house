import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeUp from "@/components/FadeUp";

export default function PartnersSection() {
  const partners = [
    { id: 1, src: "/partner/partner1.webp", tooltip: "Donations, forms & recurring giving" },
    { id: 2, src: "/partner/partner2.png", tooltip: "Advocacy, email & fundraising in one platform" },
    { id: 3, src: "/partner/partner3.webp", tooltip: "AI-optimized online giving & checkout" },
    { id: 4, src: "/partner/partner4.webp", tooltip: "Communities, courses & member hubs" },
    { id: 5, src: "/partner/partner5.webp", tooltip: "Automation between your tools" },
    { id: 6, src: "/partner/partner6.webp", tooltip: "Nonprofit CRM, events & payments" },
    { id: 7, src: "/partner/partner7.webp", tooltip: "Nonprofit Cloud & unified supporter data" },
    { id: 8, src: "/partner/partner8.webp", tooltip: "Enterprise nonprofit CRM & fundraising suite" },
  ];

  // Double the array to create a seamless scrolling loop
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="w-full bg-[#F3EBDD] pt-8 md:pt-10 pb-16 md:pb-20 lg:pb-24">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* When hovering the container, pause the animation */
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-[#1D2B1F]/15 mb-12 md:mb-16"></div>
        
        {/* Badge */}
        <FadeUp>
          <div className="inline-block mb-8">
            <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
              CERTIFIED PARTNERS
            </span>
          </div>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={100}>
          <h2 
            className="text-[32px] md:text-[44px] lg:text-[36px] xl:text-[44px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold text-left mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-fraunces), serif" }}
          >
            The platforms nonprofits already rely on.
          </h2>
        </FadeUp>

        {/* Marquee Container */}
        <div className="w-full bg-[#1D2B1F] rounded-lg md:rounded-xl py-12 md:py-16 lg:py-12 xl:py-16 relative marquee-container" style={{ overflowX: "clip", overflowY: "visible" }}>
          <div className="flex w-max animate-marquee">
            {marqueePartners.map((partner, index) => (
              <div 
                key={index} 
                className="relative group/logo flex items-center justify-center px-3 md:px-5 cursor-pointer"
              >
                <div className="relative w-[140px] md:w-[180px] lg:w-[150px] xl:w-[180px] h-[50px] md:h-[60px] lg:h-[50px] xl:h-[60px] flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={`Partner ${partner.id}`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full mb-5 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover/logo:opacity-100 group-hover/logo:visible transition-all duration-300 z-50 pointer-events-none">
                  <div className="relative bg-[#F7F0E6] text-[#1D2B1F] border border-[#1D2B1F]/20 px-5 py-4 rounded-2xl font-[family-name:var(--font-inter)] text-[15px] font-medium text-center w-[240px] shadow-md">
                    {partner.tooltip}
                    {/* Tooltip Arrow - outer (border) */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[12px] border-transparent border-t-[#1D2B1F]/20"></div>
                    {/* Tooltip Arrow - inner (fill) */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[11px] border-transparent border-t-[#F7F0E6]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            href="/partnerships"
            className="inline-flex items-center justify-center px-8 md:px-10 min-h-[48px] md:min-h-[52px] bg-transparent border-2 border-[#1D2B1F] rounded-full text-[12px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_#1D2B1F] hover:shadow-[2px_2px_0px_0px_#1D2B1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
          >
            EXPLORE PARTNERSHIPS
          </Link>
        </div>

      </div>
    </section>
  );
}
