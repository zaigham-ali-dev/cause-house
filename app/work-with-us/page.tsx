"use client";

import Link from "next/link";
import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import StartBuildingSection from "@/components/StartBuildingSection";

const questions = [
  {
    question: "How quickly do you respond?",
    answer:
      "We usually reply within one to two business days \u2014 often sooner. If your note is time-sensitive, say so in the subject or first line and we will prioritize.",
  },
  {
    question: "What should I include when I write in?",
    answer:
      "Your organization or campaign name, what you are trying to achieve, any deadlines or grant windows, and links if you already have a site or tools in place.",
  },
  {
    question: "Is booking a call better than the contact form?",
    answer:
      "Either works. Scheduling is best when you want a fixed time to talk live. The form is ideal when you prefer to send details asynchronously or share files and links in one place.",
  },
  {
    question: "When should I call vs. email?",
    answer:
      "Email is great for detailed briefs and attachments. Phone works well for quick questions or if you prefer a short conversation before sending a longer write-up.",
  },
];

export default function WorkWithUsPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#F3EBDD]">
      {/* Hero section */}
      <section className="w-full border-b border-[#F7F0E6] bg-[#1D2B1F] px-5 pb-16 pt-28 text-[#F7F0E6] md:px-10 md:pb-20 md:pt-32 lg:px-16 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-[1204px]">
          <FadeUp>
            <div className="mb-7 inline-block">
              <span className="rounded-full border border-[#F7F0E6]/45 px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.15em] text-[#F7F0E6] md:text-[13px] font-[family-name:var(--font-inter)]">
                WORK WITH US
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1
              className="max-w-[1050px] text-[56px] font-bold leading-[0.98] text-[#F7F0E6] md:text-[88px] lg:max-w-none lg:text-[72px] xl:whitespace-nowrap xl:text-[92px]"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              Work with CauseHouse.
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-7 max-w-[620px] text-[18px] leading-[1.55] text-[#F7F0E6]/78 md:text-[20px] lg:text-[17px] xl:text-[20px] font-[family-name:var(--font-inter)]">
              A nonprofit digital studio that moves fast, thinks in systems, and
              delivers results you can measure.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact section */}
      <section className="w-full border-b border-[#1D2B1F] bg-[#F3EBDD] px-5 py-16 text-[#1D2B1F] md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1204px] gap-12 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-20 xl:gap-24">
          <div>
            <FadeUp>
              <div className="mb-7 inline-block">
                <span className="rounded-full border border-[#1D2B1F] px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.15em] text-[#1D2B1F] md:text-[13px] font-[family-name:var(--font-inter)]">
                  WORK WITH US
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2
                className="max-w-[760px] text-[52px] font-bold leading-[0.95] text-[#1D2B1F] md:text-[86px] lg:text-[72px] xl:text-[92px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Book a 30-minute call &mdash; or send a message.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="mt-8">
                <Link
                  href="#"
                  className="text-[27px] font-bold leading-tight text-[#061914] underline decoration-[#061914] underline-offset-4 md:text-[31px] lg:text-[24px] xl:text-[31px]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  Schedule time with me
                </Link>
                <p className="mt-6 max-w-[560px] text-[18px] leading-[1.55] text-[#5E756F] md:text-[20px] lg:text-[17px] xl:text-[20px] font-[family-name:var(--font-inter)]">
                  Or reach us at{" "}
                  <a
                    href="mailto:hello@causehouse.co"
                    className="font-bold text-[#061914] underline underline-offset-3"
                  >
                    hello@causehouse.co
                  </a>{" "}
                  and{" "}
                  <a
                    href="tel:4847739386"
                    className="font-bold text-[#061914] underline underline-offset-3"
                  >
                    (484) 773-9386
                  </a>
                  .
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="mt-16 max-w-[710px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.13em] text-[#5E756F] font-[family-name:var(--font-inter)]">
                  COMMON QUESTIONS
                </p>
                <h3
                  className="mt-3 text-[30px] font-bold leading-tight text-[#061914] md:text-[34px] lg:text-[28px] xl:text-[34px]"
                  style={{ fontFamily: "var(--font-fraunces), serif" }}
                >
                  Before you write in
                </h3>
                <div className="mt-7 flex flex-col border-b border-[#1D2B1F]/20">
                  {questions.map((item, index) => (
                    <div
                      key={item.question}
                      className="border-t border-[#1D2B1F]/20"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenQuestion(openQuestion === index ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-6 py-5 text-left"
                        aria-expanded={openQuestion === index}
                      >
                        <span className="text-[18px] font-bold leading-snug text-[#061914] md:text-[20px] lg:text-[17px] xl:text-[20px] font-[family-name:var(--font-inter)]">
                          {item.question}
                        </span>
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1D2B1F]/30 text-[#1D2B1F] transition-transform duration-300 ${
                            openQuestion === index ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openQuestion === index
                            ? "max-h-[220px] opacity-100 pb-5"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="max-w-[620px] text-[16px] leading-[1.55] text-[#5E756F] md:text-[18px] lg:text-[16px] xl:text-[18px] font-[family-name:var(--font-inter)]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={200}>
            <form className="rounded-[18px] border-2 border-[#1D2B1F] bg-[#F7F0E6] p-8 shadow-[6px_7px_0_0_#1D2B1F] md:p-9">
              <h2
                className="text-[30px] font-bold leading-tight text-[#061914] md:text-[34px] lg:text-[28px] xl:text-[34px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                Send a message
              </h2>
              <p className="mt-3 text-[18px] leading-[1.45] text-[#5E756F] md:text-[20px] lg:text-[17px] xl:text-[20px] font-[family-name:var(--font-inter)]">
                We read every note. Fields marked with * are required.
              </p>

              <div className="mt-8 space-y-5">
                <label className="block">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#061914] font-[family-name:var(--font-inter)]">
                    NAME <span className="text-[#C94B4B]">*</span>
                  </span>
                  <input className="mt-2 h-14 w-full rounded-xl border-2 border-[#1D2B1F]/20 bg-[#F3EBDD] px-4 text-[#061914] outline-none transition-colors focus:border-[#1D2B1F]/60" />
                </label>
                <label className="block">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#061914] font-[family-name:var(--font-inter)]">
                    EMAIL <span className="text-[#C94B4B]">*</span>
                  </span>
                  <input
                    type="email"
                    className="mt-2 h-14 w-full rounded-xl border-2 border-[#1D2B1F]/20 bg-[#F3EBDD] px-4 text-[#061914] outline-none transition-colors focus:border-[#1D2B1F]/60"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#061914] font-[family-name:var(--font-inter)]">
                    ORGANIZATION
                  </span>
                  <input className="mt-2 h-14 w-full rounded-xl border-2 border-[#1D2B1F]/20 bg-[#F3EBDD] px-4 text-[#061914] outline-none transition-colors focus:border-[#1D2B1F]/60" />
                </label>
                <label className="block">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#061914] font-[family-name:var(--font-inter)]">
                    PHONE
                  </span>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="mt-2 h-14 w-full rounded-xl border-2 border-[#1D2B1F]/20 bg-[#F3EBDD] px-4 text-[#061914] outline-none transition-colors placeholder:text-[#5E756F]/45 focus:border-[#1D2B1F]/60"
                  />
                  <span className="mt-2 block text-[15px] leading-[1.45] text-[#8A978D] font-[family-name:var(--font-inter)]">
                    Optional &mdash; include country / area code when relevant.
                  </span>
                </label>
                <label className="block">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#061914] font-[family-name:var(--font-inter)]">
                    MESSAGE <span className="text-[#C94B4B]">*</span>
                  </span>
                  <textarea
                    rows={7}
                    maxLength={5000}
                    className="mt-2 w-full resize-y rounded-xl border-2 border-[#1D2B1F]/20 bg-[#F3EBDD] px-4 py-3 text-[#061914] outline-none transition-colors focus:border-[#1D2B1F]/60"
                  />
                  <span className="mt-2 block text-[15px] text-[#8A978D] font-[family-name:var(--font-inter)]">
                    Max 5000 characters.
                  </span>
                </label>
              </div>

              <button
                type="button"
                className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-[#1D2B1F] bg-[#BFEA4B] px-8 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1D2B1F] shadow-[4px_4px_0_0_#1D2B1F] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#1D2B1F] font-[family-name:var(--font-inter)]"
              >
                SEND MESSAGE
              </button>
              <p className="mt-8 text-[15px] leading-[1.45] text-[#8A978D] font-[family-name:var(--font-inter)]">
                By submitting, you agree we may use your details to respond. See
                our{" "}
                <Link
                  href="#"
                  className="text-[#061914] underline underline-offset-3"
                >
                  privacy policy
                </Link>
                .
              </p>
            </form>
          </FadeUp>
        </div>
      </section>

      <StartBuildingSection />
    </div>
  );
}
