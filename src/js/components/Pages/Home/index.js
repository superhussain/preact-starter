import { h } from 'preact' // eslint-disable-line no-unused-vars
import { connect } from 'preact-redux'
import { Link } from 'preact-router'

import NameInput from '../../NameInput'
import Counter from '../../Counter'

export const Home = (props) => (
  <div className="page page__home">
    <h1>Hello {props.name || 'World'}!</h1>
    <h2>&mdash; &nbsp; Welcome to Your Preact App &nbsp; &mdash;</h2>

    <div className="button__container">
      <Link href="/" className="button button--green">Home</Link>
      <Link href="/contact" className="button button--blue">Contact</Link>
      <Link href="/another-page" className="button button--yellow">Another Page</Link>
      <Link href="/blah" className="button button--red">404 Page</Link>
    </div>

    <NameInput width={400} />
    <Counter width={400} />
  </div>
)

export default connect((state) => state, {})(Home)
