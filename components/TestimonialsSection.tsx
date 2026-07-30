"use client";

import React, { useState, useEffect, useRef } from 'react';
import FadeUp from "@/components/FadeUp";

const testimonials = [
  { quote: "Was going to leave a glowing review but the work and the rest of the reviews speak for themselves.", author: "Zach Litif", role: "Local Guide" },
  { quote: "Working with Yeshaya on our nonprofit website has been such a gift. He combines deep technical skill with creativity and genuine care for our mission. The site he built reflects who we are and helps us reach the people we serve. I couldn't be more grateful.", author: "Lucy Roberts", role: "Nonprofit Director" },
  { quote: "I'm so grateful to Yeshaya for creating a beautiful and functional website for my nonprofit. He made the process easy and listened to every detail. Our mission shines through the design.", author: "Maryam", role: "Nonprofit Founder" },
  { quote: "I had an excellent experience working with Yeshaya! He was professional, responsive, and highly skilled. He helped bring my website vision to life, offered great suggestions along the way, and delivered everything on time. I highly recommend him to anyone looking for a reliable and talented web developer.", author: "Aminah", role: "Local Guide" },
  { quote: "Five-star experience from start to finish — clear communication, strong execution, and real care for results.", author: "Khushal Mohite", role: "Client" },
  { quote: "Five-star review. Professional, dependable, and great to work with — I'd recommend without hesitation.", author: "Eli Scharlat", role: "Client" },
  { quote: "I was extremely satisfied with the service and I would recommend this business to anyone interested.", author: "Simon Kofman", role: "Client" },
  { quote: "The best of the best!! Highly recommended!", author: "Natanel Rubin", role: "Business Owner" },
  { quote: "I really have to be blown away to leave a review for someone but Yeshaya blew it out of the park with my SEO. Super knowledgeable and even helped me understand more about SEO tactics and techniques in the process.", author: "Bear", role: "Client" },
  { quote: "Outstanding five-star service — responsive, skilled, and easy to work with throughout the project.", author: "Mo", role: "Client" },
  { quote: "Yeshaya's work is clear and effective. Highly recommend working with this business for visual communication needs.", author: "Miriam Bursky-Tammam", role: "Business Owner" },
  { quote: "I don't usually write reviews, but working with Yeshaya.dev has been an absolute game-changer for me as an artist. From our very first conversation, Yeshaya clearly listened to my vision and understood what I was trying to build.", author: "Spencer Williams", role: "Artist" },
  { quote: "Five-star review — excellent collaboration and a polished final result.", author: "Neeraj Senthil Kumar", role: "Client" },
  { quote: "Great service amazing quality", author: "Jeff Wisniewski", role: "Client" },
  { quote: "I had interviewed several web designers before talking with Yeshaya. I was looking for the right person to help give our mission life by creating a website that had visual appeal and informed the reader. Yeshaya's professionalism and communication skills were next level. He listened with intention, offered thoughtful, informed suggestions, and executed every step with timeliness and care. Our finished site reflects the soul of our work because he took the time to understand who we are and what we're here to do. I can't recommend Yeshaya highly enough.", author: "Bethany Mann", role: "Nonprofit Leader" },
  { quote: "Yeshaya helped with a website revamp, SEO strategy, and optimizing Google AdWords campaigns. He's smart, cares about my success, and is diligent on following through — highly recommended!", author: "Carl Spitzer", role: "Business Owner" },
  { quote: "Built a really fast website for me, excellent service. The speed and quality of the work was outstanding. Highly recommend!", author: "Mayer Scharlat", role: "Business Owner" },
  { quote: "I was amazed at the skill, speed, and thoughtfulness that was applied to my website build. The enthusiasm was contagious and the results were spectacular! Very thankful!", author: "Greg Sollie", role: "Author" }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  // swipe handling
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
      setAutoPlay(false);
    } else if (distance < -minSwipeDistance) {
      handlePrev();
      setAutoPlay(false);
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="w-full bg-[#1D2B1F] pt-0 pb-16 md:pb-20 flex flex-col items-center">
      {/* Stars */}
      <FadeUp>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 md:w-7 md:h-7 text-[#BFEA4B]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={100}>
        <h2 
          className="text-[44px] lg:text-[36px] xl:text-[44px] text-[#F7F0E6] font-bold mt-6 mb-3 text-center tracking-tight"
          style={{ fontFamily: "var(--font-fraunces), serif" }}
        >
          24 five-star reviews on Google
        </h2>
      </FadeUp>
      <FadeUp delay={200}>
        <p className="text-[16px] md:text-[18px] text-[#F7F0E6]/65 font-[family-name:var(--font-inter)] text-center mb-12">
          What our clients have to say
        </p>
      </FadeUp>

      {/* Card Container */}
      <div className="max-w-[1200px] w-full px-5 md:px-12 lg:px-24 xl:px-5">
        <div 
          className="relative rounded-2xl border border-[#F7F0E6]/15 bg-[#F7F0E6]/[0.06] p-6 md:p-10 lg:p-8 xl:p-10 flex flex-col items-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Quote & Author */}
          <div className="text-center transition-opacity duration-300 min-h-[160px] md:min-h-[280px] lg:min-h-[220px] xl:min-h-[160px] flex flex-col justify-center w-full">
            <p className="text-[19px] md:text-[16px] lg:text-[17px] xl:text-[19px] text-[#F7F0E6]/85 font-[family-name:var(--font-inter)] leading-relaxed mb-6 max-w-4xl mx-auto">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex flex-col items-center gap-1">
              <h3 
                className="text-[28px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[#F7F0E6] font-bold tracking-tight"
                style={{ fontFamily: "var(--font-fraunces), serif" }}
              >
                {testimonials[currentIndex].author}
              </h3>
              <p className="text-[#F7F0E6]/55 text-[15px] md:text-[17px] font-[family-name:var(--font-inter)]">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Controls & View All Link */}
          <div className="w-full flex flex-col items-center mt-8 gap-8">
            {/* Dots and Arrows row */}
            <div className="flex items-center justify-between w-full relative max-w-[800px] mx-auto">
              {/* Left Arrow */}
              <button 
                onClick={handlePrev}
                className="w-10 h-10 md:w-[52px] md:h-[52px] rounded-full border border-[#F7F0E6]/20 flex items-center justify-center text-[#F7F0E6]/70 hover:text-[#F7F0E6] hover:bg-[#F7F0E6]/10 transition-colors z-10 shrink-0"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l5-5M5 12l5 5" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-[10px] md:gap-3 px-2 md:px-4 flex-wrap max-w-[calc(100%-100px)] md:max-w-[calc(100%-130px)] xl:max-w-[70%]">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                      currentIndex === idx ? "bg-[#BFEA4B]" : "bg-[#F7F0E6]/20 hover:bg-[#F7F0E6]/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                onClick={handleNext}
                className="w-10 h-10 md:w-[52px] md:h-[52px] rounded-full border border-[#F7F0E6]/20 flex items-center justify-center text-[#F7F0E6]/70 hover:text-[#F7F0E6] hover:bg-[#F7F0E6]/10 transition-colors z-10 shrink-0"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M19 12l-5-5M19 12l-5 5" />
                </svg>
              </button>
            </div>

            {/* View All Testimonials */}
            <a 
              href="#" 
              className="text-[12px] md:text-[13px] font-bold text-[#BFEA4B] tracking-[0.1em] uppercase font-[family-name:var(--font-inter)] hover:opacity-80 transition-opacity border-b border-[#BFEA4B]/40 hover:border-[#BFEA4B] pb-0.5 mt-2"
            >
              VIEW ALL TESTIMONIALS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
