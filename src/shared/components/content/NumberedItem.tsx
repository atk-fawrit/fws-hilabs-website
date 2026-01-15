/**
 * NumberedItem Component
 * 
 * Reusable component for numbered items with title, description, and optional list
 */

import { BodyText } from '@/src/shared/components/typography';
import { NumberedItemProps } from '@/src/shared/types';

export function NumberedItem({
  number,
  title,
  description,
  items,
  className = '',
}: NumberedItemProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <BodyText><strong>{number}. {title}</strong></BodyText>
      <div className="pl-4 space-y-3">
        <BodyText>{description}</BodyText>
        {items && items.length > 0 && (
          <ul className="list-disc pl-6 space-y-2">
            {items.map((item, index) => (
              <li key={index}><BodyText>{item}</BodyText></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}