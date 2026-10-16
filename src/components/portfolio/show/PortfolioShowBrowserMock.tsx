interface PortfolioShowBrowserMockProps {
  imageUrl: string;
  imageAlt: string;
}

/** Hero image on the right — max display size 400×400px. */
export default function PortfolioShowBrowserMock({ imageUrl, imageAlt }: PortfolioShowBrowserMockProps) {
  return (
    <div className="flex w-full justify-center">
      <div
        className="rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.12),0_0_24px_rgba(0,191,210,0.10)] overflow-hidden w-full max-w-[400px] max-h-[400px] aspect-square"
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={400}
          className="w-full h-full max-w-[400px] max-h-[400px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
