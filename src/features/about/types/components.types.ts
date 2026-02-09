/**
 * About Feature Component Types
 * 
 * Type definitions for all about page components
 */

export interface PrincipleItemProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export interface DomainSpecificationProps {
  number: string;
  title: string;
  description: string;
  accountability: string;
  className?: string;
}

export interface RoleSpecificationProps {
  title: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  note?: {
    type: 'authority' | 'scope';
    content: string;
  };
  className?: string;
}

export interface GovernanceItemProps {
  number: string;
  title: string;
  description: string;
  standard: string;
  className?: string;
}

export interface IntegritySectionProps {
  number: string;
  title: string;
  description: string;
  items: string[];
  className?: string;
}
