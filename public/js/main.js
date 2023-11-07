const deleteButton = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");
Array.from(deleteButton).forEach((val) =>
  val.addEventListener("click", deleteTodo)
);

Array.from(todoItem).forEach((val) =>
  val.addEventListener("click", markCompleted)
);
Array.from(todoComplete).forEach((val) =>
  val.addEventListener("click", markUnCompleted)
);

async function markCompleted() {
  console.log("hello");
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    alert(response);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markUnCompleted() {
  console.log("hello");
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("/todos/markUncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    console.log(response);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function deleteTodo() {
  console.log("hello");
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("/todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
  } catch (err) {
    console.log(err);
  }
  location.reload();
}
