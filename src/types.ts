export interface Contact {
  email: string;
  cv: string;
  googleScholar: string;
  linkedin: string;
  github: string;
  twitter: string;
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  link: string;
}

export interface Award {
  name: string;
  year: string;
  link?: string;
}

export interface NewsItem {
  date: string;
  title: string;
  link?: string;
}

export interface PortfolioData {
  name: string;
  profileImage: string;
  title: string;
  university: string;
  about: string;
  researchInterests: string[];
  experience: Experience[];
  publications: Publication[];
  awards: Award[];
  news: NewsItem[];
  contact: Contact;
}