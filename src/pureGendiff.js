import _ from 'lodash';

export default (parsed1obj, parsed2obj) => {
  const arrOfUniqKeys = _.union(Object.keys(parsed1obj), Object.keys(parsed2obj));
  const constructDifferenceArr = (acc, key) => {
    const keyInObj1Removed = `  - ${key}: ${parsed1obj[key]}`;
    const keyInObj2Added = `  + ${key}: ${parsed2obj[key]}`;
    if (!_.has(parsed1obj, key)) {
      return [...acc, keyInObj2Added];
    }
    if (!_.has(parsed2obj, key)) {
      return [...acc, keyInObj1Removed];
    }
    if (parsed1obj[key] === parsed2obj[key]) {
      const equalValuesCase = `    ${key}: ${parsed1obj[key]}`;
      return [...acc, equalValuesCase];
    }
    return [...acc, keyInObj1Removed, keyInObj2Added];
  };
  const preresult = arrOfUniqKeys.reduce(constructDifferenceArr, []);
  const result = ['{', ...preresult, '}\n'];
  return result.join('\n');
};
