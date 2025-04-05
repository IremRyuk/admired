import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { legacy_createStore as createStore} from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AllReducer } from './Redux/AllReducer.jsx'
let store = createStore(AllReducer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
