import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);
  const handle = () => {
    const newCount = count + 1;
    setcount(newCount);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handle}>Press</button>
    </div>
  );
}
