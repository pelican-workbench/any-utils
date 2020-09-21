// TODO: 无单元测试
import { isFunction } from './typeof';

/**
 * @desc 节流
 * @param func function
 * @param delay number
 * @param ctx any 上下文
 * @return function
 */
export function throttle(func, delay = 0, ctx?: any) {
  if (!isFunction(func)) {
    throw new RangeError('func 必须是函数类型');
  }

  let timer;

  return function() {
    const args = Array.prototype.slice.call(arguments);

    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);

        func.apply(ctx, args);
      }, delay);
    }
  };
}
