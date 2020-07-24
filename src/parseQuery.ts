/**
 * 将类似 key1=18127873881&key2=2 格式的数据解析为 { key1: '18127873881', key2: 2 }
 */
export function parseQuery(query: string): Record<string, any> {
  // 先去除多余空格，不允许出现 'a=b  &b=c' 情况，处理后得到 'a=b&b=c'
  query = (query || '').replace(/\s/g, '');

  const reg = /([^=&]+)=([^=&]+)/g;

  const obj = {};

  while (reg.exec(query)) {
    obj[RegExp.$1] = RegExp.$2;
  }

  return obj;
}
