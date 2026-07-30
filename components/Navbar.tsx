"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  const handleNavClick = (href: string, closeMenu = false) => {
    setOpenMegaMenu(null);
    
    if (closeMenu) {
      setIsMenuOpen(false);
      setOpenMobileSection(null);
    }

    if (pathname === href) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "SERVICES", mobileLabel: "Services", href: "/services" },
    { name: "ABOUT", mobileLabel: "About", href: "/about" },
    { name: "WHO WE SERVE", mobileLabel: "Who we serve", href: "/who-we-serve" },
    { name: "CASE STUDIES", mobileLabel: "Case studies", href: "/case-studies" },
    { name: "RESOURCES", mobileLabel: "Resources", href: "/resources" },
  ];

  const featuredServices = [
    { title: "Nonprofit\nweb design", description: "Sites that convert\ndonors", image: "/navbar-pic/service.webp" },
    { title: "Salesforce\nfor nonprofits", description: "NPSP, NPC &\nintegrations", image: "/navbar-pic/service1.webp" },
    { title: "Fundraising\nstrategy", description: "Campaigns that\ncompound", image: "/navbar-pic/service2.webp" },
  ];

  const megaMenus = [
    {
      href: "/services",
      label: "SERVICES",
      title: "View all services",
      subtitle: "Full catalog & how we work",
      links: [
        { label: "Web development", href: "/services/web-development" },
        { label: "CRM consulting", href: "/services/crm-consulting" },
        { label: "Automations", href: "/services/automations" },
      ],
      sideLabel: "FEATURED",
      cta: "START A PROJECT",
      ctaHref: "/work-with-us",
      featured: featuredServices.map((service) => ({ ...service, href: "/services" })),
    },
    {
      href: "/about",
      label: "ABOUT",
      title: "View all about",
      subtitle: "Team, story, and how we work",
      links: [
        { label: "Careers", href: "/careers" },
        { label: "Work with us", href: "/work-with-us" },
        { label: "Client testimonials", href: "/client-testimonials" },
      ],
      sideLabel: "EXPLORE",
      cta: "BOOK A CALL",
      ctaHref: "/work-with-us",
      featured: [
        { title: "Case studies", description: "Real outcomes by\nsector", image: "/navbar-pic/about.webp", href: "/case-studies" },
        { title: "Insights", description: "Guides & field notes", image: "/navbar-pic/about1.webp", href: "/resources" },
        { title: "Who we\nserve", description: "Audiences & industries", image: "/navbar-pic/about2.webp", href: "/who-we-serve" },
      ],
    },
    {
      href: "/who-we-serve",
      label: "WHO WE SERVE",
      title: "View all who we\nserve",
      subtitle: "Teams & missions we partner with",
      links: [
        { label: "Client profiles", href: "/who-we-serve" },
        { label: "See the work", href: "/case-studies" },
        { label: "Tell us about your org", href: "/work-with-us" },
      ],
      sideLabel: "PROOF",
      cta: "BROWSE CASE STUDIES",
      ctaHref: "/case-studies",
      featured: [
        { title: "Taabu Club", description: "Global fundraising\ninfrastructure", image: "/navbar-pic/who.webp", href: "/case-studies" },
        { title: "Child Arise\nTN", description: "Full digital stack", image: "/navbar-pic/who1.webp", href: "/case-studies" },
        { title: "HopeHub", description: "Community & CRM", image: "/navbar-pic/who2.webp", href: "/case-studies" },
      ],
    },
    {
      href: "/case-studies",
      label: "CASE STUDIES",
      title: "View all case\nstudies",
      subtitle: "Selected nonprofit & mission work",
      links: [
        { label: "Christian Celeste Tate", href: "/case-studies/christian-celeste-tate" },
        { label: "Tax the Rich NY", href: "/case-studies" },
        { label: "Innate Ketamine", href: "/case-studies" },
      ],
      sideLabel: "SPOTLIGHT",
      cta: "DISCUSS YOUR PROJECT",
      ctaHref: "/work-with-us",
      featured: [
        { title: "Christian\nCeleste Tate", description: "Campaign platform", image: "/navbar-pic/case.webp", href: "/case-studies/christian-celeste-tate" },
        { title: "Tax the Rich\nNY", description: "Advocacy redesign", image: "/navbar-pic/case1.webp", href: "/case-studies" },
        { title: "Taabu Club", description: "Humanitarian\nfundraising", image: "/navbar-pic/case2.webp", href: "/case-studies" },
      ],
    },
    {
      href: "/resources",
      label: "RESOURCES",
      title: "View all resources",
      subtitle: "Guides and tools for nonprofit teams",
      links: [
        { label: "Free SROI calculator", href: "/resources" },
        { label: "Google Ad Grants guide", href: "/resources" },
        { label: "Website redesign guide", href: "/resources" },
      ],
      sideLabel: "READ NEXT",
      cta: "ALL INSIGHTS",
      ctaHref: "/resources",
      featured: [
        { title: "SROI\nCalculator", description: "Prove your nonprofit's\nimpact", image: "/navbar-pic/resource.webp", href: "/resources" },
        { title: "Google Ad\nGrants", description: "Eligibility & compliance", image: "/navbar-pic/resource1.webp", href: "/resources" },
        { title: "Website\nredesign", description: "Timeline, cost & SEO", image: "/navbar-pic/resource2.webp", href: "/resources" },
      ],
    },
  ];

  const activeMegaMenu = megaMenus.find((menu) => menu.href === openMegaMenu);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 border-b border-black transition-colors duration-200 ${openMegaMenu ? "bg-[#BFEA4B]" : "bg-[#F7F0E6]"}`}
        onMouseLeave={() => setOpenMegaMenu(null)}
      >
        {/* Main Navbar Container */}
        <div className="flex items-center justify-between lg:justify-center gap-4 lg:gap-12 xl:gap-[100px] px-5 md:px-8 py-4 md:py-5">
          
          {/* Logo */}
          <Link href="/" onClick={() => handleNavClick("/")} className="flex items-center shrink-0 z-10">
            <Image
              src="/logos/logo1.webp"
              alt="CauseHouse Logo"
              width={220}
              height={44}
              className="h-9 w-auto md:h-10 xl:h-11 max-h-11 object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                onMouseEnter={() => setOpenMegaMenu(link.href)}
                className={`relative pb-1 text-[11px] xl:text-[12.84px] font-bold text-[#1D2B1F] tracking-[0.1em] transition-colors before:absolute before:left-0 before:-bottom-0.5 before:z-10 before:h-[2px] before:w-0 before:bg-[#1D2B1F] before:transition-[width] before:duration-500 before:ease-out hover:before:w-full after:absolute after:left-0 after:-bottom-0.5 after:z-0 after:h-[2px] after:bg-[#BFEA4B] after:transition-[width] after:duration-500 after:ease-out font-[family-name:var(--font-inter)] ${
                  pathname === link.href
                    ? "after:w-full"
                    : "after:w-0"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/work-with-us"
              onClick={() => handleNavClick("/work-with-us")}
              className={`inline-block px-5 py-2 xl:px-6 xl:py-2.5 border-2 border-[#1D2B1F] rounded-full text-[11px] xl:text-[12.84px] font-bold tracking-[0.1em] font-[family-name:var(--font-inter)] shadow-[4px_4px_0px_0px_#1D2B1F] xl:shadow-[5px_5px_0px_0px_#1D2B1F] hover:shadow-[2px_2px_0px_0px_#1D2B1F] hover:translate-x-[2px] hover:translate-y-[2px] xl:hover:translate-x-[3px] xl:hover:translate-y-[3px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] xl:active:translate-x-[5px] xl:active:translate-y-[5px] ${openMegaMenu ? "bg-[#1D2B1F] text-[#F7F0E6]" : "bg-[#BFEA4B] text-[#1D2B1F]"}`}
            >
              WORK WITH US
            </Link>
          </div>

          {/* Mobile MENU Button (Closed State) */}
          <button
            className="lg:hidden px-5 py-2 border-2 border-[#1D2B1F] rounded-full text-[11px] font-bold text-[#1D2B1F] tracking-widest focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            MENU
          </button>
        </div>

        {activeMegaMenu && (
          <div className="absolute left-0 top-full hidden w-full border-b border-[#1D2B1F] bg-[#BFEA4B] lg:block">
            <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] px-10 py-10 lg:px-8 lg:py-8 xl:px-12 xl:py-12">
              <div className="pr-12 lg:pr-8 xl:pr-14">
                <p className="mb-7 text-[12px] font-bold tracking-[0.1em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                  {activeMegaMenu.label}
                </p>
                <Link
                  href={activeMegaMenu.href}
                  onClick={() => handleNavClick(activeMegaMenu.href)}
                  className="group block"
                >
                  <h2
                    className="whitespace-pre-line text-[54px] lg:text-[44px] font-bold leading-[0.98] tracking-[-0.035em] text-[#1D2B1F] xl:text-[60px]"
                    style={{ fontFamily: "var(--font-fraunces), serif" }}
                  >
                    {activeMegaMenu.title}
                  </h2>
                  <p className="mt-1 text-[16px] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                    {activeMegaMenu.subtitle}
                  </p>
                </Link>

                <div className="mt-7 border-t border-[#1D2B1F]/20">
                  {activeMegaMenu.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="group block border-b border-[#1D2B1F]/20 py-3 text-[34px] lg:text-[28px] font-bold leading-none tracking-[-0.03em] text-[#1D2B1F] xl:text-[38px]"
                    >
                      <span
                        className="relative inline-block after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#1D2B1F] after:transition-[width] after:duration-500 after:ease-out group-hover:after:w-full"
                        style={{ fontFamily: "var(--font-fraunces), serif" }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-l border-[#1D2B1F]/25 pl-10 lg:pl-8 xl:pl-12">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-[12px] font-bold tracking-[0.1em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                    {activeMegaMenu.sideLabel}
                  </p>
                  <Link
                    href={activeMegaMenu.ctaHref}
                    onClick={() => handleNavClick(activeMegaMenu.ctaHref)}
                    className="rounded-full border-2 border-[#1D2B1F] bg-[#F7F0E6] px-5 py-2 text-[11px] font-bold tracking-[0.1em] text-[#1D2B1F] font-[family-name:var(--font-inter)]"
                  >
                    {activeMegaMenu.cta}
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {activeMegaMenu.featured.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={() => handleNavClick(service.href)}
                      className="group"
                    >
                      <div className="aspect-square overflow-hidden rounded-xl border-2 border-[#1D2B1F] bg-[#F7F0E6] p-2">
                        <Image
                          src={service.image}
                          alt={service.title.replace("\n", " ")}
                          width={220}
                          height={220}
                          className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                      <h3
                        className="mt-2 whitespace-pre-line text-[28px] lg:text-[22px] font-bold leading-[0.98] tracking-[-0.03em] text-[#1D2B1F] xl:text-[31px]"
                        style={{ fontFamily: "var(--font-fraunces), serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-2 whitespace-pre-line text-[16px] leading-snug text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Full Screen Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#BFEA4B] flex flex-col overflow-y-auto">
          {/* Mobile Overlay Header */}
          <div className="flex items-center justify-between px-5 md:px-8 py-4 md:py-5">
            <Link href="/" className="flex items-center shrink-0" onClick={() => handleNavClick("/", true)}>
              <Image
                src="/logos/logo1.webp"
                alt="CauseHouse Logo"
                width={220}
                height={44}
                className="h-9 w-auto md:h-10 max-h-11 object-contain object-left"
                priority
              />
            </Link>
            <button
              className="px-5 py-2 border border-[#1D2B1F] rounded-full text-[11px] font-bold text-[#1D2B1F] tracking-widest focus:outline-none"
              onClick={() => {
                setIsMenuOpen(false);
                setOpenMobileSection(null);
              }}
            >
              CLOSE
            </button>
          </div>

          <div className="w-full h-[1px] bg-[#1D2B1F]/20 mx-auto max-w-[calc(100%-2.5rem)] mb-6"></div>

          {/* Mobile Menu Links */}
          <div className="flex-1 px-5 md:px-8 flex flex-col">
            <div className="flex flex-col gap-3 md:gap-4">
              {navLinks.map((link, index) => {
                const menu = megaMenus.find((item) => item.href === link.href);
                const isOpen = openMobileSection === link.href;

                return (
                  <div
                    key={link.name}
                    className="overflow-hidden rounded-2xl border-2 border-[#1D2B1F] bg-[#F7F0E6] shadow-[4px_4px_0px_0px_#1D2B1F]"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMobileSection(isOpen ? null : link.href)}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1D2B1F] text-[10px] font-bold text-[#BFEA4B] font-[family-name:var(--font-inter)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="flex-1 text-[31px] font-bold leading-[1.02] tracking-[-0.02em] text-[#1D2B1F]"
                        style={{ fontFamily: "var(--font-fraunces), serif" }}
                      >
                        {link.mobileLabel}
                      </span>
                      <svg
                        className={`h-4 w-4 shrink-0 text-[#1D2B1F] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {isOpen && menu && (
                      <div className="border-t border-[#1D2B1F]/20 px-4 pb-5 pt-4">
                        <p className="mb-3 text-[10px] font-bold tracking-[0.1em] text-[#1D2B1F] font-[family-name:var(--font-inter)]">
                          {menu.label}
                        </p>
                        <div className="border-t border-[#1D2B1F]/10">
                          {menu.links.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => {
                                handleNavClick(item.href, true);
                                setOpenMobileSection(null);
                              }}
                              className="block border-b border-[#1D2B1F]/10 py-3 text-[17px] font-medium text-[#6B7A6D] font-[family-name:var(--font-inter)]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <Link
                          href={menu.href}
                          onClick={() => {
                            handleNavClick(menu.href, true);
                            setOpenMobileSection(null);
                          }}
                          className="mt-5 inline-block text-[11px] font-bold tracking-[0.08em] text-[#1D2B1F] underline underline-offset-4 font-[family-name:var(--font-inter)]"
                        >
                          VIEW ALL {menu.label}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Footer CTA */}
            <div className="mt-auto pt-10 pb-10 flex flex-col items-center">
              <Link
                href="/work-with-us"
                onClick={() => handleNavClick("/work-with-us", true)}
                className="inline-flex w-full h-14 min-h-[44px] mb-3 items-center justify-center bg-[#1D2B1F] rounded-full text-[11px] font-bold text-[#F7F0E6] tracking-widest uppercase font-[family-name:var(--font-inter)]"
              >
                WORK WITH US
              </Link>
              <p className="text-center text-[#1D2B1F] text-[13px] px-2 leading-relaxed opacity-80">
                Full-service digital marketing and growth systems built for nonprofits.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
