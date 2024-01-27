import fs from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files' , 'fileToRemove.txt');
  const errorText = 'FS operation failed';

  try {
    await fs.unlink(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(errorText);
    } else {
      throw err;
    }
  }
};

await remove();
