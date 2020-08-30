/**
 * 数组去重
 * TODO: 未写单测
 */
export function unique(arr: any[]) {
  if (window.Set) {
    // @ts-ignore
    return [...new window.Set(arr)];
  }

  const res = [];

  arr.forEach((item) => {
    if (res.indexOf(item) < 0) {
      res.push(item);
    }
  });

  return res;
}
