import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Cart Provider
import CartProvider from './context/CartProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
