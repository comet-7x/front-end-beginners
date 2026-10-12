import circleArea, { PI, add, multiply } from "./math.js";
import utils, { capitalize, slugify } from "./utils.js";

console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(PI);
console.log(circleArea(3));
console.log(capitalize("hello"));
console.log(slugify("Hello World JS"));
console.log(utils.capitalize("world"));

// 动态导入
const lazyLoad = async () => {
  const module = await import("./math.js");
  return module.add(10, 20);
};

lazyLoad().then(console.log);

// 循环依赖示例（谨慎使用）
// a.js imports b.js, b.js imports a.js
// ESM 通过 live binding 处理，但逻辑复杂时避免
