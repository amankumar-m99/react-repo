import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='m-5'>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
      <br />
      <Card username = "Aman" />
      <br />
      <Card />
      <br />
      <Card username = "Aman" />
      <br />
      <Card />
      </div>
    </>
  )
}

export default App
