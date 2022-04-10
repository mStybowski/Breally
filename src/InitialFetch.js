import auth from "../auth";

function initialFetch(path, body = undefined, method = "GET") {
  const { credentials } = auth;
  const Authorization = `Basic ${btoa(credentials)}`;
  return fetch(`https://adchitects-cms.herokuapp.com/${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization,
    },
    body,
  });
}

export { initialFetch };
