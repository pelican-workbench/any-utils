/**
 * 数组拍平
 * TODO: 未加单测
 */
export function flat<T>(arr: T[]): T[] {
  const isDeep = arr.some((item) => item instanceof Array);

  if (!isDeep) {
    return arr;
  }

  const res = Array.prototype.concat.apply([], arr);

  return flat(res);
}
