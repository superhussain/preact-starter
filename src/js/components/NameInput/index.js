import { h } from 'preact' // eslint-disable-line no-unused-vars
import { connect } from 'preact-redux'
import { changeName } from '../../actions'

const NameInput = (props) => (
  <label className="input__group card" style={(props.width) ? { width: props.width } : null}>
    <span>Name: </span>
    <input
      type="text"
      className="input input--big input--primary"
      placeholder="John Doe"
      value={props.name}
      onInput={(e) => { props.changeName(e.target.value) }}
    />
  </label>
)

export default connect((state) => state, {
  changeName,
})(NameInput)
