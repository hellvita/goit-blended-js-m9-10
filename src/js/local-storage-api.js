import { TASKS_KEY, THEME_KEY, TASK_EXAMPLE } from './constant';
import * as storage from './local-storage-api';
import * as taskList from './tasks';
import * as render from './render-tasks';

export function saveTasks(tasks) {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.log('Failed to save tasks:', e);
  }
}

export function loadTasks() {
  try {
    const storageTasks = localStorage.getItem(TASKS_KEY);
    if (!saveTasks) return [];
    const parsed = JSON.parse(storageTasks);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.log('Failed to parse tasks from localStorage, resetting:', e);
    return [];
  }
}

export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme() {
  return localStorage.getItem(THEME_KEY) || null;
}

export function setDefaultTasks() {
  let tempTasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];

  if (tempTasks.length === 0) {
    tempTasks = TASK_EXAMPLE;
    tempTasks.forEach(temp_task => {
      const title = temp_task.title;
      const description = temp_task.description;
      const task = taskList.addTask({ title, description });
      storage.saveTasks(taskList.getTasks());
      render.appendTask(task);
    });
  }
}
