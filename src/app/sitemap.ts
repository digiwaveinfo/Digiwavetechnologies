import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://quantumverse.com'

async function getPortfolioSlugs() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'
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
  // If you have a services API endpoint, fetch from there
  // For now, returning static service IDs based on common services
  return [
    'web-development',
    'mobile-app-development',
    'ai-ml-solutions',
    'cloud-services',
    'ui-ux-design',
    'digital-marketing'
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolioSlugs = await getPortfolioSlugs()
  const serviceIds = await getServiceIds()
  
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
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/product`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
  
  // Dynamic portfolio pages
  const portfolioPages: MetadataRoute.Sitemap = portfolioSlugs.map((slug: string) => ({
    url: `${BASE_URL}/portfolio/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = serviceIds.map((id: string) => ({
    url: `${BASE_URL}/services/${id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [...staticPages, ...portfolioPages, ...servicePages]
}
