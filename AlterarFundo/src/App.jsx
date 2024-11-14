import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState("")
  const [theme, setTheme] = useState(true)

  return (
    <>
      <button onClick={() => setTheme(theme ? false : true)}>Trocar o fundo </button>
      {theme ?
        <div className='white'>
          
        </div>
        : <div className='black'>
        </div>
      }
    </>
  )
}

//Não consigo mudar o fundo dps eu vejo

export default App
