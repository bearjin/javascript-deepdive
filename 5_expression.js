var x; // 변수선언문
x = 5; // 할당문

function foo() {} // 함수 선언문

const a = function abc() {}; // 표현식

// 조건문, 반복문은 표현식이 될 수 없다
const b = if (x >  5) { console.log(x)} 
const c = for(let i = 0; i < 5; i++) {console.log(i)};

