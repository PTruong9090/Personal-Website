import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Collapse from 'bootstrap/js/dist/collapse'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('page-top')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
