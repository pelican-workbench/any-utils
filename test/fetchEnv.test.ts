import { fetchEnv } from '../src/fetchEnv';

describe('fetchEnv', () => {
  it ('判断是 dev 环境', () => {
    expect(fetchEnv('https://www.imooc.dev.com/')).toBe('dev');
  });

  it ('判断是 test 环境', () => {
    expect(fetchEnv('https://www.imooc.test.com/')).toBe('test');
  });

  it ('判断是 pre 环境', () => {
    expect(fetchEnv('https://www.imooc.pre.com/')).toBe('pre');
  });

  it ('判断是 prod 环境', () => {
    expect(fetchEnv('https://www.imooc.prod.com/')).toBe('prod');
  });

  it ('默认是 prod 环境', () => {
    expect(fetchEnv('https://www.imooc.com/')).toBe('prod');
  });

  it ('参数为空读 window.location.href', () => {
    expect(fetchEnv()).toBe('prod');
  });
});
