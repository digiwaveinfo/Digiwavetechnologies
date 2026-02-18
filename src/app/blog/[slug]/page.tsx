import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogBySlug, getBlogs, BlogPost } from "@/lib/api";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: blog.meta_title || `${blog.title} | Digiwave Technologies`,
    description: blog.meta_description || blog.excerpt,
    keywords: blog.meta_keywords,
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.excerpt,
      images: blog.cover_image_url ? [blog.cover_image_url] : [],
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog: BlogPost | null = await getBlogBySlug(slug);

  if (!blog) notFound();

  // Fetch related blogs (other published posts, excluding current)
  const allBlogs = await getBlogs();
  const relatedBlogs = allBlogs.filter((b) => b.slug !== slug).slice(0, 3);

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
            Blog Post
          </h3>
          <h1 className="text-white font-poppins font-bold text-[40px] leading-tight text-center max-w-[727px]">
            Blog Details
          </h1>
        </Container>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 sm:py-20 w-full bg-white">
        <Container>
          <div className="flex flex-col gap-16">
            {/* Blog Header */}
            <div className="w-full flex flex-col gap-8">
              <div className="relative">
                {/* Category Badge */}
                <div className="absolute top-0 right-0 z-10 px-3 py-1.5 bg-[#00BFD2]/10 rounded-lg">
                  <span className="text-[#00BFD2] text-sm sm:text-base md:text-xl font-medium whitespace-nowrap">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-[#232536] text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 pr-20 sm:pr-32 md:pr-48">
                  {blog.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  {blog.author_image_url ? (
                    <img
                      src={blog.author_image_url}
                      alt={blog.author_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#00BFD2]/20 flex items-center justify-center text-[#00BFD2] font-bold text-lg">
                      {blog.author_name.charAt(0)}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[#00BFD2] text-2xl font-bold">
                      {blog.author_name}
                    </span>
                    <span className="text-[#6D6E76] text-base">
                      Posted on {formatDate(blog.published_at || blog.created_at)}
                    </span>
                  </div>
                </div>

                {/* Hero / Cover Image */}
                <div className="w-full h-[400px] sm:h-[500px] lg:h-[564px] bg-[#E2E2E2] rounded-3xl overflow-hidden">
                  {blog.hero_image_url || blog.cover_image_url ? (
                    <img
                      src={blog.hero_image_url || blog.cover_image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                      No Image
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="w-full flex flex-col gap-8">
              {/* Excerpt */}
              {blog.excerpt && (
                <p className="text-[#6D6E76] text-lg font-['Inter'] leading-7 border-l-4 border-[#00BFD2] pl-4 italic">
                  {blog.excerpt}
                </p>
              )}

              {/* Full rich-text content rendered as HTML */}
              <div
                className="prose prose-lg max-w-none text-[#6D6E76] font-['Inter'] leading-7
                  prose-headings:text-[#232536] prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:font-bold prose-h2:font-['Sen'] prose-h2:leading-[48px]
                  prose-a:text-[#00BFD2] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-[#161722]
                  prose-ul:list-disc prose-ol:list-decimal
                  prose-li:text-[#6D6E76]"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Related Blog Section */}
            {relatedBlogs.length > 0 && (
              <div className="w-full flex flex-col items-center gap-12 mt-12">
                <div className="flex flex-col items-center gap-2.5">
                  <p className="text-[#00BFD2] text-xl font-medium text-center">
                    Related Blog
                  </p>
                  <h2 className="text-[#00114C] text-3xl sm:text-4xl font-bold text-center">
                    What to read next
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                  {relatedBlogs.map((post) => (
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
              </div>
            )}
          </div>
        </Container>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}