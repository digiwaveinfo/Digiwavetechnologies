export default function ServiceCards() {
  const services = [
    {
      title: "Design",
      description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/722e4b3d83cb82bb07716e5c0c94835c0b27c843?width=100",
      bgColor: "rgba(255, 224, 125, 0.17)"
    },
    {
      title: "Mobile App Development",
      description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/67ad60f0318ad476e39c439eafee01a1a471ebf6?width=100",
      bgColor: "rgba(87, 183, 235, 0.09)"
    },
    {
      title: "Website Development",
      description: "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/4cf0395d1ed7c51b9ebb95a2638f8a6070e4fbf2?width=100",
      bgColor: "rgba(255, 100, 26, 0.12)"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 2xl:px-12">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-14 max-w-[1800px] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-1 bg-white rounded-[26px] p-8 shadow-[0_1px_17px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-shadow"
          >
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-5">
                <div
                  className="w-[89px] h-[89px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <h3 className="text-brand-dark-blue font-inter font-bold text-[26px] leading-[39px]">
                  {service.title}
                </h3>
                <p className="text-brand-black font-inter text-base leading-6">
                  {service.description}
                </p>
              </div>
              <button className="flex items-center gap-2.5 text-brand-black font-inter font-medium text-lg hover:text-brand-cyan transition-colors group">
                Read More
                <svg
                  className="w-6 h-6 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 16L19 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 8L19 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}