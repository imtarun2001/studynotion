
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LoginSignupContextProvider } from './context/loginSignupContext/LoginSignupContext.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <LoginSignupContextProvider>
          <App />
          <Toaster/>
      </LoginSignupContextProvider>
  </BrowserRouter>
)
