const arr = [1, 2, 3, 4, 5];

arr.length = 0;

console.log(arr);

const arr2 = [1];

arr2.length = 5;

console.log(arr2);

const newArray = new Array(10, 20, 30);

console.log(newArray);

const newArrayOf = Array.of(10);
// const newArrayOf = new Array.of(10); error

console.log(newArrayOf);

const arrayFrom = Array.from({ length: 3, 0: "a", 1: "b", 2: "c" });

console.log(arrayFrom);

const arrayFrom2 = Array.from({ length: 3 }, (_, i) => i);

console.log(arrayFrom2);

const arrayLike = {
  0: "apple",
  1: "banana",
  2: "orange",
  length: 3,
};

for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}

console.dir(arrayLike);
console.dir(arrayFrom2);

const arrayLike2 = {
  ...arrayLike,
};

console.log(Array.from(arrayLike2));

const addArray = [];

addArray[0] = 0;
addArray["addOne"] = 1;
addArray[2] = 2;

console.log(addArray, addArray.length, addArray[1]);

console.log(Array.from(addArray));

const deleteArray = [1, 2, 3];

delete deleteArray[1];

console.log(deleteArray);

deleteArray.splice(1, 1);

console.log(deleteArray);

const foods = ["apple", "banana"];

// if (foods.indexOf("orange") === -1) {
//   foods.push("orange");
// }

if (!foods.includes("orange")) {
  foods.push("orange");
}

console.log(foods);

foods[foods.length] = "grape";

console.log(foods);

let newFoods = [...foods, "lemon", "watermelon"];

console.log(newFoods);

newFoods.pop();

console.log(newFoods);

const newFoodsLength = newFoods.unshift("watermelon");

console.log(newFoods, newFoodsLength);

let result = foods.concat(newFoods);

console.log(result);

result = newFoods.concat(foods);

console.log(result);

const numArray1 = [1, 2];

const newNumArray1 = numArray1.concat(3, 4);

console.log(newNumArray1);

const newNumArray2 = [3, 4].concat(numArray1);

console.log(newNumArray2);

const spliceArray = [1, 2, 3, 4];

const resultSplice = spliceArray.splice(0, 2, 5, 6);

console.log(`spliceArray: ${spliceArray}, resulteSplice: ${resultSplice}`);

const fruits = ["Banana", "Orange", "Apple"];

fruits.sort();

console.log(fruits);

const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();

console.log(points);

points.sort((a, b) => a - b);

console.log(points);

points.sort((a, b) => b - a);

console.log(points);

const todos = [
  { id: 4, content: "JavaScript" },
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
];

const compare = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
};

todos.sort(compare("id"));
console.log(todos);

[1, 2, 3].forEach((item, index, arr) =>
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`)
);

const mapResult = [1, 2, 3].map((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`);
  return 0;
});

console.log(mapResult);

const sum = [1, 2, 3, 4].reduce((acc, cur, index, arr) => acc + cur);

console.log(sum);

// 평균구하기
const values = [24, 38, 11, 67, 99, 1];

const average = values.reduce((acc, cur, index, { length }) =>
  index === length - 1 ? (acc + cur) / length : acc + cur
);

console.log(average);

// 최대값 구하기
const max = values.reduce((acc, cur, index, arr) => (acc > cur ? acc : cur));
const max2 = Math.max(...values);
console.log(max, max2);

// 요소의 중복 횟수 구하기
const repeatFruits = ["banana", "apple", "apple", "banana", "orange"];

const count = repeatFruits.reduce((acc, cur, index, arr) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(count);

// 중첩 배열 평탄화
const repeatArray = [1, [2, 3], 4, [[5], 6]];
const flatten = repeatArray.reduce(
  (acc, cur, index, arr) => acc.concat(cur),
  []
);

const flatten2 = repeatArray.flat(2);

console.log(flatten, flatten2);

// 중복 요소 제거
const repeatNumberArray = [1, 1, 2, 5, 3, 4, 5, 6, 8, 7, 7, 8, 1, 1, 8];
const resultRepeatNumber = repeatNumberArray.reduce(
  (acc, cur, index, arr) => (arr.indexOf(cur) === index ? [...acc, cur] : acc),
  []
);

const resultRepeatNumber2 = repeatNumberArray.filter(
  (val, index, arr) => arr.indexOf(val) === index
);

console.log(resultRepeatNumber, resultRepeatNumber2);
