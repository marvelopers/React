import React from 'react';
import User_useState from './components/User_useState';
import User from './components/User_useReducer';
import Button from './components/Button';
import Dialog from './components/Dialog';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';


function App() {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />

      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
      </ul>
      <User_useState />
      <User />
      <Button>버튼입니다.</Button>
      {/* <Dialog title={"제목"}>버튼을 클릭했습니다.</Dialog> */}
    </>

  );
}

export default App;
