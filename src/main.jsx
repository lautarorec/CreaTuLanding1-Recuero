import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //corre el archivo
import App from './App.jsx' //se trae una constante del archivo app.jsx
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
)


