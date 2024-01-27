import fs from 'node:fs/promises';

const read = async () => {
  // Write your code here
  const filesPath = './src/fs/files/fileToRead.txt';
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
