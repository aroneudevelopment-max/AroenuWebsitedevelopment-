import React from 'react';

export interface FormFieldProps {
  children?: React.ReactNode;
  id?: string;
  label?: string;
  error?: string;
}

export function FormField(props: FormFieldProps) {
  return (
    <div className="formfield-component">
      {props.children}
    </div>
  );
}
