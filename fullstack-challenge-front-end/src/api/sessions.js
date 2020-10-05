import URL from "./index"

const createSession = (values) =>
  new Promise((resolve, reject) => {
    fetch(`${URL}/sessions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session: values }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })

const verifyCreds = (values) =>
  new Promise((resolve, reject) => {
    // Just check their creds. Don't log them in.
    fetch(`${URL}/sessions?nologin=1`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session: values }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })

const destroySession = () =>
  new Promise((resolve, reject) => {
    fetch(`${URL}/sessions`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })

export { createSession, verifyCreds, destroySession }
