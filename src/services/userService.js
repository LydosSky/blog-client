import api from "./api";

function getUsers() {
  return api.get("/user", null, false);
}

function getUserById(id) {
  return api.get("/user", id, false);
}

function updateUser(user) {
  return api.put("/user", user);
}

function deleteUser(id) {
  return api.del("/user", id);
}

export default { getUserById, getUsers, updateUser, deleteUser };
