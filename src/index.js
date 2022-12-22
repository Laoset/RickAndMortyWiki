import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//React ROUTING
import {BrowserRouter} from 'react-router-dom'
//redux
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <footer class='footer'><p class='text'>Created with 💛 by Kevin Corman Samanamud</p></footer>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
