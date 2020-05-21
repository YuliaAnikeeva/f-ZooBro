import URL from "./baseURL.js";

function createAnswer(status, data) {
  return {
    status: status,
    payload: data
  };
}

export default async (fetchData, payload) => {
  if (!fetchData || typeof fetchData != "object") {
    console.warn("no information have been delivered");
    return createAnswer(false, "no fetchData");
  }

  const { token, method, route } = fetchData;

  if (method == "POST" && !payload) {
    console.warn("!!! you need payload for post req !!!");
    return createAnswer(false, "no payload with post");
  }

  if (method != "POST" && method != "GET") {
    console.warn('available methods: "POST" || "GET", not ' + method);
    return createAnswer(false, "unavailable method");
  }

  if (!route) {
    console.warn("you need some route to fetch");
    return createAnswer(false, "no route");
  }

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    Authorization: token
  };

  if (method == "POST") {
    try {
      return fetch(URL + route, {
        headers: headers,
        method: method,
        body: JSON.stringify(payload)
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          if (json.status === 1) {
            return createAnswer(true, json.data);
          }
          if (json.status != 1) {
            const { message } = json;
            console.error(message);
            return createAnswer(false, message);
          }
        });
    } catch (error) {
      return createAnswer(false, error);
    }
  }

  if (method == "GET") {
    try {
      return fetch(URL + route, {
        headers: headers,
        method: method
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          if (json.status === 1) {
            const { data } = json;
            return { status: true, data };
          }
          const { message } = json;
          console.error(message);
          return { status: false, message };
        });
    } catch (error) {
      return createAnswer(false, error);
    }
  }
};
