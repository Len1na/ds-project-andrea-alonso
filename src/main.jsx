import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import "./ui-kit/tokens/primitives.css";
import "./ui-kit/tokens/my-company-brand.css";
import "./index.css";
import "./ui-kit/atoms/icon/font-icons.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


