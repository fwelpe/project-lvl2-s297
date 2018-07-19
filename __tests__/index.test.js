import path from 'path';
import fs from 'fs';
import gendiff from '../src/';

const getFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

test('testing difference json', () => {
  const result1 = gendiff(getFixturePath('before.json'), getFixturePath('after.json'));
  const expected1 = fs.readFileSync(getFixturePath('result1'), 'utf-8');
  expect(result1).toBe(expected1);
});

test('testing difference yml', () => {
  const result2 = gendiff(getFixturePath('before.yml'), getFixturePath('after.yml'));
  const expected2 = fs.readFileSync(getFixturePath('result2'), 'utf-8');
  expect(result2).toBe(expected2);
});
