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
