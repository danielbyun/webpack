import _ from 'lodash'
import {SEARCH_ARTISTS, FIND_ARTIST, RESET_ARTIST} from '../actions/types'

const INITIAL_STATE = {
  all: [],
  offset: 0,
  limit: 20,
  count: 0,
}

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SEARCH_ARTISTS:
      return _.extend({}, state, {
        count: payload.length,
        all: payload,
      })
    case FIND_ARTIST:
      return _.extend({}, state, {artist: payload})
    case RESET_ARTIST:
      return _.extend({}, state, {artist: null})
    default:
      return state
  }
}
