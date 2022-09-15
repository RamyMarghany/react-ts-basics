import { useReducer } from "react";

type stateProps = { count: number };
type actionProps = {
  type: "increment" | "decrement"; // type strict
  payload: number;
};
const initialState = { count: 0 };

function reducer(state: stateProps, action: actionProps) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Reducer</h2>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};
