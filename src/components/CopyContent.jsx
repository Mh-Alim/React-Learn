import React from 'react'

const CopyContent = () => {

    const copyHandler = () => {
        let div = document.getElementById("copy");
        div.select();
        document.execCommand("copy");
    }
  return (
    <div>
        {/* <input type="text" id='copy' /> */}
        <input id='copy' value={"this is the text"} />
        <button onClick={copyHandler}>copy</button>
    </div>
  )
}

export default CopyContent