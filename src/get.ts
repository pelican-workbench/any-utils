/**
 * 访问嵌套对象，避免代码中出现类似 user && user.personalInfo ? user.personalInfo.name : null 的代码
 */
export function get<T>(object: any, path: Array<number | string>, defaultValue?: T): T {
  const result = path.reduce((obj, key) => obj !== undefined ? obj[key] : undefined, object);

  return result !== undefined ? result : defaultValue;
}
