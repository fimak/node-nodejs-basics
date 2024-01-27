import fs from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const filesPath = path.join(__dirname, 'files');
  const errorText = 'FS operation failed';

  try {
    const files = await fs.readdir(filesPath);
    files.forEach((file) => console.log(file));
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(errorText);
    } else {
      throw err;
    }
  }
};

await list();
