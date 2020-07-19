import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

function reducer(state, action) {
  //LOADING, SUCCESS, ERROR
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null
      }
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      }
    case "ERROR":
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

  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  })

  //components가 처음 render될 때, axios를 사용해서 데이터 요청
  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        dispatch({ type: 'SUCCESS', data: response.data });

      } catch (e) {
        dispatch({ type: 'ERROR', error: e });
      }
    }
    fetchUsers();
  }, [])

  const { loading, data: users, error } = state;
  if (loading) return <div>LODAING</div>
  if (error) return <div>ERROR</div>
  if (!users) return null;

  return (
    <ul>
      {users.map(user => <li key={user.id}>
        {user.username} ({user.name})
      </li>)}
    </ul>
  );
}

export default User;