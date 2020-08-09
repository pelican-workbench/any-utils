import { includes } from '../src/includes';

test('判断数组是否包含某一项', () => {
  expect(includes([1, 2, 3], 1)).toBe(true);
  expect(includes(['2', '1', '3'], '1')).toBe(true);
  expect(includes([1, 2, 3], 6)).toBe(false);
});

test('判断字符串是否包含某一项', () => {
  expect(includes('我是字符串', '字符串')).toBe(true);
  expect(includes('我是字符串', '其他')).toBe(false);
});
