import React from 'react'
import ReactDOM from 'react-dom/client'
import store from '../core/store/index.js'
import App from './App.jsx'
import { Provider } from 'react-redux'
import 'normalize.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
