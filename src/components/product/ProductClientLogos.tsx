const CLIENT_LOGOS = [
  "https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=426",
  "https://api.builder.io/api/v1/image/assets/TEMP/8f1f434e05f9848e760116cfec522940267931df?width=404",
  "https://api.builder.io/api/v1/image/assets/TEMP/cd75b54496eaad840fb0738209a24be55029eddd?width=426",
  "https://api.builder.io/api/v1/image/assets/TEMP/751de64d246aef9c464eb2d8a33a78f1540d0772?width=430",
  "https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=422"
];

export default function ProductClientLogos() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 2xl:px-12 py-16 bg-gray-50">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
          {CLIENT_LOGOS.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}