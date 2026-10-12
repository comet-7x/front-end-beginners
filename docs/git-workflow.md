# Git 驱动学习工作流与规范指南

> **理念**：将这个学习仓库打造成你的**真实代码履历与技术作品集 (Portfolio)**。每一条 Commit 记录都反映了你的思考过程、Bug 排查经验与代码演进。

---

## 1. 提交信息规范 (Conventional Commits)

每次学习或编写代码完成后，使用结构化的提交信息：

```
<类型>(<影响范围可选>): <简短描述>

[可选的详细正文说明]
```

### 常用类型前缀 (Type)

| 类型 | 说明 | 示例 |
|------|------|------|
| `study` | 学习新的语法知识点或完成章节练习 | `study(js): 完成闭包与高阶函数核心练习` |
| `feat` | 开发了一个新功能或独立微项目 | `feat(html-css): 完成响应式个人名片页面` |
| `fix` | 修复了代码中的 bug 或逻辑错误 | `fix(async): 修复 Promise 并发时的未捕获异常` |
| `refactor` | 重构优化已有代码（不改变对外功能） | `refactor(todo): 使用事件委托重构列表点击事件` |
| `docs` | 补充或更新学习笔记、README、路线图 | `docs: 补充 Python 与 JS 事件循环对比笔记` |
| `test` | 增加或修改测试用例 | `test(ts): 添加泛型约束工具函数单元测试` |
| `chore` | 项目依赖、配置文件、Git 忽略规则变动 | `chore: 配置 .prettierrc 与 package.json 脚本` |

---

## 2. 学习日常 Git 操作标准流程

### 每日编码三步曲

```bash
# 1. 确认当前修改状态
git status

# 2. 查看具体改动的代码行（非常好的复盘习惯）
git diff

# 3. 暂存并提交有意义的原子变更
git add .
git commit -m "study(js): 学习并验证原型链查找与 class 继承机制"
```

---

## 3. 里程碑分支与标签管理 (Milestones & Tags)

当你完成一个完整的学习阶段或重大项目时，打上 Git 标签 (Tag)，方便随时回溯成长轨迹：

```bash
# 阶段 1 完成后打标签
git tag -a v1.0-web-basics -m "完成 HTML5 & 现代 CSS 基础与响应式实战"

# 阶段 2 完成后打标签
git tag -a v2.0-js-core -m "精通 JavaScript 核心与异步运行机制"

# 查看所有里程碑标签
git tag -n
```

---

## 4. 连接到远程代码仓库 (GitHub / Gitee)

当你想将学习仓库同步到 GitHub 形成个人公开代码主页时，只需执行：

```bash
# 1. 在 GitHub 上创建一个新的空仓库 (例如 front-end-fullstack-journey)
# 2. 关联远程仓库地址
git remote add origin https://github.com/<你的用户名>/front-end-fullstack-journey.git

# 3. 将本地 main 分支推送到远程
git branch -M main
git push -u origin main --tags
```
