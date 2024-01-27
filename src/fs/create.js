import fs from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  const content = 'I am fresh and young';
  const errorText = 'FS operation failed';
  try {
    await fs.access(filePath);
    throw new Error(errorText);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(filePath, content);
    } else {
      throw err;
    }
  }
};

await create();
