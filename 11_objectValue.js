const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o }; // 스프레드 문법
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

var a = { a: [1, 2, 3] };
var b = a;

a === b; // 얕은복사

a.a[0] = 4;
b.a[0]; // 4

var b = { a: [...a.a] };

a.a[0] = 5;
b.a[0]; // 4
