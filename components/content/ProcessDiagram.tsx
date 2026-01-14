/**
 * ProcessDiagram Component
 * 
 * A schematic pipeline diagram component that displays stages with connectors.
 * Uses monospace typography for technical elements as per institutional design.
 */

import React from 'react';
import { colors, typography, spacing } from '@/lib/design-system';

interface ProcessDiagramProps {
  stages: string[];
  connector?: string;
  className?: string;
}

export const ProcessDiagram: React.FC<ProcessDiagramProps> = ({
  stages,
  connector = '→',
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto px-4">
        {stages.map((stage, index) => (
          <React.Fragment key={index}>
            {/* Stage box */}
            <div 
              className="flex-shrink-0 px-4 py-3 border border-primary bg-background"
              style={{
                fontFamily: typography.fontFamily.mono.join(', '),
                fontSize: typography.scale.body.fontSize,
                fontWeight: typography.fontWeight.medium,
                color: colors.primary,
                backgroundColor: colors.background,
                borderColor: colors.primary,
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
            >
              {stage}
            </div>
            
            {/* Connector arrow (except after last stage) */}
            {index < stages.length - 1 && (
              <div 
                className="flex-shrink-0 text-primary"
                style={{
                  fontFamily: typography.fontFamily.mono.join(', '),
                  fontSize: typography.scale.h3.fontSize,
                  fontWeight: typography.fontWeight.regular,
                  color: colors.primary,
                }}
                aria-hidden="true"
              >
                {connector}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProcessDiagram;