import React from 'react';

export interface FormSummaryProps {
  children?: React.ReactNode;
  id?: string;
  label?: string;
  error?: string;
}

export function FormSummary(props: FormSummaryProps) {
  return (
    <div className="formsummary-component">
      {props.children}
    </div>
  );
}
