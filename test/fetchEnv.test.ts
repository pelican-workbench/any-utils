import { fetchEnv } from '../src/fetchEnv';

test('判断是 dev 环境', () => {
  expect(fetchEnv('https://www.imooc.dev.com/')).toBe('dev');
});

test('判断是 test 环境', () => {
  expect(fetchEnv('https://www.imooc.test.com/')).toBe('test');
});

test('判断是 pre 环境', () => {
  expect(fetchEnv('https://www.imooc.pre.com/')).toBe('pre');
});

test('判断是 prod 环境', () => {
  expect(fetchEnv('https://www.imooc.prod.com/')).toBe('prod');
});

test('默认是 prod 环境', () => {
  expect(fetchEnv('https://www.imooc.com/')).toBe('prod');
});

test('参数为空读 window.location.href', () => {
  expect(fetchEnv()).toBe('prod');
});
