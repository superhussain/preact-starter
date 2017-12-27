import { h } from 'preact'; // eslint-disable-line no-unused-vars
import { Router } from 'preact-router';

import Home from './pages/Home';
import AnotherPage from './pages/AnotherPage';
import Layout from './Layout';
import Error404 from './pages/errors/404';

// track pages on route change
const onChange = (obj) => window.ga && ga.send('pageview', { dp: obj.url });

export default (
  <Layout>
    <Router onChange={ onChange }>
      <Home path="/" />
      <AnotherPage path="/another-page" />
      <Error404 default />
    </Router>
  </Layout>
);
