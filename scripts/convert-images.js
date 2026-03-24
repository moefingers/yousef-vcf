const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const assetsDir = path.join(__dirname, '..', 'assets');
const publicDir = path.join(__dirname, '..', 'public');

const images = fs.readdirSync(assetsDir).filter(f => /\.(png|jpe?g)$/i.test(f));

(async () => {
  for (const file of images) {
    const name = path.parse(file).name;
    const src = path.join(assetsDir, file);
    const dest = path.join(publicDir, name + '.webp');
    await sharp(src).webp({ quality: 80 }).toFile(dest);
    console.log(`${file} -> ${name}.webp`);
  }
})();
