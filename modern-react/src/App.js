import React from 'react';
import User_useState from './components/User_useState';
import User from './components/User_useReducer';
import Button from './components/Button';
import Dialog from './components/Dialog';



function App() {
  return (
    <>
      <User_useState />
      <User />
      <Button>버튼입니다.</Button>
      {/* <Dialog title={"제목"}>버튼을 클릭했습니다.</Dialog> */}
    </>

  );
}

export default App;
