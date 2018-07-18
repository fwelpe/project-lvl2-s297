import path from 'path';
import fs from 'fs';
import gendiff from '../src/';

const getFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

test('testing difference on fixtures', () => {
  const result = gendiff(getFixturePath('before.json'), getFixturePath('after.json'));
  const expected = fs.readFileSync(getFixturePath('result'), 'utf-8');
  expect(result).toBe(expected);
});
