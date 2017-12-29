import { h } from 'preact'; // eslint-disable-line no-unused-vars
import { Link } from 'preact-router';

export const AnotherPage = () => (
  <div className="page page__another">
    <h1>Another Page</h1>
    <h2>&mdash; &nbsp; This is to demonstrate Preact Router &nbsp; &mdash;</h2>

    <div className="button__container">
      <Link href="/" className="button button--green">Home</Link>
      <Link href="/contact" className="button button--blue">Contact</Link>
      <Link href="/another-page" className="button button--yellow">Another Page</Link>
      <Link href="/blah" className="button button--red">404 Page</Link>
    </div>

    <Link href="/" className="button button--big" style={{ marginTop: '2em' }}>Back Home</Link>
  </div>
)

export default AnotherPage;
