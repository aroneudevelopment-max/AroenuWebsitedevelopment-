import React from 'react';

export interface ButtonProps {
  label: string; href?: string; variant?: "primary" | "secondary" | "ghost" | "dark"; disabled?: boolean; loading?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button className="button-component">
      {/* TODO: Implement Button UI using tokens */}
      {props.label}
      
      
    </button>
  );
}
