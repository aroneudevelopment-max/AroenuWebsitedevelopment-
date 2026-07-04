import React from 'react';

export interface FieldLabelProps {
  children?: React.ReactNode;
  id?: string;
  label?: string;
  error?: string;
}

export function FieldLabel(props: FieldLabelProps) {
  return (
    <div className="fieldlabel-component">
      {props.children}
    </div>
  );
}
