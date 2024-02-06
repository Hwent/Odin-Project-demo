function addTodoForm() {
  const todoForm = document.createElement("div");
  todoForm.innerHTML = `
  <div id="myModal" class="modal">
  <div class="modal-content">
    <form id="todoForm">
      <label for="project">Project:</label><br>
      <select id="select" name="project">
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        </select>
        <br>
      <label for="todo">New Todo:</label><br>
      <input type="text" id="todo" name="todo" required><br>
      <label for="description">Description:</label><br>
      <textarea id="description" name="description" required></textarea><br>
      <label for="dueDate">Due Date:</label><br>
      <input type="date" id="dueDate" name="dueDate" required>
        <br>
      <input type="submit" value="Add todo"><button type="button" class="close">Cancel</button>
    </form>
  </div>
</div>
  `;
  return todoForm;
}

export default addTodoForm;
