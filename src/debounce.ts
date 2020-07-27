// TODO: 无单元测试
import { isFunction } from '../src/typeof';

/**
 * @desc 防抖
 * @param func function
 * @param delay number
 * @return function
 */
export function debounce(func, delay: number) {
  if (!isFunction(func)) {
    throw new RangeError('func 必须是函数类型');
  }

  let timer = null;

  return function() {
    const args = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
