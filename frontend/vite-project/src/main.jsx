import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
//<StrictMode>
//    <App />
//  </StrictMode>,

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
      </Routes>
  </BrowserRouter>
  
)
