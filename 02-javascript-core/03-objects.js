// 对象字面量与简写
const name = "JS";
const version = 2024;
const language = { name, version };

// 解构
const extra = { year: 2025 };
const { name: langName, year = 2025 } = { ...language, ...extra };

// 展开运算符（浅拷贝）
const clone = { ...language };
clone.name = "TS";

// 动态属性名
const key = "dynamic";
const dynamicObj = { [key]: "computed" };

// 对象方法简写
const calculator = {
  value: 0,
  add(n) {
    this.value += n;
    return this;
  },
  subtract(n) {
    this.value -= n;
    return this;
  },
  get value() {
    return this._value;
  },
  set value(v) {
    this._value = v;
  },
};

// 引用类型 vs Python dict
const a = { x: 1 };
const b = a;
b.x = 99;

console.log(language, langName, year);
console.log(clone, language);
console.log(dynamicObj);
console.log(calculator.add(10).subtract(3).value);
console.log(a.x, b.x);

// Object 常用方法
console.log(Object.entries(language));
console.log(Object.keys(language));
console.log(Object.values(language));

// 深拷贝
const nested = { a: { b: 1 } };
const deepClone = JSON.parse(JSON.stringify(nested));
deepClone.a.b = 999;
console.log(nested.a.b, deepClone.a.b);
