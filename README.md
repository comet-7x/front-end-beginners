# 🚀 前端全栈工程师成长之旅 (Frontend Full-Stack Journey)

> 从 Web 基础三件套（HTML5 / CSS3 / JavaScript）出发，跨越现代双前端框架（Vue 3 / React 19），进阶 TypeScript 静态类型思维，最终通向 Node.js 服务端与端到端全栈工程实践。

---

## 🗺️ 学习阶段总览与打卡进度表

| 阶段 | 模块 | 核心内容与技术栈 | 实践成果 | 状态 |
| :---: | :--- | :--- | :--- | :---: |
| **00** | **工程化与 Git 基建** | Node.js, pnpm, Git 工作流, Prettier, Conventional Commits | 仓库初始化与规范确立 | ✅ 已完成 |
| **01** | **Web 基础三件套** | HTML5 语义化, 盒模型, Flexbox, Grid, 响应式设计 | 响应式个人主页 / 卡片流 | ⏳ 进行中 |
| **02** | **JavaScript 核心与深度** | 作用域与闭包, 原型链, this, 事件循环, 异步 Promise, DOM/BOM | 原生 TodoApp / 手写 Promise | ⏳ 进行中 |
| **03** | **TypeScript 核心实战** | 类型系统, 接口, 泛型约束, 内置工具类型, Type-Challenges | TS 严格模式实操与工具库 | 📋 待开始 |
| **04** | **现代前端双框架** | Vue 3 (Composition API/Pinia) + React 19 (Hooks/Zustand) | 双框架后台看板同构实现 | 📋 待开始 |
| **05** | **Node.js 服务端开发** | Node.js 底层, RESTful API (Hono/NestJS), Prisma ORM, JWT 鉴权 | 独立后端 API 服务 | 📋 待开始 |
| **06** | **全栈综合商业项目** | Next.js / Nuxt 3, Server Actions, Zod, 端到端类型安全 | 全栈协同任务看板系统 | 📋 待开始 |

---

## 📂 仓库目录架构

```text
front-end-beginners/
├── README.md                      # 学习总规划与打卡进度表
├── .gitignore                     # Git 忽略配置（依赖、缓存、环境变量等）
├── .prettierrc                    # 代码统一格式化规范
├── package.json                   # 根目录快捷命令脚本
├── docs/                          # 核心方法论与参考指南
│   ├── roadmap.md                 # 详细全栈路线图与知识体系
│   ├── git-workflow.md            # Git 学习驱动工作流与 Commit 规范
│   ├── python-to-js-ts-cheatsheet.md # Python 开发者迁移 JS/TS 概念映射速查
│   └── source.md                  # 常用开发工具推荐
├── 01-html-css-basics/            # 阶段 1：HTML5 与现代 CSS3 响应式设计
│   └── 01-first-website/          # 基础入门站点演练
├── 02-javascript-core/            # 阶段 2：JavaScript 核心与底层运行机制
│   ├── 01-variables.js            # 8 种数据类型与变量声明
│   ├── 02-functions.js            # 函数、箭头函数与 this 规则
│   ├── 03-objects.js              # 对象、解构、展开与属性操作
│   ├── 04-arrays.js               # 数组核心高阶方法 (map/filter/reduce)
│   ├── 05-closures.js             # 词法作用域、闭包与防抖节流
│   ├── 06-prototypes.js           # 原型链查找与 class 继承机制
│   ├── 07-async.js                # Promise、async/await 与事件循环机制
│   ├── 08-modules/                # ESM 模块规范实战
│   ├── 09-errors.js               # 异常捕获与自定义错误
│   └── 10-dom-and-events/         # DOM 树操作、事件委托与 LocalStorage
├── 03-typescript-mastery/         # 阶段 3：TypeScript 核心与类型体操
├── 04-frontend-frameworks/        # 阶段 4：Vue 3 & React 19 双框架实战对比
├── 05-fullstack-backend/          # 阶段 5：Node.js 服务端与数据库设计
└── 06-capstone-fullstack/         # 阶段 6：商业级全栈项目综合实战
```

---

## ⚡ 常用快捷指令

在项目根目录下，可直接一键运行各个阶段的核心测试脚本：

```bash
# 运行 JavaScript 核心专题代码
npm run js:01    # 变量与数据类型
npm run js:02    # 函数与 this
npm run js:03    # 对象与解构
npm run js:04    # 数组高阶方法
npm run js:05    # 闭包与防抖节流
npm run js:06    # 原型链机制
npm run js:07    # 异步与事件循环
npm run js:08    # ESM 模块
npm run js:09    # 错误处理
```

---

## 📚 推荐核心学习资源库

### 官方文档与高质量教程
- **MDN Web Docs 中文版**：[developer.mozilla.org](https://developer.mozilla.org/zh-CN/docs/Learn_web_development) - 网页标准与 API 最权威参考
- **现代 JavaScript 教程**：[zh.javascript.info](https://zh.javascript.info/) - 系统深入学习 JS 底层机制的第一选择
- **菜鸟教程 (Runoob)**：[runoob.com](https://www.runoob.com/) - 快速语法入门备查
- **TypeScript 官方指南**：[typescriptlang.org](https://www.typescriptlang.org/zh/)
- **Vue 3 官方文档**：[cn.vuejs.org](https://cn.vuejs.org/)
- **React 官方中文文档**：[zh-hans.react.dev](https://zh-hans.react.dev/)

### GitHub 标星宝藏开源项目
- [kamranahmedse/developer-roadmap](https://github.com/kamranahmedse/developer-roadmap)：全球最具影响力的开发者全栈学习路线图
- [lydiahallie/javascript-questions](https://github.com/lydiahallie/javascript-questions)：涵盖大量进阶陷阱与运行机制问答
- [ryanmcdermott/clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)：编写高可读、健壮代码规范
- [type-challenges/type-challenges](https://github.com/type-challenges/type-challenges)：TypeScript 类型体操通关库
- [goldbergyoni/nodebestpractices](https://github.com/goldbergyoni/nodebestpractices)：Node.js 生产架构权威最佳实践
- [gothinkster/realworld](https://github.com/gothinkster/realworld)：用不同全栈组合（React, Vue, Node, Next）构建同一个 Medium 真实系统

---

## 🎯 今日立即开始：第一课实操

1. **查阅专属映射**：阅读 [`docs/python-to-js-ts-cheatsheet.md`](file:///Users/comet/WorkSpace/Project/Web/front-end-beginners/docs/python-to-js-ts-cheatsheet.md)，将已有 Python 编程经验快速映射到 JS。
2. **运行演练**：运行 `npm run js:01`、`npm run js:02`、`npm run js:03`，观察运行输出并阅读对应代码注释。
3. **打开浏览器演练 DOM**：在浏览器中打开 [`02-javascript-core/10-dom-and-events/index.html`](file:///Users/comet/WorkSpace/Project/Web/front-end-beginners/02-javascript-core/10-dom-and-events/index.html)，体验事件委托与动态 DOM 更新。
4. **提交 Git 打卡**：参考 [`docs/git-workflow.md`](file:///Users/comet/WorkSpace/Project/Web/front-end-beginners/docs/git-workflow.md) 完成第一条学习记录提交。
