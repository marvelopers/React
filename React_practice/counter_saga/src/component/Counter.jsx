import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Counter() {
  console.log("1. Counter.jsx");
  const dispatch = useDispatch();
  const getCounterState = (state) => state;

  const storeData = useSelector(getCounterState);

  const increseEventhandler = (number) => {
    console.log('2-1. plus button on Click event');
    dispatch({
      type: "INCREMENT_REQUEST",
      payload: number
    })
  }
  const decreseEventhandler = (number) => {
    console.log('2-2. mirus button on Click event');
    dispatch({
      type: "DECREMENT_REQUEST",
      payload: number
    })
  }

  return (
    <section>
      <div>{storeData.number}</div>
      <button onClick={() => decreseEventhandler(storeData.number)}>-</button>
      <button onClick={() => increseEventhandler(storeData.number)}>+</button>
    </section>
  );
};

export default Counter;