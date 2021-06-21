import React from 'react'
import AuthService from '../../service/auth_service'

export const Login = ({authService}: {authService:AuthService}) => {
  const handleLogin = (event) => {
    authService.login(event.currentTarget.textContent).then();
  }

  return (
    <>
    <h1>Login</h1>
    <ul>
      <li><button>Google</button></li>
      <li><button>GitHub</button></li>
    </ul>
    login
    </>
  )
}

