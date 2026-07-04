import React from 'react';

export interface NoResultsStateProps {
  message?: string;
}

export function NoResultsState({ message }: NoResultsStateProps) {
  return (
    <div className="noresultsstate-component surface-paper text-body">
      <p>{message || "NoResultsState active"}</p>
    </div>
  );
}
