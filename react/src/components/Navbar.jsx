import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a className='nav-btn' href="/home">Página Inicial</a>
        </li>
        <li>
          <a className='nav-btn' href="/books">Livros</a>
        </li>
        <li>
          <a className='nav-btn' href="/authors">Autores</a>
        </li>
      </ul>
    </nav>
  )
}