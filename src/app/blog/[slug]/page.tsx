import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post | Digiwave Technologies",
  description: "Read our latest insights on technology, AI, and digital transformation.",
};

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

const relatedBlogs = [
  {
    slug: "impact-of-technology-on-workplace-4",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Ernie Smith",
    date: "August 20, 2025",
    image: "/blog/blog-4.png",
    authorImage: "/blog/ernie.png"
  },
  {
    slug: "impact-of-technology-on-workplace-5",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Eric Smith",
    date: "August 20, 2025",
    image: "/blog/blog-5.png",
    authorImage: "/blog/eric.png"
  },
  {
    slug: "impact-of-technology-on-workplace-6",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Tracey Wilson",
    date: "August 20, 2025",
    image: "/blog/blog-6.png",
    authorImage: "/blog/tracey.png"
  }
];

// Generate static params for the blog posts
export async function generateStaticParams() {
  // Include all possible blog slugs
  const allSlugs = [
    "impact-of-technology-on-workplace-1",
    "impact-of-technology-on-workplace-2",
    "impact-of-technology-on-workplace-3",
    "impact-of-technology-on-workplace-4",
    "impact-of-technology-on-workplace-5",
    "impact-of-technology-on-workplace-6",
  ];
  
  return allSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      {/* Hero Section - Same as Service Page */}
      <section className="relative bg-[#022030] h-[322px] overflow-hidden">
        {/* Decorative blur effects */}
        <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[223px] -top-14 opacity-100"></div>
        <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[648px] top-28 opacity-100"></div>
        <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] -left-[426px] -top-[151px] opacity-100"></div>

        <Container className="relative z-10 flex flex-col items-center justify-center h-full">
          <h3 className="text-[#62F4F3] font-poppins font-medium text-xl mb-4 text-center">Blog Post</h3>
          <h1 className="text-white font-poppins font-bold text-[40px] leading-tight text-center max-w-[727px]">
            Blog Details
          </h1>
        </Container>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 sm:py-20 w-full bg-white">
        <Container>
          <div className="flex flex-col gap-16">
            {/* Blog Header - Full width like service page */}
            <div className="w-full flex flex-col gap-8">
              <div className="relative">
                {/* Category Badge - Positioned absolutely with proper spacing */}
                <div className="absolute top-0 right-0 z-10 px-4 py-1.5 bg-[#00BFD2]/10 rounded-lg">
                  <span className="text-[#00BFD2] text-xl font-medium">Technology</span>
                </div>

                {/* Title with proper right padding to avoid overlap */}
                <h1 className="text-[#232536] text-4xl sm:text-5xl font-bold leading-tight mb-8 pr-4 sm:pr-48">
                  The Impact of Technology on the Workplace: How Technology is Changing
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/blog/elizabeth.png"
                    alt="Elizabeth Slavin"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#00BFD2] text-2xl font-bold">Elizabeth Slavin</span>
                    <span className="text-[#6D6E76] text-base">Posted on January 10, 2026</span>
                  </div>
                </div>

                {/* Featured Image - Full width like Who We Are section */}
                <div className="w-full h-[400px] sm:h-[500px] lg:h-[564px] bg-[#E2E2E2] rounded-3xl overflow-hidden">
                  <img
                    src="/blog/blog-view.png"
                    alt="Blog featured"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Blog Content - Full width like original */}
            <div className="w-full flex flex-col gap-8">
              {/* Heading 1 */}
              <h2 className="text-[#232536] text-3xl sm:text-4xl font-bold font-['Sen'] leading-[48px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </h2>

              {/* Paragraph 1 */}
              <p className="text-[#6D6E76] text-base font-['Inter'] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
              </p>

              {/* Heading 2 */}
              <h2 className="text-[#232536] text-3xl sm:text-4xl font-bold font-['Sen'] leading-[48px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </h2>

              {/* Paragraph 2 */}
              <p className="text-[#6D6E76] text-base font-['Inter'] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
              </p>

              {/* Paragraph 3 */}
              <p className="text-[#6D6E76] text-base font-['Inter'] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
              </p>

              {/* Bullet Points */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-[5px] h-[5px] bg-[#494A53] rounded-full flex-shrink-0 mt-3.5" />
                  <p className="text-[#161722] text-xl sm:text-2xl font-bold font-['Sen'] leading-8 opacity-80">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[5px] h-[5px] bg-[#494A53] rounded-full flex-shrink-0 mt-3.5" />
                  <p className="text-[#161722] text-xl sm:text-2xl font-bold font-['Sen'] leading-8 opacity-80">
                    Non blandit massa enim nec scelerisque
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[5px] h-[5px] bg-[#494A53] rounded-full flex-shrink-0 mt-3.5" />
                  <p className="text-[#161722] text-xl sm:text-2xl font-bold font-['Sen'] leading-8 opacity-80">
                    Neque egestas congue quisque egestas
                  </p>
                </div>
              </div>

              {/* Paragraph 4 */}
              <p className="text-[#6D6E76] text-base font-['Inter'] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
              </p>

              {/* Heading 3 */}
              <h2 className="text-[#232536] text-3xl sm:text-4xl font-bold font-['Sen'] leading-[48px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </h2>

              {/* Paragraph 5 */}
              <p className="text-[#6D6E76] text-base font-['Inter'] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
              </p>
            </div>

            {/* Related Blog Section - Full width */}
            <div className="w-full flex flex-col items-center gap-12 mt-12">
              <div className="flex flex-col items-center gap-2.5">
                <p className="text-[#00BFD2] text-xl font-medium text-center">Related Blog</p>
                <h2 className="text-[#00114C] text-3xl sm:text-4xl font-bold text-center">What to read next</h2>
              </div>

              {/* Related Blog Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                {relatedBlogs.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl border border-[#E8E8EA] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="p-4 flex flex-col gap-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-60 object-cover rounded-lg"
                      />
                      <div className="p-2 flex flex-col gap-5">
                        <div className="flex flex-col gap-4">
                          <div className="inline-flex px-2.5 py-1 bg-[#00BFD2]/10 rounded-md self-start">
                            <span className="text-[#00BFD2] text-sm font-medium">{post.category}</span>
                          </div>
                          <h3 className="text-[#181A2A] text-2xl font-semibold leading-9 group-hover:text-[#00BFD2] transition-colors">
                            {post.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-5">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-9 h-9 rounded-full"
                            />
                            <span className="text-[#97989F] text-base font-semibold">{post.author}</span>
                          </div>
                          <span className="text-[#97989F] text-base">{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
