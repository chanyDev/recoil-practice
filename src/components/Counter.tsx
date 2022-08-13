import { useRecoilState } from 'recoil';
import { counterState } from '../recoils/counter';

const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);

  const handleDecrease = () => {
    setCount(prev => prev - 1);
  };

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  return (
    <>
      <button onClick={handleDecrease}>-</button>
      <p>Count : {count}</p>
      <button onClick={handleIncrease}>+</button>
    </>
  );
};

export default Counter;
