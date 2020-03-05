export const registerUser = user => {
  return fetch("http://localhost:4000/api/users", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({user})
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
}

export const loginUser = user => {
  return fetch("http://localhost:4000/api/users/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({user})
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    })
}

