import _ from 'lodash'
import {SELECT_ARTIST, DESELECT_ARTIST, RESET_SELECTION} from '../actions/types'

export default (state = [], {type, payload}) => {
  switch (type) {
    case SELECT_ARTIST:
      return [...state, payload]
    case DESELECT_ARTIST:
      return _.without(state, payload)
    case RESET_SELECTION:
      return []
    default:
      return state
  }
}
