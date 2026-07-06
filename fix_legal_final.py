import re
import os

files = [
    "src/app/(legal)/privacy/page.tsx",
    "src/app/(legal)/cookie-policy/page.tsx",
    "src/app/(legal)/terms/page.tsx",
    "src/app/(legal)/imprint/page.tsx",
    "src/app/(legal)/data-residency/page.tsx"
]

for file in files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Strip any generic placeholders like [Something]
        content = re.sub(r'\[[a-zA-Z0-9_ \-\.,\(\)]+\]', '', content)
        
        # Clean up double breaks
        content = re.sub(r'<br />\s*<br />', '<br />', content)
        
        # Clean up empty lines
        content = re.sub(r'<strong>Aroneu GmbH</strong>\s*<br />', '<strong>Aroneu GmbH</strong>', content)
        content = re.sub(r'<p className="text-body">\s*</p>', '', content)
        content = re.sub(r'<p className="text-body">\s*<br />\s*</p>', '', content)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("Done")
