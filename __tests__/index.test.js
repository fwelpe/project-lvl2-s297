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

test('testing difference ini', () => {
  const result3 = gendiff(getFixturePath('before.ini'), getFixturePath('after.ini'));
  const expected3 = fs.readFileSync(getFixturePath('result3'), 'utf-8');
  expect(result3).toBe(expected3);
});

test('testing difference json extended', () => {
  const result4 = gendiff(getFixturePath('before2.json'), getFixturePath('after2.json'));
  const expected4 = fs.readFileSync(getFixturePath('result4'), 'utf-8');
  expect(result4).toBe(expected4);
});

test('testing difference ini extended', () => {
  const result5 = gendiff(getFixturePath('before2.ini'), getFixturePath('after2.ini'));
  const expected5 = fs.readFileSync(getFixturePath('result5'), 'utf-8');
  expect(result5).toBe(expected5);
});

test('testing difference yml extended', () => {
  const result6 = gendiff(getFixturePath('before2.yml'), getFixturePath('after2.yml'));
  const expected6 = fs.readFileSync(getFixturePath('result6'), 'utf-8');
  expect(result6).toBe(expected6);
});
