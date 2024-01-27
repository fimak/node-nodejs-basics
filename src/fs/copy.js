import fs from 'node:fs/promises';

const copy = async () => {
  // Write your code here
  const filesPath = './src/fs/files';
  const filesCopyPath = './src/fs/files_copy';
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
