// components/ExampleComponent.js
import { useRecoilState } from 'recoil';
import { countState } from '../../atoms';

function ExampleComponent() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
