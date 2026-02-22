// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Tahir Alvi | Sr. .NET & Azure Consultant",
  description: "10+ years of experience designing, developing, and deploying enterprise applications on .NET Core, Azure Cloud, and SQL Server. Specializing in cloud migrations, microservices, and AI-assisted development.",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "RANG",
  items: [
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "RANG",
  subtitle: "Capturing Moments, Creating Memories",
  backgroundImage: "/hero-main.jpg",
  servicesLabel: "Weddings | Festivals | Portraits",
  copyright: "© 2024 Rang Studios",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "We capture the vibrant essence of South Asian celebrations,",
  titleLine2: "preserving your precious moments with artistry and heart.",
  description: "At Rang Studios, we understand that South Asian weddings and celebrations are more than just events—they are grand tapestries of tradition, emotion, and color. With over a decade of experience, our team specializes in documenting every meaningful glance, every joyful tear, and every vibrant celebration that makes your story uniquely yours.",
  image1: "/about-1.jpg",
  image1Alt: "Beautiful bridal henna and bouquet",
  image2: "/about-2.jpg",
  image2Alt: "Colorful festival celebration",
  authorImage: "/photographer.jpg",
  authorName: "Priya Sharma",
  authorBio: "Founder & Lead Photographer. With a passion for storytelling and an eye for detail, I have dedicated my career to capturing the beauty and emotion of South Asian celebrations. Every wedding is a new story waiting to be told.",
};

// ============================================================================
// Works Section Configuration
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Selected Works",
  subtitle: "A curated collection of our finest celebrations captured with love.",
  projects: [
    { 
      id: 1, 
      title: "The Royal Wedding", 
      category: "Wedding", 
      image: "/work-1.jpg" 
    },
    { 
      id: 2, 
      title: "Bridal Elegance", 
      category: "Portrait", 
      image: "/work-2.jpg" 
    },
    { 
      id: 3, 
      title: "Diwali Celebrations", 
      category: "Festival", 
      image: "/work-3.jpg" 
    },
    { 
      id: 4, 
      title: "Garden Romance", 
      category: "Pre-Wedding", 
      image: "/work-4.jpg" 
    },
  ],
};

// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Our Craft",
  subtitle: "Every celebration deserves to be remembered in its full splendor.",
  services: [
    { 
      id: "01", 
      title: "Wedding Photography", 
      description: "Complete coverage of your special day, from the intimate morning rituals to the grand reception. We capture every emotion, every detail, and every precious moment.", 
      image: "/service-1.jpg" 
    },
    { 
      id: "02", 
      title: "Pre-Wedding Shoots", 
      description: "Romantic sessions that tell your love story against stunning backdrops. Perfect for save-the-dates and wedding invitations.", 
      image: "/service-2.jpg" 
    },
    { 
      id: "03", 
      title: "Event Coverage", 
      description: "From Sangeet nights to Mehndi ceremonies, from Diwali parties to milestone celebrations—we document it all with artistic flair.", 
      image: "/service-3.jpg" 
    },
    { 
      id: "04", 
      title: "Portrait Sessions", 
      description: "Elegant individual and family portraits that showcase your personality and style. Perfect for anniversaries, engagements, or simply celebrating yourself.", 
      image: "/service-4.jpg" 
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Client Voices",
  testimonials: [
    { 
      id: 1, 
      name: "Anita Patel", 
      title: "Bride, Mumbai", 
      quote: "Rang Studios captured our wedding with such artistry and emotion. Every time we look at our photos, we relive those magical moments. Truly exceptional work!", 
      image: "/testimonial-1.jpg" 
    },
    { 
      id: 2, 
      name: "Raj Malhotra", 
      title: "Groom, Delhi", 
      quote: "The team understood our vision perfectly. They were professional, creative, and made us feel completely at ease. Our pre-wedding shoot was beyond our dreams.", 
      image: "/testimonial-2.jpg" 
    },
    { 
      id: 3, 
      name: "Sneha Gupta", 
      title: "Event Organizer", 
      quote: "We have worked with Rang Studios for multiple corporate events and Diwali celebrations. Their attention to detail and ability to capture candid moments is unmatched.", 
      image: "/testimonial-3.jpg" 
    },
  ],
};

// ============================================================================
// Pricing Section Configuration
// ============================================================================

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  features: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  title: "Investment",
  subtitle: "Packages designed to capture your celebration beautifully.",
  ctaButtonText: "Choose Plan",
  plans: [
    { 
      id: 1, 
      name: "Essential", 
      price: 1500, 
      unit: "per event", 
      featured: false, 
      features: [
        "6 hours of coverage",
        "1 photographer",
        "200+ edited photos",
        "Online gallery",
        "Delivery in 2 weeks"
      ] 
    },
    { 
      id: 2, 
      name: "Premium", 
      price: 3500, 
      unit: "per event", 
      featured: true, 
      features: [
        "Full day coverage",
        "2 photographers",
        "500+ edited photos",
        "Online gallery + prints",
        "Pre-wedding consultation",
        "Delivery in 10 days"
      ] 
    },
    { 
      id: 3, 
      name: "Luxury", 
      price: 7500, 
      unit: "per event", 
      featured: false, 
      features: [
        "Multi-day coverage",
        "3 photographers + videographer",
        "1000+ edited photos",
        "Premium album + prints",
        "Drone coverage",
        "Same-day edits",
        "Delivery in 7 days"
      ] 
    },
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "FAQ",
  faqs: [
    { 
      question: "How far in advance should we book?", 
      answer: "We recommend booking 6-12 months in advance, especially for peak wedding season (October-February). This ensures we can accommodate your preferred dates and provide ample time for planning." 
    },
    { 
      question: "Do you travel for destination weddings?", 
      answer: "Absolutely! We love destination weddings and have captured celebrations across India, Dubai, Thailand, and Europe. Travel and accommodation costs are additional and discussed during consultation." 
    },
    { 
      question: "What is your photography style?", 
      answer: "Our style is a blend of documentary and artistic photography. We focus on capturing candid emotions and genuine moments while also creating stunning posed portraits. We love vibrant colors and dramatic lighting." 
    },
    { 
      question: "How long until we receive our photos?", 
      answer: "Delivery time depends on your package—ranging from 7 days for Luxury to 2 weeks for Essential. Each photo is carefully edited for color, exposure, and artistic enhancement." 
    },
    { 
      question: "Can we customize our package?", 
      answer: "Yes! We understand every celebration is unique. We offer flexible packages and can add services like additional photographers, videography, drone coverage, or special albums based on your needs." 
    },
  ],
};

// ============================================================================
// Blog Section Configuration
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Studio Notes",
  subtitle: "Insights and stories from our creative journey.",
  allPostsLabel: "All Posts",
  readMoreLabel: "Read More",
  readTimePrefix: "Read ",
  posts: [
    { 
      id: 1, 
      title: "The Art of Capturing South Asian Weddings", 
      excerpt: "From the vibrant Mehndi ceremonies to the emotional Bidaai, South Asian weddings are a photographer's dream. Learn about the key moments we never miss.", 
      readTime: "5 min", 
      date: "Mar 15, 2024", 
      image: "/blog-1.jpg", 
      category: "Tips" 
    },
    { 
      id: 2, 
      title: "Bridal Portrait Essentials: Lighting & Poses", 
      excerpt: "Creating timeless bridal portraits requires understanding lighting, angles, and the bride's personality. Discover our secrets for stunning bridal photography.", 
      readTime: "4 min", 
      date: "Feb 28, 2024", 
      image: "/blog-2.jpg", 
      category: "Photography" 
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Let's Create Together",
  subtitle: "Your celebration deserves to be remembered beautifully. Reach out to discuss your vision.",
  nameLabel: "Name *",
  emailLabel: "Email *",
  projectTypeLabel: "Project Type",
  projectTypePlaceholder: "Select...",
  projectTypeOptions: [
    { value: "wedding", label: "Wedding Photography" },
    { value: "prewedding", label: "Pre-Wedding Shoot" },
    { value: "event", label: "Event Coverage" },
    { value: "portrait", label: "Portrait Session" },
    { value: "other", label: "Other" },
  ],
  messageLabel: "Message",
  submitButtonText: "Send Message",
  image: "/contact.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Every Moment Deserves to Be Remembered",
  marqueeHighlightChars: ["M", "R"],
  navLinks1: [
    { label: "Home", href: "#hero" },
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
  ],
  navLinks2: [
    { label: "Instagram", href: "#", icon: "Instagram" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  ctaText: "Book Now",
  ctaHref: "#contact",
  copyright: "© 2024 Rang Studios. All rights reserved.",
  tagline: "Capturing colors, creating memories",
};
