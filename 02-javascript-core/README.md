# JavaScript 核心与底层运行机制实战演练

本模块包含 JavaScript 最核心的 10 个专题，所有代码均为可直接执行、带详细中文注释的实战代码。

## 快速运行

进入当前目录或直接在项目根目录下通过 `npm` 快速运行各模块：

```bash
# 根目录下运行对应专题：
npm run js:01   # 01. 变量与8种数据类型
npm run js:02   # 02. 函数、箭头函数与 this 规则
npm run js:03   # 03. 对象、解构、展开与属性操作
npm run js:04   # 04. 数组高阶方法 (map, filter, reduce)
npm run js:05   # 05. 词法作用域、闭包与防抖节流
npm run js:06   # 06. 原型链、class 语法糖与继承底层
npm run js:07   # 07. 异步编程、Promise、async/await 与事件循环
npm run js:08   # 08. ESM 模块系统导入导出
npm run js:09   # 09. 异常处理、自定义错误与异步异常传播
```

## 学习建议与自测清单

- [ ] **01-variables.js**：弄清楚为什么 `typeof null === 'object'`？为什么 `==` 和 `===` 结果不同？
- [ ] **02-functions.js**：弄清楚箭头函数与普通函数的 `this` 指向区别，为什么箭头函数不能作为构造函数？
- [ ] **03-objects.js**：掌握浅拷贝与深拷贝的底层区别，掌握可选链 `?.` 与空值合并 `??` 的应用。
- [ ] **04-arrays.js**：熟练运用 `map`、`filter` 与 `reduce` 解决复杂数据转换。
- [ ] **05-closures.js**：理解闭包形成的“背包（Lexical Environment）”，手写防抖（debounce）与节流（throttle）。
- [ ] **06-prototypes.js**：搞清楚 `prototype` 和 `__proto__` 的指向关系，画出原型链查找过程。
- [ ] **07-async.js**：彻底搞懂宏任务（setTimeout）与微任务（Promise.then）在事件循环中的执行次序。
- [ ] **08-modules/**：对比 ESM 与 CommonJS 的差异。
- [ ] **09-errors.js**：掌握异步函数中的错误捕获以及未捕获 Promise Rejection 的防范。
- [ ] **10-dom-and-events/**：掌握浏览器中 DOM 查询与事件委托（Event Delegation）性能优化。
