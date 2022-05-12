import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/store'


function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  }

  const decrement = () => {
    dispatch(actions.decrement());
  }

  const addBy = () => {
    dispatch(actions.addBy(12));
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Increment</button>
      <button onClick={addBy} >Increment</button>

    </div>
  );
}

export default App;
