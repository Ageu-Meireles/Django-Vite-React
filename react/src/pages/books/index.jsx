import 'vite/modulepreload-polyfill'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Books from './Books'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Books />
  </React.StrictMode>,
)
