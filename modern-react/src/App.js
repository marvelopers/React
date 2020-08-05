import React from 'react';
import styled from 'styled-components'
import User_useState from './components/User_useState';
import TodoList from './components/TodoList';
import User from './components/User_useReducer';
import Button from './components/Button';
import Dialog from './components/Dialog';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './ReactRouter/Home';
import About from './ReactRouter/About';
import Profile from './ReactRouter/Profile';
import HistorySample from './ReactRouter/HistorySample';


function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles/:username" component={Profile} />
        <Route path="/history" component={HistorySample} />
        <Route render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
            <p>{location.pathname}</p>
          </div>
        )} />

      </Switch>

      <Nav>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/profiles">PROFILES</Link></li>
        <li><Link to="/history">HISTORY</Link></li>
      </Nav>

      <User_useState />
      <User />
      <TodoList />
      <Button>버튼입니다.</Button>
      {/* <Dialog title={"제목"}>버튼을 클릭했습니다.</Dialog> */}
    </>

  );
}

export default App;

const Nav = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: auto;
  padding: 10px;

  background: pink;

  li{
    font-size : 16px;
  }
  li:hover{

  }
`;