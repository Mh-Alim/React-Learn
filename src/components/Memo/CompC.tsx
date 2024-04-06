import React, { memo, useContext } from "react";
import { CountContext } from "../context/countContext";

const CompC = memo(() => {
  console.log("comp-c");
  const { setCount } = useContext(CountContext);
  return (
    <div>
      <div>compC</div>
      <button onClick={() => setCount((prev: number) => prev + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
});

export default CompC;
