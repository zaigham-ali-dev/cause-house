import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1D2B1F] text-[#F7F0E6] pt-16 pb-8 px-5 md:px-12 lg:px-20 font-[family-name:var(--font-inter)]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-14 lg:gap-8">
        
        {/* Left Column */}
        <div className="flex flex-col max-w-[320px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-5 hover:opacity-90 transition-opacity">
            <div className="w-[42px] h-[44px] overflow-hidden shrink-0 relative">
              <Image
                src="/logos/logo1.webp"
                alt="CauseHouse Icon"
                width={220}
                height={44}
                className="absolute left-[1px] top-0 h-[44px] w-auto max-w-none"
              />
            </div>
            <span className="text-[32px] font-bold text-[#c5e86c] tracking-tight mt-1" style={{ fontFamily: "var(--font-fraunces), serif" }}>
              CauseHouse
            </span>
          </Link>
          
          <p className="max-w-xs text-base leading-relaxed text-[#F7F0E6]/60 mb-6">
            Full-service digital marketing and growth<br />systems built for nonprofits.
          </p>

          <div className="mb-6">
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-2 text-[#F7F0E6]/60">Contact</h4>
            <a href="mailto:hello@causehouse.co" className="block text-base leading-snug text-[#F7F0E6]/80 font-semibold transition-colors duration-200 hover:text-[#c5e86c] mb-1.5">
              hello@causehouse.co
            </a>
            <a href="tel:4847739386" className="block text-base leading-snug text-[#F7F0E6]/80 font-semibold transition-colors duration-200 hover:text-[#c5e86c]">
              (484) 773-9386
            </a>
          </div>

          <Link href="/work-with-us" className="inline-flex w-fit px-8 py-3.5 border border-[#F7F0E6]/40 rounded-full text-[12px] font-bold tracking-[0.1em] hover:bg-[#F7F0E6] hover:text-[#1D2B1F] transition-all mb-6 shadow-[2px_2px_0px_0px_rgba(247,240,230,0.2)]">
            WORK WITH US
          </Link>

          <div className="flex gap-3">
            <a href="#" className="inline-flex items-center rounded-md border border-[#F7F0E6]/20 px-3.5 py-1.5 text-[12px] text-[#F7F0E6]/55 font-semibold tracking-[0.05em] hover:text-[#c5e86c] hover:border-[#c5e86c] transition-colors duration-200 uppercase">
              Instagram
            </a>
            <a href="#" className="inline-flex items-center rounded-md border border-[#F7F0E6]/20 px-3.5 py-1.5 text-[12px] text-[#F7F0E6]/55 font-semibold tracking-[0.05em] hover:text-[#c5e86c] hover:border-[#c5e86c] transition-colors duration-200 uppercase">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Columns Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-6 xl:gap-x-8 gap-y-10 lg:ml-12 xl:ml-24">
          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4 text-[#F7F0E6]/60">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services" className="text-base leading-snug text-[#F7F0E6]/80 font-semibold transition-colors duration-200 hover:text-[#c5e86c]">All services</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Web Design & Dev</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Fundraising Strategy</Link></li>
              <li><Link href="/services/crm-consulting" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">CRM Consulting</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Salesforce NPSP</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Landing Pages</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Analytics & Reporting</Link></li>
              <li><Link href="/services/automations" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Automations</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Creative & Branding</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4 text-[#F7F0E6]/60">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/resources" className="text-base leading-snug text-[#F7F0E6]/80 font-semibold transition-colors duration-200 hover:text-[#c5e86c]">All resources</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Insights</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Google Ad Grants guide</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Website redesign guide</Link></li>
            </ul>
          </div>

          {/* Work */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4 text-[#F7F0E6]/60">Work</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/case-studies" className="text-base leading-snug text-[#F7F0E6]/80 font-semibold transition-colors duration-200 hover:text-[#c5e86c]">Case studies</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Testimonials</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4 text-[#F7F0E6]/60">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-base leading-snug text-[#F7F0E6]/80 font-semibold transition-colors duration-200 hover:text-[#c5e86c]">About CauseHouse</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Institutional website risk review</Link></li>
              <li><Link href="#" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Partnerships</Link></li>
              <li><Link href="/careers" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Careers</Link></li>
              <li><Link href="/who-we-serve" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Who we serve</Link></li>
              <li><Link href="/work-with-us" className="text-base leading-snug text-[#F7F0E6]/55 transition-colors duration-200 hover:text-[#c5e86c]">Work with us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-[#F7F0E6]/10 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-base text-[#F7F0E6]/35">
        <p>© 2026 CauseHouse. All rights reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
          <Link href="#" className="transition-colors duration-200 hover:text-[#c5e86c]">Careers</Link>
          <Link href="#" className="transition-colors duration-200 hover:text-[#c5e86c]">Privacy policy</Link>
          <Link href="#" className="transition-colors duration-200 hover:text-[#c5e86c]">Terms of use</Link>
          <Link href="#" className="transition-colors duration-200 hover:text-[#c5e86c]">Accessibility</Link>
          <Link href="https://www.causehouse.co" className="transition-colors duration-200 hover:text-[#c5e86c]">www.causehouse.co</Link>
        </div>
      </div>
    </footer>
  );
}
