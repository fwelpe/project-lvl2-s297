const renderValue = (value, format, deeplvl) => {
  if ((typeof value) !== 'object') {
    if (format === 'plain') {
      return `'${value}'`;
    }
    return `${value}`;
  }
  if (format === 'plain') {
    return 'complex value';
  }
  const indentation = '    '.repeat(deeplvl);
  const keys = Object.keys(value);
  const renderedArr = keys.reduce((acc, key) => [...acc, `${indentation}    ${key}: ${value[key]}`], []);
  return ['{', ...renderedArr, `${indentation}}`].join('\n');
};

export default renderValue;
