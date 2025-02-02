import { createContext, useContext, useState } from "react";

// 1) create context
const CounterContext = createContext();

// 2) create Parent component
export default function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((e) => e + 1);
  const decrease = () => setCount((e) => e - 1);
  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// 3) create child components that will help implement common functionality

function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

// 4. Add the child components to the parent component
Counter.count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
