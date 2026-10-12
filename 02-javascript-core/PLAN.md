# JS / TS 学习计划（Python 背景 → 全栈）

## 定位
- 已有：Python（动态类型、脚本/异步基础）
- 目标：JS 核心 → TS 类型系统 → Node 实践 → 前端（按需）
- 团队栈：Python（脚本/数据/AI）+ TS（前端或 Node BFF）+ Java（后端主力）

---

## 阶段 1：JavaScript 核心（2-3 周，Node 环境，不碰页面）

| 模块 | 知识点 | 文件 | 深入重点 |
|------|--------|------|----------|
| 1. 变量与类型 | const/let/var、8 种原始类型、类型转换、`typeof` | `01-variables.js` | `==` vs `===`、NaN 行为 |
| 2. 函数 | 函数声明/表达式、箭头函数、默认参数、剩余参数、高阶函数 | `02-functions.js` | `this` 绑定规则（JS 特色） |
| 3. 对象与解构 | 对象字面量、解构、展开运算符、属性简写、方法简写 | `03-objects.js` | 对象引用 vs Python dict |
| 4. 数组 | 常用方法（map/filter/reduce/some/every）、展开、解构 | `04-arrays.js` | `reduce` 本质、链式操作 |
| 5. 作用域与闭包 | 块级作用域、函数作用域、闭包、模块模式 | `05-closures.js` | **深入：闭包原理、内存泄漏** |
| 6. 原型链 | `prototype`、`__proto__`、继承、`class` 语法糖 | `06-prototypes.js` | **深入：原型链查找机制** |
| 7. 异步 | 回调 → Promise → async/await、错误处理、并发 | `07-async.js` | **深入：事件循环、宏任务/微任务** |
| 8. 模块 | ESM（import/export）、CommonJS 对比、模块解析 | `08-modules/` | 循环依赖、tree-shaking 原理 |
| 9. 错误处理 | try/catch/finally、自定义 Error、Promise reject | `09-errors.js` | 异步错误传播 |

---

## 阶段 2：TypeScript 核心（2-3 周）

| 模块 | 知识点 | 文件 |
|------|--------|------|
| 1. 基础类型 | 类型注解、字面量类型、any/unknown/never、类型推断 | `ts/01-basic-types.ts` |
| 2. 接口与类型别名 | interface vs type、可选/只读、索引签名、函数类型 | `ts/02-interfaces.ts` |
| 3. 联合与交叉 | 联合类型、交叉类型、类型收窄、类型守卫 | `ts/03-union-intersection.ts` |
| 4. 泛型 | 泛型函数/接口/类、约束、条件类型 | `ts/04-generics.ts` |
| 5. 工具类型 | Partial/Required/Pick/Omit/Record/ReturnType 等 | `ts/05-utility-types.ts` |
| 6. 进阶 | 映射类型、模板字面量类型、声明文件、tsconfig | `ts/06-advanced.ts` |
| 7. Node 实践 | tsx/ts-node、@types/node、写 CLI 工具 | `ts/07-node-cli/` |

---

## 阶段 3：前端（按需，看团队业务）

### 情况 A：TS 写 Web 页面
- HTML 基础 → CSS 基础 → DOM 操作 → React/Vue
- 目标：能写组件、理解虚拟 DOM、状态管理

### 情况 B：TS 写 Node 后端 / BFF
- Express/Koa/Fastify、REST API、数据库 ORM、鉴权
- 前端仅了解概念

---

## 深入专题（JS/TS 特有，Python 没有的）

1. **事件循环**：调用栈、微任务队列、宏任务队列、执行顺序
2. **原型链**：`__proto__` vs `prototype`、继承查找链
3. **this 绑定**：默认绑定、隐式绑定、显式绑定、new 绑定、箭头函数
4. **类型体操**：条件类型、infer、递归类型、模板字面量
5. **异步并发**：Promise.all/allSettled/race、AbortController

---

## 每日节奏建议

- 30 分钟：学知识点（读代码 + 注释）
- 60 分钟：写练习（改代码、修 bug、重构）
- 15 分钟：对比 Python 写笔记（"JS 里 X 相当于 Python 里的 Y"）
- 周末：做一个小项目整合本周知识

---

## 检验标准

- [ ] 能解释 `[] == ![]` 为什么是 `true`
- [ ] 能手写 Promise、防抖节流、深拷贝
- [ ] 能画出原型链查找图
- [ ] 能说出事件循环输出顺序
- [ ] 能用 TS 写一个带完整类型标注的 CLI 工具
