/**
 * InfoBox Component
 * 
 * Reusable highlighted box for important information
 * Supports accent, warning, and neutral variants
 */

import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InfoBoxProps } from '@/src/shared/types';

export function InfoBox({
  title,
  description,
  variant = 'accent',
  className = ''
}: InfoBoxProps) {
  const styles = {
    accent: {
      bg: 'bg-accent/10',
      border: 'border-accent',
      text: 'text-accent',
    },
    warning: {
      bg: 'bg-warning/10',
      border: 'border-warning',
      text: 'text-warning',
    },
    neutral: {
      bg: 'bg-neutral-bg',
      border: 'border-accent',
      text: 'text-accent',
    },
  };

  const style = styles[variant];

  return (
    <div className={`${style.bg} border-l-4 ${style.border} p-6 space-y-4 ${className}`}>
      <H3 className={`${style.text} font-mono`}>{title}</H3>
      <BodyText className="font-mono text-sm">
        {description}
      </BodyText>
    </div>
  );
}