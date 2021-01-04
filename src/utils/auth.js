export function getToken() {
  return sessionStorage.getItem("token");
}

export function setToken(val) {
  sessionStorage.setItem("token", val);
}

export function removeToken() {
  sessionStorage.removeItem("token");
}

export function isLogined() {
  if (getToken()) {
    return true;
  }
  return false;
}
