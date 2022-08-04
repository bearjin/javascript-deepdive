const $test1 = document.querySelector("#test1");
const $test2 = document.querySelector("#test2");
const num1 = 123456789;
const num2 = 123_456_789;
const num3 = 1.234959692929;
const decimal = 2;

const getFixed = (num, decimal) => {
  if (decimal === 0) return Math.floor(num);
  return (Math.floor(num * 100) / 100).toFixed(decimal);
};

$test1.textContent = `${num1} === ${num2}: ${num1 === num2}`;
$test2.textContent = `소수점 ${num3}을 ${decimal}자리수만큼 보여주기: ${getFixed(
  num3,
  decimal
)}`;
