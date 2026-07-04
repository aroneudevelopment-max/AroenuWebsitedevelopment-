import React from 'react';

export interface FieldHelpProps {
  children?: React.ReactNode;
  id?: string;
  label?: string;
  error?: string;
}

export function FieldHelp(props: FieldHelpProps) {
  return (
    <div className="fieldhelp-component">
      {props.children}
    </div>
  );
}
