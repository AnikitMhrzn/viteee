import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// PrimeReact core
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

// Global styles
import './index.css'

// 🔥 Load BOTH themes
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/themes/lara-dark-blue/theme.css'

// 🔥 Set default theme BEFORE render
document.documentElement.classList.add('dark')
document.documentElement.setAttribute('data-theme', 'dark')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
