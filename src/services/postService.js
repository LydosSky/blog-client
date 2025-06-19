import api from "./api";

function getPosts() {
  return api.get("/post", null, false);
}

function getPostById(id) {
  return api.get("/post", id, false);
}

function createPost(post) {
  return api.post("/post", post);
}

function updatePost(post) {
  return api.put("/post", post);
}

function deletePost(id) {
  return api.del("/post", id);
}

export default { getPosts, getPostById, createPost, updatePost, deletePost };
