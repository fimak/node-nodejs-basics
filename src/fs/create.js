import fs from 'node:fs/promises';

const create = async () => {
  // Write your code here
  const filePath = './src/fs/files/fresh.txt';
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
