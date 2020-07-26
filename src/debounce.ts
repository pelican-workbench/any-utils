// TODO: 无单元测试
import { isFunction } from '../src/typeof';

/**
 * @desc 防抖
 * @param func function
 * @param ms number
 * @return function
 */
export function debounce(func, ms: number) {
  if (!isFunction(func)) {
    throw new RangeError('func 必须是函数类型');
  }

  let timer = null;

  return function() {
    clearTimeout(timer);

    timer = setTimeout(func, ms);
  };
}
