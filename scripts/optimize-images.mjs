import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const staffDir = 'f:/Projects/cnk-law-website/public/Staff';
const outputDir = 'f:/Projects/cnk-law-website/public/Staff/optimized';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const images = fs.readdirSync(staffDir).filter(f =>
    f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.png')
);

console.log(`Found ${images.length} images to optimize...`);

async function optimize() {
    for (const img of images) {
        const inputPath = path.join(staffDir, img);
        const fileName = path.parse(img).name;
        const outputPath = path.join(outputDir, `${fileName}.jpg`);

        console.log(`Optimizing ${img}...`);
        try {
            await sharp(inputPath)
                .resize({ width: 1200, withoutEnlargement: true })
                .jpeg({ quality: 75, progressive: true })
                .toFile(outputPath);
            console.log(`Done: ${outputPath}`);
        } catch (err) {
            console.error(`Error optimizing ${img}:`, err);
        }
    }
}

optimize();
