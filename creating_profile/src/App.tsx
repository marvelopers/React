import React from 'react';
import AuthService from './service/auth_service';
import { Login } from './components/login/login';

function App({authService}: {authService:AuthService}) {
  return <Login authService={authService}/>;
  ;
}

export default App;
