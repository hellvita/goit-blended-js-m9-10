export function createTaskElement(task) {
  return `
      <li class="task-list-item" data-id="${task.id}">
        <button class="task-list-item-btn">Delete</button>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
      </li>
  `;
}
