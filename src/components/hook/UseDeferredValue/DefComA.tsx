import React, { memo, useMemo } from "react";

let n = 10000;
const DefComA = memo(({ value }: { value: string }) => {
  console.log("value is ; ", value);
  
  const list = useMemo(() => {
    let list: string[] = [];
    for (let i = 0; i < n; i++) {
      list.push(value);
    }
    return list;
  }, [value]);
  return <div>
    {list.map(e => (<h1>{e}</h1>))}
  </div>
});

export default DefComA;
