# any-utils

纯 JS utils 库，适用前端任何场景

## Installment

```sh
npm install any-utils --save
```

## Documentation

### 1. get

访问嵌套对象，避免代码中出现类似 a && a.b ? a.b.c : null 的代码.

#### Usage

```javascript
  import { get } from 'any-utils';

  const data = [{
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
      name: 'Jack',
      address: {
        line1: 'westwish st',
        line2: 'washmasher',
        city: [],
        state: 'WX'
      }
    }
  }];

  // 获取 data[0].personalInfo.address.line1
  get(data, [0, 'personalInfo', 'address', 'line1']); // westwish st

  // 获取 data[0].personalInfo.address.line2 不存在的属性 wx
  get(data, [0, 'personalInfo', 'address', 'line2', 'wx']); // undefined

  // 取不到的情况先默认返回 undefined，也可以设置
  get(data, [0, 'personalInfo', 'address', 'line2', 'wx'], '我是默认值'); // 我是默认值
```

### 2. isEmpty

判断是不是空对象或者空数组

#### Usage

```javascript
import { isEmpty } from 'any-utils';

// 判断空数组
isEmpty([]); // true

// 判断空对象
isEmpty({}); // true

// 判断非空对象
isEmpty({ a:1 }); // false

// 判断非空数组
isEmpty([1]); // false

// 判断非数组或对象
isEmpty(1); // false
```

### 3. query 类

和 url 相关的方法

#### parseQuery

将类似 key1=18127873881&key2=2 格式的数据解析为 { key1: '18127873881', key2: 2 }

#### Usage

```javascript
import { parseQuery, getQueryString } from 'any-utils';

// 解析 key1=18127873881&key2=2
parseQuery('key1=18127873881&key2=2') // { key1: '18127873881', key2: '2' }

// 解析空字符串
parseQuery('') // {}

// 获取 url 上面参数
// Location.href = https://www.baidu.com/s?ie=UTF-8
getQueryString('ie') // UTF-8

// 将 url 上面参数转换成对象
// Location.href = https://www.baidu.com/s?ie=UTF-8&name=allen
queryToObject() // { ie: 'UTF-8', name: 'allen'}
```

### 4. 判断数据类型

判断数据类型

#### Usage

```javascript
import { getTypeof, isString, isBoolean, isObject, isArray, isFunction, isDate, isJSON } from '../src/typeof';

// 判断是否为数组
getTypeof([1, 2])); // array
isArray([1, 2]); // true
isArray({}); // false

// 判断是否为字符串
getTypeof('我是字符串'); // string
isString('我是字符串'); // true
isString(false); // false

// 判断是否为对象
getTypeof({a: 2}); // object
isObject({a: 2}); // true
isObject(false); // false

// 判断 null 的类型
getTypeof(null); // null

// 判断是否为 boolean
getTypeof(false); // boolean
isBoolean(false); // true
isBoolean({a: 2}); // false

// 判断 number 类型
getTypeof(1); // number

// 判断 function
getTypeof(() => {}); // function
isFunction(() => {}); // true
isFunction(false); // false

// 判断 date
const date = new Date();
getTypeof(date); // date
isDate(date); // true
isDate(false); // false

// 判断是否是 JSON 字符串
isJSON('123'); // flase
isJSON('{}'); // true
isJSON('[1, 2, 3]'); // true
isJSON('{"a":1,"b":2}'); // true
isJSON(1); // false
```

### 5. dom 类方法

dom 类方法

#### Usage

```html
<div class="demo" id="demo" data-index="1"></div>
```

```javascript
import { isHTMLElement, hasClass, addClass, getDataByAttribute, bindEvent } from '../src/typeof';

const dom = document.getElementById('demo');

// 判断是否为 dom
isHTMLElement(dom, ); // true

// 判断元素是不是有某个 className
hasClass(dom, 'demo'); // true

// 给某个元素添加 className
addClass(dom, 'newClass'); // <div class="demo" id="demo newClass"></div>

// 在 Attribute 属性里面取 data- 开头的属性
getDataByAttribute(dom, 'index'); // 1

// 通用事件绑定函数 bindEvent(elem, type, selector, fn)
// 普通绑定
let dom = document.getElementById('custom-bg');
bindEvent(dom, 'click', function(event) {
  console.log('我是普通绑定')
})

// 代理绑定
bindEvent(dom, 'click', '.selector', function(event) {
  console.log('我只是绑定了 dom 下面 class 名称为 selector 的元素')
})
```

### 6. deepClone

深拷贝数组或对象

#### Usage

```javascript
  import { deepClone } from 'any-utils';

  const source = {
    age: 20,
    name: 'allen',
    address: {
      city: 'shanxi',
    },
    arr: [1, 'a', ['c', 2, {a: 2}]],
  };

  const deepCloneObj = deepClone(source);
  deepCloneObj.address.city = '南京';

  const input = source.address.city;
  const expectation = 'shanxi';

  input === expectation // true
```

