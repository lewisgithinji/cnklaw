import https from 'https';
import fs from 'fs';
import path from 'path';

const download = (id, name) => {
    return new Promise((resolve, reject) => {
        const url = `https://images.unsplash.com/photo-${id}?q=80&w=2560&auto=format&fit=crop`;
        const filePath = path.join('f:/Projects/cnk-law-website/public/Hero', name);
        const file = fs.createWriteStream(filePath);

        console.log(`Downloading ${name} from ID ${id}...`);

        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                console.log(`Failed to get '${name}' (Status: ${res.statusCode})`);
                resolve(false);
                return;
            }

            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Success: ${name} (${fs.statSync(filePath).size} bytes)`);
                resolve(true);
            });
        }).on('error', (err) => {
            console.error(`Error: ${err.message}`);
            resolve(false);
        });
    });
};

const run = async () => {
    // Try multiple candidate IDs for Westlands/Nairobi skyline
    const candidates = [
        '1561058252-8cbf6353d262', // Nairobi city
        '1621245781476-be0c8a666270', // Expressway/Westlands
        '1549420042-4b2e811f592d', // Nairobi lights
    ];

    for (const id of candidates) {
        const success = await download(id, 'skyline_bg.jpg');
        if (success) break;
    }

    // Also ensure Court is there
    await download('1605374493393-27885b5d1947', 'court_bg.jpg'); // YMFniH1URto equivalent

    console.log('Download process complete.');
};

run();
