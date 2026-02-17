import sharp from 'sharp';
import path from 'path';

const INPUT_PATH = 'f:/Projects/cnk-law-website/public/logo.png';
const OUTPUT_PATH = 'f:/Projects/cnk-law-website/public/logo-transparent.png';

async function processLogo() {
    console.log('Processing logo: Removing white background...');

    try {
        // We'll use sharp to remove the background
        // Since it's a solid white background, we can use a threshold or flood fill-like strategy
        // But for a simple approach with this logo, we can just use the 'ensured alpha' and a color-based mask

        await sharp(INPUT_PATH)
            .ensureAlpha()
            .unflatten()
            // Use boolean logic to turn white pixels transparent
            // High threshold (250) to catch near-white pixels too
            .raw()
            .toBuffer({ resolveWithObject: true })
            .then(({ data, info }) => {
                const { width, height, channels } = info;
                for (let i = 0; i < data.length; i += channels) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];

                    // If pixel is white or very close to white
                    if (r > 245 && g > 245 && b > 245) {
                        data[i + 3] = 0; // Set alpha to 0
                    }
                }
                return sharp(data, { raw: { width, height, channels } })
                    .trim() // Remove unnecessary transparent edges
                    .toFile(OUTPUT_PATH);
            });

        console.log('Successfully generated logo-transparent.png');
    } catch (error) {
        console.error('Error processing logo:', error);
    }
}

processLogo();
