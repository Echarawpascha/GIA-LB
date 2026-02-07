import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const dir = path.join(process.cwd(), 'public', 'sequence');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const count = 60;

const download = async (i) => {
    const filename = `frame-${i}.jpg`;
    const filePath = path.join(dir, filename);

    // Check if file exists and has size
    if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
        console.log(`Skipping ${filename}`);
        return;
    }

    const url = `https://placehold.co/1920x1080/F6F5F2/D4AF37/jpg?text=Frame+${i}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`unexpected response ${res.statusText}`);
        const stream = fs.createWriteStream(filePath);
        // Node's native fetch returns a Web ReadableStream.
        // Readable.fromWeb converts it to Node's Readable that pipe accepts.
        await finished(Readable.fromWeb(res.body).pipe(stream));
        console.log(`Downloaded ${filename}`);
    } catch (e) {
        console.error(`Error downloading ${filename}:`, e);
        // Create a blank file to proceed if needed
        fs.writeFileSync(filePath, '');
    }
};

(async () => {
    console.log('Starting download...');
    // Parallel download in chunks of 5
    const chunk = 5;
    for (let i = 1; i <= count; i += chunk) {
        const promises = [];
        for (let j = 0; j < chunk && i + j <= count; j++) {
            promises.push(download(i + j));
        }
        await Promise.all(promises);
    }
    console.log('Done.');
})();
