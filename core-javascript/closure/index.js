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

function 열공스터디(서원, 시윤, 웅진, 유나스터디준비) {
  return `${서원}, ${시윤}, ${웅진}이 ${유나스터디준비} 를 기다립니다`;
}

function 열공스터디진행부분함수(서원, 시윤, 웅진) {
  return function (유나스터디준비) {
    return 열공스터디(서원, 시윤, 웅진, 유나스터디준비);
  };
}

console.log(열공스터디진행부분함수("유나스터디준비")); // 서원, 시윤, 웅진이 유나스터디준비를 기다립니다.

function 무신사이쩜영FE(a) {
  return function (b) {
    return function (c) {
      return `무신사이쩜영FE를 진행하기 위한 ${a}, ${b}, ${c} 가 준비되었습니다`;
    };
  };
}

const step1 = 무신사이쩜영FE("기획"); // 첫번째 인수만 넣음
console.log(step1); // [funcion] b 을 기다리는 함수가 반환

const step2 = step1("디자인"); // 두번째 인수만 넣음
console.log(step2); // [funcion] c 을 기다리는 함수가 반환

// const result = step2(api) // 세번째 인수를 넣어서 최종결과 받음
const result = 무신사이쩜영FE("기획")("디자인")("api"); // 세번째 인수를 넣어서 최종결과 받음
console.log(result);
