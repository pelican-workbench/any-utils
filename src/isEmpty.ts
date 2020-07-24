/**
 * @desc 判断是不是空对象或者空数组
 * @param target 对象或者数组
 * @return boolean
 */
export function isEmpty(target): boolean {
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      return target.length < 1;
    }

    return Object.keys(target).length < 1;
  }

  return false;
}
