import { h } from 'preact'; // eslint-disable-line no-unused-vars
import { Link } from 'preact-router';

const Home = () => (
  <div className="page page__home">
    <h1>Welcome to Your Preact App</h1>

    <div className="button__container">
      <Link href="/another-page" className="button button--big button--blue">Another Page</Link>
      <Link href="/blah" className="button button--big button--red">404 Page</Link>
    </div>
  </div>
)

export default Home;
