import { isEmpty } from '../src/isEmpty';

test('判断空数组', () => {
  expect(isEmpty([])).toBe(true);
});

test('判断空对象', () => {
  expect(isEmpty({})).toBe(true);
});

test('判断非空对象', () => {
  expect(isEmpty({ a:1 })).toBe(false);
});

test('判断非空数组', () => {
  expect(isEmpty([1])).toBe(false);
});

test('判断非数组或对象', () => {
  expect(isEmpty(1)).toBe(false);
});