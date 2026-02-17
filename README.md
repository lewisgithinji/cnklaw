# CNK Law Firm | World-Class Legal Excellence

A prestigious, high-performance digital presence for **C.N. Karanja & Associates (CNK Law)**. Built with a "Cinematic First" design philosophy, this platform combines modern legal advocacy with cutting-edge web technology.

## 🏛️ Project Vision
This platform is designed to project **Authority, Excellence, and Justice**. It transcends traditional legal web design by implementing an immersive, glassmorphism-inspired UI that guides clients through a cinematic narrative—from the heart of the Westlands business hub to the Supreme Court of Kenya.

## ✨ Premium Features

### 🎬 Cinematic Hero Slider
- **Narrative Journey**: A multi-slide, cross-fading experience transitioning from an authentic Westlands skyline to the Supreme Court, ending with a unified "Architectural Glass Mural" of the legal team.
- **CNK Burgundy Grade**: Custom-developed image processing pipeline that applies brand-coordinated burgundy grading and cinematic depth-of-field to all hero assets.

### 💎 Immersive UI/UX
- **Glassmorphism Design**: High-end header and component structures utilizing backdrop blurs and subtle gold accents for a premium "legal suite" feel.
- **Dynamic Practice Areas**: Full-screen, high-resolution immersive detail views for all practice areas including Corporate, Family, and Intellectual Property Law.
- **Staff Mural Architecture**: A custom-engineered team composite that integrates staff portraits into an elegant architectural environment.

### 📅 Strategic Advocacy Tools
- **Optimized Booking Flow**: A centered, cinematic appointment system designed for high conversion and professional intake.
- **MDX Data Intelligence**: A robust blog engine powered by MDX and Gray-Matter for high-impact legal insights.
- **Global Presence**: Integrated multi-region contact capabilities and interactive maps.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Aesthetics**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Image Intelligence**: [Sharp](https://sharp.pixelplumbing.com/) (for cinematic grading & asset optimization)
- **Email/Compliance**: Nodemailer + Web3Forms

## 🚀 Getting Started

### 1. Development Environment
```bash
npm install
npm run dev
```
Access the local environment at `http://localhost:3000`.

### 2. Cinematic Asset Generation
To regenerate the unified team mural or apply brand tints to new hero assets:
```bash
node scripts/generate-team-hero.mjs
```

### 3. Environment Configuration
Ensure your `.env.local` includes the following:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `WEB3FORMS_ACCESS_KEY`
- SMTP Credentials for local notifications.

## 📐 Architecture
- `src/app`: Immersive App Router routes.
- `src/components/sections`: High-impact UI components (Hero, Practice Areas).
- `src/lib/constants.ts`: The "Brand Soul" containing all firm information and site metadata.
- `public/Hero`: Optimized cinematic visual assets.

## 🌐 Deployment (Cloudflare Pages)

To deploy this project to Cloudflare Pages, use the following settings in the Cloudflare Dashboard:

### Build Configuration
- **Framework Preset**: `Next.js`
- **Build Command**: `npx @cloudflare/next-on-pages@latest`
- **Build Output Directory**: `.vercel/output`
- **Compatibility Flags**: `nodejs_compat` (Required for Edge Runtime)
- **Root Directory**: `/`

### Environment Variables
Ensure the following variables are set in the **Production** and **Preview** environments:
- `NODE_VERSION`: `20` (or higher)
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: [Your Google Maps API Key]
- `WEB3FORMS_ACCESS_KEY`: [Your Web3Forms Key]

### Required Configuration
This project uses the `@cloudflare/next-on-pages` adapter for Edge Runtime support. Ensure your `next.config.ts` does not contain incompatible Node.js built-ins in the edge functions.

---

### 🖋️ Site Architecture
**Architected by [DataCare](https://datacare.co.ke)**
*Copyright &copy; 2026 C.N. Karanja & Associates. All Rights Reserved.*
