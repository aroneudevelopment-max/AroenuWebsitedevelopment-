import React from 'react';

export interface SelectProps {
  id: string; name: string; options: {value: string; label: string}[]; required?: boolean;
}

export function Select(props: SelectProps) {
  return (
    <select className="select-component">
      {/* TODO: Implement Select UI using tokens */}
      
      
      
    </select>
  );
}
