'use client';

import React, { useState } from 'react';

export function CareerApplicationForm({ content, roleSlug }: { content: any, roleSlug: string }) {
 const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
 const [file, setFile] = useState<File | null>(null);
 const [fileError, setFileError] = useState('');
 const [serverError, setServerError] = useState('');

 const acceptedFileTypes = '.pdf,.doc,.docx,.jpg,.jpeg,.png,.webp,.heic,.heif';
 const allowedTypes = [
 'application/pdf',
 'application/msword',
 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
 'image/jpeg',
 'image/png',
 'image/webp',
 'image/heic',
 'image/heif',
 ];
 const allowedExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif'];

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 const selected = e.target.files?.[0];
 setFileError('');
 setServerError('');
 
 if (!selected) {
 setFile(null);
 return;
 }

 const normalizedName = selected.name.toLowerCase();
 const hasAllowedExtension = allowedExtensions.some((extension) => normalizedName.endsWith(extension));
 if (!allowedTypes.includes(selected.type) && !hasAllowedExtension) {
 setFileError('Please upload a PDF, Word document, or common image file.');
 setFile(null);
 return;
 }

 if (selected.size > 5 * 1024 * 1024) {
 setFileError('File is too large. Maximum size is 5 MB.');
 setFile(null);
 return;
 }

 setFile(selected);
 };

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 if (!file) {
 setFileError('Please attach your CV before submitting.');
 setStatus('error');
 return;
 }

 setStatus('submitting');
 setServerError('');
 
 const formElement = e.currentTarget as HTMLFormElement;
 const payload = new FormData(formElement);
 payload.set('roleSlug', roleSlug);
 payload.set('consent', payload.get('consent') ? 'true' : '');
 payload.set('cv', file);

 try {
 const response = await fetch('/api/careers/apply', {
 method: 'POST',
 body: payload,
 });

 if (!response.ok) {
 const result = await response.json().catch(() => null);
 throw new Error(result?.error || content.failureState);
 }

 setStatus('success');
 setFile(null);
 formElement.reset();
 } catch (error) {
 setStatus('error');
 setServerError(error instanceof Error ? error.message : content.failureState);
 }
 };

 return (
 <form onSubmit={handleSubmit} className="space-y-8 rounded-3xl bg-aroneu-neutral-50 p-6 sm:p-10">
 <div className="space-y-6">
 <div>
 <label htmlFor="fullName"className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.fullName.label}
 </label>
 <input
 id="fullName"
 name="fullName"
 type="text"
 required
 placeholder={content.fields.fullName.placeholder}
 className="mt-2 block w-full rounded-lg border border-aroneu-neutral-300 px-4 py-3 text-body transition-colors focus:border-aroneu-neutral-900 focus:outline-none focus:ring-1 focus:ring-aroneu-neutral-900"
 />
 <p className="mt-2 text-caption text-aroneu-neutral-500">{content.fields.fullName.helper}</p>
 </div>

 <div className="grid gap-6 sm:grid-cols-2">
 <div>
 <label htmlFor="email"className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.email.label}
 </label>
 <input
 id="email"
 name="email"
 type="email"
 required
 placeholder={content.fields.email.placeholder}
 className="mt-2 block w-full rounded-lg border border-aroneu-neutral-300 px-4 py-3 text-body transition-colors focus:border-aroneu-neutral-900 focus:outline-none focus:ring-1 focus:ring-aroneu-neutral-900"
 />
 <p className="mt-2 text-caption text-aroneu-neutral-500">{content.fields.email.helper}</p>
 </div>
 <div>
 <label htmlFor="phone"className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.phone.label}
 </label>
 <input
 id="phone"
 name="phone"
 type="tel"
 placeholder={content.fields.phone.placeholder}
 className="mt-2 block w-full rounded-lg border border-aroneu-neutral-300 px-4 py-3 text-body transition-colors focus:border-aroneu-neutral-900 focus:outline-none focus:ring-1 focus:ring-aroneu-neutral-900"
 />
 <p className="mt-2 text-caption text-aroneu-neutral-500">{content.fields.phone.helper}</p>
 </div>
 </div>

 <div className="grid gap-6 sm:grid-cols-2">
 <div>
 <label htmlFor="linkedIn"className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.linkedIn.label}
 </label>
 <input
 id="linkedIn"
 name="linkedIn"
 type="url"
 placeholder={content.fields.linkedIn.placeholder}
 className="mt-2 block w-full rounded-lg border border-aroneu-neutral-300 px-4 py-3 text-body transition-colors focus:border-aroneu-neutral-900 focus:outline-none focus:ring-1 focus:ring-aroneu-neutral-900"
 />
 <p className="mt-2 text-caption text-aroneu-neutral-500">{content.fields.linkedIn.helper}</p>
 </div>
 <div>
 <label htmlFor="portfolio"className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.portfolio.label}
 </label>
 <input
 id="portfolio"
 name="portfolio"
 type="url"
 placeholder={content.fields.portfolio.placeholder}
 className="mt-2 block w-full rounded-lg border border-aroneu-neutral-300 px-4 py-3 text-body transition-colors focus:border-aroneu-neutral-900 focus:outline-none focus:ring-1 focus:ring-aroneu-neutral-900"
 />
 <p className="mt-2 text-caption text-aroneu-neutral-500">{content.fields.portfolio.helper}</p>
 </div>
 </div>

 <div>
 <label htmlFor="location"className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.location.label}
 </label>
 <input
 id="location"
 name="location"
 type="text"
 required
 placeholder={content.fields.location.placeholder}
 className="mt-2 block w-full rounded-lg border border-aroneu-neutral-300 px-4 py-3 text-body transition-colors focus:border-aroneu-neutral-900 focus:outline-none focus:ring-1 focus:ring-aroneu-neutral-900"
 />
 <p className="mt-2 text-caption text-aroneu-neutral-500">{content.fields.location.helper}</p>
 </div>

 <div>
 <label htmlFor="cv"className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.cv.label}
 </label>
 <div className="mt-2 flex items-center justify-center w-full">
 <label htmlFor="cv"className="flex flex-col items-center justify-center w-full h-32 border-2 border-aroneu-neutral-300 border-dashed rounded-lg cursor-pointer hover:bg-aroneu-neutral-50 focus-within:ring-2 focus-within:ring-aroneu-neutral-900 transition-colors">
 <div className="flex flex-col items-center justify-center pt-5 pb-6">
 <svg className="w-8 h-8 mb-3 text-aroneu-neutral-400"aria-hidden="true"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 20 16">
 <path stroke="currentColor"strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
 </svg>
 <p className="text-body text-aroneu-neutral-600 font-medium">
 {file ? file.name : content.fields.cv.placeholder}
 </p>
 <p className="text-caption text-aroneu-neutral-500 mt-1">{content.fields.cv.helper}</p>
 </div>
 <input id="cv"name="cv"type="file"className="sr-only"onChange={handleFileChange} accept={acceptedFileTypes}/>
 </label>
 </div>
 {fileError && <p className="mt-2 text-caption text-aroneu-error-600">{fileError}</p>}
 </div>

 <div>
 <label htmlFor="message"className="block text-caption font-medium text-aroneu-neutral-900">
 {content.fields.message.label}
 </label>
 <textarea
 id="message"
 name="message"
 rows={4}
 placeholder={content.fields.message.placeholder}
 className="mt-2 block w-full rounded-lg border border-aroneu-neutral-300 px-4 py-3 text-body transition-colors focus:border-aroneu-neutral-900 focus:outline-none focus:ring-1 focus:ring-aroneu-neutral-900"
 />
 <p className="mt-2 text-caption text-aroneu-neutral-500">{content.fields.message.helper}</p>
 </div>

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
 {serverError || content.failureState}
 </div>
 )}
 <button
 type="submit"
 disabled={status === 'submitting' || !!fileError}
 className="w-full rounded-full bg-aroneu-neutral-900 px-6 py-4 text-label text-white transition-colors hover:bg-aroneu-neutral-800 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aroneu-neutral-900 focus-visible:ring-offset-2"
 >
 {status === 'submitting' ? 'Submitting...' : content.submitButton}
 </button>
 {status === 'success' && (
 <div className="mt-4 rounded-lg bg-green-50 p-4 text-caption text-green-900">
 {content.successState}
 </div>
 )}
 </div>
 </form>
 );
}
