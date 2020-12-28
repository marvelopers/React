import React from 'react';
import Write from './components/Write';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Write />
      <TodoList />
    </div>
  );
}

export default App;
