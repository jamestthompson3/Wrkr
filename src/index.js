import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import { CookiesProvider } from 'react-cookie'

import registerServiceWorker from './registerServiceWorker'

render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
  , document.getElementById('root'))
registerServiceWorker()
