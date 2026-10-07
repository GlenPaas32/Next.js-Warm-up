"use client";

import { useState } from "react";

// 'use client' is needed because useState and onClick only work in the browser.
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
