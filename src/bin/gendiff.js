#!/usr/bin/env node
import commander from 'commander';
import gendiff from '../';
import gendiffJson from '../../package.json';

commander
  .version(gendiffJson.version, '-v, --version')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => console.log(gendiff(firstConfig, secondConfig)))
  .parse(process.argv);
