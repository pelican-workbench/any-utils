// TODO: 无单元测试
import { isFunction } from './typeof';

/**
 * @desc 节流
 * @param func function
 * @param delay number
 * @return function
 */

export function throttle(fn, delay: number = 500) {
  if (!isFunction(fn)) {
    throw new RangeError('fn 必须是函数类型');
  }
  let run = true;
  return function(): any {
    if (!run) {
      return;
    }
    const args = arguments;
    run = false;
    setTimeout(() => {
      fn.apply(this, args);
      run = true;
    }, delay);
  };
}
