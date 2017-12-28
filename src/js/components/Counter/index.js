import { h } from 'preact' // eslint-disable-line no-unused-vars
import { connect } from 'preact-redux'
import { incrementCount, decrementCount, resetCount } from '../../actions'

const Counter = (props) => (
  <div className="counter card" style={(props.width) ? { width: props.width } : null}>
    <h3>
      {(props.count === 0) && (<span>Start by clicking increment...</span>)}
      {(props.count === 1) && (<span>Clicked {props.count} time</span>)}
      {(props.count > 1) && (<span>Clicked {props.count} times</span>)}
    </h3>

    <div className="button__container">
      <button className="button button--small button--green" onClick={props.incrementCount}>Increment</button>
      {(props.count > 0) && (
        <button className="button button--small button--yellow" onClick={props.decrementCount}>Decrement</button>
      )}
    </div>

    <div className="button__container">
      {(props.count > 0) && (
        <button className="button button--small button--red" onClick={props.resetCount}>Reset Counter</button>
      )}
    </div>
  </div>
)

export default connect((state) => state, {
  incrementCount,
  decrementCount,
  resetCount,
})(Counter)
