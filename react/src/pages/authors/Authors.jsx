import { useState, useEffect } from 'react'
import api from '@/services/api'
import Navbar from '@/components/Navbar'
import './Authors.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Authors() {
  const [authors, setAuthors] = useState([])
  const [authorName, setAuthorName] = useState('')

  const fetchAuthors = async () => {
    const { data } = await api.get('/authors')
    setAuthors(data)
  }

  const deleteAuthor = async (id) => {
    await api.delete(`/authors/${id}`)

    fetchAuthors();
  }

  const createAuthor = async (name) => {
    const { data } = await api.post('/authors/', {
      name: name
    })

    fetchAuthors();
  }

  useEffect(() => {
    fetchAuthors()
  }, [])

  const renderAuthors = () => {
    return authors.map((author) => (
      <li key={author.id}>
        <div className="book">
          {author.name}
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => deleteAuthor(author.id)}
          />
        </div>
      </li>
    ))
  }

  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className='authors'>
          <h1>Autores</h1>
          <div className='form'>
            <input
              type="text"
              placeholder="Nome do autor"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            <button
              onClick={() => createAuthor(authorName)}
            >
              <FontAwesomeIcon
                icon={faPlus}
              /> Criar
            </button>
          </div>
          <ul>{renderAuthors()}</ul>
        </div>
      </div>
    </>
  )
}