import fs from 'node:fs/promises';
import path from 'node:path';

const write = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  try {
    const fd = await fs.open(filePath, 'w');
    const writeStream = fd.createWriteStream();

    process.stdin.pipe(writeStream);
  } catch(err) {
    throw err;
  }
};

await write();
