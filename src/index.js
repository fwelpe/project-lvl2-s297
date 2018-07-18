import fs from 'fs';
import _ from 'lodash';

export default (path1, path2) => {
  const path1FileRead = fs.readFileSync(path1);
  const path1obj = JSON.parse(path1FileRead);
  const path2FileRead = fs.readFileSync(path2);
  const path2obj = JSON.parse(path2FileRead);
  const arrOfUniqKeys = _.union(Object.keys(path1obj), Object.keys(path2obj));
  const f = (acc, val) => {
    if (path1obj[val] === path2obj[val]) {
      return [...acc, `    ${val}: ${path1obj[val]}`];
    }
    const obj1diff = _.has(path1obj, val) ? `  - ${val}: ${path1obj[val]}` : '';
    const obj2diff = _.has(path2obj, val) ? `  + ${val}: ${path2obj[val]}` : '';
    return [...acc, obj1diff, obj2diff];
  };
  const preresult = arrOfUniqKeys.reduce(f, ['{']);
  const resultWithoutFalseParts = _.compact(preresult);
  return [...resultWithoutFalseParts, '}\n'].join('\n');
};
