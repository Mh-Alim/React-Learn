import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import DefComA from "./DefComA";
import useLogger from "../../customHook/useLogger";



// make a video of this hook 
let n = 1;
const Main = () => {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);


  useLogger({value});
  let list = useMemo(() => {
    let list: string[] = [];
    for (let i = 0; i < n; i++) {
      list.push(value);
    }
    return list;
  }, [deferredValue]);
  console.log(value, deferredValue);
  return (
    <div>
      <h1>Use Deferred Value Hook</h1>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
      </div>
      {/* <DefComA value={deferredValue} /> */}
      <div>
        {list.map((e) => (
          <h1>{e}</h1>
        ))}
      </div>
    </div>
  );
};

export default Main;
