const host = 'http://localhost:3000/api'

export const getMethods = async () => {
    return fetch(`${host}/general`)
        .then(response => response.json())
}

export const getSaved = async () => {
    return fetch(`${host}/personalMethods`)
        .then(response => response.json())
}

export const postSaved = (method) => {
  return fetch(`${host}/personalMethods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(method),
  }).then((res) => res.json());
};

export const deleteEvent = (methodId) => {
  return fetch(`${host}${methodId}`, { method: "DELETE" });
};