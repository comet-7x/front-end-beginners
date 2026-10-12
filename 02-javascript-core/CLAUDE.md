# JS Demo

JavaScript/TypeScript 学习练习项目。适用于有 Python 背景的开发者。

## 运行方式

```bash
npm run 01  # 变量与类型
npm run 02  # 函数
npm run 03  # 对象与解构
npm run 04  # 数组
npm run 05  # 作用域与闭包
npm run 06  # 原型链
npm run 07  # 异步
npm run 08  # 模块
npm run 09  # 错误处理
```

## 目录结构

- `01-variables.js` - JS 基础类型
- `02-functions.js` - 函数、this、高阶函数
- `03-objects.js` - 对象、解构、展开
- `04-arrays.js` - 数组方法
- `05-closures.js` - 闭包、柯里化、防抖节流
- `06-prototypes.js` - 原型链、class
- `07-async.js` - Promise、async/await、事件循环
- `08-modules/` - ESM 模块系统
- `09-errors.js` - 错误处理

## 知识点速查

### 与 Python 的关键差异

| 特性     | Python       | JavaScript                        |
| -------- | ------------ | --------------------------------- |
| 代码块   | 缩进         | 花括号`{}`                      |
| 变量声明 | 直接赋值     | const/let/var                     |
| 字符串   | 单/双引号    | 单/双引号/模板字符串              |
| 相等判断 | `==`（值） | `===`（严格）/ `==`（会转型） |
| 空值     | None         | null / undefined                  |
| 异步     | asyncio      | Promise / async/await             |
| 类型系统 | 运行时检查   | 运行时检查（TS 编译期检查）       |

### 深入专题

1. **事件循环** - 调用栈、微任务、宏任务执行顺序
2. **原型链** - `__proto__` vs `prototype` 查找机制
3. **this 绑定** - 默认/隐式/显式/new 四种规则
4. **闭包** - 词法作用域与内存泄漏
5. **异步并发** - Promise 组合子与 AbortController
