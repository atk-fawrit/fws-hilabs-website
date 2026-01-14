import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

interface DeploymentModelProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  suitability: string;
}

export function DeploymentModel({
  number,
  title,
  description,
  features,
  suitability,
}: DeploymentModelProps) {
  return (
    <div className="space-y-4">
      <H3 className="font-mono">{number}. {title}</H3>
      <div className="pl-6 space-y-4">
        <BodyText>{description}</BodyText>
        
        <div className="space-y-3">
          <BodyText><strong>Model Features:</strong></BodyText>
          <ul className="list-disc pl-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index}><BodyText>{feature}</BodyText></li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 border-l-2 border-secondary">
          <BodyText className="font-mono text-sm">
            SUITABILITY: {suitability}
          </BodyText>
        </div>
      </div>
    </div>
  );
}