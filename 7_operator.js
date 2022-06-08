var x = "1";

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1

x = true;

console.log(+x); // 1

// 부호를 반전한다.
-(-10); // 10

// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // false

Number.isNaN(NaN); // true
Number.isNaN(10); // false

Object.is(NaN, NaN); // true

// 삼항 조건 연산자 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
var result = x % 2 ? "홀수" : "짝수";

// null 타입 확인을 할때는 일치 연산자(===)로 비교하기
typeof null; // object

var foo = null;

typeof foo === null; // false
null === null; // true
