import 'vite/modulepreload-polyfill'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
