import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./redux/CounterSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="counter">
        <button id="decrement" onClick={() => dispatch(increment())}>+</button>
        <div className="count">{counter}</div>
        <button id="increment" onClick={() => dispatch(decrement())}>-</button>
        <button id="reset" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
