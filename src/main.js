import { refs } from './js/refs';
import * as storage from './js/local-storage-api';
import * as taskList from './js/tasks';
import * as render from './js/render-tasks';
import { initTheme, toggleTheme } from './js/theme-switcher';

initTheme();

storage.setDefaultTasks();
const stored = storage.loadTasks();
taskList.setTasks(stored);
render.renderAll(taskList.getTasks());

refs.form.addEventListener('submit', onAdd);

refs.taskList.addEventListener('click', onDelete);

refs.themeToggle.addEventListener('click', () => toggleTheme());

function onAdd(e) {
  e.preventDefault();
  try {
    const title = refs.inputName.value;
    const description = refs.inputDescription.value;
    const task = taskList.addTask({ title, description });
    storage.saveTasks(taskList.getTasks());
    render.appendTask(task);
    refs.form.reset();
  } catch (err) {
    console.log(err);
  }
}

function onDelete(e) {
  if (e.target.nodeName === 'BUTTON') {
    const button = e.target;
    const li = button.closest('.task-list-item');
    const id = li.dataset.id;
    if (!id) return;
    const removed = taskList.deleteTask(id);
    if (removed) {
      storage.saveTasks(taskList.getTasks());
      render.removeByID(id);
    }
  }
}
