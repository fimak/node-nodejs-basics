import fs from 'node:fs/promises';

const rename = async () => {
  // Write your code here
  const wrongFileName = './src/fs/files/wrongFilename.txt';
  const properFileName = './src/fs/files/properFilename.md';
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
