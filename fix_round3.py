import os

def replace_in_file(filepath, old, new):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if old in content:
        content = content.replace(old, new)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Fixed ' + filepath)
    else:
        print('Could not find string in ' + filepath)

replace_in_file(
    r'src\components\sections\ClosingCTA.tsx',
    '<p className={	ext-body mb-10 }>{data.body}</p>',
    '<p className={	ext-body mb-10 mx-auto }>{data.body}</p>'
)
