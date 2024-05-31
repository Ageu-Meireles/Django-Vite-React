import { useState, useEffect } from 'react'
import reactLogo from '@/assets/react.svg'
import djangoLogo from '@/assets/django.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import Navbar from '@/components/Navbar.jsx'

export default function Home() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert('teste')
  }, [])

  return (
    <>
      <Navbar />
      <div className="app-container">
        <div>
          <a href="https://www.djangoproject.com/" target="_blank">
            <img src={djangoLogo} className="logo django" alt="Django logo" />
          </a>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Django + Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}
