const set = new Set();

console.log(set);

const set1 = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);

console.log(set1);

// 배열 중복 요소 제거
const uniq1 = (array) => array.filter((v, i, self) => self.indexOf(v) === i);

console.log(uniq1([2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 1, 1, 1]));

const uniq2 = new Set([2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 1, 1, 1]);

console.log(uniq2);

const { size: uniq2Size } = uniq2;

console.log(uniq2Size);

// 요소 추가
uniq2.add(5);

console.log(uniq2);

uniq2.add(NaN).add(NaN);

console.log(uniq2);

// 요소 존재 확인
console.log(uniq2.has(2));

// 요소 삭제
uniq2.delete(2);

console.log(uniq2);

// 요소 일괄 삭제
uniq2.clear();

console.log(uniq2);

uniq2.add(1).add(2).add(3).add(4);

console.log(uniq2);

uniq2.forEach((v, v2, set) => console.log(v, v2, set));

// 교집합
Set.prototype.intersection = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3, 5, 6]);

console.log(setA.intersection(setB));

// 합집합
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

console.log(setA.union(setB));

// 차집합
Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

console.log(setA.difference(setB));

// 부분 집합과 상위 집합
Set.prototype.isSuperset = function (subset) {
  const supersetArr = [...this];
  return [...supersetArr].every((v) => supersetArr.includes(v));
};

console.log(setA.isSuperset(setB));

const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(map);

const { size: mapSize } = map;

console.log(mapSize);

// 요소 추가
map.set("key3", "value3").set("key4", "value4");

console.log(map);

const lee = { name: "Lee" };

map.set(lee, "developer");

console.log(map);

// 요소 취득
console.log(map.get(lee));

// 요소 존재 여부 확인
console.log(map.has(lee));

// 요소 삭제
map.delete("key1");
console.log(map);

// 요소 일괄 삭제
map.clear();
console.log(map);

const kim = { name: "Kim" };
const park = { name: "Park" };

const mapLoop = new Map([
  [lee, "developer"],
  [park, "designer"],
]);

mapLoop.forEach((v, k, map) => console.log(v, k, map));

console.log(Symbol.iterator in map);

for (const item of mapLoop) {
  console.log(item);
}

console.log([...mapLoop]);

const [a, b] = mapLoop;

console.log(a, b);

// 요소키를 값으로 갖는 이터레이터를 반환한다.
for (const key of mapLoop.keys()) {
  console.log(key);
}

// 요소값을 값으로 갖는 이터레이터를 반환한다.
for (const value of mapLoop.values()) {
  console.log(value);
}

// 요소키와 요소값을 값으로 갖는 이터레이터를 반환한다.
for (const entry of mapLoop.entries()) {
  console.log(entry);
}
