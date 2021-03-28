import { createCache } from '../src/cache';

describe('createCache', () => {
  it ('缓存字符串', () => {
    const c = createCache();
    c.set('name', 'allen');

    expect(c.get('name')).toBe('allen');
  });
});
