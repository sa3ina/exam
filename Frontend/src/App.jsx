import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "normalize.css"
import './App.css'
import "./assets/styles/style.scss"
import routes from './router/Route'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default App
