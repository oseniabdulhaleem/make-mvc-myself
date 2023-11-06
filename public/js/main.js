const deleteButton = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");
Array.from(deleteButton).forEach((val) =>
  val.addEventListner("click", deleteTodo)
);

Array.from(todoItem).forEach((val) =>
  val.addEventListner("click", markCompleted)
);
Array.from(todoItem).forEach((val) =>
  val.addEventListner("click", markUnCompleted)
);

async function markCompleted() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markUnCompleted() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("/todos/markUncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function deleteTodo() {
  try {
    const response = await fetch("/todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
