// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <BrowserRouter>
      <ErrorBoundary fallback={<>Something went wrong</>}>
        <App />
      </ErrorBoundary>
      </BrowserRouter>
  // </StrictMode>,
)
