import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { getPortfolioBySlug } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";

interface PortfolioDetailPageProps {
    params: Promise<{ id: string }>;
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const portfolio = await getPortfolioBySlug(id);

    if (!portfolio) {
        return {
            title: "Portfolio Not Found | Digiwave Technologies",
            description: "The requested portfolio item could not be found.",
        };
    }

    return {
        title: `${portfolio.title} | Portfolio | Digiwave Technologies`,
        description: portfolio.short_description || portfolio.full_description?.slice(0, 160),
        keywords: portfolio.technologies?.map(t => t.name).join(", "),
        openGraph: {
            title: portfolio.title,
            description: portfolio.short_description,
            images: portfolio.hero_image_url ? [portfolio.hero_image_url] : [],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: portfolio.title,
            description: portfolio.short_description,
            images: portfolio.hero_image_url ? [portfolio.hero_image_url] : [],
        },
    };
}

export default async function PortfolioDetailPageV2({ params }: PortfolioDetailPageProps) {
    const { id } = await params;
    const portfolio = await getPortfolioBySlug(id);
    const tagList = portfolio?.tags && portfolio.tags.length > 0
        ? portfolio.tags
        : (portfolio?.tag || '').split(',').map((tag) => tag.trim()).filter(Boolean);

    // If portfolio not found, show default content
    if (!portfolio) {
        return (
            <div className="min-h-screen w-full bg-white">
                <Header />
                <main className="pt-32 pb-20">
                    <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] text-center">
                        <h1 className="text-4xl font-bold text-[#00114C] mb-4">Portfolio Not Found</h1>
                        <p className="text-gray-600 mb-8">The requested portfolio item could not be found.</p>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00BFD2] to-[#0891b2] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            ← Back to Portfolio
                        </Link>
                    </div>
                </main>
                <Contact />
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-white">
            <Header />

            <main>
                {/* Hero Section with Gradient Background */}
                <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff] via-white to-[#e0f7fa] -z-10" />
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#00BFD2]/10 to-transparent rounded-full blur-3xl -z-10" />

                    <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
                        {/* Breadcrumb */}
                        <nav className="mb-6" aria-label="Breadcrumb">
                            <ol className="flex items-center gap-2 text-sm text-gray-500">
                                <li><Link href="/" className="hover:text-[#00BFD2] transition-colors">Home</Link></li>
                                <li>/</li>
                                <li><Link href="/portfolio" className="hover:text-[#00BFD2] transition-colors">Portfolio</Link></li>
                                <li>/</li>
                                <li className="text-[#00114C] font-medium">{portfolio.title}</li>
                            </ol>
                        </nav>

                        {/* Tag Badge */}
                        {tagList.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                {tagList.map((tag) => (
                                    <span key={tag} className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00BFD2]/10 to-[#0891b2]/10 text-[#00BFD2] px-4 py-1.5 rounded-full text-sm font-semibold">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#00114C] leading-tight mb-6">
                            {portfolio.title}
                        </h1>

                        {/* Description */}
                        <div
                            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl rich-text-content"
                            dangerouslySetInnerHTML={{ __html: portfolio.full_description }}
                        />

                        {/* Live URL Button */}
                        {portfolio.live_url && (
                            <a
                                href={portfolio.live_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-[#00BFD2] to-[#0891b2] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
                            >
                                View Live Project
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>
                </section>

                {/* Hero Image Section */}
                {portfolio.hero_image_url && (
                    <section className="relative">
                        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={portfolio.hero_image_url}
                                    alt={`${portfolio.title} Hero Image`}
                                    className="w-full h-auto object-cover"
                                    loading="eager"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </section>
                )}

                {/* Technologies Section */}
                {portfolio.technologies && portfolio.technologies.length > 0 && (
                    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f8fafc]">
                        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
                            <div className="text-center mb-12">
                                <span className="text-[#00BFD2] text-sm font-semibold uppercase tracking-wider">Built With</span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00114C] mt-2">
                                    Technologies & Tools
                                </h2>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
                                {portfolio.technologies.map((tech) => (
                                    <div
                                        key={tech.id}
                                        className="group flex flex-col items-center gap-3 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                                        style={{ minWidth: '120px' }}
                                    >
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#a8b5e0] via-[#8F9ED1] to-[#7889c4] flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {tech.icon_url ? (
                                                <img
                                                    src={tech.icon_url}
                                                    alt={tech.name}
                                                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                                />
                                            ) : (
                                                <span className="text-white text-xl sm:text-2xl font-bold">
                                                    {tech.name.charAt(0).toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-[#00114C] font-medium text-sm sm:text-base text-center">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Features Section */}
                {portfolio.features && portfolio.features.length > 0 && (
                    <section className="py-16 sm:py-20 lg:py-24 bg-white">
                        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
                            <div className="text-center mb-12">
                                <span className="text-[#00BFD2] text-sm font-semibold uppercase tracking-wider">What We Built</span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00114C] mt-2">
                                    Key Features
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                {portfolio.features.map((feature, index) => (
                                    <article
                                        key={index}
                                        className="group relative p-6 lg:p-8 bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl border border-gray-100 hover:border-[#00BFD2]/30 hover:shadow-xl transition-all"
                                    >
                                        {/* Feature Number */}
                                        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#00BFD2]/10 flex items-center justify-center text-[#00BFD2] font-bold text-sm">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        {/* Bullet Point */}
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00BFD2] to-[#0891b2] mb-4" />

                                        <h3 className="text-lg lg:text-xl font-semibold text-[#00114C] mb-2 pr-12">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Problem & Solution Section */}
                {(portfolio.problem_statement || portfolio.solution_description) && (
                    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
                        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                                {/* Problem */}
                                {portfolio.problem_statement && (
                                    <div className="relative">
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-400 to-red-600 rounded-full" />
                                        <div className="pl-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#00114C]">The Challenge</h3>
                                            </div>
                                            <div
                                                className="text-gray-600 leading-relaxed rich-text-content"
                                                dangerouslySetInnerHTML={{ __html: portfolio.problem_statement }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Solution */}
                                {portfolio.solution_description && (
                                    <div className="relative">
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#00BFD2] to-[#0891b2] rounded-full" />
                                        <div className="pl-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-[#00BFD2]/10 flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-[#00BFD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#00114C]">Our Solution</h3>
                                            </div>
                                            <div
                                                className="text-gray-600 leading-relaxed rich-text-content"
                                                dangerouslySetInnerHTML={{ __html: portfolio.solution_description }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* Design Gallery Section */}
                {(portfolio.showcase_image_url || (portfolio.gallery_images && portfolio.gallery_images.length > 0)) && (
                    <section className="py-16 sm:py-20 lg:py-24 bg-white">
                        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
                            <div className="text-center mb-12">
                                <span className="text-[#00BFD2] text-sm font-semibold uppercase tracking-wider">Visual Showcase</span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00114C] mt-2">
                                    Design Gallery
                                </h2>
                            </div>

                            {/* Showcase Image */}
                            {portfolio.showcase_image_url && (
                                <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                                    <img
                                        src={portfolio.showcase_image_url}
                                        alt={`${portfolio.title} Design Showcase`}
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            )}

                            {/* Gallery Grid */}
                            {portfolio.gallery_images && portfolio.gallery_images.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {portfolio.gallery_images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                                        >
                                            <img
                                                src={image}
                                                alt={`${portfolio.title} Screenshot ${index + 1}`}
                                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Impact Section */}
                {portfolio.impact_description && (
                    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#00114C] to-[#0a2540]">
                        <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%]">
                            <div className="text-center mb-8">
                                <span className="text-[#00BFD2] text-sm font-semibold uppercase tracking-wider">Results</span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
                                    The Impact
                                </h2>
                            </div>

                            <div
                                className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center rich-text-content [&_ul]:text-left [&_ol]:text-left"
                                dangerouslySetInnerHTML={{ __html: portfolio.impact_description }}
                            />
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-16 sm:py-20 bg-gradient-to-r from-[#f0f9ff] to-[#e0f7fa]">
                    <div className="mx-auto w-[94%] xl:w-[90%] 2xl:w-[85%] text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00114C] mb-4">
                            Interested in a Similar Project?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss how we can help bring your ideas to life with our expertise in technology and design.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00BFD2] to-[#0891b2] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
                            >
                                Start Your Project
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 bg-white text-[#00114C] px-8 py-4 rounded-full font-semibold border-2 border-[#00114C]/10 hover:border-[#00BFD2] transition-all"
                            >
                                View More Projects
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Contact />
            <Footer />
        </div>
    );
}
