import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increase, increment, toggle } from "./slice/counter";
// import { increment, decrement } from "./actions/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  return (
    <div>
      {show ? `Counter: ${counter}` : ""}
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(toggle())}>
        {show ? "Hide" : "Show"}
      </button>
      <button onClick={() => dispatch(increase(10))}>Increase</button>
    </div>
  );
};

export default Counter;
