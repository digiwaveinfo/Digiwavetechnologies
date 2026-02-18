import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Link from "next/link";
import type { Metadata } from "next";
import { getBlogs, BlogPost } from "@/lib/api";

export const metadata: Metadata = {
  title: "Technology Blogs | Software Development Blog | AI & IoT Insights",
  description:
    "Explore expert blogs from Digiwave Technologies on software development, AI, IoT, cloud, automation, and digital transformation trends.",
  keywords:
    "technology blog, software development blog, IT services blog, AI ML blog, IoT technology blog, cloud computing blog, DevOps blog, data intelligence automation blog, digital transformation insights, enterprise technology trends",
  openGraph: {
    title: "Technology Blogs | Software Development Blog | AI & IoT Insights",
    description:
      "Explore expert blogs from Digiwave Technologies on software development, AI, IoT, cloud, automation, and digital transformation trends.",
    type: "website",
    url: "https://digiwavetechnologies.in/blog",
  },
};

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const blogs: BlogPost[] = await getBlogs();

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#022030] h-[322px] overflow-hidden">
        <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[223px] -top-14 opacity-100"></div>
        <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] left-[648px] top-28 opacity-100"></div>
        <div className="absolute w-[25px] h-[925px] bg-[#62F4F3] blur-[68px] rotate-[43deg] -left-[426px] -top-[151px] opacity-100"></div>

        <Container className="relative z-10 flex flex-col items-center justify-center h-full">
          <h3 className="text-[#62F4F3] font-poppins font-medium text-xl mb-4 text-center">
            Insights & Updates
          </h3>
          <h1 className="text-white font-poppins font-bold text-[40px] leading-tight text-center max-w-[727px]">
            Our Blog
          </h1>
        </Container>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 sm:py-20 w-full bg-white">
        <Container>
          {blogs.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-xl">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl border border-[#E8E8EA] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-4 flex flex-col gap-4">
                    <div className="w-full h-60 bg-[#E2E2E2] rounded-lg overflow-hidden">
                      {post.cover_image_url ? (
                        <img
                          src={post.cover_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="p-2 flex flex-col gap-5">
                      <div className="flex flex-col gap-4">
                        <div className="inline-flex px-2.5 py-1 bg-[#00BFD2]/10 rounded-md self-start">
                          <span className="text-[#00BFD2] text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-[#181A2A] text-2xl font-semibold leading-9 group-hover:text-[#00BFD2] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3">
                          {post.author_image_url ? (
                            <img
                              src={post.author_image_url}
                              alt={post.author_name}
                              className="w-9 h-9 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-[#00BFD2]/20 flex items-center justify-center text-[#00BFD2] font-semibold text-sm">
                              {post.author_name.charAt(0)}
                            </div>
                          )}
                          <span className="text-[#97989F] text-base font-semibold">
                            {post.author_name}
                          </span>
                        </div>
                        <span className="text-[#97989F] text-base">
                          {formatDate(post.published_at || post.created_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
