const ToDoList = [];

function AddTodo() {
  const inputElement = document.querySelector(".todo-input");
  const name = inputElement.value;

  ToDoList.push(name);
  console.log(ToDoList);

  inputElement.value = "";
}
