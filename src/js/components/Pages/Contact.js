import { h } from 'preact'; // eslint-disable-line no-unused-vars
import { Link } from 'preact-router';

const Contact = () => (
  <div className="page page__contact">
    <h1>Contact</h1>
    <h2>&mdash; &nbsp; Drop us a line below &nbsp; &mdash;</h2>

    <div className="button__container">
      <Link href="/" className="button button--green">Home</Link>
      <Link href="/contact" className="button button--blue">Contact</Link>
      <Link href="/another-page" className="button button--yellow">Another Page</Link>
      <Link href="/blah" className="button button--red">404 Page</Link>
    </div>

    <form className="card" style={{ width: 400 }} method="post">
      <input type="hidden" name="form-name" value="contactTest" />
      <label className="input__group">
        <span>Name: </span>
        <input type="text" name="name" className="input input--primary" placeholder="John Doe" />
      </label>
      <label className="input__group">
        <span>Email: </span>
        <input type="text" name="email" className="input input--primary" placeholder="john@example.com" />
      </label>
      <label className="input__group">
        <span>Message: </span>
        <textarea name="message" className="input input--primary"></textarea>
      </label>
      <label className="input__group">
        <button type="submit" className="button button--primary">Submit</button>
      </label>
    </form>

    <div className="button__container">
      <Link href="/" className="button button--big button--green">Back Home</Link>
    </div>
  </div>
)

export default Contact;
