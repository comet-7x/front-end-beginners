/**
 * 02-javascript-core/10-dom-and-events/app.js
 *
 * 核心掌握技能：
 * 1. DOM 节点查找与状态建模
 * 2. 表单事件监听与默认行为阻止 (e.preventDefault())
 * 3. 【核心重点】事件委托 (Event Delegation) 机制与捕获/冒泡
 * 4. 动态 DOM 创建与安全设值 (textContent 防范 XSS 注入)
 * 5. 本地持久化 (localStorage)
 */

// 1. 获取 DOM 根节点
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const taskCount = document.querySelector("#task-count");
const clearCompletedBtn = document.querySelector("#clear-completed");

const STORAGE_KEY = "FRONTEND_BEGINNER_TODOS";

// 2. 应用内部状态 (State)
let todos = loadTodos();

/**
 * 从 localStorage 读取数据
 */
function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [
      { id: "1", text: "学习 HTML 语义化与盒模型", completed: true },
      { id: "2", text: "掌握 JS 事件循环微任务与宏任务", completed: false },
      { id: "3", text: "用 Git 提交今天的第一个里程碑", completed: false }
    ];
  } catch {
    return [];
  }
}

/**
 * 将数据保存到 localStorage
 */
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

/**
 * 渲染函数：根据状态驱动视图更新
 */
function render() {
  // 清空现有列表
  todoList.innerHTML = "";

  // 动态创建列表项
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    li.dataset.id = todo.id; // 自定义数据属性 data-id

    const leftDiv = document.createElement("div");
    leftDiv.className = "item-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.dataset.action = "toggle";

    const span = document.createElement("span");
    span.className = "item-text";
    span.textContent = todo.text; // 永远用 textContent 而非 innerHTML 避免 XSS

    leftDiv.append(checkbox, span);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "✕";
    deleteBtn.dataset.action = "delete";
    deleteBtn.setAttribute("aria-label", "删除该项");

    li.append(leftDiv, deleteBtn);
    todoList.appendChild(li);
  });

  // 更新未完成计数
  const uncompletedCount = todos.filter((t) => !t.completed).length;
  taskCount.textContent = `剩余未完成：${uncompletedCount} 项`;
}

// ==========================================
// 3. 事件监听系统
// ==========================================

// 表单提交事件
todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 阻止页面刷新跳转默认行为

  const text = todoInput.value.trim();
  if (!text) return;

  const newTodo = {
    id: Date.now().toString(),
    text,
    completed: false
  };

  todos.push(newTodo);
  saveTodos();
  render();

  todoInput.value = "";
  todoInput.focus();
});

/**
 * 【重点核心机制：事件委托 (Event Delegation)】
 * 不在每一个 li、checkbox、button 上单独绑定 addEventListener，
 * 而是直接在父容器 ul (todoList) 上监听一次 click 事件，
 * 依靠事件冒泡 (Bubble) 特性，通过 e.target 识别触发源。
 * 优势：
 * 1. 节省大量内存，避免成百上千个事件监听器开销
 * 2. 动态新增的 DOM 节点无需重新绑定监听器
 */
todoList.addEventListener("click", (e) => {
  const target = e.target;
  const action = target.dataset.action;
  if (!action) return;

  const itemEl = target.closest(".todo-item");
  if (!itemEl) return;
  const id = itemEl.dataset.id;

  if (action === "toggle") {
    // 切换完成状态
    todos = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
  } else if (action === "delete") {
    // 删除该项
    todos = todos.filter((t) => t.id !== id);
  }

  saveTodos();
  render();
});

// 清除已完成任务
clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter((t) => !t.completed);
  saveTodos();
  render();
});

// 初始化首屏渲染
render();
