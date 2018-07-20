import yamlParser from 'js-yaml';
import iniParser from 'ini';

export default {
  '.json': JSON.parse,
  '.yml': yamlParser.safeLoad,
  '.ini': iniParser.parse,
};
