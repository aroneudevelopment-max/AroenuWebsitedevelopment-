# Aroneu CMS Field Map

Map frontend content to future CMS fields.

## Required Models

- **siteSettings**: brandLine, entityLine, contactDetails (email, address)
- **page**: route, slug, pageJob, audience, beliefShift, primaryCta, secondaryCta, seo, sections
- **pageSection**: id, component, eyebrow, heading, subcopy, body, ctas, items, faqs, visualSlot
- **cta**: label, href, variant
- **faqItem**: question, answer
- **metric**: value, label, note, sourceStatus
- **visualSlot**: id, purpose, recommendedAssetType, placementNote, required, doNotUse
- **caseStudy**: (fields mapped from insight/case-study schemas)
- **insight**: (fields mapped from insight schema)
- **careerRole**: (fields mapped from job schema)
- **resource**: (fields mapped from resource schema)
- **legalPage**: content, effectiveDate
- **formCopy**: heading, subcopy, fields, submitLabel
- **stateCopy**: heading, subcopy, retryLabel, homeLabel
- **seoFields**: metaTitle, metaDescription, canonicalPath, ogTitle, ogDescription, ogImage, robotsIndex, robotsFollow, schemaType
- **navigationItem**: label, href
- **footerGroup**: companyGroup, capabilityGroup, knowledgeGroup, legalLinks

*Note: Live Sanity credentials are NOT connected in this step. This is purely a frontend-safe content schema.*
