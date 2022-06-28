const log = console.log;

const add1 = (function () {
  const a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();

log(add1(10, 20));

(function bar() {
  log("bar");
});
// bar();

function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

var num = 100;
var person = { name: "Lee" };

log(num); // 100
log(person); // { name: 'Lee' }

changeVal(num, person);

log(num); // 100
log(person); // { name: 'Kim' }

(function () {
  log("a");
})();

log(!(function () {})());

log(
  +(function () {
    return "123";
  })()
);

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
  }

  return x + y;
}

function add(x, y) {
  x = x || 0;
  y = y || 0;

  return x + y;
}

function add(x = 0, y = 0) {
  return x + y;
}

function countdown(n) {
  for (var i = n; i >= 0; i--) log(i);
}

countdown(10);

function countdown(n) {
  if (n < 0) return;
  log(n);
  countdown(n - 1);
}

countdown(20);
