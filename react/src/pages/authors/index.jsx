import 'vite/modulepreload-polyfill'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Authors from './Authors'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Authors />
  </React.StrictMode>,
)
