// 异步：回调 → Promise → async/await

// 回调地狱
function fetchDataCallback(url, callback) {
  setTimeout(() => {
    callback(null, `data from ${url}`);
  }, 100);
}

// Promise：状态机（pending → fulfilled/rejected，不可逆）
function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.startsWith("/api")) {
        resolve(`data from ${url}`);
      } else {
        reject(new Error(`Invalid URL: ${url}`));
      }
    }, 100);
  });
}

// Promise 链式调用
fetchDataPromise("/api/users")
  .then((data) => {
    console.log(data);
    return fetchDataPromise("/api/posts");
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message))
  .finally(() => console.log("done"));

// Promise 静态方法
const promises = [
  fetchDataPromise("/api/1"),
  fetchDataPromise("/api/2"),
  fetchDataPromise("/api/3"),
];

Promise.all(promises).then((results) => {
  console.log("all:", results);
});

Promise.allSettled(promises).then((results) => {
  console.log("settled:", results.map((r) => r.status));
});

Promise.race([
  new Promise((r) => setTimeout(() => r("slow"), 300)),
  new Promise((r) => setTimeout(() => r("fast"), 100)),
]).then((winner) => console.log("race winner:", winner));

// async/await：同步写法，异步执行
async function fetchAll() {
  try {
    const [users, posts] = await Promise.all([
      fetchDataPromise("/api/users"),
      fetchDataPromise("/api/posts"),
    ]);
    return { users, posts };
  } catch (err) {
    console.error("fetchAll error:", err.message);
    throw err;
  }
}

// 串行 vs 并行
async function serial() {
  const start = Date.now();
  const a = await fetchDataPromise("/api/1");
  const b = await fetchDataPromise("/api/2");
  console.log("serial time:", Date.now() - start);
  return [a, b];
}

async function parallel() {
  const start = Date.now();
  const [a, b] = await Promise.all([
    fetchDataPromise("/api/1"),
    fetchDataPromise("/api/2"),
  ]);
  console.log("parallel time:", Date.now() - start);
  return [a, b];
}

// 手写 Promise（简化版）
class MyPromise {
  #state = "pending";
  #value;
  #callbacks = [];

  constructor(executor) {
    const resolve = (value) => {
      if (this.#state !== "pending") return;
      this.#state = "fulfilled";
      this.#value = value;
      this.#callbacks.forEach((cb) => cb.onFulfilled(value));
    };
    const reject = (reason) => {
      if (this.#state !== "pending") return;
      this.#state = "rejected";
      this.#value = reason;
      this.#callbacks.forEach((cb) => cb.onRejected(reason));
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handle = (callback, value) => {
        setTimeout(() => {
          try {
            const result = callback ? callback(value) : value;
            resolve(result);
          } catch (err) {
            reject(err);
          }
        }, 0);
      };
      if (this.#state === "fulfilled") {
        handle(onFulfilled, this.#value);
      } else if (this.#state === "rejected") {
        handle(onRejected, this.#value);
      } else {
        this.#callbacks.push({
          onFulfilled: (val) => handle(onFulfilled, val),
          onRejected: (val) => handle(onRejected, val),
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// 事件循环示例
console.log("1 sync");

setTimeout(() => console.log("5 macro"), 0);

Promise.resolve().then(() => console.log("3 micro"));

queueMicrotask(() => console.log("4 micro"));

console.log("2 sync");

fetchAll().then(console.log);
serial();
parallel();

// 运行测试
const test = new MyPromise((resolve) => {
  setTimeout(() => resolve("custom promise"), 100);
});
test.then((val) => console.log(val));
