// 函数声明：有声明提升
console.log(declaration());

function declaration() {
  return "I am hoisted";
}

// 函数表达式：无提升
const expression = function () {
  return "I am not hoisted";
};

// 箭头函数：无自己的 this，不能当构造函数
const arrow = (a, b) => a + b;

// 默认参数
const greet = (name = "World") => `Hello, ${name}!`;

// 剩余参数（相当于 Python 的 *args）
const sum = (...nums) => nums.reduce((acc, n) => acc + n, 0);

// 高阶函数（函数作为参数/返回值）
function multiplier(factor) {
  return (num) => num * factor;
}

const double = multiplier(2);

// this 绑定规则
const obj = {
  name: "JS",
  regular: function () {
    return this.name;
  },
  arrow: () => this?.name,
};

// 显式绑定
function introduce(greeting) {
  return `${greeting}, I am ${this.name}`;
}

const bound = introduce.bind({ name: "Bound" });

console.log(expression());
console.log(arrow(3, 5));
console.log(greet());
console.log(sum(1, 2, 3, 4, 5));
console.log(double(7));
console.log(obj.regular());
console.log(introduce.call({ name: "Call" }));
console.log(bound("Hi"));

// 手写 bind
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...innerArgs) {
    return fn.apply(context, [...args, ...innerArgs]);
  };
}

const myBound = introduce.myBind({ name: "MyBind" });
console.log(myBound("Hey"));
