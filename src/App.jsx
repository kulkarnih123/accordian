import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordian/>
    </>
  )
}

export default App
