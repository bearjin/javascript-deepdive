const $box = document.querySelector(".box");

const initialMousePos = { x: 0, y: 0 };
const offset = { x: 0, y: 0 };

const move = (e) => {
  offset.x = e.clientX - initialMousePos.x;
  offset.y = e.clientY - initialMousePos.y;

  $box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
};

$box.addEventListener("mousedown", (e) => {
  initialMousePos.x = e.clientX - offset.x;
  initialMousePos.y = e.clientY - offset.y;

  document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("movemove", move);
});
