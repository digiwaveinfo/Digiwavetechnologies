interface PortfolioImpactProps {
    title?: string;
    impact?: string;
}

export default function PortfolioImpact({
    title = "The Impact",
    impact,
}: PortfolioImpactProps) {
    // Don't render if no impact content
    if (!impact) {
        return null;
    }

    return (
        <section className="w-full py-8 sm:py-12">
            <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] flex flex-col gap-3">
                {/* Title */}
                <h2 className="text-[#00114C] text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[60px]">
                    {title}
                </h2>

                {/* Impact Content - Rich Text */}
                <div
                    className="text-[#0F0F10] text-base font-normal leading-6 rich-text-content"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    dangerouslySetInnerHTML={{ __html: impact }}
                />
            </div>
        </section>
    );
}
