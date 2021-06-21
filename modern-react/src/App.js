import React from 'react';
import styled from 'styled-components'
import TodoList from './components/TodoList';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Home from './ReactRouter/Home';
import About from './ReactRouter/About';
import Profile from './ReactRouter/Profile';
import HistorySample from './ReactRouter/HistorySample';


function App() {
  return (
    <BrowserRouter>
      <Nav>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/profiles">PROFILES</Link></li>
        <li><Link to="/todolist">TODOLIST</Link></li>
        <li><Link to="/history">HISTORY</Link></li>
      </Nav>

      <Switch>
        <Route path={["/","/home"]} component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles/:username" component={Profile} />
        <Route path="/history" component={HistorySample} />
        <Route path="/todolist" component={TodoList} />
        <Route render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
            <p>{location.pathname}</p>
          </div>
        )} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

const Nav = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 20px;

  border-bottom: 1px solid #333333;

  li{
    font-size : 16px;
  }

`;