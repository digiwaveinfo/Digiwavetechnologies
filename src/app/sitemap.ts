import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digiwavetechnologies.in'

async function getPortfolioSlugs() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${apiUrl}/portfolio/portfolios/?is_active=true`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })

    if (!response.ok) {
      console.error('Failed to fetch portfolios for sitemap')
      return []
    }

    const data = await response.json()
    const portfolios = data.results || data || []
    return portfolios.map((p: any) => p.slug).filter(Boolean)
  } catch (error) {
    console.error('Error fetching portfolios for sitemap:', error)
    return []
  }
}

async function getServiceIds() {
  // Static service IDs matching your actual service pages
  return [
    'ai-machine-learning',
    'web-application-development',
    'mobile-app-development',
    'cloud-devops-services',
    'automation-data-intelligence',
    'iot-solutions'
  ]
}

async function getBlogSlugs() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${apiUrl}/blog/public/`, {
      next: { revalidate: 3600 }
    })
    if (!response.ok) {
      console.error('Failed to fetch blogs for sitemap')
      return []
    }
    const data = await response.json()
    const blogs = Array.isArray(data) ? data : (data.results || [])
    return blogs.map((b: any) => b.slug).filter(Boolean)
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
    // Fallback to known slugs if API is unavailable
    return [
      'impact-of-technology-on-workplace-1',
      'impact-of-technology-on-workplace-2',
      'impact-of-technology-on-workplace-3',
      'impact-of-technology-on-workplace-4',
      'impact-of-technology-on-workplace-5',
      'impact-of-technology-on-workplace-6'
    ]
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolioSlugs = await getPortfolioSlugs()
  const serviceIds = await getServiceIds()
  const blogSlugs = await getBlogSlugs()

  const currentDate = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/book-demo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/product`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = serviceIds.map((id: string) => ({
    url: `${BASE_URL}/services/${id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic portfolio pages
  const portfolioPages: MetadataRoute.Sitemap = portfolioSlugs.map((slug: string) => ({
    url: `${BASE_URL}/portfolio/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.51,
  }))

  // Dynamic blog pages
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug: string) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...portfolioPages, ...blogPages]
}
