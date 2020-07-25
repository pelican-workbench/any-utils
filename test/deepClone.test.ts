import { deepClone } from '../src/deepClone';

const obj = {
  age: 20,
  name: 'allen',
  address: {
    city: 'shanxi',
  },
  arr: [1, 'a', ['c', 2, {a: 2}]],
};

test('判断浅拷贝结果是否相等', () => {
  const input = obj;
  const expectation = obj;

  expect(input === expectation).toBe(true);
});

test('判断深拷贝结果象是否相等', () => {
  const input = deepClone(obj);
  const expectation = obj;

  expect(input === expectation).toBe(false);
});

test('判断拷贝后的值 string 化后是否相等', () => {
  const input = JSON.stringify(deepClone(obj));
  const expectation = JSON.stringify(obj);

  expect(input === expectation).toBe(true);
});

test('判断初始类型', () => {
  const input = 1;
  const expectation = 1;

  expect(input === expectation).toBe(true);
});

test('判断初始类型 null', () => {
  const input = null;
  const expectation = null;

  expect(input === expectation).toBe(true);
});

test('判断数组', () => {
  const input = deepClone([1, 2, 3]);
  const expectation = [1, 2, 3];

  expect(input === expectation).toBe(false);
});

test('改变对象的属性值', () => {
  const source = {
    age: 20,
    name: 'allen',
    address: {
      city: 'shanxi',
    },
    arr: [1, 'a', ['c', 2, {a: 2}]],
  };

  const lightCopy = source;
  lightCopy.address.city = '上海';

  const input = source.address.city;
  const expectation = '上海';

  expect(input === expectation).toBe(true);
});

test('深拷贝后改变对象的属性值', () => {
  const source = {
    age: 20,
    name: 'allen',
    address: {
      city: 'shanxi',
    },
    arr: [1, 'a', ['c', 2, {a: 2}]],
  };

  const deepCloneObj = deepClone(source);
  deepCloneObj.address.city = '南京';

  const input = source.address.city;
  const expectation = 'shanxi';

  expect(input === expectation).toBe(true);
});
