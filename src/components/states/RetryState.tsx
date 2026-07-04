import React from 'react';

export interface RetryStateProps {
  message?: string;
}

export function RetryState({ message }: RetryStateProps) {
  return (
    <div className="retrystate-component surface-paper text-body">
      <p>{message || "RetryState active"}</p>
    </div>
  );
}
