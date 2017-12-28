import { h } from 'preact'; // eslint-disable-line no-unused-vars
import { Link } from 'preact-router';

const AnotherPage = () => (
  <div className="page page__another">
    <h1>This is Another Page</h1>
    <Link href="/" className="button button--big button--green">Back Home</Link>
  </div>
)

export default AnotherPage;
