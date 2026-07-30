import Link from "next/link";
import React from "react";

export default function ExploreByServiceSection() {
  const services = [
    "NONPROFIT WEB DESIGN",
    "CRM CONSULTING",
    "DIGITAL FUNDRAISING STRATEGY",
    "SALESFORCE FOR NONPROFITS",
    "ALL SERVICES",
    "CASE STUDIES",
    "INSIGHTS"
  ];

  return (
    <section className="w-full bg-[#F7F0E6] pb-10 md:pb-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Top Border Line */}
        <div className="w-full border-t border-[#1D2B1F]/10 mb-8"></div>
        
        {/* Container for Label and Buttons */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[12px] md:text-[13px] font-bold text-[#6B7A6D] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)]">
            EXPLORE BY SERVICE
          </h3>
          
          <div className="flex flex-wrap gap-3 md:gap-4">
            {services.map((service, index) => (
              <Link
                key={index}
                href="#"
                className="inline-flex items-center justify-center px-[20px] py-[8px] rounded-full border-2 border-[#1D2B1F]/30 bg-[#F3EBDD] text-[#1D2B1F] text-[12px] md:text-[13px] font-semibold uppercase font-[family-name:var(--font-inter)]"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
