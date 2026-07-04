'use client';
import React, { useState } from 'react';
import { SectionContent } from '@/lib/content/types';

type FormField = {
 name: string;
 label: string;
 placeholder: string;
 helperText: string;
 requiredError: string;
 invalidError?: string;
 softWarning?: string;
 options?: string[];
};

export function ContactForm({ data }: { data?: SectionContent }) {
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSuccess, setIsSuccess] = useState(false);
 const [isError, setIsError] = useState(false);
 const [errors, setErrors] = useState<Record<string, string>>({});
 const [formData, setFormData] = useState<Record<string, string>>({});

 if (!data) return null;

 const features = (data.features || []) as FormField[];
 const notes = data.internalNotes || [];

 const getNote = (key: string) => {
 const note = notes.find(n => n.startsWith(`${key}:`));
 return note ? note.replace(`${key}:`, '').trim() : '';
 };

 const validate = () => {
 const newErrors: Record<string, string> = {};
 let isValid = true;

 features.forEach(f => {
 const val = formData[f.name];
 if (!val || val.trim() === '') {
 newErrors[f.name] = f.requiredError;
 isValid = false;
 } else if (f.name === 'workEmail') {
 const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
 if (!emailRegex.test(val)) {
 newErrors[f.name] = f.invalidError || f.requiredError;
 isValid = false;
 }
 }
 });

 if (!formData['consent']) {
 newErrors['consent'] = getNote('Missing consent error');
 isValid = false;
 }

 setErrors(newErrors);
 return isValid;
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (validate()) {
 setIsSubmitting(true);
 setIsError(false);
 // Fake submission delay
 setTimeout(() => {
 setIsSubmitting(false);
 setIsSuccess(true);
 }, 1500);
 } else {
 setIsError(true);
 }
 };

 if (isSuccess) {
 return (
 <section id="contact-form"className="section-aroneu">
 <div className="container-aroneu max-w-3xl mx-auto">
 <div className="surface-sand border border-zinc-200 rounded-3xl p-12 text-center shadow-sm">
 <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
 <svg className="w-8 h-8 text-primary-600"fill="none"viewBox="0 0 24 24"stroke="currentColor"strokeWidth={2}>
 <path strokeLinecap="round"strokeLinejoin="round"d="M5 13l4 4L19 7"/>
 </svg>
 </div>
 <h2 className="text-h2 mb-4">{getNote('Success heading')}</h2>
 <p className="text-body text-zinc-600 mb-8 max-w-lg mx-auto">{getNote('Success body')}</p>
 <a href="#scheduler"className="btn-primary-aroneu inline-block">
 {getNote('Success CTA')}
 </a>
 </div>
 </div>
 </section>
 );
 }

 return (
 <section id="contact-form"className="section-aroneu">
 <div className="container-aroneu max-w-3xl mx-auto">
 <div className="mb-12 text-center">
 {data.heading && <h2 className="text-h2 mb-4">{data.heading}</h2>}
 {data.subcopy && <p className="text-body text-zinc-600">{data.subcopy}</p>}
 </div>

 <form onSubmit={handleSubmit} className="border border-zinc-200 rounded-3xl p-8 lg:p-12 shadow-sm relative">
 
 {isError && Object.keys(errors).length > 0 && (
 <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start"role="alert">
 <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"fill="none"viewBox="0 0 24 24"stroke="currentColor">
 <path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
 </svg>
 <div>
 <p className="text-sm font-medium text-red-800">
 {getNote('Top-of-form error summary')}
 </p>
 </div>
 </div>
 )}

 <div className="space-y-6">
 {features.map((field) => (
 <div key={field.name} className="flex flex-col">
 <label htmlFor={field.name} className="text-sm font-medium text-zinc-900 mb-1.5">
 {field.label}
 </label>
 
 {field.options ? (
 <select
 id={field.name}
 className={`surface-sand border ${errors[field.name] ? 'border-red-500' : 'border-zinc-200 '} text-zinc-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 transition-colors`}
 value={formData[field.name] || ''}
 onChange={(e) => {
 setFormData({...formData, [field.name]: e.target.value});
 if(errors[field.name]) setErrors({...errors, [field.name]: ''});
 }}
 aria-invalid={errors[field.name] ?"true":"false"}
 >
 <option value=""disabled>{field.placeholder}</option>
 {field.options.map((opt) => (
 <option key={opt} value={opt}>{opt}</option>
 ))}
 </select>
 ) : field.name === 'message' ? (
 <textarea
 id={field.name}
 rows={4}
 className={`surface-sand border ${errors[field.name] ? 'border-red-500' : 'border-zinc-200 '} text-zinc-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 transition-colors resize-none`}
 placeholder={field.placeholder}
 value={formData[field.name] || ''}
 onChange={(e) => {
 setFormData({...formData, [field.name]: e.target.value});
 if(errors[field.name]) setErrors({...errors, [field.name]: ''});
 }}
 aria-invalid={errors[field.name] ?"true":"false"}
 />
 ) : (
 <input
 type={field.name === 'workEmail' ? 'email' : 'text'}
 id={field.name}
 className={`surface-sand border ${errors[field.name] ? 'border-red-500' : 'border-zinc-200 '} text-zinc-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 transition-colors`}
 placeholder={field.placeholder}
 value={formData[field.name] || ''}
 onChange={(e) => {
 setFormData({...formData, [field.name]: e.target.value});
 if(errors[field.name]) setErrors({...errors, [field.name]: ''});
 }}
 aria-invalid={errors[field.name] ?"true":"false"}
 />
 )}
 
 <div className="mt-1.5 flex items-center justify-between">
 <p className="text-xs text-zinc-500">{field.helperText}</p>
 {errors[field.name] && (
 <p className="text-xs font-medium text-red-600"role="alert">{errors[field.name]}</p>
 )}
 </div>
 </div>
 ))}

 <div className="pt-4 border-t border-zinc-100">
 <div className="flex items-start mb-2">
 <div className="flex items-center h-5">
 <input
 id="consent"
 type="checkbox"
 className={`w-4 h-4 rounded ${errors['consent'] ? 'border-red-500 text-red-600' : 'border-zinc-300 text-primary-600'} surface-sand focus:ring-primary-500`}
 checked={formData['consent'] === 'true'}
 onChange={(e) => {
 setFormData({...formData, consent: e.target.checked ? 'true' : ''});
 if(errors['consent']) setErrors({...errors, consent: ''});
 }}
 />
 </div>
 <label htmlFor="consent"className="ml-3 text-sm font-medium text-zinc-900">
 {getNote('Consent label')}
 </label>
 </div>
 <p className="text-xs text-zinc-500 ml-7 mb-1">{getNote('Consent helper')}</p>
 {errors['consent'] && (
 <p className="text-xs font-medium text-red-600 ml-7"role="alert">{errors['consent']}</p>
 )}
 </div>

 <div className="pt-6">
 <button
 type="submit"
 disabled={isSubmitting}
 className={`w-full sm:w-auto btn-primary-aroneu flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
 >
 {isSubmitting ? (
 <>
 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24">
 <circle className="opacity-25"cx="12"cy="12"r="10"stroke="currentColor"strokeWidth="4"></circle>
 <path className="opacity-75"fill="currentColor"d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
 </svg>
 {getNote('Loading state')}
 </>
 ) : (
 getNote('Submit button')
 )}
 </button>
 </div>
 
 </div>
 </form>
 </div>
 </section>
 );
}
