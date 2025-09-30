import { useState } from 'react';
import articleList from '../assets/articleList'

const MyMain = () => {
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

        <main>
            <section>

                <form action="submit" onSubmit={formSubmit} className='p-3'>
                    <input type="text"
                        value={userArticle}
                        placeholder='inserisci il titolo del nuovo articolo'
                        onChange={e => { setUserArticle(e.target.value) }}
                        className='form-control form-control-lg'
                    />
                </form>

                <ul className='list-group list-group-flush'>
                    {/* ciclo dell'array di articoli da displayare in html */}
                    {titles.map((obj, index) => (

                        // siccome il nuovo articolo dell'utente sará aggiunto alla lista che ha giá id, devo implementare un index
                        < li key={index} className='fw-medium list-group-item list-group-item-action list-group-item-light d-flex flex-row align-items-center justify-content-between' >
                            {obj.title}

                            {/* rimozione dell'articolo */}
                            < button onClick={() => deleteArticle(index)} className='ms-3 btn btn-dark rounded-0'>
                                <i className="fa-solid fa-trash"></i>
                            </button>

                        </li >
                    ))}
                </ul >
            </section>
        </main>

    )

}
export default MyMain