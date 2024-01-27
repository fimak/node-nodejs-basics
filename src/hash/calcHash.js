import path from 'node:path';
import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const fileData = await fs.readFile(filePath, { encoding: 'utf-8' });
  const hash = createHash('sha256');
  hash.update(fileData);
  const fileHash = hash.digest('hex');
  process.stdout.write(fileHash);
};

await calculateHash();
