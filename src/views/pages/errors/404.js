import { h } from 'preact'; // eslint-disable-line no-unused-vars
import { Link } from 'preact-router';

export default function (props) {
  return (
    <div className="page page__404">
      <h1>404 Page</h1>
      <p>Looks like you were given a bad link.</p>
      <div className="error__url">
        <pre>{ props.url }</pre>
      </div>
      <Link href="/" className="button button--green">Back Home</Link>
    </div>
  );
}
