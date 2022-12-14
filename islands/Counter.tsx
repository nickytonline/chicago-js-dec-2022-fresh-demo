import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="counter stack">
      <p>{count}</p>
      <div>
        <Button onClick={() => setCount(count - 1)}>-1</Button>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
      </div>
    </div>
  );
}
