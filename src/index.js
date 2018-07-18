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
      acc.push(`    ${val}: ${path1obj[val]}`);
      return acc;
    }
    if (_.has(path1obj, val)) {
      acc.push(`  - ${val}: ${path1obj[val]}`);
    }
    if (_.has(path2obj, val)) {
      acc.push(`  + ${val}: ${path2obj[val]}`);
    }
    return acc;
  };
  const result = arrOfUniqKeys.reduce(f, ['{']);
  result.push('}\n');
  return result.join('\n');
};
