/**
 * 判断数据类型
 */
export function getTypeof(target): string {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}

/**
 * 是否是 string
 */
export function isString(target): boolean {
  return getTypeof(target) === 'string';
}

/**
 * 是否是 boolean
 */
export function isBoolean(target): boolean {
  return getTypeof(target) === 'boolean';
}

/**
 * 是否是 object
 */
export function isObject(target): boolean {
  return getTypeof(target) === 'object';
}

/**
 * 是否是 array
 */
export function isArray(target): boolean {
  return getTypeof(target) === 'array';
}

/**
 * 是否是 function
 */
export function isFunction(target): boolean {
  return getTypeof(target) === 'function';
}

/**
 * 是否是 date
 */
export function isDate(target): boolean {
  return getTypeof(target) === 'date';
}


/**
 * 是否是 JSON
 */
export function isJSON(obj): boolean {
  obj = JSON.stringify(obj);
  
  if (!/^\{[\s\S]*\}$/.test(obj)) {
      return false;
  }

  return true;
}