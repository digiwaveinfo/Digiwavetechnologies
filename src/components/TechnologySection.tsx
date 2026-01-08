import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "./Container";
import Image from "next/image";

interface TechnologyCardProps {
    icon: string;
    name: string;
}

const TechnologyCard = ({ icon, name }: TechnologyCardProps) => (
    <div className="flex flex-col items-center gap-4">
        <div className="w-[100px] h-[100px] flex items-center justify-center">
            <Image src={icon} alt={name} width={100} height={100} />
        </div>
        <h3 className="font-['Inter'] text-base font-normal leading-5 text-[#0F0F10] text-center">{name}</h3>
    </div>
);

export default function TechnologySection() {
    const webPlatformTechs = [
        { icon: "/technologies/php.svg", name: "PHP" },
        { icon: "/technologies/javascript.svg", name: "JavaScript" },
        { icon: "/technologies/PostgreSQL.svg", name: "PostgreSQL" },
        { icon: "/technologies/swift.svg", name: "Swift" },
        { icon: "/technologies/typescript.svg", name: "TypeScript" },
        { icon: "/technologies/Python.svg", name: "Python" },
        { icon: "/technologies/g318.svg", name: "GraphQL" },
        { icon: "/technologies/java.svg", name: "Java" },
        { icon: "/technologies/ruby.svg", name: "Ruby" },
        { icon: "/technologies/c.svg", name: "C++" },
        { icon: "/technologies/reactjs.svg", name: "React Js" },
        { icon: "/technologies/laravel.svg", name: "Laravel" },
    ];

    const databasesTechs = [
        { icon: "/technologies/PostgreSQL.svg", name: "PostgreSQL" },
        { icon: "/technologies/java.svg", name: "MongoDB" },
        { icon: "/technologies/ruby.svg", name: "MySQL" },
        { icon: "/technologies/c.svg", name: "Oracle" },
        { icon: "/technologies/reactjs.svg", name: "Redis" },
        { icon: "/technologies/laravel.svg", name: "Firebase" },
    ];

    const cloudDevOpsTechs = [
        { icon: "/technologies/php.svg", name: "Docker" },
        { icon: "/technologies/javascript.svg", name: "Kubernetes" },
        { icon: "/technologies/PostgreSQL.svg", name: "AWS" },
        { icon: "/technologies/swift.svg", name: "Azure" },
        { icon: "/technologies/typescript.svg", name: "GCP" },
        { icon: "/technologies/Python.svg", name: "Jenkins" },
    ];

    const mobileAppsTechs = [
        { icon: "/technologies/swift.svg", name: "Swift" },
        { icon: "/technologies/java.svg", name: "Kotlin" },
        { icon: "/technologies/reactjs.svg", name: "React Native" },
        { icon: "/technologies/laravel.svg", name: "Flutter" },
        { icon: "/technologies/php.svg", name: "Xamarin" },
        { icon: "/technologies/javascript.svg", name: "NativeScript" },
    ];

    const otherFrameworksTechs = [
        { icon: "/technologies/reactjs.svg", name: "React Js" },
        { icon: "/technologies/laravel.svg", name: "Laravel" },
        { icon: "/technologies/typescript.svg", name: "Vue.js" },
        { icon: "/technologies/Python.svg", name: "Angular" },
        { icon: "/technologies/g318.svg", name: "Svelte" },
        { icon: "/technologies/java.svg", name: "Next.js" },
    ];

    const allTechs = [
        ...webPlatformTechs,
        ...databasesTechs,
        ...cloudDevOpsTechs,
        ...mobileAppsTechs,
        ...otherFrameworksTechs,
    ];

    return (
        <section className="w-full py-20 bg-white">
            <Container>
                <div className="flex flex-col items-center gap-3 mb-12">
                    <h2 className="font-['Poppins'] text-xl font-medium text-[#00BFD2]">
                        Technologies we used
                    </h2>
                    <h1 className="max-w-[727px] text-center font-['Poppins'] text-3xl md:text-4xl font-bold text-[#00114C]">
                        Built Using Future-Ready Technologies
                    </h1>
                </div>

                <div className="w-full">
                    <Tabs defaultValue="all" className="w-full">
                        <div className="flex justify-center mb-10">
                            <TabsList className="inline-flex flex-wrap h-auto gap-1 rounded-[10px] bg-[#00BFD2] p-1 lg:h-[50px] lg:flex-nowrap">
                                <TabsTrigger value="all" className="h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">All</TabsTrigger>
                                <TabsTrigger value="web-platform" className="h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">Web Platform</TabsTrigger>
                                <TabsTrigger value="databases" className="h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">Databases</TabsTrigger>
                                <TabsTrigger value="cloud-devops" className="h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">Cloud & DevOps</TabsTrigger>
                                <TabsTrigger value="mobile-apps" className="h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">Mobile Apps</TabsTrigger>
                                <TabsTrigger value="other-frameworks" className="h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">Other Frameworks</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="all" className="mt-0 w-full">
                            <div className="w-full grid grid-cols-3 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
                                {allTechs.map((tech, index) => (
                                    <TechnologyCard key={index} icon={tech.icon} name={tech.name} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="web-platform" className="mt-0 w-full">
                            <div className="w-full grid grid-cols-3 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
                                {webPlatformTechs.map((tech, index) => (
                                    <TechnologyCard key={index} icon={tech.icon} name={tech.name} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="databases" className="mt-0 w-full">
                            <div className="w-full grid grid-cols-3 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
                                {databasesTechs.map((tech, index) => (
                                    <TechnologyCard key={index} icon={tech.icon} name={tech.name} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="cloud-devops" className="mt-0 w-full">
                            <div className="w-full grid grid-cols-3 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
                                {cloudDevOpsTechs.map((tech, index) => (
                                    <TechnologyCard key={index} icon={tech.icon} name={tech.name} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="mobile-apps" className="mt-0 w-full">
                            <div className="w-full grid grid-cols-3 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
                                {mobileAppsTechs.map((tech, index) => (
                                    <TechnologyCard key={index} icon={tech.icon} name={tech.name} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="other-frameworks" className="mt-0 w-full">
                            <div className="w-full grid grid-cols-3 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
                                {otherFrameworksTechs.map((tech, index) => (
                                    <TechnologyCard key={index} icon={tech.icon} name={tech.name} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </Container>
        </section>
    );
}
