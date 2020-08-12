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

/**
 * 通用事件绑定函数
 */
export function bindEvent(elem, type, selector, fn) {
  if (!isHTMLElement(elem)) {
    throw new RangeError('elem 必须是 HTMLElement');
  }

  if (fn == null) {
    fn = selector;
    selector = null;
  }

  elem.addEventListener(type, (event) => {
    const target = event.target;

    if (selector) {
      // 代理绑定
      if (target.matches(selector)) {
        fn.call(target, event);
      }
    } else {
      // 普通绑定
      fn.call(target, event);
    }
  });
}
