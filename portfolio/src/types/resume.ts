// Type definitions for resume data
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  clients?: Array<{
    name: string;
    projects: string[];
  }>;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
  };
  summary: string;
  experience: ExperienceItem[];
  skills: {
    frontend: string[];
    backend: string[];
    cloud: string[];
  };
  education: Array<{
    institution: string;
    degree: string;
    period: string;
  }>;
  certifications: string[];
}
