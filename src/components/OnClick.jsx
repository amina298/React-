import { useState } from "react";

function ClickExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default ClickExample;
