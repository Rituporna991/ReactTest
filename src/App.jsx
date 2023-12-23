import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YourPostman from './YourPostman'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <YourPostman name="Dhritiraj"/>
    </>
  )
}

export default App
