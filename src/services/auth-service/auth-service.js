export const authState = {
  isAuthenticated() {
    if (localStorage.getItem('token') === null) {
      return false
    } else {
      return true
    }
  }
}

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
        // pass success message to next view -- not entirely sure how to do this
        window.location.href = '/';
      }
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
      if (data.errors) {
        return data.errors
        // need to improve json response from api
      } else {
        localStorage.setItem("token", data.user.token)
        // instead of redircting here in the service should we be having some kind of routing functionality that checks the localstorage token, and once there is one it redirect?
        // some kind of authguard maybe?
        // window.location.href = '/landing';
      }
    })
}

export const logoutUser = user => {
  localStorage.clear();
}