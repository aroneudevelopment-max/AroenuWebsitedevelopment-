import os, re

dir_path = r'src\components\sections'
for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = re.sub(r'section-aroneu([^>]*?)\bpy-\d+', r'section-aroneu\1', content)
            new_content = re.sub(r'section-aroneu([^>]*?)\bpt-\d+', r'section-aroneu\1', new_content)
            new_content = re.sub(r'section-aroneu([^>]*?)\bpb-\d+', r'section-aroneu\1', new_content)
            
            new_content = re.sub(r'\bbg-white\b', '', new_content)
            new_content = re.sub(r'\bbg-zinc-50\b', 'surface-sand', new_content)
            new_content = re.sub(r'\bbg-zinc-900\b', 'surface-ink', new_content)
            new_content = re.sub(r'\bbg-black\b', 'surface-ink', new_content)
            
            new_content = re.sub(r'\btext-black\b', '', new_content)
            
            new_content = re.sub(r' +', ' ', new_content)
            new_content = new_content.replace('" ', '"')
            new_content = new_content.replace(' "', '"')
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Cleaned {file}')
