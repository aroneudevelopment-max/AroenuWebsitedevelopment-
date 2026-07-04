import React from 'react';

export interface ErrorStateProps {
  message?: string;
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="errorstate-component surface-paper text-body">
      <p>{message || "ErrorState active"}</p>
    </div>
  );
}
