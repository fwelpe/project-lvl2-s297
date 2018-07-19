import path from 'path';
import fs from 'fs';
import yamlParser from 'js-yaml';
import iniParser from 'ini';
import gendiff from './pureGendiff';

const parserFnSwitcher = {
  '.json': filepath => JSON.parse(fs.readFileSync(filepath)),
  '.yml': filepath => yamlParser.safeLoad(fs.readFileSync(filepath)),
  '.ini': filepath => iniParser.parse(fs.readFileSync(filepath, 'utf-8')),
};

export default (path1, path2) => {
  const extension1 = path.extname(path1);
  const extension2 = path.extname(path2);
  if (extension1 !== extension2) {
    console.log('different input file formats. not supported');
    return null;
  }
  const parserFn = parserFnSwitcher[extension1];
  const parsed1 = parserFn(path1);
  const parsed2 = parserFn(path2);
  return gendiff(parsed1, parsed2);
};