### 7. createCache

缓存数据

#### Usage

```javascript
  import { createCache } from 'any-utils';

  // 创建一个缓存容器
  const c = createCache();

  // 设置缓存数据
  c.set('name', 'allen');

  // 获取缓存数据
  c.get('name');
```

### 8. debounce

防抖

#### Usage

```javascript
  import { debounce } from 'any-utils';

  // 事件处理函数，回掉函数支持传参
  function handle(...values) {
    console.log('-- do something --', values);
  }

  // 延时 1000ms
  debounce(handle, 1000, this);
```

### 9. throttle

节流

#### Usage

```javascript
  import { throttle } from 'any-utils';

  // 事件处理函数，回掉函数支持传参
  function handle(...values) {
    console.log('-- do something --', values);
  }

  // 延时 1000ms
  throttle(handle, 1000, this);
```

### 10. safeJSONParse

解析 JSON 字符串

#### Usage

```javascript
  import { safeJSONParse } from 'any-utils';

  // 解析 JSON 格式字符串
  const objStr = '{"a":1,"b":2}';
  safeJSONParse(objStr); // { a: 1, b: 2}

  // 解析数组字符串
  const arrStr = '[1, 2, "Jack"]';
  safeJSONParse(arrStr); // [1, 2, "Jack"]

  // 解析非 JSON 数据格式字符串
  const str = 'abc';

  // 解析失败默认返回 {}
  safeJSONParse(str); // {}

  // 也可以自定义返回值
  safeJSONParse(str, '我是默认值'); // 我是默认值
```

### 11. includes

判断字符串或数组的包含关系，兼容不支持 includes 的场景

#### Usage

```javascript
  import { includes } from 'any-utils';

  includes([1, 2, 3], 1) // true
  includes(['2', '1', '3'], '1') // true
  includes('我是字符串', '字符串') // true
  includes('我是字符串', '其他') // false
```

### 12. fetchEnv

根据 url 是否包含 dev、test、pre、prod 判断是否为 dev、test、pre、prod  环境

#### Usage

```javascript
  import { fetchEnv } from 'any-utils';

  fetchEnv('https://www.imooc.dev.com/') // dev
  fetchEnv('https://www.imooc.test.com/') // test
  fetchEnv('https://www.imooc.pre.com/') // pre
  fetchEnv('https://www.imooc.prod.com/') // prod

  // 支持直接读 window.location.href
  fetchEnv() // 相当于 fetchEnv(window.location.href)
```

### 13. 判断当前系统类型

根据 navigator.userAgent 判断当前系统类型

#### Usage

```javascript
  import { isIos, isChrome } from 'any-utils';

  isIos() // 返回一个 boolean 值，是否为 isIos 系统
  isChrome() // 返回一个 boolean 值，是否为谷歌浏览器
```

### 14. isEqual

判断两个对象是否相等

#### Usage

```javascript
import { isEqual } from 'any-utils';

isEqual({ a: 1, b: {a: 1}}, {a: 1, b: {a: 1}}) // true
isEqual({ a: 1}, {a: 1, b: {a: 1}}) // false
```

### 15. flat

数组拍平

#### Usage

```javascript
import { flat } from 'any-utils';

flat([1, 2, 3, [1, 2, [1, 2]]]) // [1,2,3,1,2,1,2]
```

### 16. unique

数组去重

#### Usage

```javascript
import { unique } from 'any-utils';

unique([1, 2, 3, 3, 3, 3]) // [1,2,3]
```

## Development

Build with TypeScript and tested by jest.

Checklist:

- [x] 每个对外公开的函数必须经过单测
- [x] 每个对外公开的函数必须在 README 添加文档

### Publish

1. npm version patch（向后兼容的 bug fix）/ minor （新需求且向后兼容） / major（不兼容）/ prerelease --preid=alpha(测试版本)
2. npm publish
3. git push && git push --tags

### commit 规范

格式：<type>: <subject>

#### type 说明

1. feat（feature，新功能，能够让用户觉察到的变化）
2. fix（bug fix，修复 bug）
3. docs（documentation，有关文档的更新，注释的更新）
4. style（code formatting, missing semi colons, … 代码样式调整，对逻辑无影响，比如为符合 eslint 要求修改代码格式）
5. refactor（重构，不影响或添加功能，比如文件、变量重命名、代码抽象为函数，消除魔法数字）
6. test（when adding missing tests 写测试）
7. chore（maintain 维护代码，比如构建脚本 webpack gulp、测试工具更新）
8. perf （性能提升）
9. ci（ci 脚本有关变更）
10. temp（temp: 不计入 CHANGELOG。比如测试下真机上 transparent title 启动参数是否设置成功）
