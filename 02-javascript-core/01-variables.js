/**
 ## 8 种类型清单
1. `number` 数字（整数、小数、Infinity、NaN 都属于 number）
2. `string` 字符串
3. `boolean` 布尔（true /false）
4. `null` 空值
5. `undefined` 未定义
6. `symbol` 符号（ES6，唯一不可变标识）
7. `bigint` 大整数（ES2020，处理超过安全范围的大数）
8. `object` 对象（引用类型）
 **/

const num = 100;
const str = "hello";
const flag = true;
const emptyVal = null;
let notAssigned;
const array = [1, 2, 3, 4, 5];
const s = Symbol("test");
const bigNum = 123n;

console.log("数字类型:", num, typeof num);
console.log("字符串类型:", str, typeof str);
console.log("布尔类型:", flag, typeof flag);
console.log("null类型:", emptyVal, typeof emptyVal);
console.log("undefined类型:", notAssigned, typeof notAssigned);
console.log("数组（属于object）:", array.map(x => x * 10), typeof array);
console.log("symbol类型:", s, typeof s);
console.log("bigint类型:", bigNum, typeof bigNum);
