const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '..', 'src', 'components', 'sections');
const files = fs.readdirSync(sectionsDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(sectionsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\\n$/, '\n');
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Fixed trailing slashes');
