import { get } from '../src/get';

test('测试嵌套对象存在的可枚举属性 line1', () => {
  expect(get({
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
      name: 'Jack',
      address: {
        line1: 'westwish st',
        line2: 'washmasher',
        city: 'wallas',
        state: 'WX'
      }
    }
  }, ['personalInfo', 'address', 'line1'])).toBe('westwish st');
});

test('测试嵌套对象不存在的属性 line3', () => {
  expect(get({
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
      name: 'Jack',
      address: {
        line1: 'westwish st',
        line2: 'washmasher',
        city: 'wallas',
        state: 'WX'
      }
    }
  }, ['personalInfo', 'address', 'line3'])).toBe(undefined);
});

test('测试嵌套对象不存在的属性 line4', () => {
  expect(get({
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
      name: 'Jack',
      address: {
        line1: 'westwish st',
        line2: 'washmasher',
        city: 'wallas',
        state: 'WX'
      }
    }
  }, ['personalInfo', 'line4', 'address'])).toBe(undefined);
});

test('测试嵌套数组存在的不可枚举属性 length', () => {
  expect(get([{
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
      name: 'Jack',
      address: {
        line1: 'westwish st',
        line2: 'washmasher',
        city: [],
        state: 'WX'
      }
    }
  }], [0, 'personalInfo', 'address', 'city', 'length'])).toBe(0);
});

test('测试嵌套数组存在的可枚举属性 state', () => {
  expect(get([{
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
      name: 'Jack',
      address: {
        line1: 'westwish st',
        line2: 'washmasher',
        city: [],
        state: 'WX'
      }
    }
  }], [0, 'personalInfo', 'address', 'state'])).toBe('WX');
});

test('测试空字符串存在的不可枚举属性 length', () => {
  expect(get('', ['length'])).toBe(0);
});