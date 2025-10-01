const TASKS_KEY = 'tasks';
const THEME_KEY = 'theme';

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
