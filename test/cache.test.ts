import { createCache } from '../src/cache';

test('判断空数组', () => {
  const c = createCache();
  c.set('name', 'allen');

  expect(c.get('name')).toBe('allen');
});
