import { getAllTodos, getAllProjects } from "./storageFunction.js";
function addContent(timeId) {
  const content = document.createElement("div");

  content.innerHTML = `
    <h2>Tasks</h2>
  `;
  const todos = getAllTodos();
  const projects = getAllProjects();
  for (const project of projects) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
      <h3>${project.name}</h3>
    `;
    for (const todo of todos) {
      if (todo.project === project.name) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoDiv.setAttribute("id", todo.id);
        todoDiv.innerHTML = `
        <hr>
          <h4>${todo.todo}</h4>
          <p>${todo.description}</p>
          <p>${todo.dueDate}</p>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        `;
        projectDiv.appendChild(todoDiv);
      }
    }
    content.appendChild(projectDiv);
  }
  return content;
}

export default addContent;
