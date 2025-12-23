"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full bg-white shadow-[0px_4px_4px_0px_rgba(181,181,181,0.25)] sticky top-0 z-50 flex flex-col">
      {/* Top Bar - Social Icons */}
      <div className="w-full bg-[#00BFD2] h-9 flex items-center justify-end px-6 lg:px-20">
        <div className="flex justify-start items-center gap-3">
          {/* Facebook */}
          <a href="#" className="relative w-6 h-6 hover:opacity-80 transition-opacity">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="25.2727" height="25.2727" rx="4.21212" fill="#00BFD2" />
              <path d="M9.08754 13.131H10.7328V19.9739C10.7328 20.109 10.8411 20.2185 10.9749 20.2185H13.7645C13.8982 20.2185 14.0065 20.109 14.0065 19.9739V13.1633H15.8979C16.0209 13.1633 16.1243 13.07 16.1384 12.9466L16.4256 10.4274C16.4335 10.3581 16.4118 10.2887 16.3659 10.2367C16.3199 10.1846 16.2542 10.1548 16.1852 10.1548H14.0066V8.57567C14.0066 8.09963 14.2603 7.85824 14.7608 7.85824C14.8321 7.85824 16.1852 7.85824 16.1852 7.85824C16.3189 7.85824 16.4273 7.74871 16.4273 7.61366V5.30126C16.4273 5.16615 16.3189 5.05668 16.1852 5.05668H14.2221C14.2083 5.056 14.1775 5.05487 14.1322 5.05487C13.7916 5.05487 12.6077 5.12242 11.6725 5.99164C10.6362 6.95487 10.7803 8.10819 10.8147 8.30816V10.1548H9.08754C8.95382 10.1548 8.84546 10.2643 8.84546 10.3994V12.8864C8.84546 13.0215 8.95382 13.131 9.08754 13.131Z" fill="#FEFFFF" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="relative w-6 h-6 hover:opacity-80 transition-opacity">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="25.2727" height="25.2727" rx="4.21212" fill="#00BFD2" />
              <path d="M5.05444 8.84584C5.05444 7.84043 5.45384 6.8762 6.16477 6.16526C6.87571 5.45433 7.83994 5.05493 8.84535 5.05493H16.4272C17.4326 5.05493 18.3968 5.45433 19.1077 6.16526C19.8187 6.8762 20.2181 7.84043 20.2181 8.84584V16.4277C20.2181 17.4331 19.8187 18.3973 19.1077 19.1082C18.3968 19.8192 17.4326 20.2186 16.4272 20.2186H8.84535C7.83994 20.2186 6.87571 19.8192 6.16477 19.1082C5.45384 18.3973 5.05444 17.4331 5.05444 16.4277V8.84584Z" stroke="#FEFFFF" strokeWidth="1.26364" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.79248 12.6369C9.79248 13.3909 10.092 14.1141 10.6252 14.6473C11.1584 15.1805 11.8816 15.4801 12.6357 15.4801C13.3897 15.4801 14.1129 15.1805 14.6461 14.6473C15.1793 14.1141 15.4788 13.3909 15.4788 12.6369C15.4788 11.8828 15.1793 11.1596 14.6461 10.6264C14.1129 10.0932 13.3897 9.7937 12.6357 9.7937C11.8816 9.7937 11.1584 10.0932 10.6252 10.6264C10.092 11.1596 9.79248 11.8828 9.79248 12.6369Z" stroke="#FEFFFF" strokeWidth="1.26364" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.9004 8.37213V8.38266" stroke="#FEFFFF" strokeWidth="1.26364" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" className="w-6 h-6 rounded bg-[#00BFD2] overflow-hidden hover:opacity-80 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-[1.6]">
              <g clipPath="url(#clip0_41_2192)">
                <path d="M5.22337 1.89569C5.30987 1.89573 5.39543 1.91352 5.47477 1.94797C5.55411 1.98243 5.62552 2.0328 5.6846 2.09598L5.73262 2.1541L8.43301 5.83634L12.1898 2.08081C12.3035 1.9675 12.4561 1.90171 12.6165 1.89681C12.777 1.89191 12.9333 1.94827 13.0537 2.05443C13.1741 2.1606 13.2496 2.30862 13.2648 2.46842C13.28 2.62822 13.2338 2.78782 13.1356 2.91481L13.0832 2.9742L9.18929 6.86747L13.1457 12.2632C13.2113 12.3526 13.2521 12.4577 13.2642 12.5679C13.2762 12.6781 13.2591 12.7895 13.2145 12.891C13.1698 12.9924 13.0993 13.0804 13.0099 13.146C12.9206 13.2115 12.8155 13.2525 12.7054 13.2646L12.6365 13.2684H9.94053C9.85403 13.2684 9.76847 13.2506 9.68913 13.2161C9.60979 13.1817 9.53837 13.1313 9.4793 13.0681L9.43128 13.01L6.72963 9.32714L2.9741 13.0833C2.8604 13.1966 2.70783 13.2624 2.54738 13.2673C2.38693 13.2722 2.23063 13.2158 2.11023 13.1097C1.98983 13.0035 1.91435 12.8555 1.89912 12.6957C1.8839 12.5359 1.93008 12.3763 2.02827 12.2493L2.08071 12.1899L5.97334 8.29601L2.01816 2.90091C1.95264 2.8115 1.91181 2.70642 1.89975 2.59623C1.88769 2.48605 1.90483 2.37462 1.94945 2.27316C1.99407 2.17169 2.0646 2.08374 2.15396 2.01815C2.24332 1.95256 2.34836 1.91164 2.45854 1.89948L2.5274 1.89569H5.22337Z" fill="#FEFFFF" />
              </g>
              <defs>
                <clipPath id="clip0_41_2192">
                  <rect width="15.1636" height="15.1636" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="relative w-6 h-6 hover:opacity-80 transition-opacity">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="25.2727" height="25.2727" rx="4.21212" fill="#00BFD2" />
              <path d="M8.29587 9.3606H5.58544C5.46515 9.3606 5.36768 9.4764 5.36768 9.61921V19.96C5.36768 20.1028 5.46515 20.2186 5.58544 20.2186H8.29587C8.41617 20.2186 8.51364 20.1028 8.51364 19.96V9.61921C8.51364 9.4764 8.41617 9.3606 8.29587 9.3606Z" fill="#FEFFFF" />
              <path d="M6.90315 5.05493C5.88363 5.05493 5.0542 5.88387 5.0542 6.90276C5.0542 7.9221 5.88363 8.75135 6.90315 8.75135C7.92186 8.75135 8.75062 7.92206 8.75062 6.90276C8.75066 5.88387 7.92186 5.05493 6.90315 5.05493Z" fill="#FEFFFF" />
              <path d="M16.6492 9.3606C15.4147 9.3606 14.5021 9.9035 13.9486 10.5204V9.86429C13.9486 9.72479 13.838 9.61166 13.7016 9.61166H10.7579C10.6215 9.61166 10.511 9.72479 10.511 9.86429V19.9659C10.511 20.1055 10.6215 20.2186 10.7579 20.2186H13.825C13.9614 20.2186 14.0719 20.1055 14.0719 19.9659V14.968C14.0719 13.2838 14.5191 12.6276 15.6668 12.6276C16.9167 12.6276 17.016 13.6795 17.016 15.0546V19.966C17.016 20.1055 17.1265 20.2186 17.2629 20.2186H19.9714C20.1078 20.2186 20.2183 20.1055 20.2183 19.966V14.4251C20.2183 11.9207 19.5471 9.3606 16.6492 9.3606Z" fill="#FEFFFF" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full h-20 flex items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/53464a68dade6f8a9a2888ca2325aca87ab049c8?width=191"
            alt="Digiwave Logo"
            className="w-20 h-10 object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c4036386951a1d6ca44a4c518adf6a756d6a4c54?width=437"
            alt="Digiwave Technologies"
            className="w-48 h-10 object-contain hidden sm:block"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link href="/" className={`px-5 py-2.5 rounded-[90px] flex justify-center items-center gap-2.5 transition-colors ${isActive('/') ? 'bg-[#00BFD2]/10' : 'hover:bg-gray-50 rounded-full'}`}>
            <span className={`text-lg font-medium font-['Inter'] leading-7 ${isActive('/') ? 'text-[#00BFD2]' : 'text-stone-950'}`}>Home</span>
          </Link>
          <Link href="/about" className={`px-5 py-2.5 rounded-[90px] flex justify-center items-center gap-2.5 transition-colors ${isActive('/about') ? 'bg-[#00BFD2]/10' : 'hover:bg-gray-50 rounded-full'}`}>
            <span className={`text-lg font-medium font-['Inter'] leading-7 ${isActive('/about') ? 'text-[#00BFD2]' : 'text-stone-950'}`}>About Us</span>
          </Link>
          <div className="flex items-center gap-2.5 cursor-pointer px-5 py-2.5 hover:bg-gray-50 rounded-full transition-colors group relative">
            <span className="text-stone-950 text-lg font-medium font-['Inter'] leading-7">Services</span>
            <div className="mb-1">
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.49609 9.37891C5.67839 9.54297 5.88802 9.625 6.125 9.625C6.36198 9.625C6.57161 9.54297 6.75391 9.37891L11.1289 5.00391C11.293 4.82161 11.375 4.61198 11.375 4.375C11.375 4.13802 11.293 3.92839 11.1289 3.74609C10.9466 3.58203 10.737 3.5 10.5 3.5C10.263 3.5 10.0534 3.58203 9.87109 3.74609L6.125 7.51953L2.37891 3.74609C2.19661 3.58203 1.98698 3.5 1.75 3.5C1.51302 3.5 1.30339 3.58203 1.12109 3.74609C0.957031 3.92839 0.875 4.13802 0.875 4.375C0.875 4.61198 0.957031 4.82161 1.12109 5.00391L5.49609 9.37891Z" fill="#0F0F10" />
              </svg>
            </div>
            {/* Dropdown can be implemented here */}
          </div>
          <Link href="/product" className={`px-5 py-2.5 rounded-[90px] flex justify-center items-center gap-2.5 transition-colors ${isActive('/product') ? 'bg-[#00BFD2]/10' : 'hover:bg-gray-50 rounded-full'}`}>
            <span className={`text-lg font-medium font-['Inter'] leading-7 ${isActive('/product') ? 'text-[#00BFD2]' : 'text-stone-950'}`}>Product</span>
          </Link>
          <Link href="/portfolio" className={`px-5 py-2.5 rounded-[90px] flex justify-center items-center gap-2.5 transition-colors ${isActive('/portfolio') ? 'bg-[#00BFD2]/10' : 'hover:bg-gray-50 rounded-full'}`}>
            <span className={`text-lg font-medium font-['Inter'] leading-7 ${isActive('/portfolio') ? 'text-[#00BFD2]' : 'text-stone-950'}`}>Portfolio</span>
          </Link>
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:flex">
          <Link href="/contact" className="w-48 px-5 py-4 bg-[#00BFD2] rounded-[247px] flex justify-center items-center gap-2.5 hover:opacity-90 transition-opacity">
            <span className="text-white text-sm font-bold font-['Inter'] uppercase leading-4 tracking-wide">Contact Us</span>
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 4C11.5 3.70833 11.4062 3.46875 11.2188 3.28125C11.0312 3.09375 10.7917 3 10.5 3H3.5C3.20833 3 2.96875 3.09375 2.78125 3.28125C2.59375 3.46875 2.5 3.70833 2.5 4C2.5 4.29167 2.59375 4.53125 2.78125 4.71875C2.96875 4.90625 3.20833 5 3.5 5H8.09375L1.78125 11.2812C1.59375 11.4896 1.5 11.7292 1.5 12C1.5 12.2708 1.59375 12.5104 1.78125 12.7188C1.98958 12.9062 2.22917 13 2.5 13C2.77083 13 3.01042 12.9062 3.21875 12.7188L9.5 6.40625V11C9.5 11.2917 9.59375 11.5312 9.78125 11.7188C9.96875 11.9062 10.2083 12 10.5 12C10.7917 12 11.0312 11.9062 11.2188 11.7188C11.4062 11.5312 11.5 11.2917 11.5 11V4Z" fill="white" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-gray-600">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
}
