// JS 原型链：对象通过 [[Prototype]] 链接到另一个对象查找属性

// 方式 1：构造函数 + prototype（旧式）
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  return `${this.name} barks`;
};

const dog = new Dog("Rex", "Shepherd");

// 方式 2：class 语法糖（推荐）
class Shape {
  constructor(color) {
    this.color = color;
  }
  describe() {
    return `A ${this.color} shape`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  describe() {
    return `A ${this.color} circle with area ${this.area().toFixed(2)}`;
  }
}

const circle = new Circle("red", 5);

// 原型链查找
console.log(dog.speak());
console.log(dog.bark());
console.log(circle.describe());

// 原型链结构
console.log(Object.getPrototypeOf(dog) === Dog.prototype);
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
console.log(dog instanceof Dog, dog instanceof Animal);

console.log(Object.getPrototypeOf(circle) === Circle.prototype);
console.log(Object.getPrototypeOf(Circle.prototype) === Shape.prototype);
console.log(circle instanceof Circle, circle instanceof Shape);

// 原型链终点
console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

// new 运算符做了什么（手写）
function myNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, args);
  return result instanceof Object ? result : obj;
}

const dog2 = myNew(Dog, "Max", "Husky");
console.log(dog2.bark());

// 属性查找 vs 赋值
const protoObj = { inherited: "from proto" };
const child = Object.create(protoObj);
child.own = "own property";

console.log(child.own);
console.log(child.inherited);
child.inherited = "shadowed";
console.log(child.inherited);
console.log(protoObj.inherited);
