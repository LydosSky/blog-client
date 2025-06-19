const baseURL = "http://localhost:3000";

function handleResponse(response) {
  return response.json();
}

function getHeaders(includeAuth = true) {
  const headers = {
    "Content-Type": "application/json",
  };
  if (includeAuth) {
    const token = localStorage.getItem("token");
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

function get(url, param, includeAuth = true) {
  const fullURL = `${baseURL}${url}${param ? `/${param}` : ""}`;

  return fetch(fullURL, {
    method: "GET",
    headers: getHeaders(includeAuth),
  }).then(handleResponse);
}

function post(url, data = {}, includeAuth = true) {
  const fullURL = `${baseURL}${url}`;

  return fetch(fullURL, {
    method: "POST",
    headers: getHeaders(includeAuth),
    body: JSON.stringify(data),
  }).then(handleResponse);
}

function put(url, data = {}, includeAuth = true) {
  const fullURL = `${baseURL}${url}`;

  return fetch(fullURL, {
    method: "PUT",
    headers: getHeaders(includeAuth),
    body: JSON.stringify(data),
  }).then(handleResponse);
}

function del(url, param, includeAuth = true) {
  const fullURL = `${baseURL}${url}/${param}`;

  return fetch(fullURL, {
    method: "DELETE",
    headers: getHeaders(includeAuth),
  }).then(handleResponse);
}

export default { get, post, put, del };
