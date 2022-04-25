import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MyApp from './MyApp'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)