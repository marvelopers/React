import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

function userListReducer(state, action) {
  //LOADING, SUCCESS, ERROR
  switch (action.type) {
    case "USERLOADING":
      return {
        loading: true,
        data: null,
        error: null
      }
    case "USERSUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      }
    case "USERERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      }
    default:
      return state;
  }
}

function User() {

  const [state, dispatch] = useReducer(userListReducer, {
    loading: false,
    data: null,
    error: null
  })

  //components가 처음 render될 때, axios를 사용해서 데이터 요청
  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: 'USERLOADING' });
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        dispatch({ type: 'USERSUCCESS', data: response.data });

      } catch (e) {
        dispatch({ type: 'USERERROR', error: e });
      }
    }
    fetchUsers();
  }, [])

  const { loading, data: users, error } = state;
  if (loading) return <div>LODAING</div>
  if (error) return <div>ERROR</div>
  if (!users) return null;

  return (
    <>
      <div>
        <h3>userList + useReducer</h3>
      </div>
      <ul>
        {users.map(user => <li key={user.id}>
          {user.username} ({user.name})
      </li>)}
      </ul>
    </>
  );
}

export default User;