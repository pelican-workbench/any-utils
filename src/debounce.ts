// TODO: 无单元测试
import { isFunction } from './typeof';

/**
 * @desc 防抖
 * @param func function
 * @param delay number
 * @param ctx any 上下文
 * @return function
 */
export function debounce(func, delay = 0, ctx?: any) {
  if (!isFunction(func)) {
    throw new RangeError('func 必须是函数类型');
  }

  let timer;

  return function() {
    clearTimeout(timer);

    const args = Array.prototype.slice.call(arguments);

    timer = setTimeout(() => {
      func.apply(ctx, args);
    }, delay);
  };
}
