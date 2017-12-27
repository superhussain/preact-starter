import { h } from 'preact' // eslint-disable-line no-unused-vars
import { connect } from 'unistore/preact'
import actions from '../../store/actions'

const Counter = ({
  count, width, increment, decrement, resetCount,
}) => (
  <div className="counter card" style={(width) ? { width } : null}>
    <h3>
      {(count === 0) && (<span>Start by clicking increment...</span>)}
      {(count === 1) && (<span>Clicked {count} time</span>)}
      {(count > 1) && (<span>Clicked {count} times</span>)}
    </h3>

    <div className="button__container">
      <button className="button button--small button--green" onClick={increment}>Increment</button>
      {(count > 0) && (
        <button className="button button--small button--yellow" onClick={decrement}>Decrement</button>
      )}
    </div>

    <div className="button__container">
      {(count > 0) && (
        <button className="button button--small button--red" onClick={resetCount}>Reset Counter</button>
      )}
    </div>
  </div>
)

export default connect((state) => state, actions)(Counter)
