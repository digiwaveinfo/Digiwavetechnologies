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

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[]>;
}

// Portfolio types
export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  short_description: string;
  full_description: string;
  tag: string;
  card_image_url?: string;
  hero_image_url?: string;
  technologies: string[];
  problem_statement: string;
  solution_description: string;
  features: { title: string; description: string }[];
  gallery_images: string[];
  live_url?: string;
  is_featured: boolean;
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

// Fetch single portfolio by slug
export async function getPortfolioBySlug(slug: string): Promise<PortfolioItem | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/${slug}/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 },
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
