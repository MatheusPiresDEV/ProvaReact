import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className='NavBar'>
      </div>

      <section id='section01'>
        <div className='foto'>
          <img src="https://image.api.playstation.com/cdn/UP0151/CUSA09971_00/FEs8B2BDAudxV3js6SM2t4vZ88vnxSi0.png?w=440&thumb=false" alt="" width={400} height={400} />
        </div>
        <div className='nomeDireita'>
          <h1>Nome do usuario</h1>
          <p>Sua profissão - função</p>
        </div>
      </section>
      <section id='section02'>
        <div className="container">
            <div className='esquerda'>
              <h1>
                Info
              </h1>
              <p className='infoEsquerda'>
                <br /> 9899988989 <br />
                <br /> umemailqualquer@gmail.com <br />
                <br />N545545 <br />
              </p>
            </div>
            <div className='direita'>
              <h1>
                Equipe
              </h1>
              <p className='infoDireita'>
                  <br />Nome <br />
                  <br />Nome <br />
                  <br />Nome <br />
                  <br />Funcoes <br />
                  <br />Funcoes <br />
                  <br />Funcoes <br />
              </p>
            </div>
          </div>
      </section>
    </>
  )
}

export default App
