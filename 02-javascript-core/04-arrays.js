const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map：一对一转换
const doubled = nums.map((n) => n * 2);

// filter：筛选
const evens = nums.filter((n) => n % 2 === 0);

// reduce：归约为单一值
const sum = nums.reduce((acc, n) => acc + n, 0);

// 链式操作
const result = nums
  .filter((n) => n % 2 === 0)
  .map((n) => n ** 2)
  .reduce((acc, n) => acc + n, 0);

// some / every
const hasNegative = nums.some((n) => n < 0);
const allPositive = nums.every((n) => n > 0);

// find / findIndex
const firstEven = nums.find((n) => n % 2 === 0);
const firstEvenIdx = nums.findIndex((n) => n % 2 === 0);

// 展开运算符与解构
const [first, second, ...rest] = nums;
const merged = [...nums, 11, 12];

// 数组方法会不会改变原数组？
const mutable = [3, 1, 2];
mutable.sort();
const sortedCopy = [...mutable].sort((a, b) => a - b);

console.log(doubled);
console.log(evens);
console.log(sum, result);
console.log(hasNegative, allPositive);
console.log(firstEven, firstEvenIdx);
console.log(first, second, rest);
console.log(merged);
console.log(mutable, sortedCopy);

// 手写 reduce
Array.prototype.myReduce = function (fn, initial) {
  let acc = initial;
  let startIdx = 0;
  if (acc === undefined) {
    acc = this[0];
    startIdx = 1;
  }
  for (let i = startIdx; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};

console.log(nums.myReduce((a, b) => a + b, 0));

// 数组去重
const withDups = [1, 2, 2, 3, 3, 3];
console.log([...new Set(withDups)]);
