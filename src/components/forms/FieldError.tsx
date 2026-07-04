import React from 'react';

export interface FieldErrorProps {
  children?: React.ReactNode;
  id?: string;
  label?: string;
  error?: string;
}

export function FieldError(props: FieldErrorProps) {
  return (
    <div className="fielderror-component">
      {props.children}
    </div>
  );
}
