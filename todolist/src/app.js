import "./scss/app.scss";

class TodoContainer {
  constructor() {
    this.todoItems = [];
    this.todoCompleteItems = [];
    this.id = 0;
    this.$todoListActive = document.querySelector("#todoListActive");
    this.$addBtn = document.querySelector(".todoList__add");
    this.$addBtn.addEventListener("click", () => {
      this.createNewItem();
      this.makeList();
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
    this.$todoListActive.innerHTML = "";
    this.todoItems.forEach(({ id, text, isDone, isComplete }) => {
      this.$todoListActive.appendChild(
        this.makeItem(id, text, isDone, isComplete)
      );
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
      $input.id = `todo${id}`;
      $input.checked = isComplete;
      $input.addEventListener("change", event => {
        const isComplete = event.target.checked;
        this.changeCompleteItem(id, isComplete);
      });

      $label.setAttribute("for", `todo${id}`);
      $label.className = "todoList__label";
      $label.textContent = text;
    } else {
      $input.type = "text";
      $input.className = "todoList__input";
      $input.placeholder = "텍스트를 입력하세요";
      $input.addEventListener("change", event => {
        const text = event.target.value;
        this.changeDoneItem(id, text);
        this.makeList();
      });
    }

    $button.type = "button";
    $button.className = "todoList__delete";
    $button.textContent = "Delete";
    $button.addEventListener("click", () => {
      this.deleteItem(id);
      this.makeList();
    });

    $item.appendChild($input);
    if (isDone) $item.appendChild($label);
    $item.appendChild($button);

    return $item;
  }
}

new TodoContainer();
