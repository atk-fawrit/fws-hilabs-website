/**
 * Admissions Feature Component Types
 * 
 * Type definitions for all admissions page components
 */

export interface SelectionStageProps {
  number: string;
  title: string;
  duration?: string;
  format?: string;
  timeline?: string;
  notification?: string;
  components?: string[];
  structure?: string[];
  factors?: string[];
  evaluationSignals: string;
  className?: string;
}
