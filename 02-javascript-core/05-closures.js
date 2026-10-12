// 闭包：函数记住其定义时的词法作用域
function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();

// 私有变量模式（模块模式）
const createBankAccount = (initialBalance) => {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount <= 0) throw new Error("Amount must be positive");
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) throw new Error("Insufficient funds");
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
};

const account = createBankAccount(100);

// 闭包陷阱：循环中的 var
const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => i);
}

// 修复：用 let 或 IIFE
const funcsFixed = [];
for (let i = 0; i < 3; i++) {
  funcsFixed.push(() => i);
}

// 函数柯里化
const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...more) => curried(...args, ...more);
  };
  return curried;
};

const add = curry((a, b, c) => a + b + c);

// 防抖
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 节流
function throttle(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount());

console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());

console.log(funcs.map((f) => f()));
console.log(funcsFixed.map((f) => f()));

console.log(add(1)(2)(3));
console.log(add(1, 2)(3));

const debouncedLog = debounce((msg) => console.log(msg), 300);
debouncedLog("debounced 1");
debouncedLog("debounced 2");

const throttledLog = throttle((msg) => console.log(msg), 500);
throttledLog("throttled 1");
setTimeout(() => throttledLog("throttled 2"), 200);
setTimeout(() => throttledLog("throttled 3"), 600);
