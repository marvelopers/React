import React from 'react';
import User from './../components/User_useReducer';


function home() {
  return (
    <>
      <div>
        <h1>HOME</h1>
        <p>
          이곳은 홈입니다.
            </p>
      </div>
      <User />
    </>
  );
}

export default home;