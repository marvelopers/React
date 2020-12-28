const status = {
  number: 0
}

//액션에 따른 실행 함수
export default function counterReducer(state = status, action) {
  switch (action.type) {
    case "INCREMENT_REQUEST":
      console.log('3-1. Counter.jsx => dispatch => actionCounter.js => case ');
      return state;
    case "INCREMENT":
      console.log('6-1. actionCounter => incerment');
      return { number: action.payload + 1 };
    case "DECREMENT_REQUEST":
      console.log('3-2. Counter.jsx => dispatch => actionCounter.js => case ');
      return state;
    case "DECREMENT":
      console.log('6-2. actionCounter => decrement');
      return { number: action.payload - 1 };
    default: return state;
  }
}
getDataRequestAction