//localStorage functions
//{"Todos":id, project, todo, description, dueDate}
//{"Projects":id, project}

function getAllTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function getAllProjects() {
  return JSON.parse(localStorage.getItem("projects")) || [];
}

function saveTodo(todo) {
  const todos = getAllTodos();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodoById(id) {
  const todos = getAllTodos();
  const newTodos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(newTodos));
}

function saveProject(project) {
  const projects = getAllProjects();
  //check if project already exists
  for (const proj of projects) {
    if (proj.name === project.name) {
      return;
    }
  }
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
}

function deleteProjectById(id) {
  const projects = getAllProjects();
  const newProjects = projects.filter((project) => project.id !== id);
  localStorage.setItem("projects", JSON.stringify(newProjects));
}

function updateTodoById(id, updatedTodo) {
  const todos = getAllTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  todos[index] = updatedTodo;
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateProjectById(id, updatedProject) {
  const projects = getAllProjects();
  const index = projects.findIndex((project) => project.id === id);
  projects[index] = updatedProject;
  localStorage.setItem("projects", JSON.stringify(projects));
}

function clearTodos() {
  localStorage.removeItem("todos");
}

function clearStorage() {
  localStorage.clear();
}

export {
  getAllTodos,
  getAllProjects,
  saveTodo,
  deleteTodoById,
  saveProject,
  deleteProjectById,
  updateTodoById,
  updateProjectById,
  clearTodos,
  clearStorage,
};
