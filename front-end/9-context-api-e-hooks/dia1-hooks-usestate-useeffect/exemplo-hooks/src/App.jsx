import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [idade, setIdade] = useState('')
  const [cidade, setCidade] = useState('')
  const [modulo, setModulo] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'name') {
      setName(value)
    }
    if (name === 'idade') {
      setIdade(value)
    }
    if (name === 'cidade') {
      setCidade(value)
    }
    if (name === 'modulo') {
      setModulo(value)
    }
    console.log(name, value)
  }


  return (
    <div>
      <h1>teste Hooks</h1>
      <input 
      name='name'
      type="text" 
      placeholder='name'
      value={name}
      onChange={handleChange}
      />
      <input 
      name='idade'
      type="number" 
      placeholder='idade'
      value={idade}
      onChange={handleChange}
      />
      <input 
      name='cidade'
      type="text" 
      placeholder='cidade'
      value={cidade}
      onChange={handleChange} />
      
      <input 
      type="radio" 
      name={modulo} 
      value="Fundamentos"
      onChange={handleChange}
      /> Fundamentos
      <input 
      type="radio" 
      name={modulo} 
      value="FrontEnd"
      onChange={handleChange}
      /> FrontEnd
      <input 
      type="radio" 
      name={modulo} 
      value="BackEnd" 
      onChange={handleChange}
      /> BackEnd
      <input 
      type="radio" 
      name={modulo} 
      value="Ciência da Computação"
      onChange={handleChange}
      /> Ciência da Computação
      <button></button>
    </div>
  )
}

export default App
