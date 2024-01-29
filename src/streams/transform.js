const transform = async () => {
  // Write your code here
  try {
    process.stdin
      .on('data', (chunk) => {
        process.stdout.write(chunk.toString().split('').reverse().join(''))
      })
  } catch(err) {
    throw err;
  }
};

await transform();
