import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

interface EvidenceCategoryProps {
  number: string;
  title: string;
  description: string;
  metrics: string[];
  publicationCadence: string;
}

export function EvidenceCategory({
  number,
  title,
  description,
  metrics,
  publicationCadence,
}: EvidenceCategoryProps) {
  return (
    <div className="space-y-4">
      <H3 className="font-mono">{number}. {title}</H3>
      <div className="pl-6 space-y-4">
        <BodyText>{description}</BodyText>
        
        <div className="space-y-3">
          <BodyText><strong>Evidence Metrics:</strong></BodyText>
          <ul className="list-disc pl-6 space-y-2">
            {metrics.map((metric, index) => (
              <li key={index}><BodyText>{metric}</BodyText></li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 border-l-2 border-secondary">
          <BodyText className="font-mono text-sm">
            PUBLICATION CADENCE: {publicationCadence}
          </BodyText>
        </div>
      </div>
    </div>
  );
}