import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

interface TermSectionProps {
  termNumber: string;
  title: string;
  duration: string;
  focus: string;
  objectives: string[];
  evaluationGate: string;
}

export function TermSection({
  termNumber,
  title,
  duration,
  focus,
  objectives,
  evaluationGate,
}: TermSectionProps) {
  return (
    <div className="space-y-4">
      <H3 className="font-mono">TERM {termNumber}: {title}</H3>
      <div className="pl-6 space-y-4">
        <BodyText>
          <strong>Duration:</strong> {duration} | <strong>Focus:</strong> {focus}
        </BodyText>
        
        <div className="space-y-3">
          <BodyText><strong>Learning Objectives:</strong></BodyText>
          <ul className="list-disc pl-6 space-y-2">
            {objectives.map((objective, index) => (
              <li key={index}><BodyText>{objective}</BodyText></li>
            ))}
          </ul>
        </div>
        
        <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
          <BodyText className="font-mono text-sm">
            EVALUATION GATE: {evaluationGate}
          </BodyText>
        </div>
      </div>
    </div>
  );
}