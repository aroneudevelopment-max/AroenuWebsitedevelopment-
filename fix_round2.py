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

# Fix 1: AboutValues.tsx missing mx-auto
replace_in_file(
    r'src\components\sections\about\AboutValues.tsx',
    '<p className=\"text-body opacity-80\">{data.body}</p>',
    '<p className=\"text-body opacity-80 mx-auto\">{data.body}</p>'
)

# Fix 2: FAQSection.tsx - The user said 'this black thing? I cannot see the text'.
# The FAQ section is wrapped in surface-paper in page.tsx, but forces surface-ink inside.
# If surface-ink is used, we need to ensure the text has text-paper (white).
# In FAQSection.tsx:
replace_in_file(
    r'src\components\sections\FAQSection.tsx',
    '<h3 className=\"text-xl font-semibold mb-3\">{faq.question}</h3>',
    '<h3 className=\"text-xl font-semibold mb-3 text-paper\">{faq.question}</h3>'
)
replace_in_file(
    r'src\components\sections\FAQSection.tsx',
    '<p className=\"opacity-80\">{faq.answer}</p>',
    '<p className=\"opacity-80 text-paper\">{faq.answer}</p>'
)
replace_in_file(
    r'src\components\sections\FAQSection.tsx',
    '<h2 className=\"text-h2\">Frequently Asked Questions</h2>',
    '<h2 className=\"text-h2 text-paper\">Frequently Asked Questions</h2>'
)

# Wait, is 'blue area' referring to Hero or something else?
# Let's also check if 'text-center' is properly applied to ClosingCTA paragraph.
replace_in_file(
    r'src\components\sections\ClosingCTA.tsx',
    '<p className={	ext-body mb-10 }>{data.body}</p>',
    '<p className={	ext-body mb-10 mx-auto }>{data.body}</p>'
)

