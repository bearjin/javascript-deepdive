import "./scss/app.scss";

class TodoContainer {
  constructor(area, type) {
    this.todoItems = [];
    this.id = 0;
    this.area = area;
    this.type = type;
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
    const $list = this.area.querySelector(".todoList__list");

    $list.innerHTML = "";

    this.todoItems.forEach(({ id, text, isDone, isComplete }) => {
      $list.appendChild(this.makeItem(id, text, isDone, isComplete));
    });
  }

  makeItem(id, text, isDone, isComplete) {
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

    $item.appendChild($input);
    if (isDone) $item.appendChild($label);
    $item.appendChild($button);

    return $item;
  }
}

class TodoArea {
  constructor(area, type) {
    this.area = document.querySelector(area);
    this.type = type;
    this.container = new TodoContainer(this.area, this.type);

    this.initArea();
  }

  initArea() {
    const $badge = document.createElement("span");
    const $list = document.createElement("ul");
    const $btn = document.createElement("button");

    $badge.className = "todoList__badge";
    $badge.classList.add(`todoList__badge--${this.type}`);
    $badge.textContent =
      this.type === "do"
        ? "😆 할일"
        : this.type === "complete"
        ? "😎 완료"
        : null;

    $list.className = "todoList__list";

    $btn.className = "todoList__add";
    $btn.textContent = "새로 만들기";
    $btn.addEventListener("click", () => {
      this.container.createNewItem();
      this.container.makeList();
    });

    this.area.appendChild($badge);
    this.area.appendChild($list);
    this.area.appendChild($btn);
  }
}

const doArea = new TodoArea("#todoListDo", "do");
const completeArea = new TodoArea("#todoListComplete", "complete");
