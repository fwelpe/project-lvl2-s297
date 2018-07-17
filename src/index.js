import fs from 'fs';
import _ from 'lodash';

export default (path1, path2) => {
  // console.log(`__dirname = ${__dirname}`);
  // console.log(`path1 = ${path1}`);
  // console.log(`path2 = ${path2}`);
  const path1FileRead = fs.readFileSync(path1);
  const path1obj = JSON.parse(path1FileRead);
  const path2FileRead = fs.readFileSync(path2);
  const path2obj = JSON.parse(path2FileRead);
  const arrOfUniqKeys = _.union(Object.keys(path1obj), Object.keys(path2obj));
  // console.log(`arrOfUniqKeys = ${arrOfUniqKeys}`);
  const f = (acc, val) => {
    if (path1obj[val] === path2obj[val]) {
      const caseEqual = `    ${val}: ${path1obj[val]}\n`;
      return `${acc}${caseEqual}`;
    }
    const obj1Changes = _.has(path1obj, val) ? `  - ${val}: ${path1obj[val]}\n` : '';
    const obj2Changes = _.has(path2obj, val) ? `  + ${val}: ${path2obj[val]}\n` : '';
    return `${acc}${obj1Changes}${obj2Changes}`;
  };
  const result = arrOfUniqKeys.reduce(f, '');
  const resultWithBrackets = `{\n${result}}\n`;
  return resultWithBrackets;
};
