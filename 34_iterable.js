const isIterable = (v) =>
  v !== null && typeof v[Symbol.iterator] === "function";

// 배열, 문자열, Map, Set 등은 이터러블이다.
isIterable([]);
isIterable("");
isIterable(new Map());
isIterable(new Set());
isIterable({}); // false

const arr = [1, 2, 3];

console.log(Symbol.iterator in arr);

for (const item of arr) {
  console.log(item);
}

console.log([...arr]);

const obj = { a: 1, b: 2 };

console.log(Symbol.iterator in obj);

// for (const item of obj) {
//   console.log(item);
// } // error

console.log({ ...obj });

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

// for (const item of arrayLike) {
//   console.log(item);
// } // error

const newArrLike = Array.from(arrayLike);

for (const item of newArrLike) {
  console.log(item);
}
