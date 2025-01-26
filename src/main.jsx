import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
/* src/main.jsx */
import "./ui-kit/tokens/primitives.css";
import "./ui-kit/tokens/my-company-brand.css";
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


