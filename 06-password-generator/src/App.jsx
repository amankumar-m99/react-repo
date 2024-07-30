import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [numbersAllowed, setNumbersAllowed] = useState(true);
  const [charsAllowed, setCharsAllowed] = useState(true);
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbersAllowed) str += "0123456789";
    if(charsAllowed) str += "!@#$%^&*()_+-=";
    for(let i=0 ; i<length; i++){
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charsAllowed, numbersAllowed]);

  useEffect(()=>generatePassword(), [length, numbersAllowed, charsAllowed])
  
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input className='outline-none w-full py-1 px-3' ref={passwordRef}
          type="text" placeholder='Password' value={password} readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input type="range" min={8} max={15} value={length}
          className='cursor-pointer' id="length"
          onChange={(e)=>setLength(e.target.value)}
        />
        <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numbersAllowed} id="numbers"
          onChange={()=>setNumbersAllowed((prev)=> !prev)}
        />
        <label htmlFor="numbers">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={charsAllowed} id="characters"
          onChange={()=>setCharsAllowed((prev)=> !prev)}
        />
        <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  )
}
 
export default App
