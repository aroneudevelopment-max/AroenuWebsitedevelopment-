import os, re

dir_path = r'src\components\sections'
for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace text-zinc/slate with opacity
            content = re.sub(r'\btext-zinc-600\b', 'opacity-80', content)
            content = re.sub(r'\btext-zinc-500\b', 'opacity-70', content)
            content = re.sub(r'\btext-zinc-400\b', 'opacity-60', content)
            content = re.sub(r'\btext-slate-600\b', 'opacity-80', content)
            content = re.sub(r'\btext-slate-500\b', 'opacity-70', content)
            content = re.sub(r'\btext-gray-600\b', 'opacity-80', content)
            content = re.sub(r'\btext-gray-500\b', 'opacity-70', content)
            
            # Make sure FAQ Section uses surface-ink
            if file == 'FAQSection.tsx':
                if 'section-aroneu surface-ink' not in content:
                    content = content.replace('className="section-aroneu"', 'className="section-aroneu surface-ink"')
            
            # Make sure ProblemList cards use surface-sand
            if file == 'ProblemList.tsx':
                if 'surface-sand' not in content:
                    content = content.replace('bg-white', 'surface-sand')
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

print("Updated text colors and opacities.")
