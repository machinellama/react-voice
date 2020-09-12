export function setStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getStorage(key) {
  const defaults = {
    theme: 'darkly'
  }

  const defaultValue = defaults[key] || null;

  const itemValue = localStorage.getItem(key);
  if (itemValue == null && defaultValue != null) {
      localStorage.setItem(key, defaultValue);
      return defaultValue;
  }

  return itemValue;
}