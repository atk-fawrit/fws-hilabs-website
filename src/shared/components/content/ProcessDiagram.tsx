/**
 * ProcessDiagram Component
 * 
 * A schematic pipeline diagram component that displays stages with connectors.
 * Uses monospace typography for technical elements as per institutional design.
 */

import React from 'react';
import { ProcessDiagramProps } from '@/src/shared/types';

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
              className="flex-shrink-0 px-4 py-3 border border-primary bg-background font-mono text-base font-medium text-primary"
            >
              {stage}
            </div>
            
            {/* Connector arrow (except after last stage) */}
            {index < stages.length - 1 && (
              <div 
                className="flex-shrink-0 text-primary font-mono text-2xl font-regular"
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