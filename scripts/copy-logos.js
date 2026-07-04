const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\Tech Sign\\Documents\\ARONEU_WEBSITE_BUILD\\03A_LOGO_ASSET_INTEGRATION\\01_LOGO_ASSETS';
const projectDir = path.join(__dirname, '..');
const publicDir = path.join(projectDir, 'public');
const docsDir = path.join(projectDir, 'docs');

const directoriesToCreate = [
  path.join(publicDir, 'brand', 'logos'),
  path.join(publicDir, 'brand', 'icons'),
  path.join(docsDir, 'brand')
];

directoriesToCreate.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const filesToCopy = [
  { src: 'aroneu-logo-horizontal-ink.svg', dest: path.join(publicDir, 'brand', 'logos', 'aroneu-logo-horizontal-ink.svg') },
  { src: 'aroneu-logo-horizontal-paper.svg', dest: path.join(publicDir, 'brand', 'logos', 'aroneu-logo-horizontal-paper.svg') },
  { src: 'aroneu-logo-horizontal-reversed-gradient-lockup.svg', dest: path.join(publicDir, 'brand', 'logos', 'aroneu-logo-horizontal-reversed-gradient-lockup.svg') },
  { src: 'aroneu-logo-stacked-ink.svg', dest: path.join(publicDir, 'brand', 'logos', 'aroneu-logo-stacked-ink.svg') },
  { src: 'aroneu-logo-stacked-paper.svg', dest: path.join(publicDir, 'brand', 'logos', 'aroneu-logo-stacked-paper.svg') },
  { src: 'aroneu-monogram-a-ink.svg', dest: path.join(publicDir, 'brand', 'logos', 'aroneu-monogram-a-ink.svg') },
  { src: 'aroneu-monogram-a-paper.svg', dest: path.join(publicDir, 'brand', 'logos', 'aroneu-monogram-a-paper.svg') },
  
  { src: 'aroneu-app-icon-dark.png', dest: path.join(publicDir, 'brand', 'icons', 'aroneu-app-icon-dark.png') },
  { src: 'aroneu-app-icon-light.png', dest: path.join(publicDir, 'brand', 'icons', 'aroneu-app-icon-light.png') },
  { src: 'aroneu-app-icon-signature.png', dest: path.join(publicDir, 'brand', 'icons', 'aroneu-app-icon-signature.png') },
  { src: 'aroneu-maskable-icon-512.png', dest: path.join(publicDir, 'brand', 'icons', 'aroneu-maskable-icon-512.png') },
  
  { src: 'aroneu-favicon.svg', dest: path.join(publicDir, 'favicon.svg') },
  { src: 'aroneu-favicon-16.png', dest: path.join(publicDir, 'favicon-16.png') },
  { src: 'aroneu-favicon-32.png', dest: path.join(publicDir, 'favicon-32.png') },
  { src: 'aroneu-apple-touch-icon-180.png', dest: path.join(publicDir, 'apple-touch-icon.png') },
  
  { src: 'aroneu-logo-proof-sheet.png', dest: path.join(docsDir, 'brand', 'aroneu-logo-proof-sheet.png') },
  { src: 'vector-build-metadata.json', dest: path.join(docsDir, 'brand', 'vector-build-metadata.json') }
];

filesToCopy.forEach(file => {
  const sourcePath = path.join(sourceDir, file.src);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, file.dest);
    console.log(`Copied ${file.src} to ${file.dest}`);
  } else {
    console.warn(`Warning: Could not find ${sourcePath}`);
  }
});

// Remove existing default favicon in public/ if it's there
const oldFavicon = path.join(publicDir, 'favicon.ico');
if (fs.existsSync(oldFavicon)) {
    fs.unlinkSync(oldFavicon);
    console.log('Removed old favicon.ico');
}

// Remove old favicon in app/
const appFavicon = path.join(projectDir, 'src', 'app', 'favicon.ico');
if (fs.existsSync(appFavicon)) {
    fs.unlinkSync(appFavicon);
    console.log('Removed old app/favicon.ico');
}
