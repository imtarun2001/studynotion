
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LoginSignupContextProvider } from './context/loginSignupContext/LoginSignupContext.jsx'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './reducers/Store.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider store={store}>
        <LoginSignupContextProvider>
            <App />
            <Toaster/>
        </LoginSignupContextProvider>
      </Provider>
  </BrowserRouter>
);