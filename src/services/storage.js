//local storage
export function getItem(key, defaultValue) {
  let item = localStorage.getItem(key);
  if (item) {
    item = JSON.parse(item);
    return item;
  }
  return defaultValue;
}
export function setItem(key, value) {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}
export function removeItem(key) {
  localStorage.removeItem(key);
}

//session storage
export function getSessionItem(key, defaultValue) {
  let item = sessionStorage.getItem(key);
  if (item) {
    item = JSON.parse(item);
    return item;
  }
  return defaultValue;
}
export function setSessionItem(key, value) {
  value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
}
export function removeSessionItem(key) {
  sessionStorage.removeItem(key);
}
