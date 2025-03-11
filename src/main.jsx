import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import Contextprovider from './components/pages/cart/Contextprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <Contextprovider>
<App />

     </Contextprovider>
    </BrowserRouter>
  </StrictMode>,
)
