import 'vite/modulepreload-polyfill'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Books from '../books/Books.jsx'
import Authors from '../authors/Authors.jsx'
// import ErrorPage from '../errors/error-page.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/books",
      element: <Books />,
    },
    {
      path: "/authors",
      element: <Authors />,
    },
  ],
  {
    basename: '/static',
  }
);

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
