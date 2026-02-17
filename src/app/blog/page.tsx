import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Blogs | Software Development Blog | AI & IoT Insights",
  description: "Explore expert blogs from Digiwave Technologies on software development, AI, IoT, cloud, automation, and digital transformation trends.",
  keywords: "technology blog, software development blog, IT services blog, AI ML blog, IoT technology blog, cloud computing blog, DevOps blog, data intelligence automation blog, digital transformation insights, enterprise technology trends",
  openGraph: {
    title: "Technology Blogs | Software Development Blog | AI & IoT Insights",
    description: "Explore expert blogs from Digiwave Technologies on software development, AI, IoT, cloud, automation, and digital transformation trends.",
    type: "website",
    url: "https://digiwavetechnologies.in/blog-page",
  },
};

const blogPosts = [
  {
    slug: "impact-of-technology-on-workplace-1",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Elizabeth Slavin",
    date: "January 10, 2026",
    image: "/blog/blog-1.png",
    authorImage: "/blog/elizabeth.png"
  },
  {
    slug: "impact-of-technology-on-workplace-2",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Jason Francisco",
    date: "December 20, 2025",
    image: "/blog/blog-2.png",
    authorImage: "/blog/json.png"
  },
  {
    slug: "impact-of-technology-on-workplace-3",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "Tracey Wilson",
    date: "August 20, 2025",
    image: "/blog/blog-3.png",
    authorImage: "/blog/tracey.png"
  },
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

export default function BlogPage() {
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
          <h3 className="text-[#62F4F3] font-poppins font-medium text-xl mb-4 text-center">Insights & Updates</h3>
          <h1 className="text-white font-poppins font-bold text-[40px] leading-tight text-center max-w-[727px]">
            Our Blog
          </h1>
        </Container>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 sm:py-20 w-full bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
        </Container>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
