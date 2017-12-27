import { h } from 'preact' // eslint-disable-line no-unused-vars
import { connect } from 'unistore/preact'
import actions from '../../store/actions'

const NameInput = ({ name, width, changeName }) => (
  <label className="input__group card" style={(width) ? { width } : null}>
    <span>Name: </span>
    <input
      type="text"
      className="input input--big input--primary"
      placeholder="John Doe"
      value={name}
      onInput={(e) => { changeName(e.target.value) }}
    />
  </label>
)

export default connect((state) => state, actions)(NameInput)
