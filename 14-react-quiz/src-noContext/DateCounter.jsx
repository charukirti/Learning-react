import { useReducer } from "react";


/* 

* useReducer

in certainn situations state management with useState hook is not enough:-

1:- When components have a lot of state variable and state updates, spread across many event handlers all over the component

2:- When multiple state updates need to happen same time

3:- When updating one piece of state depends on one or more other pieces of state

and in these type of situations useReducer can help


** state with useReducer

👉 An alternative way of setting state, best for managing complex state and related pieces of state

```
  JS

  const [state, dispatch] = useReducer(reducer, initialState);

```

👉 Stores related pieces of state in a state object

👉 useReducer takes reducer function which contains all the logic for updating the state.Decouples state logic from component

👉 reducer takes current state and action  and returns next state

👉 action is the object which describes how to update the state

👉 dispatch is a function which triggers the state updates, by sending actions from event handlers to the reducer

*/

const initalState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count + state.step };

    case "inc":
      return { ...state, count: state.count + state.step };

    case "setCount":
      return { ...state, count: action.payload };

    case "setStep":
      return { ...state, step: action.payload };

    case "reset":
      return initalState;

    default:
      throw new Error("Unknown action");
  }

  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "setCount") return action.payload;
}

export default function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, initalState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });

    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));

    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);

    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
