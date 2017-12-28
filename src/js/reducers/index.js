import { combineReducers } from 'redux'

import count from './counter'
import name from './name'

export default combineReducers({
  count,
  name,
})
