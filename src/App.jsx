import { useState } from 'react'
import './App.css'

function App() {
  // useState per l'input
  const [title, setTitle] = useState('')

  // controllo dell'azione di submit del form
  const formSubmit = e => {
    e.preventDefault()

    // resetto il campo dell'input
    setTitle('')
  }

  return (
    <>
      <form action="submit" onSubmit={formSubmit}>
        <input type="text"
          value={title}
          placeholder='inserisci il titolo del nuovo articolo'
          onChange={e => { setTitle(e.target.value) }} />
        <button>Invia</button>
      </form>
    </>
  )
}

export default App
