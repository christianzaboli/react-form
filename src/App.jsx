import { useState } from 'react'
import './App.css'

import articleList from './assets/articleList'


function App() {

  // useState lista di articoli
  const [titles, setTitles] = useState(articleList)

  // useState per l'invio del nuovo articolo
  const [userArticle, setUserArticle] = useState('')

  // controllo dell'azione di submit del form
  const formSubmit = e => {
    // prevenzione della ricarica dopo il submit
    e.preventDefault()

    // if per prender i casi in cui non venga inserita una stringa vuota
    if (userArticle.trim() === '') {
      alert('Inserisci un titolo valido')
    } else {

      // aggiunta del nuovo articolo all'array di articoli
      setTitles([...titles, { title: userArticle }])

      // resetto il campo dell'input
      setUserArticle('')
    }
  }

  // rimozione articolo
  const deleteArticle = i => {
    const updatedTasks = titles.filter((obj, index) => {
      return index !== i
    })
    setTitles(updatedTasks)
  }


  return (
    <>
      <form action="submit" onSubmit={formSubmit}>
        <label htmlFor=""></label>
        <input type="text"
          value={userArticle}
          placeholder='inserisci il titolo del nuovo articolo'
          onChange={e => { setUserArticle(e.target.value) }}
        />

        <button>Invia</button>
      </form>

      <ul>
        {/* ciclo dell'array di articoli da displayare in html */}
        {titles.map((obj, index) => (

          // siccome il nuovo articolo dell'utente sará aggiunto alla lista che ha giá id, devo implementare un index
          < li key={index} > {obj.title}

            {/* rimozione dell'articolo */}
            < button onClick={() => deleteArticle(index)}>X</button>

          </li >
        ))}
      </ul >
    </>
  )
}

export default App
