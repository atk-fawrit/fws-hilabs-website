/**
 * SelectionStage Component
 * 
 * Displays a selection stage with details and evaluation signals
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { SelectionStageProps } from '../../types';

export const SelectionStage: React.FC<SelectionStageProps> = ({
  number,
  title,
  duration,
  format,
  timeline,
  notification,
  components,
  structure,
  factors,
  evaluationSignals,
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <H3 className="font-mono">{number}. {title}</H3>
      <div className="pl-6 space-y-4">
        {(duration || format || timeline || notification) && (
          <BodyText>
            {duration && <><strong>Duration:</strong> {duration}</>}
            {format && <> | <strong>Format:</strong> {format}</>}
            {timeline && <> | <strong>Timeline:</strong> {timeline}</>}
            {notification && <> | <strong>Notification:</strong> {notification}</>}
          </BodyText>
        )}
        
        {components && components.length > 0 && (
          <div className="space-y-3">
            <BodyText><strong>Assessment Components:</strong></BodyText>
            <ul className="list-disc pl-6 space-y-2">
              {components.map((item, index) => (
                <li key={index}><BodyText>{item}</BodyText></li>
              ))}
            </ul>
          </div>
        )}
        
        {structure && structure.length > 0 && (
          <div className="space-y-3">
            <BodyText><strong>Interview Structure:</strong></BodyText>
            <ul className="list-disc pl-6 space-y-2">
              {structure.map((item, index) => (
                <li key={index}><BodyText>{item}</BodyText></li>
              ))}
            </ul>
          </div>
        )}
        
        {factors && factors.length > 0 && (
          <div className="space-y-3">
            <BodyText><strong>Decision Factors:</strong></BodyText>
            <ul className="list-disc pl-6 space-y-2">
              {factors.map((item, index) => (
                <li key={index}><BodyText>{item}</BodyText></li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="bg-gray-50 p-4 border-l-2 border-secondary">
          <BodyText className="font-mono text-sm">
            {evaluationSignals}
          </BodyText>
        </div>
      </div>
    </div>
  );
};
