import sharp from 'sharp';
import path from 'path';

const STAFF_DIR = 'f:/Projects/cnk-law-website/public/Staff/optimized';
const BG_DIR = 'f:/Projects/cnk-law-website/public/Hero';
const OUTPUT_DIR = 'f:/Projects/cnk-law-website/public/Hero';

async function generateAssets() {
    console.log('Generating Final Unified Hero Assets...');

    try {
        const width = 2560;
        const height = 1080;

        // Helper: Cinematic Grading
        const processBg = async (filename, outputName, blurAmount = 0, brightness = 0.5) => {
            console.log(`Processing Background: ${filename}`);
            let img = sharp(path.join(BG_DIR, filename))
                .resize(width, height, { fit: 'cover' })
                .modulate({ brightness: brightness, saturation: 0.7 })
                .tint({ r: 45, g: 15, b: 20 }); // Premium CNK Burgundy

            if (blurAmount > 0) {
                img = img.blur(blurAmount);
            }

            await img.toFile(path.join(OUTPUT_DIR, outputName));
        };

        // 1. Slide 1: Westlands Skyline (Authentic local asset)
        await processBg('westlands.png', 'skyline-hero.jpg', 0, 0.45);

        // 2. Slide 2: Supreme Court
        await processBg('court_bg.jpg', 'court-hero.jpg', 0, 0.4);

        // 3. Slide 3: Team Mural (Preserving all previous refinements)
        console.log('Slide 3: Team Mural (Mungai Edition)...');
        const baseBg = await sharp(path.join(BG_DIR, 'office_bg.jpg'))
            .resize(width, height, { fit: 'cover' })
            .modulate({ brightness: 0.45, saturation: 0.7 })
            .tint({ r: 40, g: 15, b: 20 })
            .toBuffer();

        const processPanel = async (name, w, h) => {
            const input = path.join(STAFF_DIR, name);
            const glass = Buffer.from(
                `<svg width="${w}" height="${h}">
          <rect x="0" y="0" width="${w}" height="${h}" fill="none" stroke="white" stroke-width="2" stroke-opacity="0.15" />
          <path d="M 0 40 L 0 0 L 40 0" fill="none" stroke="gold" stroke-width="3" stroke-opacity="0.4" />
          <path d="M ${w - 40} 0 L ${w} 0 L ${w} 40" fill="none" stroke="gold" stroke-width="3" stroke-opacity="0.4" />
        </svg>`
            );
            return sharp(input)
                .resize(w, h, { fit: 'cover' })
                .modulate({ saturation: 0.7, brightness: 1.05 })
                .composite([{ input: glass }])
                .toBuffer();
        };

        const partners = await processPanel('Partners.jpg', 680, 540);
        const sarah = await processPanel('Sarah2.jpg', 380, 570);
        const mungai = await processPanel('Mungai2.jpg', 380, 570);
        const ann = await processPanel('AnnWanjiku2.jpg', 340, 510);

        // Final Edge-Safe + Left-Clearing Layout
        await sharp(baseBg)
            .composite([
                { input: partners, top: 250, left: 1250 },
                { input: sarah, top: 280, left: 830 },
                { input: mungai, top: 280, left: 1970 },
                { input: ann, top: 310, left: 450 },
            ])
            .toFile(path.join(OUTPUT_DIR, 'team-hero.jpg'));

        console.log('All Final Unified Hero Assets Generated Successfully.');
    } catch (error) {
        console.error('Error in generation:', error);
    }
}

generateAssets();
