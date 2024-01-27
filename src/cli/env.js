const parseEnv = () => {
  // Write your code here
  const paramsString =  Object.keys(process.env).reduce((acc, el) => {
    if (el.startsWith('RSS_')) {
      acc = `${acc ? acc + '; ' : ''}${el}=${process.env[el]}`;
    }
    return acc;
  }, '')

  console.log(paramsString);
};

parseEnv();
