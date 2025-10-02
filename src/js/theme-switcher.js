import { refs } from './refs';
import { saveTheme, loadTheme } from './local-storage-api';

const THEME_DARK = 'theme-dark';
const THEME_LIGHT = 'theme-light';

export function applyTheme(theme) {
  refs.body.classList.remove(THEME_LIGHT, THEME_DARK);
  refs.body.classList.add(theme);
  saveTheme(theme);
}

export function initTheme() {
  const stored = loadTheme();
  applyTheme(stored ? stored : THEME_DARK);
}

export function toggleTheme() {
  const current = refs.body.classList.contains(THEME_DARK)
    ? THEME_DARK
    : THEME_LIGHT;
  const next = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
  applyTheme(next);
}
