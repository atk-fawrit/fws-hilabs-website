import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

interface ProgramCategoryProps {
  number: string;
  title: string;
  duration: string;
  prerequisites: string;
  skills: string[];
  description: string;
}

export function ProgramCategory({
  number,
  title,
  duration,
  prerequisites,
  skills,
  description,
}: ProgramCategoryProps) {
  return (
    <div className="space-y-4">
      <H3 className="font-mono">{number}. {title}</H3>
      <div className="pl-6 space-y-4">
        <BodyText>
          <strong>Duration:</strong> {duration} | <strong>Prerequisites:</strong> {prerequisites}
        </BodyText>
        
        <div className="space-y-3">
          <BodyText><strong>Skill Coverage:</strong></BodyText>
          <ul className="list-disc pl-6 space-y-2">
            {skills.map((skill, index) => (
              <li key={index}><BodyText>{skill}</BodyText></li>
            ))}
          </ul>
        </div>
        
        <BodyText className="text-sm text-secondary">
          {description}
        </BodyText>
      </div>
    </div>
  );
}