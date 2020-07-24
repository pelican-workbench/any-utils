# any-utils

纯 JS utils 库，适用前端任何场景

## Installment

```sh
npm install any-utils --save
```

## Documentation

### 1. get

访问嵌套对象，避免代码中出现类似 a && a.b ? a.b.c : null 的代码

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
isEmpty({ a:1 }; // false

// 判断非空数组
isEmpty([1]); // false

// 判断非数组或对象
isEmpty(1); // false
```

### 3. parseQuery

将类似 key1=18127873881&key2=2 格式的数据解析为 { key1: '18127873881', key2: 2 }

#### Usage

```javascript
import { parseQuery } from 'any-utils';

// 解析 key1=18127873881&key2=2
parseQuery('key1=18127873881&key2=2') // { key1: '18127873881', key2: '2' }

// 解析空字符串
parseQuery('') // {}
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
