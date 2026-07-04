import React from 'react';

export interface PendingIntegrationStateProps {
  message?: string;
}

export function PendingIntegrationState({ message }: PendingIntegrationStateProps) {
  return (
    <div className="pendingintegrationstate-component surface-paper text-body">
      <p>{message || "PendingIntegrationState active"}</p>
    </div>
  );
}
