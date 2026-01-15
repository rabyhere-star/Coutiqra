
export enum RoadmapSection {
  BRAND = 'brand',
  FEATURES = 'features',
  TECH = 'tech',
  DESIGN = 'design',
  GTM = 'gtm'
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface RoadmapData {
  id: RoadmapSection;
  title: string;
  icon: string;
  description: string;
}
