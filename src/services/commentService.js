import api from "./api";

function getComments() {
  return api.get("/comment", null);
}

function getCommentById(id) {
  return api.get("/comment", id);
}

function createComment(comment) {
  return api.post("/comment", comment);
}

function updateComment(comment) {
  return api.put("/comment", comment);
}

function deleteComment(id) {
  return api.del("/comment", id);
}

export default {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
