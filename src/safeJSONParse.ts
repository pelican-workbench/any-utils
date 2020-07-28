/**
 * 解析 JSON 字符串对象
 */
export function safeJSONParse(str: string, defauValue: any = {}) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return defauValue;
  }
}
