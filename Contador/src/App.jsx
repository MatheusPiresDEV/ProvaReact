import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sub, setSub] = useState(0)
  const [dez, setDez] = useState(0)
  const [senai, setSenai] = useState("");

      // verifica se tem a string senai na const senai
  let teste = ""; {

  if (senai === "SENAI" || senai === "senai" || senai === "Senai") 
    teste = 'SENAI!!!'; 
  }

  return (
    <>
      {/* conta de 1 em 1 mudando o valor  da const Count */}
      <div className="contadorSimples">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador 1 em 1
          <h1>{count}</h1>
        </button>
  
        {/* Subtrai a partir do zero  */}
        <button onClick={() => setSub((sub) => sub - 1)}>
          Contador - 1
          <h1>{sub}</h1>
        </button>
        {/* Subtração do valor de count */}
        <button onClick={() => setCount((count) => count - 1)}>
          Subtração que altera o primeiro
        </button>
      </div>
      {/* conta de 10 em 10 */}
      <div className='contadorDez'>
        <button onClick={() => setDez((dez) => dez + 10)}>Adição 10 em 10
        </button>
        <h1>
          {dez}
        </h1>
      </div>
      {/* Coloca o campo para o usuario e escrever e verifica se existe a palavra senai não funciona com palavras no meio do texto */}
        <div className='senai'> 
          <input type="text" onChange={(e) => setSenai(e.target.value)} /> 
          <h1>{senai} {teste}</h1> 
        </div>
    </>
  )
}

export default App
