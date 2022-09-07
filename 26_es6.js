// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     return arr.map(function (item) {
//       return this.prefix + item;
//     });
//   }
// }

// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     const that = this;
//     return arr.map(function (item) {
//       return that.prefix + item;
//     });
//   }
// }

// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     return arr.map(function (item) {
//       return this.prefix + item;
//     }, this);
//   }
// }

// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     return arr.map(
//       function (item) {
//         return this.prefix + item;
//       }.bind(this)
//     );
//   }
// }

class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transform", "transition"]));

const counter = {
  num: 1,
  increase: () => ++this.num,
};

console.log(counter.increase());

window.x = 1;

const normal = function () {
  return this.x;
};

const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 })); // 1

function foo(param, ...rest) {
  console.log(param);
  console.log(rest);
}

foo(1, 2, 3, 4, 5, 6);

const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);

console.log(sum(1, 2, 3, 4, 5)); // 15

const sum2 = (x = 0, y = 0) => x + y;

console.log(sum2(10, 20));
console.log(sum2(10));

function sum3(x, y = 0) {
  console.log(arguments.length);
}

console.log(sum3.length);
console.log(sum3(1, 2, 3, 4, 5));
