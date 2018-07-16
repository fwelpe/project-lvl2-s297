import commander from 'commander';

export default commander
  .command('-h')
  .command('gendiff <firstConfig> <secondConfig>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format')
  .description('Compares two configuration files and shows a difference.')
