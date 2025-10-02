export function genID() {
  return `${Date.now().toString(36)}-${Math.random().toString(36)}`;
}
