// 블럭문
{
  var foo = 10;
}
console.log(foo);

/**
 * 레이블문은 중복 반복문 안에서 외부 반복문을 탈출하기 위해 사용한다.
 * 객체와 형태가 비슷하고 가독성도 좋지 않기 때문에 권장하지는 않는다.
 * return을 통해 함수를 반환하는 방식이 더 좋다.
 */
// outer 라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3 이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}

console.log("Done!");

function a() {
  // outer 라는 식별자가 붙은 레이블 for 문
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      // i + j === 3 이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
      if (i + j === 3) return;
      console.log(`inner [${i}, ${j}]`);
    }
  }
}
a();

const testFunc1 = (num) => {
  let newNum;
  switch (num) {
    case 1:
      newNum = 1;
      break;
    case 2:
      newNum = 2;
      break;
    case 3:
      newNum = 3;
      break;
    case 4:
      newNum = 4;
      break;
    case 5:
      newNum = 5;
      break;
    default:
      newNum = num * num;
  }
  return newNum * 5;
};

const testFunc2 = (num) => {
  let newNum;
  switch (num) {
    case 1:
      newNum = 1;
      return;
    case 2:
      newNum = 2;
      return;
    case 3:
      newNum = 3;
      return;
    case 4:
      newNum = 4;
      return;
    case 5:
      newNum = 5;
      return;
    default:
      newNum = num * num;
  }
  return newNum * 5;
};
