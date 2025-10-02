import { genID } from './utils';

let taskList = [];

export function initTasks(initial = []) {
  taskList = Array.isArray(initial) ? initial : [];
}

export function addTask({ title, description }) {
  const trimmed = (title || '').trim();
  if (!trimmed) return alert('Title is required!');
  const task = {
    id: genID(),
    title: trimmed,
    description: (description || '').trim(),
    createdAt: Date.now(),
  };
  taskList.unshift(task);
  return task;
}

export function deleteTask(id) {
  const index = taskList.findIndex(task => task.id === id);
  if (index === -1) return false;
  taskList.splice(index, 1);
  return true;
}

export function setTasks(newTaskList) {
  taskList = Array.isArray(newTaskList) ? newTaskList : [];
}

export function getTasks() {
  return taskList.slice();
}
