import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompA from './components/Memo/CompA'
import { CountContext } from './components/context/countContext'
import CompB from './components/Memo/CompB'
import CompF from './components/Memo/CompF'
import Main from './components/hook/UseId/Main'
import CtReferral from './components/whatsappShare/CtReferral'
import DivToImage from './components/whatsappShare/DivToImage'

import Image from './components/Image'
import CopyContent from './components/CopyContent'


function App() {
  


  return (
    <div>
      {/* <CtReferral /> */}
      {/* <DivToImage /> */}
      {/* <Image /> */}
      this is app
      <CopyContent />
    </div>
  )
}

export default App
