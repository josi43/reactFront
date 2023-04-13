import { useState } from 'react'
import reactLogo from './assets/play.svg'
import './App.css'
import Botao from './components/Botao'
import Field from './components/Field'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <div className='center'>
          <div className='margin'>
            <a href="https://vitejs.dev" target="_blank" className='margin'>
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <div className='margin'>
            <Field texto="Email"/>
          </div>
          <div className='margin'>
            <Field texto="Password"/>
          </div>
          <div className=' margin'>
            <Botao/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
