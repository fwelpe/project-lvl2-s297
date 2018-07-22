import path from 'path';
import fs from 'fs';
import render from './render';
import parser from './parser';

export default (path1, path2, format = 'objLike') => {
  const file1raw = fs.readFileSync(path1, 'utf-8');
  const file2raw = fs.readFileSync(path2, 'utf-8');
  const extension1 = path.extname(path1);
  const extension2 = path.extname(path2);
  if (extension1 !== extension2) {
    console.log('different input file formats. not supported');
    return null;
  }
  const parsed1 = parser(file1raw, extension1);
  const parsed2 = parser(file2raw, extension2);
  return render(parsed1, parsed2, format);
};
