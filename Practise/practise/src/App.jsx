import { useState } from 'react'
import Counter from './topics/Counter'
import FormDataDisplay from './topics/FormDataDisplay'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <FormDataDisplay/>
    </div>
  )
}

export default App
