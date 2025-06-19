import api from "./api";

function logIn(user) {
  return api.post("/user/login", user, false);
}

function signUp(user) {
  return api.post("user", user, false);
}

export default { logIn, signUp };
