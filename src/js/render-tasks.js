import { createTaskElement } from './markup-tasks';
import { refs } from './refs';

export function removeByID(id) {
  const el = refs.taskList.querySelector(`[data-id="${id}"]`);
  if (el) el.remove();
}

export function appendTask(task) {
  const taskStr = createTaskElement(task);
  refs.taskList.insertAdjacentHTML('afterbegin', taskStr);
}

export function renderAll(taskList) {
  refs.taskList.innerHTML = '';
  const taskListStr = taskList.map(task => createTaskElement(task)).join('');
  refs.taskList.insertAdjacentHTML('afterbegin', taskListStr);
}
