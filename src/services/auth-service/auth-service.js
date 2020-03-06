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
      if (data.errors) {
        return data.errors
      } else {
        // pass success message to next view
        window.location.href = '/';
      }
    })
}

export const loginUser = user => {
  console.log(JSON.stringify({user}))
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
      if (data.errors) {
        return data.errors
      } else {
        // set jwt
        window.location.href = '/landing';
      }
    })
}

