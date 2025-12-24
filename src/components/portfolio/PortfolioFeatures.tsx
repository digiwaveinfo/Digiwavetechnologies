import { ReactNode } from "react";

interface FeaturesProps {
  title?: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

export default function Features({
  title = "Features",
  leftContent,
  rightContent,
}: FeaturesProps) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-10 sm:py-12 lg:py-16">
      <div className="max-w-[1800px] mx-auto flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[60px] text-[#0A2540]">
          {title}
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16">
          {/* Left Column */}
          <div className="flex-1 text-sm sm:text-base font-normal leading-relaxed lg:leading-[30px] text-[#1a1a1a]">
            {leftContent || (
              <>
                Lorem ipsum dolor sit amet consectetur.<br />
                Nullam sit aliquet facilisis in mauris.<br />
                Viverra at commodo sed nec feugiat adipiscing.<br />
                Risus pharetra amet velit urna amet etiam fermentum proin sed.<br />
                In elementum orci tristique mauris massa in suspendisse vulputate ultricies.<br />
                Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris.<br />
                Viverra at commodo sed nec feugiat adipiscing.
              </>
            )}
          </div>

          {/* Right Column */}
          <div className="flex-1 text-sm sm:text-base font-normal leading-relaxed lg:leading-[30px] text-[#1a1a1a]">
            {rightContent || (
              <>
                Lorem ipsum dolor sit amet consectetur.<br />
                Nullam sit aliquet facilisis in mauris.<br />
                Viverra at commodo sed nec feugiat adipiscing.<br />
                Risus pharetra amet velit urna amet etiam fermentum proin sed.<br />
                In elementum orci tristique mauris massa in suspendisse vulputate ultricies.<br />
                Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris.<br />
                Viverra at commodo sed nec feugiat adipiscing.
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
