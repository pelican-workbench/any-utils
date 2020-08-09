
import { includes } from './includes';

/**
 * 是否为 ios 设备
 * @return {Boolean}
 */
export function isIos(): boolean {
  return /^.*(iphone|ipod|ipad).*$/gi.test(navigator.userAgent);
}

/**
 * 是否为 Chrome 浏览器
 * @return {Boolean}
 */
export function isChrome(): boolean {
  return includes(navigator.userAgent, 'Chrome');
}
