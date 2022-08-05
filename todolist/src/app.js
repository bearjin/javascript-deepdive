import "./scss/app.scss";

class TodoContainer {
  constructor() {
    this.todoItems = [];
    this.todoCompleteItems = [];
    this.id = 0;
    this.$todoListDo = document.querySelector("#todoListDo");
    this.$todoListComplete = document.querySelector("#todoListComplete");

    this.initArea(this.$todoListDo, "do");
    this.initArea(this.$todoListComplete, "complete");
  }

  initArea(target, type) {
    const $badge = document.createElement("span");
    const $list = document.createElement("ul");
    const $btn = document.createElement("button");

    $badge.className = "todoList__badge";
    $badge.classList.add(`todoList__badge--${type}`);
    $badge.textContent =
      type === "do" ? "😆 할일" : type === "complete" ? "😎 완료" : null;

    $list.className = "todoList__list";

    $btn.className = "todoList__add";
    $btn.textContent = "새로 만들기";
    $btn.addEventListener("click", () => {
      this.createNewItem();
      this.makeList(target);
    });

    target.appendChild($badge);
    target.appendChild($list);
    target.appendChild($btn);
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
    this.todoCompleteItems = this.todoCompleteItems.filter(
      item => item.id !== id
    );
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

        if (isComplete) this.todoCompleteItems.push(item);
        this.todoItems = this.todoItems.filter(
          item => item.isComplete === false
        );
      }
    });

    this.todoCompleteItems.forEach(item => {
      if (item.id === id) {
        item.isComplete = isComplete;
        if (!isComplete) this.todoItems.push(item);
        this.todoCompleteItems = this.todoCompleteItems.filter(
          item => item.isComplete === true
        );
      }
    });
  }

  makeList() {
    const $doList = this.$todoListDo.querySelector(".todoList__list");
    const $completeList = this.$todoListComplete.querySelector(
      ".todoList__list"
    );

    $doList.innerHTML = "";
    $completeList.innerHTML = "";

    this.todoItems.forEach(({ id, text, isDone, isComplete }) => {
      $doList.appendChild(this.makeItem(id, text, isDone, isComplete));
    });

    this.todoCompleteItems.forEach(({ id, text, isDone, isComplete }) => {
      $completeList.appendChild(this.makeItem(id, text, isDone, isComplete));
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
        this.makeList(this.$todoListDo);
        this.makeList(this.$todoListComplete);
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
        this.makeList(this.$todoListDo);
      });
    }

    $button.type = "button";
    $button.className = "todoList__delete";
    $button.textContent = "Delete";
    $button.addEventListener("click", () => {
      this.deleteItem(id);
      this.makeList(this.$todoListDo);
    });

    $item.appendChild($input);
    if (isDone) $item.appendChild($label);
    $item.appendChild($button);

    return $item;
  }
}

new TodoContainer();
