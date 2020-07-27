import { safeJSONParse } from './safeJSONParse';

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
 * 是否是 JSON 字符串
 */
export function isJSON(source: any): boolean {
  if (!isString(source)) {
    return false;
  }

  const obj = safeJSONParse(source, false);
  const type = getTypeof(obj);

  return type === 'object' || type === 'array';
}
