
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByNumbers, reset } from './counterSlice';


const CounterView = () => {
    const count = useSelector((state) => state.counter.count)
    console.log(count);
    const dispatch = useDispatch()
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => (dispatch(increment()))}>Increment</button>
            <button onClick={() => (dispatch(decrement()))}>Decrement</button>
            <button onClick={() => (dispatch(reset()))}>Reset</button>
            <button onClick={() => (dispatch(incrementByNumbers(5)))}>incrementByNumbers5</button>
           
        </div>
    );
};

export default CounterView;