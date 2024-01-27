const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);

  const paramsString = args.reduce((acc, el, id) => {
    if (el.startsWith('--')) {
      acc = `${acc ? acc + ', ' : ''}${el.slice(2)} is ${args[id + 1]}`;
    }
    return acc;
  }, '');

  console.log(paramsString);
};

parseArgs();
