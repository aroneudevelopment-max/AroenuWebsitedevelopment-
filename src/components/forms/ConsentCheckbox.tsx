import React from 'react';

export interface ConsentCheckboxProps {
  children?: React.ReactNode;
  id?: string;
  label?: string;
  error?: string;
}

export function ConsentCheckbox(props: ConsentCheckboxProps) {
  return (
    <div className="consentcheckbox-component">
      {props.children}
    </div>
  );
}
