"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Container from "./Container";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedInsideDesktop = dropdownRef.current?.contains(event.target as Node);
      const clickedInsideMobile = mobileDropdownRef.current?.contains(event.target as Node);
      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    { id: "ai-machine-learning", title: "AI & ML Solutions" },
    { id: "web-application-development", title: "Web App Development" },
    { id: "mobile-app-development", title: "Mobile App Development" },
    { id: "cloud-devops-services", title: "Cloud & DevOps" },
    { id: "automation-data-intelligence", title: "Data Intelligence" },
    { id: "iot-solutions", title: "IoT Solutions" },
  ];

  // Enhanced isActive function that highlights parent section for inner pages
  const isActive = (path: string) => {
    // Exact match
    if (pathname === path) return true;

    // For inner pages, highlight the parent section
    // Home is only active on exact "/" match
    if (path === "/") return pathname === "/";

    // For Portfolio - highlight when on /portfolio/* pages
    if (path === "/portfolio" && pathname.startsWith("/portfolio/")) return true;

    // For Services - highlight when on /services/* pages
    if (path === "/services" && pathname.startsWith("/services/")) return true;

    // For Blog - highlight when on /blog/* pages
    if (path === "/blog" && pathname.startsWith("/blog/")) return true;

    // For About - highlight when on /about/* pages
    if (path === "/about" && pathname.startsWith("/about/")) return true;

    // For Product - highlight when on /product/* pages
    if (path === "/product" && pathname.startsWith("/product/")) return true;

    return false;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="w-full bg-white shadow-[0px_4px_4px_0px_rgba(181,181,181,0.25)] sticky top-0 z-50 flex flex-col">
      {/* Top Bar - Email & Social Icons */}
      <div className="w-full bg-[#00BFD2] h-11 flex justify-center">
        <Container className="h-full flex items-center justify-between">
          {/* Email */}
          <a href="mailto:info@digiwavetechnologies.in" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <span className="text-base font-normal hidden sm:inline">info@digiwavetechnologies.in</span>
          </a>

          <div className="flex justify-start items-center gap-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/digiwave-technologies" target="_blank" rel="noopener noreferrer" className="relative w-7 h-7 hover:opacity-80 transition-opacity">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="25.2727" height="25.2727" rx="4.21212" fill="#00BFD2" />
                <path d="M8.29587 9.3606H5.58544C5.46515 9.3606 5.36768 9.4764 5.36768 9.61921V19.96C5.36768 20.1028 5.46515 20.2186 5.58544 20.2186H8.29587C8.41617 20.2186 8.51364 20.1028 8.51364 19.96V9.61921C8.51364 9.4764 8.41617 9.3606 8.29587 9.3606Z" fill="#FEFFFF" />
                <path d="M6.90315 5.05493C5.88363 5.05493 5.0542 5.88387 5.0542 6.90276C5.0542 7.9221 5.88363 8.75135 6.90315 8.75135C7.92186 8.75135 8.75062 7.92206 8.75062 6.90276C8.75066 5.88387 7.92186 5.05493 6.90315 5.05493Z" fill="#FEFFFF" />
                <path d="M16.6492 9.3606C15.4147 9.3606 14.5021 9.9035 13.9486 10.5204V9.86429C13.9486 9.72479 13.838 9.61166 13.7016 9.61166H10.7579C10.6215 9.61166 10.511 9.72479 10.511 9.86429V19.9659C10.511 20.1055 10.6215 20.2186 10.7579 20.2186H13.825C13.9614 20.2186 14.0719 20.1055 14.0719 19.9659V14.968C14.0719 13.2838 14.5191 12.6276 15.6668 12.6276C16.9167 12.6276 17.016 13.6795 17.016 15.0546V19.966C17.016 20.1055 17.1265 20.2186 17.2629 20.2186H19.9714C20.1078 20.2186 20.2183 20.1055 20.2183 19.966V14.4251C20.2183 11.9207 19.5471 9.3606 16.6492 9.3606Z" fill="#FEFFFF" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/digiwave_technologies?igsh=bjlvcjB4YW5oczc4" target="_blank" rel="noopener noreferrer" className="relative w-7 h-7 hover:opacity-80 transition-opacity">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="25.2727" height="25.2727" rx="4.21212" fill="#00BFD2" />
                <path d="M5.05444 8.84584C5.05444 7.84043 5.45384 6.8762 6.16477 6.16526C6.87571 5.45433 7.83994 5.05493 8.84535 5.05493H16.4272C17.4326 5.05493 18.3968 5.45433 19.1077 6.16526C19.8187 6.8762 20.2181 7.84043 20.2181 8.84584V16.4277C20.2181 17.4331 19.8187 18.3973 19.1077 19.1082C18.3968 19.8192 17.4326 20.2186 16.4272 20.2186H8.84535C7.83994 20.2186 6.87571 19.8192 6.16477 19.1082C5.45384 18.3973 5.05444 17.4331 5.05444 16.4277V8.84584Z" stroke="#FEFFFF" strokeWidth="1.26364" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.79248 12.6369C9.79248 13.3909 10.092 14.1141 10.6252 14.6473C11.1584 15.1805 11.8816 15.4801 12.6357 15.4801C13.3897 15.4801 14.1129 15.1805 14.6461 14.6473C15.1793 14.1141 15.4788 13.3909 15.4788 12.6369C15.4788 11.8828 15.1793 11.1596 14.6461 10.6264C14.1129 10.0932 13.3897 9.7937 12.6357 9.7937C11.8816 9.7937 11.1584 10.0932 10.6252 10.6264C10.092 11.1596 9.79248 11.8828 9.79248 12.6369Z" stroke="#FEFFFF" strokeWidth="1.26364" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.9004 8.37213V8.38266" stroke="#FEFFFF" strokeWidth="1.26364" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1JJfr1MZXC/" target="_blank" rel="noopener noreferrer" className="relative w-7 h-7 hover:opacity-80 transition-opacity">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="25.2727" height="25.2727" rx="4.21212" fill="#00BFD2" />
                <path d="M9.08754 13.131H10.7328V19.9739C10.7328 20.109 10.8411 20.2185 10.9749 20.2185H13.7645C13.8982 20.2185 14.0065 20.109 14.0065 19.9739V13.1633H15.8979C16.0209 13.1633 16.1243 13.07 16.1384 12.9466L16.4256 10.4274C16.4335 10.3581 16.4118 10.2887 16.3659 10.2367C16.3199 10.1846 16.2542 10.1548 16.1852 10.1548H14.0066V8.57567C14.0066 8.09963 14.2603 7.85824 14.7608 7.85824C14.8321 7.85824 16.1852 7.85824 16.1852 7.85824C16.3189 7.85824 16.4273 7.74871 16.4273 7.61366V5.30126C16.4273 5.16615 16.3189 5.05668 16.1852 5.05668H14.2221C14.2083 5.056 14.1775 5.05487 14.1322 5.05487C13.7916 5.05487 12.6077 5.12242 11.6725 5.99164C10.6362 6.95487 10.7803 8.10819 10.8147 8.30816V10.1548H9.08754C8.95382 10.1548 8.84546 10.2643 8.84546 10.3994V12.8864C8.84546 13.0215 8.95382 13.131 9.08754 13.131Z" fill="#FEFFFF" />
              </svg>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <div className="w-full py-3 lg:py-4 flex justify-center">
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/Logo-transparent.png"
              // OLD: Two separate images - Logo.svg and named-logo.png
              // OLD: "https://api.builder.io/api/v1/image/assets/TEMP/53464a68dade6f8a9a2888ca2325aca87ab049c8?width=191"
              // OLD: "https://api.builder.io/api/v1/image/assets/TEMP/c4036386951a1d6ca44a4c518adf6a756d6a4c54?width=437"
              alt="Digiwave Technologies"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    ref={dropdownRef}
                  >
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className={`px-6 py-2.5 rounded-[90px] flex justify-center items-center gap-2 transition-colors cursor-pointer ${isActive(link.href) ? 'bg-[#00BFD2]/10' : 'hover:bg-gray-50 rounded-full'}`}
                    >
                      <span className={`text-lg font-medium font-['Inter'] leading-tight ${isActive(link.href) ? 'text-[#00BFD2]' : 'text-stone-950'}`}>
                        {link.label}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''} ${isActive(link.href) ? 'text-[#00BFD2]' : 'text-stone-950'}`} />
                    </button>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 pt-2 ${isServicesDropdownOpen ? 'block' : 'hidden'}`}>
                      <div className="w-64 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50">
                        <Link
                          href="/services"
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="block px-6 py-3 text-[#00BFD2] text-base font-semibold font-['Inter'] hover:bg-[#00BFD2]/10 transition-colors border-b border-gray-100"
                        >
                          Our Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="block px-6 py-3 text-stone-950 text-base font-normal font-['Inter'] hover:bg-[#00BFD2]/10 hover:text-[#00BFD2] transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-6 py-2.5 rounded-[90px] flex justify-center items-center gap-2 transition-colors ${isActive(link.href) ? 'bg-[#00BFD2]/10' : 'hover:bg-gray-50 rounded-full'}`}
                  >
                    <span className={`text-lg font-medium font-['Inter'] leading-tight ${isActive(link.href) ? 'text-[#00BFD2]' : 'text-stone-950'}`}>
                      {link.label}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="hidden xl:flex">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-52 px-7 py-3.5 bg-[#00BFD2] rounded-[247px] flex justify-center items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span className="text-white text-base font-bold font-['Inter'] uppercase leading-4 tracking-wide">Contact Us</span>
              <svg width="15" height="18" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 4C11.5 3.70833 11.4062 3.46875 11.2188 3.28125C11.0312 3.09375 10.7917 3 10.5 3H3.5C3.20833 3 2.96875 3.09375 2.78125 3.28125C2.59375 3.46875 2.5 3.70833 2.5 4C2.5 4.29167 2.59375 4.53125 2.78125 4.71875C2.96875 4.90625 3.20833 5 3.5 5H8.09375L1.78125 11.2812C1.59375 11.4896 1.5 11.7292 1.5 12C1.5 12.2708 1.59375 12.5104 1.78125 12.7188C1.98958 12.9062 2.22917 13 2.5 13C2.77083 13 3.01042 12.9062 3.21875 12.7188L9.5 6.40625V11C9.5 11.2917 9.59375 11.5312 9.78125 11.7188C9.96875 11.9062 10.2083 12 10.5 12C10.7917 12 11.0312 11.9062 11.2188 11.7188C11.4062 11.5312 11.5 11.2917 11.5 11V4Z" fill="white" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </Container>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-120px)] overflow-y-auto">
          <nav className="flex flex-col py-4 px-4 sm:px-6 gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="w-full">
                {link.hasDropdown ? (
                  <div className="w-full" ref={mobileDropdownRef}>
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className={`w-full py-3 px-4 rounded-lg text-base sm:text-lg font-medium font-['Inter'] transition-colors flex items-center justify-between ${isActive(link.href)
                        ? 'bg-[#00BFD2]/10 text-[#00BFD2]'
                        : 'text-stone-950 hover:bg-gray-50'
                        }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="mt-1 ml-2 border-l-2 border-[#00BFD2]/20 pl-2">
                        <Link
                          href="/services"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesDropdownOpen(false);
                          }}
                          className="block py-2.5 px-4 text-sm sm:text-base font-semibold font-['Inter'] text-[#00BFD2] hover:bg-[#00BFD2]/5 rounded-lg transition-colors"
                        >
                          Our Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsServicesDropdownOpen(false);
                            }}
                            className="block py-2.5 px-4 text-sm sm:text-base font-normal font-['Inter'] text-stone-950 hover:text-[#00BFD2] hover:bg-[#00BFD2]/5 rounded-lg transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full py-3 px-4 rounded-lg text-base sm:text-lg font-medium font-['Inter'] transition-colors ${isActive(link.href)
                      ? 'bg-[#00BFD2]/10 text-[#00BFD2]'
                      : 'text-stone-950 hover:bg-gray-50'
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="mt-4 w-full py-3.5 px-6 bg-[#00BFD2] rounded-full text-center text-white text-sm sm:text-base font-bold font-['Inter'] uppercase tracking-wide hover:opacity-90 transition-opacity cursor-pointer"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}