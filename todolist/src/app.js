import "./scss/app.scss";

/**
 * TODO 상락님 피드백 반영해기
 * 함수 안에서 dom 탐색하던 부분 프로퍼티로 변경하여 사용
 * dom 마다 여러번 appenChild 했던 것 DocumentFragment 사용하여 변경하기(리플로우, 리페인트가 여러번 발생하는 것을 방지할 수 있다.)
 * makeItem 함수 새로운 class로 분리
 */

/**
 * TODO 추가해 볼 기능들
 * 아이템 드래그해서 목록 이동 가능하게 하기
 */

class TodoContainer {
  constructor(area, type) {
    this.todoItems = [];
    this.id = 0;
    this.area = document.querySelector(area);
    this.type = type;
    this.header;
    this.badge;
    this.list;
    this.count;
    this.createBtn;
    this.resetBtn;

    this.initArea();
  }

  createNewItem() {
    this.id++;
    this.todoItems.push({
      id: this.id,
      text: "",
      isDone: false,
      isComplete: false
    });
  }

  deleteItem(id) {
    this.todoItems = this.todoItems.filter(item => item.id !== id);
  }

  changeDoneItem(id, text) {
    this.todoItems.forEach(item => {
      if (item.id === id) {
        item.text = text;
        item.isDone = true;
      }
    });
  }

  changeCompleteItem(id, isComplete) {
    this.todoItems.forEach(item => {
      if (item.id === id) {
        item.isComplete = isComplete;
      }
    });
  }

  makeList() {
    const listFragment = new DocumentFragment();
    this.list.innerHTML = "";

    this.todoItems.forEach(({ id, text, isDone, isComplete }) => {
      listFragment.append(this.makeItem(id, text, isDone, isComplete));
    });

    this.list.appendChild(listFragment);

    this.count.innerText = this.todoItems.length;
    this.count.classList.add("todoList__count--active");
    this.resetBtn.classList.add("todoList__reset--active");
  }

  resetList() {
    this.list.innerHTML = "";
    this.todoItems = [];
    this.id = 0;
    this.count.classList.remove("todoList__count--active");
    this.resetBtn.classList.remove("todoList__reset--active");
  }

  makeItem(id, text, isDone, isComplete) {
    const itemFragment = new DocumentFragment();
    const $item = document.createElement("li");
    const $input = document.createElement("input");
    const $label = document.createElement("label");
    const $button = document.createElement("button");

    $item.className = "todoList__item";

    if (isDone) {
      $item.classList.add("todoList__item--done");

      $input.type = "checkbox";
      $input.className = "todoList__check";
      $input.id = `todo-${this.type}-${id}`;
      $input.checked = isComplete;
      $input.addEventListener("change", event => {
        const isComplete = event.target.checked;
        this.changeCompleteItem(id, isComplete);
        this.makeList(this.todoItems);
      });

      $label.setAttribute("for", `todo-${this.type}-${id}`);
      $label.className = "todoList__label";
      $label.textContent = text;
    } else {
      $input.type = "text";
      $input.className = "todoList__input";
      $input.placeholder = "텍스트를 입력하세요";
      $input.addEventListener("change", event => {
        const text = event.target.value;
        this.changeDoneItem(id, text);
        this.makeList(this.todoItems);
      });
    }

    $button.type = "button";
    $button.className = "todoList__delete";
    $button.textContent = "Delete";
    $button.addEventListener("click", () => {
      this.deleteItem(id);
      this.makeList(this.todoItems);
    });

    itemFragment.append($input);
    if (isDone) itemFragment.append($label);
    itemFragment.append($button);

    $item.appendChild(itemFragment);

    return $item;
  }

  initArea() {
    const headerFragment = new DocumentFragment();
    const areaFragment = new DocumentFragment();
    this.header = document.createElement("div");
    this.badge = document.createElement("span");
    this.createBtn = document.createElement("button");
    this.list = document.createElement("ul");
    this.count = document.createElement("span");
    this.resetBtn = document.createElement("button");

    this.header.className = "todoList__header";

    this.count.className = "todoList__count";

    this.badge.className = "todoList__badge";
    this.badge.classList.add(`todoList__badge--${this.type}`);
    this.badge.textContent =
      this.type === "do"
        ? "😆 Do"
        : this.type === "complete"
        ? "🥳 Complete"
        : this.type === "doing"
        ? "😎 Doing"
        : null;

    this.list.className = "todoList__list";

    this.createBtn.className = "todoList__add";
    this.createBtn.textContent = "Create new item";
    this.createBtn.addEventListener("click", () => {
      this.createNewItem();
      this.makeList();
    });

    this.resetBtn.className = "todoList__reset";
    this.resetBtn.textContent = "😇 Delete all items";
    this.resetBtn.addEventListener("click", () => {
      this.resetList();
    });

    headerFragment.append(this.badge, this.count, this.resetBtn);
    this.header.appendChild(headerFragment);

    areaFragment.append(this.header, this.list, this.createBtn);
    this.area.appendChild(areaFragment);
  }
}

const doArea = new TodoContainer("#todoListDo", "do");
const doingArea = new TodoContainer("#todoListDoing", "doing");
const completeArea = new TodoContainer("#todoListComplete", "complete");
