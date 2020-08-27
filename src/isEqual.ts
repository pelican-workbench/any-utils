/**
 * TODO: 未自测
 * 判断是否相等
 */
export function isEqual(sourceObj, targetObj): boolean {
  const isObj = (obj) => typeof obj === 'object' && obj !== null;

  // 初始类型或者 function 直接比较
  if (!isObj(sourceObj) || !isObj(targetObj)) {
    return sourceObj === targetObj;
  }

  // 内存地址相同直接返回为 true
  if (sourceObj === targetObj) {
    return true;
  }

  const sourceObjKeys = Object.keys(sourceObj);
  const targetObjKeys = Object.keys(targetObj);

  // 长度不同直接返回
  if (sourceObjKeys.length !== targetObjKeys.length) {
    return false;
  }

  // 深度比较内部属性
  for (const key in sourceObj) {
    const res = isEqual(sourceObj[key], targetObj[key]);

    if (!res) {
      return false;
    }
  }

  return true;
}
