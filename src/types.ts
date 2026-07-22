export interface Treatment {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  indications: string;
  iconName: string;
  popular?: boolean;
}

export interface Differential {
  number: string;
  title: string;
  description: string;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  comment: string;
  rating: number;
  date: string;
  avatarInitials: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  protocolUsed: string;
  focusArea: string;
  timeframe: string;
  highlights: string[];
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}
