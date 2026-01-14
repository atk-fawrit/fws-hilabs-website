import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

interface FacilitySectionProps {
  number: string;
  title: string;
  description: string;
  items: string[];
}

export function FacilitySection({
  number,
  title,
  description,
  items,
}: FacilitySectionProps) {
  return (
    <div className="space-y-4">
      <BodyText><strong>{number}. {title}</strong></BodyText>
      <div className="pl-4 space-y-3">
        <BodyText>{description}</BodyText>
        <ul className="list-disc pl-6 space-y-2">
          {items.map((item, index) => (
            <li key={index}><BodyText>{item}</BodyText></li>
          ))}
        </ul>
      </div>
    </div>
  );
}