import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  //1. 요청의 결과물
  const [users, setUsers] = useState(null);
  //2. 로딩 상태 
  const [loading, setLoading] = useState(false);
  //3. 에러
  const [error, setError] = useState(null);

  //components가 처음 render될 때, axios를 사용해서 데이터 요청
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsers(null);
        setError(null);
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false)
    }
    fetchUsers();
  }, [])

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