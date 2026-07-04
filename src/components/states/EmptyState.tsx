import React from 'react';

export interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="emptystate-component surface-paper text-body">
      <p>{message || "EmptyState active"}</p>
    </div>
  );
}
