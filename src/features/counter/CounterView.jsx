
import { useSelector } from 'react-redux';


const CounterView = () => {
    const sathi = useSelector((state) => state.counter.count)
    console.log(sathi);
    return (
        <div>
            hi jahid
        </div>
    );
};

export default CounterView;