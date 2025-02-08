import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApiProvider } from './components/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider>
    <App />
  </ApiProvider>
)
