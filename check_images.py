import os, re

images = set()
for root, _, files in os.walk('src/components/sections'):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                matches = re.findall(r'src=[\"\'\`](/images/[^\"\'\`]+)[\"\'\`]', content)
                for m in matches:
                    images.add(m)

missing = []
for img in images:
    if not os.path.exists('public' + img):
        missing.append(img)

if missing:
    print('Missing images:')
    for m in missing: print(m)
else:
    print('All images found.')
