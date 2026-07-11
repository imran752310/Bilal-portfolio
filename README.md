# Muhammad Bilal — Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Space Grotesk + JetBrains Mono

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Home page assembling all sections
│   └── globals.css      # Global styles & Tailwind utilities
├── components/
│   ├── Navbar.tsx       # Sticky navigation with mobile menu
│   ├── Hero.tsx         # Landing section with animations
│   ├── About.tsx        # About me with highlight cards
│   ├── Experience.tsx   # Work timeline
│   ├── Projects.tsx     # Project grid with filters
│   ├── Skills.tsx       # Technical skills & proficiency bars
│   ├── Education.tsx    # Education history
│   ├── Certificates.tsx # Certification cards
│   ├── Contact.tsx      # Contact form & info
│   └── Footer.tsx       # Site footer
├── data/
│   ├── projects.ts      # Editable project data
│   └── certificates.ts  # Certificate data
└── public/              # Static assets
```

## Customization

### Updating Projects

Edit `data/projects.ts` to update your project details:

```typescript
{
  id: 1,
  title: "Your Project",
  description: "Short description",
  tech: ["React", "TypeScript"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/your/repo",
}
```

### Profile Image

Add your profile photo to `public/` and reference it in the Hero component.

## Deployment (Vercel)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy — zero configuration needed

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```
