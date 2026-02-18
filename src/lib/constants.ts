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
    description: "Expertise in bankruptcy, receivership, business registration, and comprehensive company law matters.",
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
    slug: "conveyance-land-law",
    title: "Conveyancing & Land Law",
    description: "Specialized services in land registration, property transactions, and complex land law matters.",
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
    slug: "banking-financial-law",
    title: "Banking & Financial Law",
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
  },
  {
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    description: "Skilled representation in civil litigation and alternative dispute resolution (ADR).",
    icon: "gavel",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
    fullDescription: "Our litigation team provides vigorous advocacy in Kenyan courts. We prioritize Alternative Dispute Resolution (ADR) including mediation and arbitration to achieve cost-effective and timely results for our clients.",
    expertisePoints: [
      "Civil & Commercial Litigation",
      "Arbitration & Mediation (ADR)",
      "Constitutional & Judicial Review",
      "Employment & Labor Disputes",
      "Insurance Claim Defence"
    ]
  },
  {
    slug: "family-law-succession",
    title: "Family Law & Succession",
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
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "1",
    slug: "catherine-n-karanja",
    name: "Catherine Nyambura Karanja (Mrs)",
    title: "Senior Partner",
    category: "Partner",
    bio: "Mrs. Catherine Nyambura Karanja is an eminent legal practitioner with over 25 years of distinguished experience in Kenyan Jurisprudence. As the Senior Partner, she specializes in Conveyancing, Land Law, and Corporate Governance. Her unique expertise is backed by a former tenure as a Senior Registrar of Titles at the Ministry of Lands, and she holds an International Diploma in Land Information Systems from Sweden, making her one of the foremost authorities on land matters in the region.",
    image: "/Staff/optimized/Catherine2.jpg",
    objectPosition: "object-center",
    specializations: ["Conveyancing", "Land Law", "Company Law", "Property Law"],
  },
  {
    id: "2",
    slug: "marvin-mucheru-mwirikia",
    name: "Marvin Mucheru Mwirikia",
    title: "Associate",
    category: "Associate",
    bio: "Mr. Marvin Mucheru Mwirikia is a dynamic legal professional committed to excellence in advocacy. He specializes in Civil Litigation, Probate & Succession, and Intellectual Property Law. Marvin holds an LLB (Hons) from Mount Kenya University and a Diploma in Advocacy from the Kenya School of Law, combining academic rigor with a practical, solution-oriented approach to complex legal disputes.",
    image: "/Staff/optimized/Marvin.jpg",
    objectPosition: "object-top",
    specializations: ["Civil Litigation", "Probate & Succession", "Commercial Law"],
    experience: "5+ Years",
  },
  {
    id: "4",
    name: "Ann Wanjiku",
    title: "Legal Secretary & Litigation Assistant",
    category: "Support Staff",
    bio: "Ann Wanjiku is a highly skilled administrative professional specializing in Litigation and Commercial Law support. With extensive experience across leading civil engineering and legal firms, Ann provides critical support in case management and judicial filings. She is a trained legal secretary with a focus on administrative efficiency and client service.",
    shortBio: "Specializing in litigation support and case management, Ann brings extensive experience from leading legal and engineering firms to ensure precise judicial filings and seamless administrative coordination.",
    image: "/Staff/optimized/AnnWanjiku.jpg",
    objectPosition: "object-top",
  },
  {
    id: "5",
    name: "Lawrence Mungai",
    title: "Senior Accountant & Auditor",
    category: "Administration",
    bio: "Lawrence Mungai oversees the firm's financial integrity and audit compliance. With a background in corporate accounting at Bata Shoe Company and specialized experience in legal auditing and conveyancing finance, Lawrence ensures the firm's financial operations are precise and transparent.",
    shortBio: "Overseeing our financial integrity and audit compliance, Lawrence combines corporate accounting expertise with specialized knowledge in legal finance and conveyancing transactions.",
    image: "/Staff/optimized/Mungai.jpg",
    objectPosition: "object-top",
  },
  {
    id: "6",
    name: "Sarah Muigai",
    title: "Office Assistant",
    category: "Support Staff",
    bio: "Sarah Muigai provides essential operational support, ensuring the firm remains responsive and organized. Her previous experience in hospitality and legal office management contributes to the professional environment our clients expect.",
    shortBio: "Ensuring our firm runs with clockwork precision, Sarah contributes hospitality-grade client service and strong organizational skills to our daily operations.",
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
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
