import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import App from './App.jsx'
import Aboutme from './components/AboutMe/Aboutme.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/Strona",
    element: <App />
  },
  {
    path: "/aboutMe",
    element: <Aboutme />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <RouterProvider router={router} />
  </React.StrictMode>
)
