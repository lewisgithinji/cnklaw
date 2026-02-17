# CNK Law Firm Website

A modern, high-performance law firm website built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- ✅ Modern, responsive design
- ✅ Fast loading with optimized performance
- ✅ SEO-friendly with structured data
- ✅ Contact and appointment booking forms
- ✅ Newsletter subscription
- ✅ Blog system with MDX support
- ✅ Google Maps integration
- ✅ Mobile-responsive navigation
- ✅ Accessible UI components (Shadcn UI)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Form Handling**: React Hook Form + Zod
- **Email**: Nodemailer
- **Maps**: Google Maps via @next/third-parties
- **Blog**: MDX with gray-matter

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:
- Google Maps API key
- Email SMTP configuration
- Newsletter service credentials (optional)

### Build for Production

```bash
npm run build
npm start
```

## Project Status

### ✅ Completed
- Next.js 15 + TypeScript setup
- Tailwind CSS v4 + Shadcn UI
- Header & Footer components
- Homepage with Hero & Practice Areas
- Form validation with Zod
- Newsletter signup form
- Environment configuration

### 🚧 To Complete
- Remaining pages (About, Contact, Blog, etc.)
- Form components (Contact, Appointment)
- API routes for form submissions
- Google Maps integration
- Blog MDX posts
- SEO metadata

## Next Steps

1. Provide company profile to populate:
   - Practice areas
   - Attorney profiles
   - Contact information
   - Office location (for Google Maps)

2. Complete remaining pages and forms
3. Add content and test functionality

## Configuration

Edit `src/lib/constants.ts` to update firm information, practice areas, and attorney profiles.

## Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)
