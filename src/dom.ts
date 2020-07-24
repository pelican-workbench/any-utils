// TODO: 无单元测试

/**
 * 判断元素是不是 dom 元素
 */
export function isHTMLElement(el: HTMLElement): boolean {
  return el instanceof HTMLElement;
}

/**
 * 判断元素是不是有某个 className
 */
export function hasClass(el: HTMLElement, className: string) {
  if (!isHTMLElement(el)) {
    return false;
  }

  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)');

  return reg.test(el.className);
}

/**
 * 给某个元素添加 className
 */
export function addClass(el: HTMLElement, className: string) {
  if (hasClass(el, className)) {
    return;
  }

  const newClass = el.className.split(' ');

  newClass.push(className);

  el.className = newClass.join(' ');
}

/**
 * 在 Attribute 属性里面取 data- 开头的属性
 */
export function getDataByAttribute(el: HTMLElement, name: string) {
  if (!isHTMLElement(el)) {
    return;
  }

  const prefix = 'data-';

  return el.getAttribute(prefix + name);
}
