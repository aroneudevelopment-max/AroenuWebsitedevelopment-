import React from 'react';

export interface SubmitButtonProps {
  children?: React.ReactNode;
  id?: string;
  label?: string;
  error?: string;
}

export function SubmitButton(props: SubmitButtonProps) {
  return (
    <div className="submitbutton-component">
      {props.children}
    </div>
  );
}
