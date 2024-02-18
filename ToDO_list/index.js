const ToDoList = ["first task"];
renderTodoList();

function renderTodoList() {
  let TodoListhtml = "";
  const ToDoListElement = document.querySelector(".js-todo-list");

  let i = 0;
  while (i <= ToDoList.length) {
    const todo = ToDoList[i];
    const html = `
  <p>${todo}</p>
  `;
    TodoListhtml += html;
    i++;
  }
  ToDoListElement.innerHTML = TodoListhtml;
}

function AddTodo() {
  const inputElement = document.querySelector(".todo-input");
  const name = inputElement.value;

  ToDoList.push(name);
  inputElement.value = "";
  renderTodoList();
}
