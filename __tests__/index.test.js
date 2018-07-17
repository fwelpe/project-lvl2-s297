import gendiff from '../dist/';
import path from 'path';
import fs from 'fs'

const getFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

test('testing difference on fixtures', () => {
  expect(gendiff(getFixturePath('before.json'), getFixturePath('after.json'))).toBe(fs.readFileSync(getFixturePath('result'), 'utf-8'));
});
