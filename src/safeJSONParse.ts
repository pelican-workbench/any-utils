/**
 * 解析 JSON 字符串对象
 */
export function safeJSONParse(str: string, defaultValue: any = {}) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return defaultValue;
  }
}
