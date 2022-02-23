import _ from 'lodash'
import {SET_AGE_RANGE, SET_YEARS_ACTIVE_RANGE} from '../actions/types'

const INITIAL_STATE = {
  age: {min: 0, max: 100},
}

export default (state = INITIAL_STATE, {payload, type}) => {
  switch (type) {
    case SET_AGE_RANGE:
      return _.extend({}, state, {age: payload})
    case SET_YEARS_ACTIVE_RANGE:
      return _.extend({}, state, {yearsActive: payload})
    default:
      return state
  }
}
