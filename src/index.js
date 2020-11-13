import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import { App } from './components/Base'
import Firebase, { FirebaseContext } from './components/Firebase'

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Provider>, 
  document.getElementById('root')
)
