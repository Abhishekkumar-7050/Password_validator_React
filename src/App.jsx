import { useState } from 'react'
 import Inputform from './components/Inputform'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Password Validator</h1>
     <Inputform/>
    
    </>
  )
}

export default App
