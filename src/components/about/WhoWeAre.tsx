import Image from "next/image";
import Container from "../Container";

interface WhoWeAreProps {
    image?: string;
}

export default function WhoWeAre({ 
    image = "/about/who-we-are.webp"
}: WhoWeAreProps) {
    return (
        <section className="w-full relative z-20 pb-14">
            <Container>
                {/* Single Image - Negative margin to overlap Hero */}
                <div className="w-full h-[465px] md:h-[600px] relative bg-neutral-200 rounded-3xl overflow-hidden shadow-sm mb-16 -mt-[150px] lg:-mt-[180px]">
                    <Image
                        src={image}
                        alt="Who we are"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 w-full mt-10 lg:mt-0">
                    <div className="w-full lg:w-auto flex flex-col justify-start items-center lg:items-start gap-3.5">
                        <div className="self-stretch text-sky-950 text-4xl font-bold font-['Inter'] leading-[60px] text-center lg:text-left">
                            Who We Are
                        </div>
                    </div>
                    <div className="flex-1 text-stone-950 text-base font-normal font-['Inter'] leading-6 text-center lg:text-left">
                        Digiwave Technologies is the Ai Software Development Company and global IT services company delivering cutting-edge AI/ML, Cloud, Mobile, and Web solutions. We don't just write code, we build the digital backbone that empowers businesses to innovate at speed and scale in an AI-driven world. Our team of passionate developers, designers, and strategists work collaboratively to transform complex challenges into elegant, scalable solutions. From startups to enterprises, we partner with organizations to accelerate their digital transformation journey and create lasting impact through technology.
                    </div>
                </div>
            </Container>
        </section>
    );
}
