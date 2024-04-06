import React, { memo, useContext } from "react";
import CompC from "./CompC";
import CompD from "./CompD";
import { CountContext } from "../context/countContext";
import CompX from "./CompX";

const CompB = memo(() => {
  const { count } = useContext(CountContext);

  console.log("compb is rendering");

  return (
    <div>
      <div>CompB</div>
      <CompX />
      <CompD />
      <div>{count}</div>
    </div>
  );
});

export default CompB;
