import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  //useREF Hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "_@#$-"
    for (let i = 1; i <= length; i++) {
      let c = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(c)
    }
    setPassword(pass)
  }, [length, number, char, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])

  return (
    <>
      <div className='text-4xl border  bg-gray-950   rounded-2xl p-7      '>
        <h2 className='mb-3 font-serif font-bold       '>Password Generator</h2>
        <div className='flex '>
          <input className='rounded-l-2xl bg-white w-full text-xl pl-2 text-orange-950 font-semibold font-mono ' type="text" name="" id="" placeholder='password' value={password} ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className=' text-xl text-center bg-indigo-700 hover:bg-indigo-950  rounded-r-2xl       ' type="button"  >copy</button>
        </div>
        <div className='text-xl flex gap-6 mt-2 '>
          <div className='flex gap-1 '>
            <input className='cursor-pointer ' type="range" value={length} name="" id="" onChange={(e) => { setLength(e.target.value) }} />
            <label className='' htmlFor="range"  >Length: {length}</label>
          </div>
          <div className='flex items-center align-middle gap-1'>
            <input className='size-4   ' type="checkbox" defaultChecked={Number} name="" id="" onChange={() => {
              setNumber((prev) => !prev)
            }} />
            <label htmlFor="checkbox">numbers</label>
          </div>
          <div className='flex items-center align-middle gap-1'>
            <input className='size-4   ' type="checkbox" defaultChecked={char} name="" id="" onChange={() => {
              setChar((prev) => !prev)
            }} />
            <label htmlFor="checkbox">symbol</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
