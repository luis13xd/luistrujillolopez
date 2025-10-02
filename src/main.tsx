import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/Portafolio.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
