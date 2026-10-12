# Python 开发者迁移 JavaScript / TypeScript 核心速查指南

> **核心优势**：你已经具备了 Python 的编程思维（动态类型、面向对象、脚本与异步基础），学习 JS/TS 时，**不要从零死记语法，而是建立概念映射**。这能让你以 2~3 倍的速度快速突破。

---

## 1. 核心概念与语法对照表

| 概念维度 | Python | JavaScript / TypeScript | 核心注意点 |
| :--- | :--- | :--- | :--- |
| **代码块风格** | 严格缩进（Indentation） | 大括号 `{}` + 分号（推荐配置 Prettier 自动格式化） | JS 空格缩进仅为美观，大括号定义作用域 |
| **变量声明** | `name = "value"` 直接赋值 | `const name = "value"` (优先)<br>`let age = 18` (需重新赋值时) | **绝不使用旧时代的 `var`**；默认全部 `const`，需要修改再改 `let` |
| **常量与不可变** | 约定大写 `MAX_COUNT = 100` | `const MAX_COUNT = 100` | JS 的 `const` 保证**引用不变**；对象内部属性依然可变 |
| **空值表达** | `None` | `null`（主动赋值为空）<br>`undefined`（变量已声明但未赋值） | JS 有两种空值！判断存在建议用可选链 `?.` 与空值合并 `??` |
| **布尔真假值** | `bool(x)`，空列表 `[]`、空字典 `{}` 为 `False` | 假值：`false`, `0`, `""`, `null`, `undefined`, `NaN`<br>**注意：空数组 `[]` 和空对象 `{}` 在 JS 中全是 `true`！** | **大坑**：JS 中 `if ([])` 判定为真，必须用 `[].length > 0` 判断 |
| **相等性判断** | `==`（判断值），`is`（判断引用） | `===` 严格相等（推荐）<br>`==` 宽松相等（会触发隐式类型转换，禁止使用） | 永远用 `===` 和 `!==`，避免 `"" == 0` 这类隐式转换陷阱 |
| **字符串插值** | `f"Hello {name}"` | `` `Hello ${name}` ``（反引号模板字符串） | 必须使用键盘左上角波浪线处的**反引号 `` ` ``** |
| **函数与匿名函数** | `def add(a, b): return a + b`<br>`lambda x: x * 2` | `function add(a, b) { return a + b; }`<br>箭头函数：`(x) => x * 2` | 箭头函数不仅是语法糖，更重要的是它**继承外部的 `this`** |
| **解构与展开** | `*args`, `**kwargs`, `a, b = [1, 2]` | 展开/剩余：`...args`<br>数组解构：`const [a, b] = [1, 2]`<br>对象解构：`const { name, age } = user` | JS 的对象解构在实际开发中使用频率极高 |

---

## 2. 常用数据结构横向映射

### 数组与列表操作 (List vs Array)

```python
# Python
nums = [1, 2, 3, 4]
doubled = [x * 2 for x in nums]                # 列表推导式
evens = [x for x in nums if x % 2 == 0]        # 过滤
total = sum(nums)                              # 求和
```

```javascript
// JavaScript
const nums = [1, 2, 3, 4];
const doubled = nums.map(x => x * 2);          // map 转换
const evens = nums.filter(x => x % 2 === 0);    // filter 过滤
const total = nums.reduce((acc, cur) => acc + cur, 0); // reduce 累加
```

### 字典与对象 / 映射 (Dict vs Object / Map)

```python
# Python
user = {"name": "Alice", "age": 25}
user["city"] = "Beijing"
print(user.get("missing", "default"))
```

```javascript
// JavaScript
const user = { name: "Alice", age: 25 };
user.city = "Beijing";
console.log(user.missing ?? "default"); // 空值合并操作符 ??

// 如果需要非字符串键或频繁增删键值对，使用 Map：
const map = new Map();
map.set(1, "number key");
```

---

## 3. 面向对象与继承机制 (Python Class vs JS Prototype)

- **Python**：真正的类机制，通过类的层级与 MRO (方法解析顺序) 查找属性，方法显式传递 `self`。
- **JavaScript**：本质是**基于原型的对象委托 (Prototypal Delegation)**。
  - 虽然 ES6 提供了 `class` 关键字，但它底层只是原型链的语法糖。
  - 实例访问属性时，若自身没有，会沿着 `__proto__` 顺着原型链一路向上查找到 `Object.prototype`。
  - JS 的 `this` **取决于函数是如何被调用的**（运行期绑定），而不是定义时绑定（除非是箭头函数）。

---

## 4. 异步模型深度解密 (Python asyncio vs JS Event Loop)

- **相同点**：都是单线程事件循环（Event Loop）模型，非阻塞 I/O，使用 `async` / `await` 语法。
- **关键差异**：
  - **Python**：需要显式获取/驱动事件循环（`asyncio.run(main())`）。如果不 await 一个协程对象，它根本不会执行并会报警。
  - **JavaScript**：事件循环是运行时原生驱动的（宿主环境自动常驻）。创建一个 `new Promise((resolve) => ...)` 时，**构造函数内的执行体是立即同步执行的**，只是后续结果会在微任务队列（MicroTask Queue）中等待下一次循环处理。

---

## 5. 类型系统演进 (Python Type Hints vs TypeScript)

| 特性 | Python 类型注解 | TypeScript |
| :--- | :--- | :--- |
| **运行时表现** | 纯提示，运行时完全不报错（需要依靠 mypy 等工具静态检查） | 编译后被完全抹除为纯 JavaScript 代码，零运行时性能损耗 |
| **类型丰富度** | 基本满足类型标注需求 | 拥有世界最强大的图灵完备类型系统（泛型、条件类型、类型收窄、模板字面量、infer 推导） |
| **前后端契约** | Pydantic / FastAPI schema | Zod / tRPC / Prisma Client 自动全栈类型联通 |
