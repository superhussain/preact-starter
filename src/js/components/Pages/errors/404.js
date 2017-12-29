import { h } from 'preact'; // eslint-disable-line no-unused-vars
import { Link } from 'preact-router';

export default function (props) {
  return (
    <div className="page page__404">
      <h1>404 Page</h1>
      <h2>&mdash; &nbsp; Looks like your were given a bad link &nbsp; &mdash;</h2>

      <div className="error__url">
        <pre>{ props.url }</pre>
      </div>

      <Link href="/" className="button button--big" style={{ marginTop: '2em' }}>Back Home</Link>
    </div>
  );
}
