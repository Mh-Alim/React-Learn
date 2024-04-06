import React, { memo, useState } from "react";
import CompB from "./CompB";
import { CountContext } from "../context/countContext";

const CompA = memo(() => {
  console.log("compA is rendering");
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <div>CompA</div>
        <CompB />
      </CountContext.Provider>
    </div>
  );
});

export default CompA;
