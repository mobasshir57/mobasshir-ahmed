export interface Project {
  slug: string;
  name: string;
  niche: 'SEO' | 'Full Stack';
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  platform: string;
  duration: string;
  techStack: string[];
  keyFeatures?: string[];
  keyResults?: string[];
  challenges: string;
  futurePlans: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    slug: 'tiny-little-love',
    name: 'Tiny Little Love — Shopify SEO',
    niche: 'SEO',
    thumbnail: '/projects/tiny-little-love.png',
    shortDescription: 'Full SEO transformation for a Shopify kidswear & sustainable products store.',
    fullDescription: 'Led end-to-end SEO strategy for Tiny Little Love, a Shopify e-commerce store in the kidswear and sustainable products niche. Transformed a low-visibility store into a fully optimized, search-friendly platform through comprehensive technical audits, keyword mapping, and on-page optimization.',
    platform: 'Shopify',
    duration: 'Sep 2025 – Dec 2025',
    techStack: ['Shopify', 'Ahrefs', 'SEMrush', 'Google Search Console', 'GA4', 'Schema Markup'],
    keyResults: [
      'Increased organic impressions by 210%',
      'Improved keyword rankings to Top 10 within 3 months',
      'Resolved 30+ technical issues including duplicate content',
      'Mapped high-intent keywords to product pages'
    ],
    challenges: 'Managing duplicate content across similar product variants was the biggest technical hurdle. Canonical tag strategy and proper URL structuring resolved indexing conflicts and improved crawl efficiency significantly.',
    futurePlans: [
      'Implement structured data for product reviews',
      'Expand blog content strategy',
      'Optimize for Core Web Vitals'
    ],
    liveLink: '#',
  },
  {
    slug: 'mern-ecommerce',
    name: 'ShopMERN — Full Stack E-commerce',
    niche: 'Full Stack',
    thumbnail: '/projects/mern-ecommerce.png',
    shortDescription: 'A full-featured e-commerce web application built with the MERN stack.',
    fullDescription: 'ShopMERN is a complete e-commerce platform featuring product listings, cart management, user authentication with JWT, and Stripe payment integration. Built with a React frontend and a Node/Express REST API backend connected to MongoDB.',
    platform: 'Web App',
    duration: 'Built for Demo',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'Tailwind CSS', 'Stripe API'],
    keyFeatures: [
      'User registration & JWT authentication',
      'Product listing with search & filter',
      'Shopping cart & checkout',
      'Stripe payment gateway',
      'Admin dashboard'
    ],
    challenges: 'Implementing real-time cart synchronization across sessions and handling Stripe webhook events securely were the primary technical challenges. Solved using React Context API and backend middleware validation.',
    futurePlans: [
      'Add product review system',
      'Wishlist feature',
      'Email order confirmation (Nodemailer)'
    ],
    githubLink: 'https://github.com/mobasshir57',
  },
  {
    slug: 'task-manager-app',
    name: 'TaskFlow — Team Task Manager',
    niche: 'Full Stack',
    thumbnail: '/projects/task-manager.png',
    shortDescription: 'A collaborative task management app with real-time updates and role-based access.',
    fullDescription: 'TaskFlow is a team productivity application where users can create projects, assign tasks, set deadlines, and track progress in real time. Features role-based access control (Admin/Member), real-time notifications via Socket.io, and a Kanban-style board view.',
    platform: 'Web App',
    duration: 'Built for Demo',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT Auth', 'Tailwind CSS'],
    keyFeatures: [
      'Kanban board (drag & drop)',
      'Real-time updates via Socket.io',
      'Role-based access control',
      'Task assignment & deadlines',
      'Activity log'
    ],
    challenges: 'Implementing real-time drag-and-drop with persistent state across multiple users was complex. Used Socket.io rooms per project and optimistic UI updates to keep the experience smooth.',
    futurePlans: [
      'Add calendar view',
      'Email/push notifications',
      'File attachments per task'
    ],
    githubLink: 'https://github.com/mobasshir57',
  }
];
