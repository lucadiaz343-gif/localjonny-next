const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const fotosDir = './fotos';
const files = fs.readdirSync(fotosDir).filter(f => f.match(/\.(jpg|jpeg|JPG|JPEG)$/));

async function convertAll() {
  for (const file of files) {
    const input = path.join(fotosDir, file);
    const output = path.join(fotosDir, file.replace(/\.(jpg|jpeg|JPG|JPEG)$/, '.webp'));
    await sharp(input).webp({ quality: 75 }).toFile(output);
    console.log(`✓ ${file} → ${file.replace(/\.(jpg|jpeg)$/i, '.webp')}`);
  }
  console.log('Listo!');
}

convertAll();
