import React from 'react';

export interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message }: LoadingStateProps) {
  return (
    <div className="loadingstate-component surface-paper text-body">
      <p>{message || "LoadingState active"}</p>
    </div>
  );
}
