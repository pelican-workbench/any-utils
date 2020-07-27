// TODO: 无单元测试
import { isFunction } from './typeof';

/**
 * @desc 节流
 * @param func function
 * @param delay number
 * @return function
 */
export function throttle(func, delay: number) {
  if (!isFunction(func)) {
    throw new RangeError('fn 必须是函数类型');
  }

  let timer = null;

  return function() {
    const args = arguments;

    if (timer === null) {
      timer = setTimeout(() => {
        timer = null;

        func.apply(this, args);
      }, delay);
    }
  };
}
