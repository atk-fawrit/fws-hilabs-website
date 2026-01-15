/**
 * DeploymentModel Component
 * 
 * Displays a deployment model with characteristics, protocol, and requirements
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { DeploymentModelProps } from '../../types';

export const DeploymentModel: React.FC<DeploymentModelProps> = ({
  number,
  title,
  description,
  characteristics,
  protocol,
  requirements,
}) => {
  return (
    <div className="space-y-4">
      <H3 className="font-mono">{number}. {title}</H3>
      <div className="pl-6 space-y-4">
        <BodyText>{description}</BodyText>
        
        <div className="space-y-3">
          <BodyText><strong>Model Characteristics:</strong></BodyText>
          <ul className="list-disc pl-6 space-y-2">
            {characteristics.map((item, index) => (
              <li key={index}><BodyText>{item}</BodyText></li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 border-l-2 border-secondary">
          <BodyText className="font-mono text-sm">
            {protocol}
          </BodyText>
        </div>
        
        <div className="space-y-3">
          <BodyText><strong>{number === '01' ? 'Organizational Requirements:' : number === '02' ? 'Partner Qualifications:' : 'Client Requirements:'}</strong></BodyText>
          <ul className="list-disc pl-6 space-y-2">
            {requirements.map((item, index) => (
              <li key={index}><BodyText>{item}</BodyText></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
