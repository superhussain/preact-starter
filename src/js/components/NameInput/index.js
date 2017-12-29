import { h } from 'preact' // eslint-disable-line no-unused-vars
import { connect } from 'preact-redux'
import { changeName } from '../../actions'

export const NameInput = (props) => (
  <div className="card" style={(props.width) ? { width: props.width } : null}>
    <label className="input__group">
      <span>Name: </span>
      <input
        type="text"
        className="input input--underline input--primary"
        placeholder="John Doe"
        value={props.name}
        onInput={(e) => { props.changeName(e.target.value) }}
      />
    </label>
  </div>
)

export default connect((state) => state, {
  changeName,
})(NameInput)
