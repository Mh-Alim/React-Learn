import React, { forwardRef, useState } from 'react'

const ChildA = (props:any,ref:any) => {
    const [count,setCount] = useState(0);
    
  return (
    <div>
        <h2>Child Component</h2>
        <h2>{count}</h2>
    </div>
  )
}

export default forwardRef(ChildA);