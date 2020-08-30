import { isFunction } from './typeof';

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

/**
 * TODO: 未自测
 * 获取 query 上的某个参数
 */
export function getQueryString(name: string): string {
  const search = location.search;

  // 支持 URLSearchParams 优先使用 URLSearchParams
  if (isFunction(window.URLSearchParams)) {
    const params = new window.URLSearchParams(search);

    return params.get(name);
  }

  // 不支持用正则匹配
  const reg = new RegExp(`^|&)${name}=([^&]*)(&|$)`, 'i');
  const res = search.substr(1).match(reg);

  if (res === null) {
    return null;
  }

  return res[2];
}

/**
 * TODO: 未自测
 * 将 url 参数解析为 js 对象
 */
export function queryToObject(): Record<string, any> {
  const res = {};
  const search = location.search;

  if (isFunction(window.URLSearchParams)) {
    const params = new window.URLSearchParams(search);

    params.forEach((value, key) => {
      res[key] = value;
    });
  }

  search.substr(1).split('&').forEach((paramString) => {
    const arr = paramString.split('=');
    const key = arr[0];
    const value = arr[1];

    res[key] = value;
  });

  return res;
}
