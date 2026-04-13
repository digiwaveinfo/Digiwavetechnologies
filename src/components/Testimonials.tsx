"use client";

import { useEffect, useState } from "react";
import { getReviewStats, getReviews, TestimonialReview, TestimonialStats } from "@/lib/api";

const StarIcon = () => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66799 0.492286C8.50393 0.182389 8.23961 0.0183268 7.87502 9.82285e-05C7.52867 0.0183268 7.26435 0.182389 7.08206 0.492286L5.33206 4.10166L1.39456 4.70322C1.0482 4.75791 0.820337 4.94932 0.710962 5.27744C0.601587 5.6238 0.674504 5.92458 0.929712 6.17979L3.77346 8.99619L3.08987 12.9884C3.05341 13.3347 3.1719 13.6173 3.44534 13.836C3.737 14.0366 4.0469 14.0548 4.37502 13.8907L7.87502 12.0313L11.4024 13.8907C11.7123 14.0548 12.013 14.0366 12.3047 13.836C12.5964 13.6173 12.7149 13.3347 12.6602 12.9884L12.0039 8.99619L14.8477 6.17979C15.0847 5.92458 15.1576 5.6238 15.0664 5.27744C14.9388 4.94932 14.7018 4.75791 14.3555 4.70322L10.418 4.10166L8.66799 0.492286Z" fill="#FCC640" />
  </svg>
);

