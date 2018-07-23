import path from 'path';
import fs from 'fs';
import render from './renderers';
import parse from './parse';

export default (path1, path2, format = 'objLike') => {
  const file1raw = fs.readFileSync(path1, 'utf-8');
  const file2raw = fs.readFileSync(path2, 'utf-8');
  const extension1 = path.extname(path1);
  const extension2 = path.extname(path2);
  if (extension1 !== extension2) {
    throw new Error('Different file extensions. Not supported.');
  }
  const parsed1 = parse(file1raw, extension1);
  const parsed2 = parse(file2raw, extension2);
  return render(parsed1, parsed2, format);
};
