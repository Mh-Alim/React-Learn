import React, { useDebugValue, useEffect } from 'react'

const useLogger = ({value}:{value: string}) => {
    
    useDebugValue(value)
    useEffect(() => {
        console.log("Logged: ",value)
    },[value])
}

export default useLogger