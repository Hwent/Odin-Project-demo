function addSidebar() {
  const sidebar = document.createElement("div");

  sidebar.innerHTML = `
  <header>
  <h1>Todo List</h1>
  </header>
  <button class="add-todo">Add todo</button>
  <button class="add-project">Add Project</button>
  <button class="clear-todos">Clear Todos</button>
  <button class="generate-example">Generate Example</button>
  `;

  return sidebar;
}

export default addSidebar;
