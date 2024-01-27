import fs from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const wrongFileName = path.join(__dirname, 'files', 'wrongFilename.txt');
  const properFileName = path.join(__dirname, 'files', 'properFilename.md');
  const errorText = 'FS operation failed';

  try {
    await fs.rename(wrongFileName, properFileName);
    await fs.access(properFileName);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(errorText);
    }
    throw err;
  }
};

await rename();
