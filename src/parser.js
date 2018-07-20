import yamlParser from 'js-yaml';
import iniParser from 'ini';

const switcher = {
  '.json': JSON.parse,
  '.yml': yamlParser.safeLoad,
  '.ini': iniParser.parse,
};

export default (rawData, extension) => switcher[extension](rawData);
