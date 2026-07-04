import { PageContent } from './types';

export function validatePageContent(page: PageContent) {
  const errors: string[] = [];
  
  if (!page.route) errors.push('Route is missing');
  if (!page.sections) errors.push('Sections array is missing');
  
  page.sections.forEach((sec, idx) => {
    if (!sec.component) errors.push(`Section ${idx} missing component name`);
    if (!sec.id) errors.push(`Section ${idx} missing ID`);
  });

  return errors;
}
