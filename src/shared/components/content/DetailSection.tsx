/**
 * DetailSection Component
 * 
 * Reusable component for detailed sections with number, title, description, 
 * optional list, and footer note
 */

import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

interface DetailSectionProps {
  number: string;
  title: string;
  description: string;
  listTitle?: string;
  items?: string[];
  footerLabel?: string;
  footerContent: string;
  className?: string;
}

export function DetailSection({
  number,
  title,
  description,
  listTitle,
  items,
  footerLabel,
  footerContent,
  className = '',
}: DetailSectionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <H3 className="font-mono">{number}. {title}</H3>
      <div className="pl-6 space-y-4">
        <BodyText>{description}</BodyText>
        
        {items && items.length > 0 && (
          <div className="space-y-3">
            {listTitle && <BodyText><strong>{listTitle}</strong></BodyText>}
            <ul className="list-disc pl-6 space-y-2">
              {items.map((item, index) => (
                <li key={index}><BodyText>{item}</BodyText></li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="bg-gray-50 p-4 border-l-2 border-secondary">
          <BodyText className="font-mono text-sm">
            {footerLabel && `${footerLabel}: `}{footerContent}
          </BodyText>
        </div>
      </div>
    </div>
  );
}