import { useCallback, useState, useEffect, useRef } from 'react'
import "./App.css"



function App() {
  const [passwordLength, setPasswordLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(true)
  const [characterAllowed, setCharacterAllowed] = useState(true)
  const [password, setPassword] = useState("")


  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    if (numbersAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+`~[]{}"
    }

    for (let i = 1; i <= passwordLength; i++) {
      let charIndex = Math.floor(Math.random() * (str.length + 1))
      let char = str.charAt(charIndex)
      pass += char
    }

    setPassword(pass)

  }, [passwordLength, numbersAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, password.length)
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, characterAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md text-center rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800 flex flex-col justify-center align-middle gap-y-3'>
      Password Generator
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-800 flex '>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 rounded-tl-md rounded-bl-md text-center'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-tr-md rounded-br-md'
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>

      <div className='flex text-sm flex-col gap-y-4 py-2 pl-8'> 
        <div className='flex gap-x-3'>
            <input 
            type="range"
            min={6}
            max={100}
            value={passwordLength}
            className='cursor-pointer'
            onChange={(e) => {setPasswordLength(e.target.value)}}
            />
            <label> Length: {passwordLength} </label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          id="numberInput"
          name='numberInput'
          className=''
          defaultChecked={numbersAllowed}
          onChange={(e) => {
            setNumbersAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Number Allowed ?</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          name="characterInput" 
          id="characterInput"
          defaultChecked={characterAllowed}
          onChange={() => {
            setCharacterAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="characterInput">Character Allowed ?</label>
        </div>

      </div>

    </div>
    </>
  )
}

export default App
