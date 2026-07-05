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

replace_in_file(r'src\lib\content\pages\insights.ts', 'isPublished: false', 'isPublished: true')
replace_in_file(r'src\components\sections\ProblemList.tsx', '<section className=\"section-aroneu\">', '<section className=\"section-aroneu surface-sand\">')
replace_in_file(r'src\components\sections\ProblemList.tsx', '<p className=\"text-body opacity-80\">{data.body}</p>', '<p className=\"text-body opacity-80 mx-auto\">{data.body}</p>')
replace_in_file(r'src\components\sections\CapabilityCards.tsx', '<p className=\"text-body opacity-80\">{data.body}</p>', '<p className=\"text-body opacity-80 mx-auto\">{data.body}</p>')
replace_in_file(r'src\components\sections\about\AboutLocations.tsx', '<div className=\"flex-1 p-8 border border-zinc-200 rounded-3xl relative z-10 shadow-sm transition-transform hover:-translate-y-1 duration-300\">', '<div className=\"flex-1 p-8 border border-zinc-200 rounded-3xl relative z-10 shadow-sm transition-transform hover:-translate-y-1 duration-300 surface-paper\">')

