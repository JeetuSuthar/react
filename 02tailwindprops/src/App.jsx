import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import mathImage from './assets/maths.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex space-x-3'>
    <Card  subject="Physics"  image="https://images.unsplash.com/photo-1532012197267-da84d127e765"/>
    <Card subject="Chemistry" image="https://images.unsplash.com/photo-1517976487492-5750f3195933" /> 
    <Card 
          subject="Maths" 
          image={mathImage} /> 
    </div>
      

    </>
  )
}

export default App
