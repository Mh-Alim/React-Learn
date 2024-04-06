import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompA from './components/Memo/CompA'
import { CountContext } from './components/context/countContext'
import CompB from './components/Memo/CompB'
import CompF from './components/Memo/CompF'
import Main from './components/hook/UseId/Main'




function App() {


  return (
    <div>
      {/* <CompF /> */}
       {/* <CompA/> */}
       {/* <Main /> */}
       <Main />
    </div>
  )
}

export default App
