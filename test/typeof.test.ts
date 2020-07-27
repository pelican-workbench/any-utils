import { getTypeof, isString, isBoolean, isObject, isArray, isFunction, isDate, isJSON } from '../src/typeof';

test('判断是否为数组', () => {
  expect(getTypeof([1, 2])).toBe('array');
  expect(isArray([1, 2])).toBe(true);
  expect(isArray({})).toBe(false);
});

test('判断是否为字符串', () => {
  expect(getTypeof('我是字符串')).toBe('string');
  expect(isString('我是字符串')).toBe(true);
  expect(isString(false)).toBe(false);
});

test('判断是否为对象', () => {
  expect(getTypeof({a: 2})).toBe('object');
  expect(isObject({a: 2})).toBe(true);
  expect(isObject(false)).toBe(false);
});

test('判断是否为 null', () => {
  expect(getTypeof(null)).toBe('null');
});

test('判断是否为 boolean', () => {
  expect(getTypeof(false)).toBe('boolean');
  expect(isBoolean({a: 2})).toBe(false);
  expect(isBoolean(false)).toBe(true);
});

test('判断是否为 number', () => {
  expect(getTypeof(1)).toBe('number');
});

test('判断是否为 function', () => {
  expect(getTypeof(isFunction)).toBe('function');
  expect(isFunction(isBoolean)).toBe(true);
  expect(isFunction(false)).toBe(false);
});

test('判断是否为 date', () => {
  const date = new Date();

  expect(getTypeof(date)).toBe('date');
  expect(isDate(date)).toBe(true);
  expect(isDate(false)).toBe(false);
});

test('判断是否为JSON数据格式字符串', () => {
  expect(isJSON('123')).toBe(false);
  expect(isJSON('{}')).toBe(true);
  expect(isJSON('[1, 2, 3]')).toBe(true);
  expect(isJSON('{"a":1,"b":2}')).toBe(true);
});
