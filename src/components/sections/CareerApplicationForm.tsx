'use client';

import React, { useState } from 'react';

type CareerFieldContent = {
 label: string;
 placeholder: string;
 helper: string;
};

type CareerFieldKey =
 'fullName' |
 'email' |
 'phone' |
 'linkedIn' |
 'portfolio' |
 'location' |
 'candidateRole' |
 'experience' |
 'cv' |
 'message';

type CareerFormContent = {
 fields: Partial<Record<CareerFieldKey, CareerFieldContent>>;
 consentText: string;
 submitButton: string;
 successState: string;
 failureState: string;
};

export function CareerApplicationForm({ content, roleSlug }: { content: CareerFormContent, roleSlug: string }) {
 const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
 const [file, setFile] = useState<File | null>(null);
 const [fileError, setFileError] = useState('');
 const [serverError, setServerError] = useState('');

 const acceptedFileTypes = '.pdf,.doc,.docx';
 const allowedTypes = [
 'application/pdf',
 'application/msword',
 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
 ];
 const allowedExtensions = ['.pdf', '.doc', '.docx'];

  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      processFile(droppedFile);
    }
  };

  const processFile = (selected: File) => {
    setFileError('');
    setServerError('');

    const normalizedName = selected.name.toLowerCase();
    const hasAllowedExtension = allowedExtensions.some((extension) => normalizedName.endsWith(extension));
    if (!allowedTypes.includes(selected.type) && !hasAllowedExtension) {
      setFileError('Upload a PDF or Word file.');
      setFile(null);
      return;
    }

    if (selected.size > 10 * 1024 * 1024) {
      setFileError('Files must be under 10 MB.');
      setFile(null);
      return;
    }

    setFile(selected);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      processFile(selected);
    } else {
      setFile(null);
    }
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('submitting');
  
  try {
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    if (file) {
      formData.set('cv', file);
    }
    
    const response = await fetch('/api/careers/apply', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    setStatus('success');
    formElement.reset();
    setFile(null);
  } catch (error) {
    console.error(error);
    setStatus('error');
  }
  };

 const fieldClasses =
 'mt-2 block w-full rounded-lg border border-aroneu-neutral-300 px-4 py-3 text-body transition-colors focus:border-aroneu-neutral-900 focus:outline-none focus:ring-1 focus:ring-aroneu-neutral-900';

 const textFields: Array<{
 key: CareerFieldKey;
 type: 'text' | 'email' | 'tel' | 'url';
 required?: boolean;
 }> = [
 { key: 'fullName', type: 'text', required: true },
 { key: 'email', type: 'email', required: true },
 { key: 'phone', type: 'tel' },
 { key: 'linkedIn', type: 'url' },
 { key: 'portfolio', type: 'url' },
 { key: 'location', type: 'text', required: true },
 { key: 'candidateRole', type: 'text', required: true },
 { key: 'experience', type: 'text', required: true },
 ];

 return (
 <form onSubmit={handleSubmit} className="space-y-8 rounded-3xl bg-aroneu-neutral-50 p-6 sm:p-10">
 <div className="space-y-6">
 {(() => {
 const renderedFields = textFields.filter((field) => content.fields[field.key]);
 const rows: CareerFieldKey[][] = [];

 for (let index = 0; index < renderedFields.length; index += 2) {
 rows.push(renderedFields.slice(index, index + 2).map((field) => field.key));
 }

 return rows.map((row) => (
 <div
 key={row.join('-')}
 className={row.length > 1 ? 'grid gap-6 sm:grid-cols-2' : ''}
 >
 {row.map((fieldKey) => {
 const field = content.fields[fieldKey];
 const config = textFields.find((item) => item.key === fieldKey);

 if (!field || !config) {
 return null;
 }

 return (
 <div key={fieldKey}>
 <label htmlFor={fieldKey}className="block text-caption font-medium text-aroneu-neutral-900">
 {field.label}
 </label>
 <input
 id={fieldKey}
 name={fieldKey}
 type={config.type}
 required={config.required}
 placeholder={field.placeholder}
 className={fieldClasses}
 />
 <p className="mt-2 text-caption text-aroneu-neutral-500">{field.helper}</p>
 </div>
 );
 })}
 </div>
 ));
 })()}

 {content.fields.cv ? (
 <div>
 <label className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.cv.label}
 </label>
 <div className="mt-2 flex flex-col items-center justify-center w-full">
 <label 
   htmlFor="cv"
   onDragOver={handleDragOver}
   onDragLeave={handleDragLeave}
   onDrop={handleDrop}
   className={`flex flex-col items-center justify-center w-full py-8 border-2 ${isDragging ? 'border-aroneu-neutral-900 bg-aroneu-neutral-100' : 'border-aroneu-neutral-300 border-dashed hover:bg-aroneu-neutral-50'} rounded-lg cursor-pointer focus-within:ring-2 focus-within:ring-aroneu-neutral-900 transition-colors`}
 >
 <div className="flex flex-col items-center justify-center text-center px-4">
 <svg className="w-8 h-8 mb-3 text-aroneu-neutral-400"aria-hidden="true"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 20 16">
 <path stroke="currentColor"strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
 </svg>
 <p className="text-body text-aroneu-neutral-600 font-medium mb-2">
 {file ? file.name : content.fields.cv.placeholder}
 </p>
 {!file && (
   <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 transition-colors mb-2">
     Browse Files
   </span>
 )}
 <p className="text-caption text-aroneu-neutral-500">{content.fields.cv.helper}</p>
 </div>
 <input id="cv"name="cv"type="file"className="sr-only"onChange={handleFileChange} accept={acceptedFileTypes}/>
 </label>
 </div>
 {fileError && <p className="mt-2 text-caption text-red-600">{fileError}</p>}
 </div>
 ) : null}

 {content.fields.message ? (
 <div>
 <label htmlFor="message"className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.message.label}
 </label>
 <textarea
 id="message"
 name="message"
 rows={4}
 placeholder={content.fields.message.placeholder}
 className={fieldClasses}
 />
 <p className="mt-2 text-caption text-aroneu-neutral-500">{content.fields.message.helper}</p>
 </div>
 ) : null}

 <div className="flex items-start">
 <div className="flex h-6 items-center">
 <input
 id="consent"
 name="consent"
 type="checkbox"
 required
 className="h-5 w-5 rounded border-aroneu-neutral-300 text-aroneu-neutral-900 focus:ring-aroneu-neutral-900 cursor-pointer"
 />
 </div>
 <div className="ml-3 text-caption">
 <label htmlFor="consent"className="text-aroneu-neutral-600 cursor-pointer">
 {content.consentText}
 </label>
 </div>
 </div>
 </div>

 <div>
  {status === 'error' && (
  <div className="mb-6 rounded-lg bg-red-50 p-4 text-caption text-red-900">
  {content.failureState || 'Failed to submit application. Please try again.'}
  </div>
  )}
  {status === 'success' && (
  <div className="mb-6 rounded-lg bg-green-50 p-4 text-caption text-green-900">
  {content.successState || 'Application submitted successfully. We will be in touch.'}
  </div>
  )}
 <button
 type="submit"
 disabled={status === 'submitting' || !!fileError}
 className="btn-primary-aroneu w-full sm:w-auto"
 >
 {status === 'submitting' ? 'Sending your application.' : content.submitButton}
 </button>
 </div>
 </form>
 );
}
