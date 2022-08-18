function foo() {
  const x = 1;
  const y = 2;

  function bar() {
    // debugger;
    console.log(x);
  }
  return bar;
}

const bar = foo();
bar();

// const counter = (function () {
//   let num = 0;

//   return {
//     increase() {
//       return ++num;
//     },

//     decrease() {
//       return --num;
//     },
//   };
// })();

// console.log(increase.increase()); // 1
// console.log(increase.increase()); // 2
// console.log(increase.increase()); // 3
// console.log(increase.decrease()); // 3

const counter = (function () {
  let counter = 0;

  return function (aux) {
    counter = aux(counter);
    return counter;
  };
})();

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

console.log(counter(increase)); // 1
console.log(counter(increase)); // 2

console.log(counter(decrease)); // 1
console.log(counter(decrease)); // 0

function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };
}

const me = new Person("Kim", 30);
me.sayHi();
console.log(me.name, me._age);

const you = new Person("Lee", 20);
you.sayHi();
console.log(you.name, you._age);

const Person2 = (function () {
  let _age = 0;

  function Person2(name, age) {
    this.name = name;
    _age = age;
  }

  Person2.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };

  return Person2;
})();

const me2 = new Person2("Kim", 30);
me2.sayHi();

const you2 = new Person2("Lee", 20);
you2.sayHi();
me2.sayHi();

var funcs = [];

for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

for (let j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
