import fs from 'node:fs';
import path from 'node:path';
import zlib from 'zlib';

const decompress = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const fileCompressedPath = path.join(__dirname, 'files', 'archive.gz');

  try {
    const readStream = fs.createReadStream(fileCompressedPath);
    const writeStream = fs.createWriteStream(filePath);
    const decompressStream = zlib.createGunzip();

    readStream
      .pipe(decompressStream)
      .pipe(writeStream);

  } catch (err) {
    throw err;
  }
};

await decompress();
