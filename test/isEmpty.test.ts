import { isEmpty } from '../src/isEmpty';

describe('isEmpty', () => {
  it('判断空数组', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('判断空对象', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('判断非空对象', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('判断非空数组', () => {
    expect(isEmpty([1])).toBe(false);
  });

  it('判断非数组或对象', () => {
    expect(isEmpty(1)).toBe(false);
  });
});
