export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Business WordPress Website",
    description:
      "Custom WordPress theme with responsive design, contact forms, and SEO optimization for a corporate client.",
    longDescription:
      "A fully custom WordPress theme built from scratch for a business client. Features include responsive design across all breakpoints, integrated contact forms, SEO meta optimization, custom post types, and performance-tuned asset loading.",
    tech: ["WordPress", "PHP", "HTML", "CSS", "Bootstrap"],
    image: "/projects/project-1.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "WordPress",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "Product catalog, cart, and checkout built on WordPress/WooCommerce with custom theming.",
    longDescription:
      "A complete e-commerce solution built on WordPress with WooCommerce. Includes custom product pages, shopping cart functionality, secure checkout integration, inventory management, and a responsive storefront design.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    image: "/projects/project-2.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "E-commerce",
    featured: true,
  },
  {
    id: 3,
    title: "PHP Web Application",
    description:
      "Custom login/dashboard system with database-driven content and user authentication.",
    longDescription:
      "A bespoke PHP web application featuring user registration and authentication, role-based dashboard, CRUD operations with MySQL backend, session management, and input validation. Built with security best practices.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    image: "/projects/project-3.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
    featured: true,
  },
  {
    id: 4,
    title: "IT Helpdesk Tracker",
    description:
      "Internal tool concept for logging IT tickets and tracking asset inventory across departments.",
    longDescription:
      "A conceptual internal tool designed to streamline IT support operations. Features ticket logging with priority levels, asset inventory tracking, assignment workflows, and reporting dashboards for team leads.",
    tech: ["PHP", "SQL", "Bootstrap", "JavaScript"],
    image: "/projects/project-4.jpg",
    liveUrl: "#",
    githubUrl: "#",
    category: "Tool",
    featured: false,
  },
];
