import { h } from 'preact' // eslint-disable-line no-unused-vars
import { Router } from 'preact-router'
import { Provider } from 'unistore/preact'

import store from '../store'

import Layout from './Layout'

import Home from './Pages/Home'
import AnotherPage from './Pages/AnotherPage'
import Error404 from './Pages/errors/404'

// track pages on route change
const onChange = (obj) => window.ga && ga.send('pageview', { dp: obj.url })

export default (
  <Provider store={store}>
    <Layout>
      <Router onChange={ onChange }>
        <Home path="/" />
        <AnotherPage path="/another-page" />
        <Error404 default />
      </Router>
    </Layout>
  </Provider>
)
