import type { PracticeArea, Attorney, TeamMember } from "@/types";

export const FIRM_INFO = {
  name: "C.N. KARANJA & ASSOCIATES ADVOCATES",
  tagline: "Our Practice, is your solution",
  description:
    "An established law firm undertaking legal work with utmost professionalism, due care, integrity and in a value optimizing way.",
  phone: "0727770668 / 0729651125",
  email: "wakili@cnklaw.co.ke",
  address: {
    street: "Western Heights, 2nd floor, Suite 11, Karuna Road, Next to Sarit Centre, Westlands",
    city: "Nairobi",
    country: "Kenya",
    poBox: "P.O. Box 2318-00606",
  },
  social: {
    linkedin: "https://linkedin.com/company/cnk-law",
    twitter: "https://twitter.com/cnklaw",
    facebook: "https://facebook.com/cnklaw",
  },
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    description: "Comprehensive advisory on business formation, restructuring, and commercial transactions.",
    icon: "briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    fullDescription: "Our corporate department provides strategic advice on business formation, restructuring, and compliance with the Companies Act 2015. We handle complex commercial transactions, mergers, and acquisitions with a focus on risk mitigation and value optimization.",
    expertisePoints: [
      "Company Registration & Compliance",
      "Corporate Restructuring & M&A",
      "Commercial Contract Negotiations",
      "Insolvency & Receiverships",
      "Drafting Shareholder Agreements"
    ]
  },
  {
    slug: "conveyancing-real-estate",
    title: "Conveyancing & Real Estate Law",
    description: "Specialized services in land registration, property transitions, and complex land law matters.",
    icon: "building",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
    fullDescription: "With over 30 years of specialized experience, we navigate the intricacies of the Land Act and Sectional Properties Act. Our services include property transfers, long-term leases, subdivisions, and advisory on land tenure systems in Kenya.",
    expertisePoints: [
      "Property Acquisition & Disposal",
      "Leases & Sectional Properties",
      "Land Use & Subdivisions",
      "Commercial & Residential Conveyancing",
      "Charging & Perfection of Securities"
    ]
  },
  {
    slug: "civil-criminal-litigation",
    title: "Civil & Criminal Litigation",
    description: "Aggressive advocacy and representation in all levels of the judicial system.",
    icon: "gavel",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
    fullDescription: "Our litigation team provides vigorous advocacy in Kenyan courts, handling both civil and criminal matters with precision. We are committed to protecting our clients' rights and interests through every stage of the judicial process.",
    expertisePoints: [
      "General Civil Litigation",
      "Criminal Defense Advocacy",
      "Constitutional & Judicial Review",
      "Public Procurement Disputes",
      "Administrative Law Matters"
    ]
  },
  {
    slug: "employment-labour-law",
    title: "Employment & Labour Relations Law",
    description: "Navigating complex workplace regulations and labour disputes with expert precision.",
    icon: "users",
    image: "https://images.unsplash.com/photo-1521791136066-69a63e920939?w=1600&q=80",
    fullDescription: "We provide comprehensive legal support in employment matters, ensuring compliance with the Employment Act and Labour Relations Act. From contract drafting to dispute resolution at the ELRC, we protect the interests of both employers and employees.",
    expertisePoints: [
      "Labour Dispute Resolution",
      "Employment Contract Drafting",
      "HR Policy & Compliance Audits",
      "Workplace Misconduct & Disciplinaries",
      "Collective Bargaining Agreements"
    ]
  },
  {
    slug: "family-law-probate",
    title: "Family Law, Probate & Administration",
    description: "Compassionate legal support for family matters, probate, and estate administration.",
    icon: "users",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80",
    fullDescription: "We handle sensitive family matters with maturity and professional care. Our expertise covers divorce, child custody, adoption, and the complexities of the Law of Succession Act, ensuring your family's future and legacy are secured.",
    expertisePoints: [
      "Probate & Administration",
      "Succession Planning & Wills",
      "Divorce & Matrimonial Property",
      "Adoption & Child Custody",
      "Estate Management"
    ]
  },
  {
    slug: "dispute-resolution-adr",
    title: "Dispute Resolution (ADR)",
    description: "Alternative strategies for settling disputes through arbitration and mediation.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80",
    fullDescription: "We prioritize cost-effective and timely conflict resolution. Our team is skilled in Alternative Dispute Resolution (ADR), including mediation and arbitration, providing a path to settlement without the need for prolonged courtroom litigation.",
    expertisePoints: [
      "Commercial Arbitration",
      "Civil Mediation",
      "Negotiated Settlements",
      "Conflict Management Consultancy",
      "Tribunal Representation"
    ]
  },
  {
    slug: "insurance-law",
    title: "Insurance Law",
    description: "Expert advice and litigation support for insurance claims and liability matters.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
    fullDescription: "CNK Law provides specialized legal services to the insurance sector, handling claims defense, policy interpretation, and regulatory compliance. We protect insurers and the insured through robust legal strategies and meticulous analysis.",
    expertisePoints: [
      "Insurance Claim Defence",
      "Policy Advisory & Drafting",
      "Subrogation Claims",
      "Liability Assessment",
      "Insurance Regulatory Compliance"
    ]
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property Law",
    description: "Protecting your innovation through trademark, patent, and copyright registration.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80",
    fullDescription: "In the digital age, protecting your ideas is paramount. We assist clients in registering and defending trademarks, copyrights, and patents, ensuring their intellectual assets are legally protected and commercially leveraged.",
    expertisePoints: [
      "Trademark & Patent Registration",
      "Copyright Protection",
      "IP Infringement Litigation",
      "Licensing & Franchise Agreements",
      "Industrial Design Protection"
    ]
  },
  {
    slug: "banking-finance-law",
    title: "Banking & Finance Law",
    description: "Providing legal support for financial institutions in complex banking transactions.",
    icon: "briefcase",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1600&q=80",
    fullDescription: "We represent leading financial institutions in perfection of securities, debt recovery, and regulatory compliance. Our expertise ensures that financial transactions are legally sound and protected against unforeseen liabilities.",
    expertisePoints: [
      "Perfection of Securities",
      "Debt Recovery Strategies",
      "Regulatory Compliance Audits",
      "Lending & Finance Advisory",
      "Banking Litigation Support"
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "1",
    slug: "catherine-n-karanja",
    name: "Catherine Nyambura Karanja (Mrs)",
    title: "Managing Partner",
    category: "Partner",
    bio: "Mrs. Catherine Nyambura Karanja is an eminent legal practitioner with over 30 years of distinguished experience in Kenyan Jurisprudence. As the Managing Partner, she specializes in Conveyancing, Land Law, and Corporate Governance. Her unique expertise is backed by a former tenure as a Senior Registrar of Titles at the Ministry of Lands (16 years), and she holds an International Diploma in Land Information Systems from Sweden. She is an expert in the 2012 Land Acts, Stamp Duty procedures, and comprehensive land department management. Catherine has been in private legal practice for over 10 years and formed the firm of C.N. Karanja & Associates Advocates in 2016.",
    image: "/Staff/optimized/Catherine2.jpg",
    objectPosition: "object-center",
    specializations: ["Conveyancing", "Land Law", "Company Law", "Property Law"],
    experience: "30+ Years",
  },
  {
    id: "2",
    slug: "marvin-mucheru-mwirikia",
    name: "Marvin Mucheru Mwirikia",
    title: "Associate",
    category: "Associate",
    bio: "Mr. Marvin Mucheru Mwirikia is a dynamic legal professional committed to excellence in advocacy. With over 5 years of post-admission experience, he focuses on Conveyance, Civil Litigation, Probate & Succession Law, Debt Collection, Commercial Law, Company Law, Intellectual Property Law, and Employment Labour Law. Marvin holds an LLB (Hons) from Mount Kenya University and a Diploma in Advocacy from the Kenya School of Law. He is an Active Member of the Law Society of Kenya (LSK).",
    image: "/Staff/optimized/Marvin.jpg",
    objectPosition: "object-top",
    specializations: ["Conveyance", "Civil Litigation", "Probate & Succession", "Commercial Law"],
    experience: "5 Years",
  },
  {
    id: "3",
    slug: "austin-muchoti-anyenzi",
    name: "Austin Muchoti Anyenzi",
    title: "Associate",
    category: "Associate",
    bio: "Mr. Austin Muchoti Anyenzi is a dedicated Associate with over 5 years of experience in Legal Practice. He specializes in Conveyance, Civil Litigation, Probate & Succession Law, Debt Collection, Commercial Law, Company Law, Intellectual Property Law, and Employment Labour Law. Austin holds an LLB (Hons) from Moi University and a Diploma in Advocacy from the Kenya School of Law. He is an Active Member of the Law Society of Kenya (LSK).",
    specializations: ["Conveyancing", "Civil Litigation", "Commercial Law", "IP Law"],
    experience: "5 Years",
  },
  {
    id: "4",
    name: "Ann Wanjiku",
    title: "Legal Secretary & Admin Assistant",
    category: "Support Staff",
    bio: "Ann Wanjiku serves as the Legal Secretary and Administrative Assistant in the Litigation and Commercial department. She is a trained secretary with extensive experience in leading civil engineering and legal firms, ensuring administrative efficiency and professional case management.",
    shortBio: "Ensuring administrative precision and litigation support with a focus on case management and judicial filings.",
    image: "/Staff/optimized/AnnWanjiku.jpg",
    objectPosition: "object-top",
  },
  {
    id: "5",
    name: "Lawrence Mungai",
    title: "Firm Accountant",
    category: "Administration",
    bio: "Lawrence Mungai is the Firm's Accountant with wide experience in accounting and auditing. His background includes tenure at Bata Shoe Company and specialized experience as an Accountant/Conveyancing Clerk, ensuring financial integrity and procedural precision in all legal transactions.",
    shortBio: "Managing the firm's financial integrity with specialized experience in accounting, auditing, and conveyancing finance.",
    image: "/Staff/optimized/Mungai.jpg",
    objectPosition: "object-top",
  },
  {
    id: "6",
    name: "Sarah Muigai",
    title: "Conveyancing Clerk & Office Assistant",
    category: "Support Staff",
    bio: "Sarah Muigai is a Conveyancing Clerk and Office Assistant. She provides critical support in property transactions and legal office management, ensuring responsive client service and organizational excellence.",
    shortBio: "Providing essential support in conveyancing transactions and ensuring seamless office operations with a focus on client service.",
    image: "/Staff/optimized/Sarah2.jpg",
    objectPosition: "object-top",
  }
];


export const ATTORNEYS = TEAM.filter(m => m.category === "Partner" || m.category === "Associate") as Attorney[];

export const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Our Team" },
  { href: "/book-appointment", label: "Book Appointment" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
