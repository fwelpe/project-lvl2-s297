import path from 'path';
import fs from 'fs';
import gendiff from './pureGendiff';
import parserFnSwitcher from './parserFnSwitcher';

export default (path1, path2) => {
  const file1raw = fs.readFileSync(path1, 'utf-8');
  const file2raw = fs.readFileSync(path2, 'utf-8');
  const extension1 = path.extname(path1);
  const extension2 = path.extname(path2);
  if (extension1 !== extension2) {
    console.log('different input file formats. not supported');
    return null;
  }
  const parserFn = parserFnSwitcher[extension1];
  const parsed1 = parserFn(file1raw);
  const parsed2 = parserFn(file2raw);
  return gendiff(parsed1, parsed2);
};
