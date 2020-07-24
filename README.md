# any-utils

> 纯 JS utils 库，适用前端任何场景

## Installment

```sh
npm install any-utils --save
```

## Documentation

### 1. get

> 访问嵌套对象，避免代码中出现类似 a && a.b ? a.b.c : null 的代码

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

  // 获取 data[0].personalInfo.address.line2
  get(data, [0, 'personalInfo', 'address', 'line2']); // westwish st

  // 获取 data[0].personalInfo.address 不存在的属性 wx
  get(data, [0, 'personalInfo', 'address', 'line2', 'wx']); // undefined

  // 取不到的情况先默认返回 undefined，也可以设置
  get(data, [0, 'personalInfo', 'address', 'line2', 'wx'], '我是默认值'); // 我是默认值
```

### 1. isEmpty

> 判断是不是空对象或者空数组

#### Usage

```javascript
import { isEmpty } from 'any-utils';

// 判断空数组
isEmpty([]); // true

// 判断空对象
isEmpty({}); // true

// 判断非空对象
isEmpty({ a:1 }; // false

// 判断非空数组
isEmpty([1]); // false

// 判断非数组或对象
isEmpty(1); // false
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