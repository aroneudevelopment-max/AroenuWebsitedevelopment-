import re
import os

files = [
    "src/app/(legal)/privacy/page.tsx",
    "src/app/(legal)/cookie-policy/page.tsx",
    "src/app/(legal)/terms/page.tsx",
    "src/app/(legal)/imprint/page.tsx",
    "src/app/(legal)/data-residency/page.tsx"
]

def clean_file(content):
    # Fix the date
    content = content.replace("[Insert date]", "7 July 2026")
    
    # Fix typography
    content = content.replace("font-light", "")
    content = content.replace("text-zinc-800", "")
    content = content.replace("text-zinc-500", "opacity-80")
    content = content.replace("text-display", "text-h1")
    
    # Remove specific placeholders as mentioned
    placeholders = [
        r'\[Registered address\]',
        r'\[Postal code, city, country\]',
        r'\[privacy contact email\]',
        r'\[phone number, if applicable\]',
        r'\[Managing director\(s\)\]',
        r'\[If Aroneu has appointed a Data Protection Officer, insert full DPO contact details here\.\]',
        r'\[If no Data Protection Officer is appointed, insert approved wording confirming that privacy requests can be sent to the privacy contact email above\.\]',
        r'\[Insert final hosting provider, for example Vercel or Netlify\]',
        r'\[Insert retention period for server logs\]',
        r'\[Insert retention period for inbound enquiries and business communication\]',
        r'\[Insert final scheduler provider: Cal\.com, Calendly, meetergo, or other\]',
        r'\[Insert final newsletter or CRM provider\]',
        r'\[Insert retention period for resource-download data\]',
        r'\[Insert approved applicant retention period, for example 3–6 months after the recruitment process ends, unless a longer period is required by law or the applicant has consented to talent-pool retention\.\]',
        r'\[insert cookie settings link or CMP widget location\]',
        r'\[Insert final CMP provider, for example Cookiebot or equivalent\]',
        r'\[Insert final analytics provider: Plausible, Google Analytics 4, or other\]',
        r'\[Insert final provider, for example Cloudflare Turnstile or other\]',
        r'\[Insert final CRM provider: HubSpot, ActiveCampaign, or other\]',
        r'\[Insert final processor and sub-processor table\]',
        r'\[Provider\]',
        r'\[Purpose\]',
        r'\[Country/region\]',
        r'\[DPA, SCCs, adequacy decision, or other safeguard\]',
        r'\[Insert final India access scope, SCC status, TIA status, and approved legal wording\.\]',
        r'\[Insert approved AI Workspace hosting location, processor list, access model, and client-data policy reference\.\]',
        r'\[Insert period\]',
        r'\[Insert approved applicant retention period\]',
        r'\[Insert CMP/CRM retention period\]',
        r'\[Insert statutory retention period\]',
        r'\[Insert approved court / city, if applicable\]',
        r'\[Final jurisdiction wording to be confirmed by legal counsel\.\]',
        r'\[General contact email\]',
        r'\[Insert confirmed hosting location\]',
        r'\[Insert provider\]',
        r'\[Insert answer\]',
        r'\[Insert final India access scope and legal safeguard wording\.\]',
        r'\[Company Name\]',
        r'\[Company Address\]',
        r'\[Email Address\]',
        r'\[Phone Number\]',
        r'\[VAT ID, if applicable\]',
        r'\[Commercial Register Number, if applicable\]',
        r'\[Court of Registration, if applicable\]',
        r'\[Name of the Representative\]',
        r'\[Insert generic provider\]'
    ]

    for p in placeholders:
        content = re.sub(p, '', content)

    # Clean up empty lines or trailing <br /> left by removed placeholders
    content = re.sub(r'<strong>Aroneu GmbH</strong><br />\s*<br />\s*<br />', r'<strong>Aroneu GmbH</strong>', content)
    content = re.sub(r'<strong>Aroneu GmbH</strong><br />\s*<br />\s*', r'<strong>Aroneu GmbH</strong>', content)
    content = re.sub(r'<br />\s*<br />', r'<br />', content)
    content = re.sub(r'Email:\s*<br />\s*Phone:', '', content)
    
    content = content.replace("Email: <br />", "")
    content = content.replace("Phone: ", "")
    content = content.replace("Represented by: ", "")
    content = content.replace("Email: ", "")
    
    # We should just aggressively remove any line matching a completely empty <p> or leftover placeholder text
    content = re.sub(r'<p className="text-body">\s*</p>', '', content)
    content = re.sub(r'<p className="text-body">\s*<br />\s*</p>', '', content)
    content = re.sub(r'<td className="py-3 px-4">\s*</td>', '<td className="py-3 px-4">-</td>', content)
    content = re.sub(r'<p className="text-body opacity-80 mb-8">\s*Last updated:\s*</p>', '<p className="text-body opacity-80 mb-8">Last updated: 7 July 2026</p>', content)
    
    return content

for file in files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = clean_file(content)
        
        # To be safe, remove any leftover empty brackets []
        new_content = re.sub(r'\[\s*\]', '', new_content)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)

print("Cleaned files.")
