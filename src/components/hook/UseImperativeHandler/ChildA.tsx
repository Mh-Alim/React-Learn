import React, { forwardRef, useImperativeHandle, useState } from "react";

const ChildA = (props: any, ref: any) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(
    ref,
    () => {
      return {
        logName,
        logAddress,
        logCount,
        setterFunction,
      };
    },
    []
  );

  const logName = () => {
    console.log("Alim Khan");
  };
  const logAddress = () => {
    console.log("Masjid road akaltara");
  };

  const logCount = () => {
    return count;
  };

  const setterFunction = (cnt) => {
    setCount(cnt);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <h2>{count}</h2>
    </div>
  );
};

export default forwardRef(ChildA);
