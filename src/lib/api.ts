// API configuration for the quantum-verse website

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source_page?: string;
}

interface DemoBookingFormData {
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  selected_service: string;
  preferred_date: string;
  preferred_time: string;
  requirements?: string;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[]>;
}

// Portfolio types
export interface Technology {
  id: number;
  name: string;
  icon_url?: string;
  category?: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  short_description: string;
  full_description: string;
  tag: string;
  card_image_url?: string;
  card_images?: { id: string; image_url: string; display_order: number }[];
  hero_image_url?: string;
  home_featured_image_url?: string;
  showcase_image_url?: string;
  technologies: Technology[];
  problem_statement: string;
  solution_description: string;
  impact_description?: string;
  features: { title: string; description: string }[];
  gallery_images: string[];
  live_url?: string;
  is_featured: boolean;
  is_home_featured: boolean;
  display_order: number;
}

// Fetch all public portfolios
export async function getPortfolios(): Promise<PortfolioItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/public/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.error('Failed to fetch portfolios');
      return [];
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    return [];
  }
}

// Fetch featured portfolios for homepage
export async function getFeaturedPortfolios(): Promise<PortfolioItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/featured/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error('Failed to fetch featured portfolios');
      return [];
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching featured portfolios:', error);
    return [];
  }
}

// Fetch home featured portfolios for homepage sticky cards (max 4)
export async function getHomeFeaturedPortfolios(): Promise<PortfolioItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/home-featured/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error('Failed to fetch home featured portfolios');
      return [];
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching home featured portfolios:', error);
    return [];
  }
}

// Fetch single portfolio by slug
export async function getPortfolioBySlug(slug: string): Promise<PortfolioItem | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/${slug}/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 10 }, // Revalidate every 10 seconds for faster updates
    });

    if (!response.ok) {
      console.error('Failed to fetch portfolio');
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return null;
  }
}

// ─── Blog types ──────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author_name: string;
  author_image_url?: string;
  cover_image_url?: string;
  hero_image_url?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  status: 'draft' | 'published';
  is_featured: boolean;
  display_order: number;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

// Fetch all published blog posts
export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/public/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      console.error('Failed to fetch blogs');
      return [];
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Fetch featured blog posts
export async function getFeaturedBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/featured/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 },
    });
    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    console.error('Error fetching featured blogs:', error);
    return [];
  }
}

// Fetch single blog post by slug
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/${slug}/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 30 },
    });
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// ─── Contact / Demo booking ──────────────────────────────────────────────────

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: 'Failed to submit form. Please try again.',
        errors: result.errors,
      };
    }

    return {
      success: true,
      message: result.message || 'Thank you for contacting us!',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}

export async function submitDemoBooking(data: DemoBookingFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/demo-booking/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to submit demo booking. Please try again.',
        errors: result.errors,
      };
    }

    return {
      success: true,
      message: result.message || 'Demo booking submitted successfully! Check your email for confirmation.',
    };
  } catch (error) {
    console.error('Demo booking submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
