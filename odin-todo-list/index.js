import addSidebar from "./sidebar.js";
import addContent from "./content.js";
import addTodoForm from "./todoForm.js";
import * as storage from "./storageFunction.js";

//Setup
storage.clearStorage();
storage.saveProject({ id: 1, name: "Home" });
storage.saveProject({ id: 2, name: "Work" });
let projectId = 3;

const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

sidebar.appendChild(addSidebar());
content.appendChild(addContent());
document.body.appendChild(addTodoForm());

const addTodoButton = document.querySelector(".add-todo");
const addProjectButton = document.querySelector(".add-project");
const closeButton = document.querySelector(".close");
const clearTodoButton = document.querySelector(".clear-todos");
const generateExampleButton = document.querySelector(".generate-example");
const submitButton = document.querySelector("input[type=submit]");
const editButton = document.querySelector(".edit");
const deleteButton = document.querySelector(".delete");
const select = document.querySelector("#select");
const modal = document.querySelector("#myModal");

addTodoButton.addEventListener("click", () => {
  modal.style.display = "block";
  submitButton.value = "Add todo";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

clearTodoButton.addEventListener("click", () => {
  storage.clearTodos();
  content.innerHTML = "";
  content.appendChild(addContent());
});

addProjectButton.addEventListener("click", () => {
  const project = prompt("Enter new project name");
  storage.saveProject({ id: projectId, name: project });
  projectId++;
  content.innerHTML = "";
  content.appendChild(addContent());
  select.appendChild(new Option(project));
});

generateExampleButton.addEventListener("click", () => {
  generateExample();
  content.innerHTML = "";
  content.appendChild(addContent());
});

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const id = event.target.parentElement.id;
    event.target.parentElement.remove();
    storage.deleteTodoById(parseInt(id));
  }
});

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit")) {
    //open modal
    modal.style.display = "block";
    //fill form with todo data
    const id = event.target.parentElement.id;
    form.dataset.id = id;
    const todos = storage.getAllTodos();
    const todo = todos.find((todo) => todo.id === parseInt(id));
    form.project.value = todo.project;
    form.todo.value = todo.todo;
    form.description.value = todo.description;
    form.dueDate.value = todo.dueDate;
    //change add-todo button to update-todo
    submitButton.value = "Update todo";
  }
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

//Form event listener
const form = document.querySelector("#todoForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Update todo
  if (submitButton.value === "Update todo") {
    const id = form.dataset.id;
    const updatedTodo = {
      id: form.dataset.id,
      project: form.project.value,
      todo: form.todo.value,
      description: form.description.value,
      dueDate: form.dueDate.value,
    };
    storage.updateTodoById(parseInt(id), updatedTodo);
    modal.style.display = "none";
    content.innerHTML = "";
    content.appendChild(addContent());
    return;
  }
  // Create an todo
  const timeId = new Date().getTime();
  const formData = {
    id: timeId,
    project: form.project.value,
    todo: form.todo.value,
    description: form.description.value,
    dueDate: form.dueDate.value,
  };
  storage.saveTodo(formData);
  modal.style.display = "none";
  content.innerHTML = "";
  content.appendChild(addContent());
});

//Generate example
async function generateExample() {
  storage.saveTodo({
    id: new Date().getTime(),
    project: "Home",
    todo: "Clean",
    description: "Clean the house",
    dueDate: "2024-12-31",
  });

  await new Promise((resolve) => setTimeout(resolve, 1)); // Delay of 1 millisecond

  storage.saveTodo({
    id: new Date().getTime(),
    project: "Work",
    todo: "Meeting",
    description: "Meeting with the team",
    dueDate: "2024-12-31",
  });
  content.innerHTML = "";
  content.appendChild(addContent());
}
