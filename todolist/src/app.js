import "./scss/app.scss";

class TodoContainer {
  constructor() {
    this.todoItems = [];
    this.id = 0;
    this.$todoList = document.querySelector(".todoList__list");
    this.$addBtn = document.querySelector(".todoList__add");

    this.$addBtn.addEventListener("click", () => {
      this.createNewItem();
    });
  }

  createNewItem() {
    this.id++;
    this.todoItems.push({
      id: this.id,
      text: "",
      isDone: false,
      isComplete: false
    });
    this.makeItem();
  }

  deleteItem(id) {
    this.todoItems = this.todoItems.filter(item => item.id !== id);
    console.log(this.todoItems, id);
    this.makeItem();
  }

  makeItem() {
    this.$todoList.innerHTML = "";
    this.todoItems.forEach(({ id, text, isDone, isComplete }) => {
      this.$todoList.appendChild(
        isDone ? this.doneItem(id, text, isComplete) : this.defaultItem(id)
      );
    });
  }

  defaultItem(id) {
    const $item = document.createElement("li");
    const $input = document.createElement("input");
    const $button = document.createElement("button");

    $item.className = "todoList__item";
    $item.dataset.id = id;

    $input.type = "text";
    $input.className = "todoList__input";
    $input.placeholder = "텍스트를 입력하세요";

    $button.type = "button";
    $button.className = "todoList__delete";
    $button.textContent = "Delete";
    $button.addEventListener("click", () => {
      this.deleteItem(id);
    });

    $item.appendChild($input);
    $item.appendChild($button);

    return $item;
  }

  doneItem(id, text, isComplete) {
    const $item = document.createElement("li");
    const $input = document.createElement("input");
    const $label = document.createElement("label");
    const $button = document.createElement("button");

    $item.className = "todoList__item";
    $item.classList.add("todoList__item--done");
    $item.dataset.id = id;

    $input.type = "checkbox";
    $input.className = "todoList__check";
    $input.id = `todo${id}`;
    $input.checked = isComplete;

    $label.setAttribute("for", `todo${id}`);
    $label.className = "todoList__label";
    $label.textContent = text;

    $button.type = "button";
    $button.className = "todoList__delete";
    $button.textContent = "Delete";
    $button.addEventListener("click", () => {
      this.deleteItem(id);
    });

    $item.appendChild($input);
    $item.appendChild($label);
    $item.appendChild($button);

    return $item;
  }
}

new TodoContainer();
