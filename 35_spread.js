console.log(...[1, 2, 3]);

console.log(..."Hello");

console.log(
  ...new Map([
    ["a", "1"],
    ["b", "2"],
  ])
);

console.log(...new Set([1, 2, 3]));

// console.log(...{ a: 1, b: 2 }); // error

const array = [1, 2, 3];

const max = Math.max.apply(null, array);

const spreadMax = Math.max(...array);

console.log(max, spreadMax);

const array1 = [1, 2].concat([3, 4]);
console.log(array1);

const array2 = [...[1, 2], ...[3, 4]];
console.log(array2);

const array3 = [1, 4];
const array4 = [2, 3];

array3.splice(1, 0, ...array4);
console.log(array3);

const origin = [1, 2];
const copy = [...origin];

console.log(copy);
console.log(copy === origin);

const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);
console.log(sum(1, 2, 3));

// 객체 복사(얕은 복사)
const obj2 = { x: 1, y: 2 };
const copyObj = { ...obj2 };

console.log(copyObj);
console.log(copyObj === obj2);

// 객체 병합
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged);

const changed = { ...{ x: 1, y: 2 }, y: 100 };
console.log(changed);
