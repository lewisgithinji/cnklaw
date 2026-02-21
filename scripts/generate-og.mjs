import sharp from 'sharp';
import path from 'path';

const logoPath = 'f:/Projects/cnk-law-website/public/cnklogo.png';
const outputPath = 'f:/Projects/cnk-law-website/public/og-image.png';

async function generateOG() {
    console.log('Generating Open Graph image...');

    try {
        // Load the logo
        const logo = await sharp(logoPath);
        const metadata = await logo.metadata();

        // Target size for OG: 1200x630
        const width = 1200;
        const height = 630;

        // Resize logo to fit comfortably within the OG image (with some padding)
        const logoHeight = 400; // Fixed height for the logo in the OG image
        const resizedLogo = await sharp(logoPath)
            .resize({ height: logoHeight })
            .toBuffer();

        // Create white background and composite logo
        await sharp({
            create: {
                width: width,
                height: height,
                channels: 4,
                background: { r: 255, g: 255, b: 255, alpha: 1 }
            }
        })
            .composite([
                {
                    input: resizedLogo,
                    gravity: 'center'
                }
            ])
            .png()
            .toFile(outputPath);

        console.log('Successfully generated OG image at:', outputPath);
    } catch (err) {
        console.error('Error generating OG image:', err);
    }
}

generateOG();
