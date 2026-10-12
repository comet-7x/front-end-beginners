// try/catch/finally
function riskyOperation(shouldFail) {
  if (shouldFail) {
    throw new Error("Operation failed");
  }
  return "success";
}

function divide(a, b) {
  if (b === 0) {
    throw new TypeError("Division by zero");
  }
  return a / b;
}

try {
  riskyOperation(true);
} catch (err) {
  console.error(err.name + ":", err.message);
} finally {
  console.log("cleanup");
}

// 自定义 Error
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "NetworkError";
    this.status = status;
  }
}

function validateUser(user) {
  if (!user.email) {
    throw new ValidationError("email", "Email is required");
  }
  if (!user.age || user.age < 18) {
    throw new ValidationError("age", "Must be 18+");
  }
}

try {
  validateUser({ name: "test" });
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`[${err.field}] ${err.message}`);
  } else {
    throw err;
  }
}

// 异步错误处理
async function asyncRisky() {
  await new Promise((r) => setTimeout(r, 50));
  throw new Error("Async错误");
}

async function catchAsync() {
  try {
    await asyncRisky();
  } catch (err) {
    console.error("caught async:", err.message);
  }
}

// Promise 未捕获拒绝
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});

// 错误传播：同步 vs 异步
function syncThrow() {
  throw new Error("sync");
}

async function asyncThrow() {
  throw new Error("async");
}

try {
  syncThrow();
} catch (err) {
  console.log("sync捕获:", err.message);
}

try {
  asyncThrow();
} catch (err) {
  console.log("异步捕获:", err.message);
}

async function run() {
  try {
    await asyncThrow();
  } catch (err) {
    console.log("await 捕获:", err.message);
  }
}

catchAsync();
run();
