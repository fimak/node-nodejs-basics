import fs from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  // Write your code here
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const filesPath = path.join(__dirname, 'files');
  const filesCopyPath = path.join(__dirname, 'files_copy');
  const errorText = 'FS operation failed';

  try {
    await fs.cp(filesPath, filesCopyPath, { errorOnExist: true, force: false, recursive: true });
  } catch (err) {
    if (err.code === 'ERR_FS_CP_EEXIST' || err.code === 'ENOENT') {
      throw new Error(errorText);
    } else {
      throw err;
    }
  }
};

await copy();
