import fs from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const fd = await fs.open(filePath);
    const readStream = fd.createReadStream();

    readStream.on('data', (chunk) => {
      process.stdout.write(chunk.toString());
    });
  } catch(err) {
    throw err;
  }
};

await read();
