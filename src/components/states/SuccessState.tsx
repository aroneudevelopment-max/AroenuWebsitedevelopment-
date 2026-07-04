import React from 'react';

export interface SuccessStateProps {
  message?: string;
}

export function SuccessState({ message }: SuccessStateProps) {
  return (
    <div className="successstate-component surface-paper text-body">
      <p>{message || "SuccessState active"}</p>
    </div>
  );
}