const ClutchLogo = () => (
  <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_358_765)">
      <g clipPath="url(#clip1_358_765)">
        <g clipPath="url(#clip2_358_765)">
          <path d="M30.5306 30.9796C28.2857 32.7755 25.1429 34.1224 22 34.1224C14.8163 34.1224 9.87755 28.7347 9.87755 21.551C9.87755 14.3673 14.8163 9.42857 22 9.42857C25.1429 9.42857 28.2857 10.3265 30.5306 12.5714L31.8776 13.9184L39.0612 7.18367L37.2653 5.83673C33.2245 2.24489 27.8367 0 22 0C9.42858 0 0 9.42857 0 22C0 34.5714 9.42858 44 22 44C27.8367 44 33.2245 41.7551 37.2653 38.1633L39.0612 36.8163L31.8776 29.6327L30.5306 30.9796Z" fill="#17313B"/>
          <path d="M21.5507 29.1838C25.5182 29.1838 28.7344 25.9675 28.7344 22.0001C28.7344 18.0327 25.5182 14.8164 21.5507 14.8164C17.5833 14.8164 14.3671 18.0327 14.3671 22.0001C14.3671 25.9675 17.5833 29.1838 21.5507 29.1838Z" fill="#EF4335"/>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_358_765">
        <rect width="40" height="44" fill="white"/>
      </clipPath>
      <clipPath id="clip1_358_765">
        <rect width="40" height="44" fill="white"/>
      </clipPath>
      <clipPath id="clip2_358_765">
        <rect width="40" height="44" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const G2Logo = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_358_783)">
      <g clipPath="url(#clip1_358_783)">
        <mask id="mask0_358_783" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="44">
          <path d="M44.0009 0H0V44.0009H44.0009V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_358_783)">
          <path d="M22.7987 43.7218C12.8535 43.6957 4.18813 37.5823 1.36141 28.4639C-0.999439 20.8234 0.53115 13.8394 5.84118 7.73628C9.10544 3.98571 13.315 1.68683 18.2635 0.703075C21.0319 0.153673 23.8831 0.130961 26.6603 0.636227C26.971 0.691431 26.9737 0.772834 26.8529 1.01694C25.4871 3.78371 24.1275 6.55438 22.7747 9.32891C22.7411 9.41566 22.6792 9.48914 22.598 9.53781C22.5167 9.58645 22.4216 9.60754 22.3269 9.59775C19.4814 9.66853 16.7421 10.6633 14.5445 12.4239C12.3471 14.1843 10.8178 16.6094 10.2 19.3134C8.83666 25.2234 12.1218 31.3369 17.9186 33.5034C22.5194 35.2225 26.8007 34.5381 30.6952 31.5999C30.8935 31.4543 30.9757 31.4252 31.1176 31.6652C32.6109 34.2081 34.1171 36.7463 35.6361 39.2797C35.7691 39.5021 35.7214 39.6023 35.5241 39.736C32.5909 41.7556 29.1978 43.0519 25.6357 43.5139C24.6944 43.6321 23.7474 43.7015 22.7987 43.7218Z" fill="#EF4335"/>
          <path d="M38.2449 37.4324C38.1223 37.3685 38.0882 37.2378 38.0255 37.1319C36.3271 34.2738 34.6348 31.4131 32.9485 28.5497C32.891 28.4322 32.7975 28.3351 32.6808 28.2721C32.564 28.2092 32.43 28.1831 32.2973 28.198C28.9255 28.2081 25.5553 28.198 22.1835 28.198H21.7638C21.7608 28.0717 21.8078 27.9496 21.8951 27.8565C23.6074 24.9616 25.3208 22.067 27.0351 19.1724C27.0805 19.0766 27.1556 18.9971 27.25 18.9449C27.3441 18.8928 27.4528 18.8708 27.5608 18.8816C31.0121 18.8904 34.4625 18.8904 37.9118 18.8816C38.0191 18.8708 38.1271 18.8931 38.2208 18.9453C38.3142 18.9974 38.3887 19.0769 38.433 19.1724C40.1545 22.0913 41.8834 25.0062 43.6208 27.9174C43.6786 27.9919 43.7115 28.0822 43.7142 28.176C43.7169 28.2694 43.6895 28.3615 43.6356 28.439C41.8905 31.3715 40.1518 34.3009 38.4195 37.2277C38.3735 37.3018 38.3525 37.4037 38.2449 37.4324Z" fill="#EF4335"/>
          <path d="M30.9767 6.69035C30.3584 6.08875 29.7819 5.51329 29.1849 4.94659C28.9997 4.77221 29.1294 4.64288 29.2086 4.51064C29.8923 3.35244 31.0052 2.49253 32.3191 2.10715C33.1155 1.8514 33.958 1.76065 34.7926 1.84074C35.627 1.92085 36.4352 2.16997 37.1646 2.57213C39.8527 3.98605 39.6121 7.26578 38.0605 8.748C37.4726 9.29916 36.8062 9.76554 36.0822 10.1328C35.3355 10.5193 34.5889 10.8841 33.8571 11.2953C33.2496 11.6339 32.776 12.1018 32.5564 12.7789C32.467 13.0522 32.5208 13.1233 32.8207 13.1205C34.795 13.1088 36.7706 13.1205 38.7459 13.1088C39.0448 13.1088 39.1568 13.1641 39.1447 13.4808C39.1179 14.1594 39.1284 14.8397 39.1447 15.5153C39.1447 15.7302 39.0837 15.806 38.8566 15.806C35.6818 15.7999 32.5083 15.7999 29.3355 15.806C29.1862 15.806 29.0475 15.806 29.0458 15.5951C29.0458 13.4561 29.4519 11.4639 31.1724 9.93812C31.9918 9.23197 32.9114 8.64466 33.9035 8.19433C34.4471 7.93567 34.9964 7.68865 35.4713 7.31374C35.8866 6.98531 36.1732 6.58718 36.203 6.04952C36.248 5.20813 35.564 4.58328 34.5307 4.51789C33.0448 4.41472 31.9725 5.06572 31.2231 6.27473C31.1483 6.39392 31.0796 6.51597 30.9767 6.69035Z" fill="#020842"/>
          <path d="M38.5473 40.4789V39.78H38.2904V39.6348H38.9788V39.78H38.7189V40.4789H38.5473ZM39.0892 40.4789V39.6375H39.3505L39.4998 40.2115L39.6494 39.6375H39.912V40.4789H39.7641V39.8162L39.5925 40.4789H39.4236L39.2533 39.8162V40.4789H39.0892Z" fill="#020842"/>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_358_783">
        <rect width="44" height="44" fill="white"/>
      </clipPath>
      <clipPath id="clip1_358_783">
        <rect width="44" height="44" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const LOCATION_TO_COUNTRY_CODE: Record<string, string> = {
  india: "IN",
  usa: "US",
  "united states": "US",
  "united kingdom": "GB",
  uk: "GB",
  canada: "CA",
  australia: "AU",
  germany: "DE",
  france: "FR",
  spain: "ES",
  italy: "IT",
  netherlands: "NL",
  sweden: "SE",
  switzerland: "CH",
  uae: "AE",
  "united arab emirates": "AE",
  singapore: "SG",
  malaysia: "MY",
  thailand: "TH",
  indonesia: "ID",
  japan: "JP",
  "south korea": "KR",
  china: "CN",
  brazil: "BR",
  mexico: "MX",
  turkey: "TR",
  ukraine: "UA",
  poland: "PL",
  russia: "RU",
  "new zealand": "NZ",
};

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const fallbackReviews: TestimonialReview[] = [
    {
      id: "fallback-1",
      quote: "Amazing software services",
      review_text: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
      reviewer_name: "Maverick Phoenix",
      reviewer_role: "Board Member, UNIQA",
      location: "Seattle, Ukraine",
      reviewer_image_url: "/testimonials/Background.png",
      company_logo_url: "/testimonials/company-logo.svg",
    },
    {
      id: "fallback-2",
      quote: "Exceptional development team",
      review_text: "Working with this team has been a game-changer for our startup. They understood our vision from day one and delivered beyond expectations. Their technical expertise and communication skills are top-notch.",
      reviewer_name: "Sarah Johnson",
      reviewer_role: "CEO, TechStart",
      location: "New York, USA",
      reviewer_image_url: "/testimonials/Background.png",
      company_logo_url: "/testimonials/company-logo.svg",
    },
  ];

  const fallbackStats: TestimonialStats = {
    customers_count_text: "3,900+",
    headline_line_1: "customers",
    headline_line_2: "win deals",
    headline_line_3: "with Techco",
    google_reviews_count_text: "200+",
    hangouts_reviews_count_text: "300+",
    google_logo_url: "/testimonials/google.svg",
    hangouts_logo_url: "/testimonials/hangouts.svg",
  };

  const [reviews, setReviews] = useState<TestimonialReview[]>(fallbackReviews);
  const [stats, setStats] = useState<TestimonialStats>(fallbackStats);

  useEffect(() => {
    const loadReviews = async () => {
      const dynamicReviews = await getReviews();
      if (dynamicReviews.length > 0) {
        setReviews(dynamicReviews);
      }

      const dynamicStats = await getReviewStats();
      if (dynamicStats) {
        setStats(dynamicStats);
      }
    };

    loadReviews();
  }, []);

  useEffect(() => {
    if (currentSlide >= reviews.length) {
      setCurrentSlide(0);
      setExpanded(false);
    }
  }, [currentSlide, reviews.length]);

  const activeReview = reviews[currentSlide];

  const resolveCountryCode = (review: TestimonialReview): string | null => {
    const explicitCode = (review.country_code || "").trim().toUpperCase();
    if (explicitCode.length === 2) {
      return explicitCode;
    }

    const normalizedLocation = (review.location || "").trim().toLowerCase();
    if (!normalizedLocation) {
      return null;
    }

    const directMatch = LOCATION_TO_COUNTRY_CODE[normalizedLocation];
    if (directMatch) {
      return directMatch;
    }

    const parts = normalizedLocation.split(',').map((part) => part.trim()).filter(Boolean);
    for (const part of parts) {
      if (LOCATION_TO_COUNTRY_CODE[part]) {
        return LOCATION_TO_COUNTRY_CODE[part];
      }
    }

    return null;
  };

  const activeCountryCode = resolveCountryCode(activeReview);
  const activeFlagUrl = activeCountryCode
    ? `https://flagcdn.com/w40/${activeCountryCode.toLowerCase()}.png`
    : null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
    setExpanded(false);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    setExpanded(false);
  };

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-5 justify-center items-stretch">
          {/* Stats Card */}
          <div className="w-full p-6 sm:p-8 md:p-[50px] bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)] flex flex-col justify-between min-h-[400px] sm:min-h-[450px]">
            <div className="mb-8 sm:mb-0">
              <div className="text-[#00BFD2] text-3xl sm:text-4xl md:text-[51px] font-bold font-['Inter'] leading-tight md:leading-[66px] mb-3 sm:mb-4">{stats.customers_count_text || fallbackStats.customers_count_text}</div>
              <div className="text-[#00114C] text-2xl sm:text-3xl md:text-[45px] font-bold font-['Inter'] leading-tight md:leading-[54px]">
                {stats.headline_line_1 || fallbackStats.headline_line_1}<br />
                {stats.headline_line_2 || fallbackStats.headline_line_2}<br />
                {stats.headline_line_3 || fallbackStats.headline_line_3}
              </div>
            </div>

            {/* Review Logos */}
            <div className="flex flex-row gap-8 sm:gap-8 lg:gap-10">
              {/* Google */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="w-[40px] h-[44px]">
                  <img src={stats.google_logo_url || fallbackStats.google_logo_url} alt="Google" className="w-full h-full object-contain" />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <div className="text-xs sm:text-sm font-['Inter'] whitespace-nowrap">
                  <span className="text-[#49515B] font-normal">From </span>
                  <span className="text-[#020842] font-bold">{stats.google_reviews_count_text || fallbackStats.google_reviews_count_text}</span>
                  <span className="text-[#49515B] font-normal"> reviews</span>
                </div>
              </div>
              {/* Hangouts */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="w-[44px] h-[44px]">
                  <img src={stats.hangouts_logo_url || fallbackStats.hangouts_logo_url} alt="Hangouts" className="w-full h-full object-contain" />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <div className="text-xs sm:text-sm font-['Inter'] whitespace-nowrap">
                  <span className="text-[#49515B] font-normal">From </span>
                  <span className="text-[#020842] font-bold">{stats.hangouts_reviews_count_text || fallbackStats.hangouts_reviews_count_text}</span>
                  <span className="text-[#49515B] font-normal"> reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="w-full p-6 sm:p-8 md:p-[50px] bg-white rounded-[10px] shadow-[0px_4px_23px_0px_rgba(174,191,210,0.30)] flex flex-col justify-between relative overflow-hidden min-h-[500px] lg:min-h-[450px]">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-[#0064AC] text-base sm:text-2xl md:text-[30px] font-bold font-['Inter'] leading-snug sm:leading-9 mb-3 sm:mb-6 md:mb-8">
                "{activeReview.quote}"
              </h3>
              <p className={`text-[#00114C] text-[13px] leading-[1.6] sm:text-base md:text-lg lg:text-[22px] sm:leading-relaxed md:leading-[28px] lg:leading-[33px] font-normal font-['Inter'] ${!expanded ? 'line-clamp-3' : ''}`}>
                {activeReview.review_text}
              </p>
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[#00BFD2] text-sm sm:text-base font-semibold font-['Inter'] mt-2 hover:underline cursor-pointer"
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* Author & Navigation */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                <div className="w-[70px] h-[83px] sm:w-[90px] sm:h-[107px] md:w-[107px] md:h-[127px] bg-[#E3F0FF] rounded-[10px] overflow-hidden flex-shrink-0">
                  <img
                    src={activeReview.reviewer_image_url || "/testimonials/Background.png"}
                    alt={activeReview.reviewer_name}
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <div className="text-[#020842] text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-['Inter'] leading-tight md:leading-6">
                    {activeReview.reviewer_name}
                  </div>
                  <div className="text-[#49515B] text-xs sm:text-sm font-medium font-['Inter'] leading-tight md:leading-[21px]">
                    {activeReview.reviewer_role}
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-1 lg:mt-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden flex-shrink-0">
                      {activeFlagUrl ? (
                        <img
                          src={activeFlagUrl}
                          alt={activeCountryCode || "country"}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gray-200" />
                      )}
                    </div>
                    <span className="text-[#020842] text-[11px] sm:text-xs font-medium font-['Inter'] leading-tight">
                      {activeReview.location || ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Company Logo & Navigation - Always Column, Right Aligned */}
              <div className="flex flex-col items-end gap-4 sm:gap-6 flex-shrink-0">
                {activeReview.company_logo_url && (
                  <div className="w-[120px] sm:w-[152px] h-[23px] sm:h-[29px]">
                    <img
                      src={activeReview.company_logo_url}
                      alt="Company logo"
                      className="w-full h-full object-contain object-right"
                    />
                  </div>
                )}
                {/* Navigation Buttons */}
                <div className="flex gap-2.5">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 bg-[#62F4F3] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <path d="M0.28125 7.28125C0.09375 7.48958 0 7.72917 0 8C0 8.27083 0.09375 8.51042 0.28125 8.71875L5.28125 13.7188C5.48958 13.9062 5.72917 14 6 14C6.27083 14 6.51042 13.9062 6.71875 13.7188C6.90625 13.5104 7 13.2708 7 13C7 12.7292 6.90625 12.4896 6.71875 12.2812L3.40625 9H13C13.2917 9 13.5312 8.90625 13.7188 8.71875C13.9062 8.53125 14 8.29167 14 8C14 7.70833 13.9062 7.46875 13.7188 7.28125C13.5312 7.09375 13.2917 7 13 7H3.40625L6.71875 3.71875C6.90625 3.51042 7 3.27083 7 3C7 2.72917 6.90625 2.48958 6.71875 2.28125C6.51042 2.09375 6.27083 2 6 2C5.72917 2 5.48958 2.09375 5.28125 2.28125L0.28125 7.28125Z" fill="#00114C" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 bg-[#62F4F3] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <path d="M13.7188 8.71875C13.9062 8.51042 14 8.27083 14 8C14 7.72917 13.9062 7.48958 13.7188 7.28125L8.71875 2.28125C8.51042 2.09375 8.27083 2 8 2C7.72917 2 7.48958 2.09375 7.28125 2.28125C7.09375 2.48958 7 2.72917 7 3C7 3.27083 7.09375 3.51042 7.28125 3.71875L10.5938 7H1C0.708333 7 0.46875 7.09375 0.28125 7.28125C0.09375 7.46875 0 7.70833 0 8C0 8.29167 0.09375 8.53125 0.28125 8.71875C0.46875 8.90625 0.708333 9 1 9H10.5938L7.28125 12.2812C7.09375 12.4896 7 12.7292 7 13C7 13.2708 7.09375 13.5104 7.28125 13.7188C7.48958 13.9062 7.72917 14 8 14C8.27083 14 8.51042 13.9062 8.71875 13.7188L13.7188 8.71875Z" fill="#00114C" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
