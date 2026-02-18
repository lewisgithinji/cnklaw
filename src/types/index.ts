export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  fullDescription?: string;
  expertisePoints?: string[];
}

export type TeamRole = "Partner" | "Associate" | "Support Staff" | "Administration";

export interface TeamMember {
  id: string;
  slug?: string;
  name: string;
  title: string;
  bio: string;
  shortBio?: string;
  image?: string;
  category: TeamRole;
  email?: string;
  phone?: string;
  specializations?: string[];
  experience?: string;
  objectPosition?: string;
}

export interface Attorney extends TeamMember {
  slug: string;
  specializations: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readingTime?: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: Date;
  preferredTime: string;
  practiceArea: string;
  caseDescription: string;
}

export interface NewsletterFormData {
  email: string;
}
