import os

with open(r'src\styles\tokens.css', 'r', encoding='utf-8') as f:
    tokens_content = f.read()

with open(r'src\app\globals.css', 'r', encoding='utf-8') as f:
    globals_content = f.read()

globals_content = globals_content.replace('@import "../styles/tokens.css";', tokens_content)

with open(r'src\app\globals.css', 'w', encoding='utf-8') as f:
    f.write(globals_content)

with open(r'src\app\layout.tsx', 'r', encoding='utf-8') as f:
    layout_content = f.read()

layout_content = layout_content.replace(' bg-white', '')

with open(r'src\app\layout.tsx', 'w', encoding='utf-8') as f:
    f.write(layout_content)
