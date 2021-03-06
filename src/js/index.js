import { h } from 'preact' // eslint-disable-line no-unused-vars
import { Router } from 'preact-router'

import { Provider } from 'preact-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'

import storage from 'redux-persist/es/storage'
import { persistStore, persistCombineReducers } from 'redux-persist'
import PersistGate from './components/PersistGate'

import reducers from './reducers'

import Layout from './components/Layout'

import Home from './components/Pages/Home'
import AnotherPage from './components/Pages/AnotherPage'
import Contact from './components/Pages/Contact'
import Error404 from './components/Pages/_Errors/404'

// track pages on route change
const onChange = (obj) => window.ga && ga.send('pageview', { dp: obj.url })

let store
let middleware

const config = {
  key: 'root',
  storage,
}

const reducer = persistCombineReducers(config, reducers)

if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(promise, thunk)
  store = createStore(reducer, middleware)
} else {
  const logger = createLogger()
  middleware = applyMiddleware(promise, thunk, logger)
  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    store = createStore(
      reducer,
      compose(middleware, __REDUX_DEVTOOLS_EXTENSION__()),
    )
  } else {
    store = createStore(reducer, middleware)
  }
}

const persistor = persistStore(store)

export default (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Layout>
        <Router onChange={ onChange }>
          <Home path="/" />
          <AnotherPage path="/another-page" />
          <Contact path="/contact" />
          <Error404 default />
        </Router>
      </Layout>
    </PersistGate>
  </Provider>
)
