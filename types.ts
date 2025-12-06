import { LucideIcon } from 'lucide-react';

export interface GoalItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MechanismStep {
  id: string;
  title: string;
  period?: string;
  details: string[];
  type: 'process' | 'policy';
}

export interface DirectionItem {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  image: string;
}

export interface ProjectItem {
  title: string;
  status: string;
  description: string;
  features: string[];
  color: string;
  image: string;
}

export interface OrganizationCenter {
  id: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  departments: string[];
  color: string;
}