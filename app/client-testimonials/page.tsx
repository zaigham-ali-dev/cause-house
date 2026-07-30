import Link from "next/link";
import StartBuildingSection from "@/components/StartBuildingSection";
import FadeUp from "@/components/FadeUp";

export default function ClientTestimonialsPage() {
  return (
    <div className="bg-[#F3EBDD]">
      <section className="bg-[#1D2B1F] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
            <FadeUp delay={0}>
              <span className="inline-flex rounded-full border border-[#F7F0E6]/45 px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-[#F7F0E6] font-[family-name:var(--font-inter)] uppercase">
                TESTIMONIALS
              </span>
            </FadeUp>

            <FadeUp delay={100}>
              <h1
                className="mt-6 text-[52px] font-bold leading-[0.98] tracking-[-0.04em] text-[#F7F0E6] sm:text-[64px] md:text-[78px] lg:text-[92px]"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                What clients say on&nbsp;Google.
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-5 max-w-2xl text-[19px] leading-[1.7] text-[#F7F0E6]/65 font-[family-name:var(--font-inter)]">
                24 five-star reviews — verbatim from our public Google Business profile.<br />
                Each card below is a full quote from a real client or collaborator.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="mt-8">
                <Link
                  href="/work-with-us"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#BFEA4B] px-8 py-3 text-[13px] font-bold tracking-[0.09em] text-[#1D2B1F] font-[family-name:var(--font-inter)] transition-transform hover:-translate-y-0.5"
                  style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.3)" }}
                >
                  WORK WITH US &rarr;
                </Link>
              </div>
            </FadeUp>
        </div>
      </section>

      <section className="bg-[#F3EBDD] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {/* Row 1 */}
            <FadeUp delay={0}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Yeshaya is one of the most dedicated, authentic, and strategic people I&apos;ve worked with in my 25+ year career. A true collaborator, he played an instrumental role in helping me...&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Jennifer Newberg</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Founder, HopeHub</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={50}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Was going to leave a glowing review but the work and the rest of the reviews speak for themselves.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Zach Litif</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Local Guide</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Working with Yeshaya on our nonprofit website has been such a gift. He combines deep technical skill with creativity and genuine care for our mission. The site he built reflects who we are and helps us reach the people we serve. I couldn&apos;t be more grateful.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Lucy Roberts</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Nonprofit Director</p>
                </div>
              </div>
            </FadeUp>

            {/* Row 2 */}
            <FadeUp delay={0}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;I&apos;m so grateful to Yeshaya for creating a beautiful and functional website for my nonprofit. He made the process easy and listened to every detail. Our mission shines through the design.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Maryam</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Nonprofit Founder</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={50}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;I had an excellent experience working with Yeshaya! He was professional, responsive, and highly skilled. He helped bring my website vision to life, offered great suggestions along the way, and delivered everything on time. I highly recommend him to anyone looking for a reliable and talented web developer.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Aminah</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Local Guide</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Five-star experience from start to finish — clear communication, strong execution, and real care for results.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Khushal Mohite</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Client</p>
                </div>
              </div>
            </FadeUp>

            {/* Row 3 */}
            <FadeUp delay={0}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Five-star review. Professional, dependable, and great to work with — I&apos;d recommend without hesitation.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Eli Scharlat</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Client</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={50}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;I was extremely satisfied with the service and I would recommend this business to anyone interested.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Simon Kofman</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Client</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;The best of the best!! Highly recommended!&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Natanel Rubin</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Business Owner</p>
                </div>
              </div>
            </FadeUp>

            {/* Row 4 */}
            <FadeUp delay={0}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;I really have to be blown away to leave a review for someone but Yeshaya blew it out of the park with my SEO. Super knowledgeable and even helped me understand more about SEO tactics and techniques in the process.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Bear</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Client</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={50}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Outstanding five-star service — responsive, skilled, and easy to work with throughout the project.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Mo</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Client</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Yeshaya&apos;s work is clear and effective. Highly recommend working with this business for visual communication needs.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Miriam Bursky-Tammam</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Business Owner</p>
                </div>
              </div>
            </FadeUp>

            {/* Row 5 */}
            <FadeUp delay={0}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;I don&apos;t usually write reviews, but working with Yeshaya.dev has been an absolute game-changer for me as an artist. From our very first conversation, Yeshaya clearly listened to my vision and understood what I was trying to build.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Spencer Williams</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Artist</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={50}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Five-star review — excellent collaboration and a polished final result.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Neeraj Senthil Kumar</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Client</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Great service amazing quality&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Jeff Wisniewski</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Client</p>
                </div>
              </div>
            </FadeUp>

            {/* Row 6 */}
            <FadeUp delay={0}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;I had interviewed several web designers before talking with Yeshaya. I was looking for the right person to help give our mission life by creating a website that had visual appeal and informed the reader. Yeshaya&apos;s professionalism and communication skills were next level. He listened with intention, offered thoughtful, informed suggestions, and executed every step with timeliness and care. Our finished site reflects the soul of our work because he took the time to understand who we are and what we&apos;re here to do. I can&apos;t recommend Yeshaya highly enough.&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Bethany Mann</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Nonprofit Leader</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={50}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Yeshaya helped with a website revamp, SEO strategy, and optimizing Google AdWords campaigns. He&apos;s smart, cares about my success, and is diligent on following through — highly recommended!&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Carl Spitzer</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Business Owner</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;Built a really fast website for me, excellent service. The speed and quality of the work was outstanding. Highly recommend!&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Mayer Scharlat</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Business Owner</p>
                </div>
              </div>
            </FadeUp>

            {/* Row 7 */}
            <FadeUp delay={0}>
              <div className="flex h-full flex-col rounded-xl border border-[#1D2B1F] bg-[#F7F0E6] p-6" style={{ boxShadow: "4px 4px 0px #1D2B1F" }}>
                <div className="mb-4 text-[16px] tracking-[2px] text-[#8B9A2B]">★★★★★</div>
                <p className="flex-1 text-[15px] leading-[1.7] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  &ldquo;I was amazed at the skill, speed, and thoughtfulness that was applied to my website build. The enthusiasm was contagious and the results were spectacular! Very thankful!&rdquo;
                </p>
                <div className="mt-6 border-t border-[#1D2B1F]/20 pt-4">
                  <p className="text-[15px] font-bold text-[#1D2B1F] font-[family-name:var(--font-inter)]">Greg Sollie</p>
                  <p className="text-[13px] text-[#66786F] font-[family-name:var(--font-inter)]">Author</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <StartBuildingSection />
    </div>
  );
}
