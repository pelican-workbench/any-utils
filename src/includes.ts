/**
 * 判断字符串或数组的包含关系
 */
export function includes(source, target): boolean {
  if (source.includes) {
    return source.includes(target);
  }

  return source.indexOf(target) !== -1;
}
