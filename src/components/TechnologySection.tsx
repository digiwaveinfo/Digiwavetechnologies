import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "./Container";

interface TechnologyCardProps {
    icon: string;
    name: string;
}

const TechnologyCard = ({ icon, name }: TechnologyCardProps) => (
    <div className="flex flex-col items-center gap-4">
        <div className="w-[100px] h-[100px] flex items-center justify-center">
            <img src={icon} alt={name} width={100} height={100} className="object-contain" />
        </div>
        <h3 className="font-['Inter'] text-base font-normal leading-5 text-[#0F0F10] text-center">{name}</h3>
    </div>
);

export default function TechnologySection() {
    const webPlatformTechs = [
        { icon: "/technologies/Python.svg", name: "Python" },
        { icon: "/technologies/nodejs.svg", name: "Node.js" },
        { icon: "/technologies/php.svg", name: "PHP" },
        { icon: "/technologies/django.svg", name: "Django" },
        { icon: "/technologies/flask.svg", name: "Flask" },
        { icon: "/technologies/laravel.svg", name: "Laravel" },
        { icon: "/technologies/reactjs.svg", name: "React.js" },
        { icon: "/technologies/nextjs.svg", name: "Next.js" },
        { icon: "/technologies/html.svg", name: "HTML" },
        { icon: "/technologies/css.svg", name: "CSS" },
        { icon: "/technologies/javascript.svg", name: "JavaScript" },
        { icon: "/technologies/jquery.svg", name: "jQuery" },
        { icon: "/technologies/typescript.svg", name: "TypeScript" },
        { icon: "/technologies/wordpress.svg", name: "WordPress" },
    ];

    const mobileAppsTechs = [
        { icon: "/technologies/reactjs.svg", name: "React Native" },
        { icon: "/technologies/flutter.svg", name: "Flutter" },
    ];

    const databasesTechs = [
        { icon: "/technologies/PostgreSQL.svg", name: "PostgreSQL" },
        { icon: "/technologies/mysql.svg", name: "MySQL" },
        { icon: "/technologies/sqlite.svg", name: "SQLite" },
        { icon: "/technologies/oracle.svg", name: "Oracle" },
        { icon: "/technologies/redis.svg", name: "Redis" },
        { icon: "/technologies/firebase.svg", name: "Firebase" },
        { icon: "/technologies/mongodb.svg", name: "MongoDB" },
    ];

    const cloudDevOpsTechs = [
        { icon: "/technologies/aws.svg", name: "AWS" },
        { icon: "/technologies/azure.svg", name: "Microsoft Azure" },
        { icon: "/technologies/digitalocean.svg", name: "DigitalOcean" },
        { icon: "/technologies/hostinger.svg", name: "Hostinger" },
    ];

    // Commented out - "Other Frameworks" category removed as items are now in Web Platform
    // const otherFrameworksTechs = [
    //     { icon: "/technologies/reactjs.svg", name: "React Js" },
    //     { icon: "/technologies/laravel.svg", name: "Laravel" },
    //     { icon: "/technologies/typescript.svg", name: "Vue.js" },
    //     { icon: "/technologies/Python.svg", name: "Angular" },
    //     { icon: "/technologies/g318.svg", name: "Svelte" },
    //     { icon: "/technologies/java.svg", name: "Next.js" },
    // ];

    const allTechs = [
        ...webPlatformTechs,
        ...mobileAppsTechs,
        ...databasesTechs,
        ...cloudDevOpsTechs,
    ];

    return (
        <section className="w-full py-12 md:py-16 bg-white">
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
                                <TabsTrigger value="all" className="cursor-pointer h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">All</TabsTrigger>
                                <TabsTrigger value="web-platform" className="cursor-pointer h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">Web Platform</TabsTrigger>
                                <TabsTrigger value="mobile-apps" className="cursor-pointer h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">Mobile Apps</TabsTrigger>
                                <TabsTrigger value="databases" className="cursor-pointer h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">Databases</TabsTrigger>
                                <TabsTrigger value="cloud-devops" className="cursor-pointer h-8 lg:h-10 rounded-[5px] px-3 md:px-4 lg:px-6 py-1.5 font-['Inter'] text-xs md:text-sm lg:text-base font-medium text-[#00114C] whitespace-nowrap data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=inactive]:bg-transparent hover:bg-white/20 transition-all">Cloud & DevOps</TabsTrigger>
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

                        {/* Commented out - Other Frameworks tab removed */}
                        {/* <TabsContent value="other-frameworks" className="mt-0 w-full">
                            <div className="w-full grid grid-cols-3 gap-y-8 md:grid-cols-4 lg:grid-cols-6">
                                {otherFrameworksTechs.map((tech, index) => (
                                    <TechnologyCard key={index} icon={tech.icon} name={tech.name} />
                                ))}
                            </div>
                        </TabsContent> */}
                    </Tabs>
                </div>
            </Container>
        </section>
    );
}
