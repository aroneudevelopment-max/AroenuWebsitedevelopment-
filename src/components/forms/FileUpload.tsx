import React from 'react';

export interface FileUploadProps {
  children?: React.ReactNode;
  id?: string;
  label?: string;
  error?: string;
}

export function FileUpload(props: FileUploadProps) {
  return (
    <div className="fileupload-component">
      {props.children}
    </div>
  );
}
