import fs from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const filesPath = path.join(__dirname, 'files', 'fileToRead.txt');
  const errorText = 'FS operation failed';

  try {
    const content = await fs.readFile(filesPath, { encoding: 'utf-8'});
    console.log(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(errorText);
    } else {
      throw err;
    }
  }
};

await read();
