import React from 'react';

export interface TextareaProps {
  id: string; name: string; placeholder?: string; required?: boolean; rows?: number; value?: string; onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea(props: TextareaProps) {
  return (
    <textarea className="textarea-component">
      {/* TODO: Implement Textarea UI using tokens */}
      
      
      
    </textarea>
  );
}
