export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Freelancing",
    issuer: "Digiskills",
    year: "2022",
    category: "Business",
  },
  {
    id: 2,
    title: "WordPress",
    issuer: "Digiskills",
    year: "2022",
    category: "Development",
  },
  {
    id: 3,
    title: "Affiliate Marketing",
    issuer: "Digiskills",
    year: "2023",
    category: "Marketing",
  },
  {
    id: 4,
    title: "SEO - Search Engine Optimization",
    issuer: "Digiskills",
    year: "2023",
    category: "Marketing",
  },
  {
    id: 5,
    title: "Virtual Assistant",
    issuer: "Digiskills",
    year: "2023",
    category: "Business",
  },
  {
    id: 6,
    title: "Graphic Design",
    issuer: "Digiskills",
    year: "2023",
    category: "Design",
  },
];
