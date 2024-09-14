import React, { forwardRef, useRef } from 'react'
import ChildA from './ChildA'

const Main = () => {
  const ref = useRef();
  return (
    <div>
        <ChildA ref={ref}  />
        <button>show name</button>
        <button>show address</button>
        <button>show count</button>
        <button>set count</button>
    </div>
  )
}

export default Main