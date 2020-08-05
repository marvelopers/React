import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

// TODO: reducer 분리
function todoListReducer(state, action) {
  switch (action.type) {
    case "TODOLISTLOADING":
      return {
        loading: true,
        data: null,
        error: null
      }
    case "TODOLISTSUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      }
    case "TODOLISTERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      }
    default:
      return state;
  }
}


export function TodoList() {

  const [state, dispatch] = useReducer(todoListReducer, {
    loading: false,
    data: null,
    error: null
  })

  useEffect(() => {
    const fetchTodoList = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        )
        dispatch({ type: 'TODOLISTSUCCESS', data: response.data });
      } catch (e) {
        dispatch({ type: 'TODOLISTERROR', error: e });
      }
    }
    fetchTodoList();
  }, [])
  const { loading, data: todos, error } = state;
  if (loading) return <div>LIST LODAING</div>
  if (error) return <div>LIST ERROR</div>
  if (!todos) return null;

  console.log("...", todos);
  return (
    <>
      <StyleUl>
        {todos.map(todo =>
          <li key={todo.id} className="todoList">
            <div className="todo__title">
              <span>{todo.title}</span>
              <span>{completedCheck(todo.completed)}</span>
            </div>
          </li>
        )}
      </StyleUl>
    </>
  )
}

const completedCheck = (completed) => {
  return completed ? 'O' : 'X';
}

export default TodoList;


const StyleUl = styled.ul`
  list-style-type: none;
  margin: auto;

  div{
    width: 40%;
    display:flex;
    justify-content: space-between;
  }
`
