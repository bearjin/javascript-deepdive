const $fruits = document.getElementById("fruits");
const $msg = document.querySelector(".msg");

function activate({ target }) {
  if (!target.matches("#fruits > li")) return;

  [...$fruits.children].forEach(($fruit) => {
    $fruit.classList.toggle("active", $fruit === target);
    $msg.textContent = target.id;
  });
}

$fruits.onclick = activate;

const MIN_USER_NAME_LENGTH = 5;
const $input = document.querySelector("input[type=text]");
const $message = document.querySelector(".message");

const checkUserNameLength = (min) => (e) => {
  $message.textContent =
    $input.value.length < min ? `이름은 ${min}자 이상 입력해 주세요` : "";
};

$input.onblur = checkUserNameLength(MIN_USER_NAME_LENGTH);
