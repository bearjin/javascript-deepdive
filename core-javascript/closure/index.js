var outer = function () {
  var a = 1;
  var inner = function () {
    console.log("outer", ++a);
  };
  inner();
};
outer();
outer();

var outer2 = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner();
};
var outerTwo = outer2();
console.log("outerTwo", outerTwo);
console.log("outerTwo", outerTwo);

var outer3 = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
};
var outerThree = outer3();
console.log("outerThree", outerThree());
console.log("outerThree", outerThree());
console.log("outerThree", outerThree());

// NOTE return 없이도 클로저가 발생하는 다양한 경우
// 1. setInterval/setTimeout
(function () {
  var a = 0;
  var intervalId = null;
  var inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId);
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();

// 1. eventListener
(function () {
  var count = 0;
  var button = document.createElement("button");
  button.innerText = "click";
  button.addEventListener("click", function () {
    console.log(++count, "times clicked");
  });
  document.body.appendChild(button);
})();

// NOTE 클로저의 메모리관리
// 1. return에 의한 클로저의 메모리 해제
var outer4 = (function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
})();
console.log(outer4());
console.log(outer4());
outer4 = null; // outer 식별자의 inner 함수 참조를 끊음

// 2. setInterval에 의한 클로저의 메모리 해제
(function () {
  var a = 0;
  var intervalId = null;
  var inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId);
      inner = null; // inner 식별자의 함수 참조를 끊음
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();

// 3. eventListener에 의한 클로저의 메모리 해제
(function () {
  var count = 0;
  var button = document.createElement("button");
  button.innerText = "click";
  var clickHandler = function () {
    console.log(++count, "times clicked");
    if (count >= 10) {
      button.removeEventListener("click", clickHandler);
      clickHandler = null; // clickHandler 식별자의 함수 참조를 끊음
    }
  };
  button.addEventListener("click", clickHandler);
  document.body.appendChild(button);
})();
