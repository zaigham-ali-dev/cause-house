"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FadeUp from "@/components/FadeUp";

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="w-full bg-[#F3EBDD] py-16 md:py-24 lg:py-24 xl:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 xl:gap-28">

          {/* Left Column */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <FadeUp delay={0}>
              <div className="inline-block mb-8">
                <span className="px-[14px] py-[6px] border border-[#1D2B1F] rounded-full text-[13px] font-bold text-[#1D2B1F] tracking-[0.15em] uppercase font-[family-name:var(--font-inter)]">
                  GET IN TOUCH
                </span>
              </div>
            </FadeUp>

            {/* Heading */}
            <FadeUp delay={100}>
              <h2
                className="text-[40px] md:text-[60px] lg:text-[48px] xl:text-[60px] leading-[1.1] tracking-tight text-[#1D2B1F] font-bold mb-6"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Tell us what you&apos;re
                <br />
                building.
              </h2>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={200}>
              <p className="text-[17px] md:text-[19px] lg:text-[16px] xl:text-[19px] text-[#6B7A6D] font-[family-name:var(--font-inter)] leading-relaxed mb-6 max-w-lg">
                Share a bit about your mission and how we can help.
                <br />
                Fields marked with <span className="text-[#1D2B1F] font-semibold">*</span> are required.
              </p>
            </FadeUp>

            {/* Checkmarks */}
            <FadeUp delay={300}>
              <div className="flex flex-col mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#BFEA4B"/><path d="M6 10.5l2.5 2.5L14 8" stroke="#1D2B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[15px] md:text-[16px] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                    Nonprofit-only clients — we specialize
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#BFEA4B"/><path d="M6 10.5l2.5 2.5L14 8" stroke="#1D2B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[15px] md:text-[16px] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                    Response within one business day
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#BFEA4B"/><path d="M6 10.5l2.5 2.5L14 8" stroke="#1D2B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[15px] md:text-[16px] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                    Free strategy consultation available
                  </span>
                </div>
              </div>
            </FadeUp>

            {/* Book a call link */}
            <p className="text-[15px] md:text-[16px] text-[#6B7A6D] font-[family-name:var(--font-inter)] mb-8">
              Prefer to talk live?{" "}
              <Link
                href="#"
                className="text-[#1D2B1F] font-semibold underline underline-offset-4 decoration-[#1D2B1F] hover:decoration-2 transition-all"
              >
                Book a 30-minute call
              </Link>
              .
            </p>

            {/* Farmer Image */}
            <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
              <Image
                src="/pictured/farmer.webp"
                alt="Farmer character"
                width={220}
                height={220}
                className="h-auto w-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 max-w-lg w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.08em] uppercase font-[family-name:var(--font-inter)]">
                  NAME <span className="text-[#1D2B1F]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F7F0E6] border-2 border-[#1D2B1F]/20 rounded-xl text-[15px] text-[#1D2B1F] font-[family-name:var(--font-inter)] outline-none focus:border-[#1D2B1F]/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.08em] uppercase font-[family-name:var(--font-inter)]">
                  EMAIL <span className="text-[#1D2B1F]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F7F0E6] border-2 border-[#1D2B1F]/20 rounded-xl text-[15px] text-[#1D2B1F] font-[family-name:var(--font-inter)] outline-none focus:border-[#1D2B1F]/60 transition-colors"
                />
              </div>

              {/* Organization */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.08em] uppercase font-[family-name:var(--font-inter)]">
                  ORGANIZATION
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F7F0E6] border-2 border-[#1D2B1F]/20 rounded-xl text-[15px] text-[#1D2B1F] font-[family-name:var(--font-inter)] outline-none focus:border-[#1D2B1F]/60 transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.08em] uppercase font-[family-name:var(--font-inter)]">
                  PHONE
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F7F0E6] border-2 border-[#1D2B1F]/20 rounded-xl text-[15px] text-[#1D2B1F] font-[family-name:var(--font-inter)] outline-none focus:border-[#1D2B1F]/60 transition-colors placeholder:text-[#1D2B1F]/30"
                />
                <span className="text-[12px] text-[#6B7A6D] font-[family-name:var(--font-inter)]">
                  Optional — include country / area code when relevant.
                </span>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-bold text-[#1D2B1F] tracking-[0.08em] uppercase font-[family-name:var(--font-inter)]">
                  MESSAGE <span className="text-[#1D2B1F]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F7F0E6] border-2 border-[#1D2B1F]/20 rounded-xl text-[15px] text-[#1D2B1F] font-[family-name:var(--font-inter)] outline-none focus:border-[#1D2B1F]/60 transition-colors resize-none"
                />
                <span className="text-[12px] text-[#6B7A6D] font-[family-name:var(--font-inter)]">
                  Max 5000 characters.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 min-h-[52px] bg-[#BFEA4B] border-2 border-[#1D2B1F] rounded-full text-[13px] font-bold text-[#1D2B1F] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_#1D2B1F] hover:shadow-[2px_2px_0px_0px_#1D2B1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] w-full md:w-auto self-start mt-2"
              >
                SEND MESSAGE
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
