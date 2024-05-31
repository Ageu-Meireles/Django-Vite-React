import { useState, useEffect } from 'react'
import api from '@/services/api'
import './Books.css'
import Navbar from '@/components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Books() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [author, setAuthor] = useState(null)

  const fetchBooks = async () => {
    const { data } = await api.get('/books')
    setBooks(data)
  }

  const fetchAuthors = async () => {
    const { data } = await api.get('/authors')
    setAuthors(data)
  }

  const createBook = async (title, year, author) => {
    const { data } = await api.post('/books/', {
      title: title,
      year: year,
      author: author
    })

    fetchBooks();
  }

  const deleteBook = async (id) => {
    await api.delete(`/books/${id}`)

    fetchBooks();
  }

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, [])

  const renderBooks = () => {
    return books.map(book => (
      <li key={book.id}>
        <b>{book.title}</b>
        <div className="author">
          {book.author.name}
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => deleteBook(book.id)}
          />
        </div>
      </li>
    ))
  }

  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className='books'>
          <h1>Books</h1>
          <div className="form">
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ano"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              {
                authors.map(author => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))
              }
            </select>
            <button
              onClick={() => createBook(title, year, author)}
            >
              <FontAwesomeIcon icon={faPlus} />  fsafasdfasfdsfdfdsf
            </button>
          </div>
          <ul>{renderBooks()}</ul>
        </div>
      </div>
    </>
  )
}
