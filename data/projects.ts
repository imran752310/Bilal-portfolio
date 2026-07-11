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
    title: "Ticket Reservation System",
    description:
      "A real-time ticket booking platform with seat selection, payment integration, and event management features.",
    longDescription:
      "A complete ticket reservation system enabling users to browse events, select seats, and book tickets seamlessly. Features include real-time seat availability, multiple payment gateway support, event creation and management for admins, booking confirmation with QR codes, and an intuitive admin dashboard for analytics and reporting.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    image: "/Ticket Reservation.png",
    liveUrl: "#",
    githubUrl: "https://github.com/mbilalkhandev/ticket-reservation-system",
    category: "Web App",
    featured: true,
  },
  {
    id: 2,
    title: "Learning Management System",
    description:
      "A full-featured LMS platform with course management, student enrollment, progress tracking, and interactive learning modules.",
    longDescription:
      "A comprehensive Learning Management System built to streamline online education. Features include course creation and management, student enrollment and authentication, progress tracking with analytics, quiz and assignment modules, certificate generation, and a responsive dashboard for both instructors and students.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    image: "/LMS.PNG",
    liveUrl: "#",
    githubUrl: "https://github.com/mbilalkhandev/Learning-Managment-System",
    category: "Web App",
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
