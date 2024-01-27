import fs from 'node:fs/promises';

const list = async () => {
  // Write your code here
  const filesPath = './src/fs/files';
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
