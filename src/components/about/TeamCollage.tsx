import React from "react";
import Image from "next/image";

export default function TeamCollage() {
    return (
        <section className="w-full bg-white py-10 lg:py-20 overflow-hidden">
            {/* Desktop Full-Width Grid Layout */}
            <div className="hidden lg:grid grid-cols-4 w-full h-[600px] gap-4">
                {/* Column 1 */}
                <div className="flex flex-col h-full gap-4">
                    <div className="relative w-full h-[58%] rounded-2xl overflow-hidden">
                        <Image
                            src="/image1.png"
                            alt="Team image 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-full h-[42%] rounded-2xl overflow-hidden">
                        <Image
                            src="/image3.png"
                            alt="Team image 3"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Column 2 */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                        src="/image4.png"
                        alt="Team image 4"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Column 3 */}
                <div className="flex flex-col h-full gap-4">
                    <div className="relative w-full h-[42%] rounded-2xl overflow-hidden">
                        <Image
                            src="/image5.png"
                            alt="Team image 5"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-full h-[58%] rounded-2xl overflow-hidden">
                        <Image
                            src="/image6.png"
                            alt="Team image 6"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Column 4 */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                        src="/image7.png"
                        alt="Team image 7"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>


            {/* Mobile/Tablet Fallback Layout */}
            <div className="lg:hidden w-full px-4 sm:px-6 flex flex-col gap-4">
                {/* Row 1 */}
                <div className="flex gap-4 h-64">
                    <div className="relative w-1/2 h-full rounded-xl overflow-hidden">
                        <Image src="/image1.png" alt="Team image 1" fill className="object-cover" />
                    </div>
                    <div className="relative w-1/2 h-full rounded-xl overflow-hidden">
                        <Image src="/image3.png" alt="Team image 3" fill className="object-cover" />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex gap-4 h-80">
                    <div className="relative w-1/2 h-full rounded-xl overflow-hidden">
                        <Image src="/image4.png" alt="Team image 4" fill className="object-cover" />
                    </div>
                    <div className="relative w-1/2 h-full rounded-xl overflow-hidden">
                        <Image src="/image5.png" alt="Team image 5" fill className="object-cover" />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex gap-4 h-64">
                    <div className="relative w-1/2 h-full rounded-xl overflow-hidden">
                        <Image src="/image6.png" alt="Team image 6" fill className="object-cover" />
                    </div>
                    <div className="relative w-1/2 h-full rounded-xl overflow-hidden">
                        <Image src="/image7.png" alt="Team image 7" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
