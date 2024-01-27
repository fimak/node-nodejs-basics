import fs from 'node:fs/promises';

const remove = async () => {
  // Write your code here
  const filePath = './src/fs/files/fileToRemove.txt';
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
