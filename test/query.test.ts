import { parseQuery } from '../src/query';

test('解析 key1=18127873881&key2=2', () => {
  expect(parseQuery('key1=18127873881&key2=2')).toEqual({ key1: '18127873881', key2: '2' });
});

test('解析 https://jestjs.io/docs/zh-Hans/using-matchers?key1=18127873881&key2=2', () => {
  expect(parseQuery('https://jestjs.io/docs/zh-Hans/using-matchers?key1=18127873881&key2=2'))
    .toEqual({ 'https://jestjs.io/docs/zh-Hans/using-matchers?key1': '18127873881', 'key2': '2' });
});

test('解析空字符串', () => {
  expect(parseQuery('')).toEqual({});
});
