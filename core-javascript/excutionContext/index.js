function a(x) {
  console.log(x);
  var x;
  console.log(x);
  var x = 2;
  console.log(x);
}
a(1);

function a(x) {
  var x;
  var x;
  x = 1;
  console.log(x);
  console.log(x);
  x = 2;
  console.log(x);
}

function a2() {
  console.log(b);
  var b = "bbb";
  console.log(b);
  function b() {}
  console.log(b);
}
a2();

console.log(sum(1, 2));
// console.log(multiply(3, 4));

function sum(a, b) {
  return a + b;
}

var multiply = function (a, b) {
  return a + b;
};

var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a);
    var a = 3;
  };
  inner();
  console.log(a);
};
outer();
console.log(a);

var a;
var outer;
a = 1;
outer = function () {
  var inner;
  inner = function () {
    var a;
    console.log(a);
    a = 3;
  };
  inner();
  console.log(a);
};
outer();
console.log(a);
