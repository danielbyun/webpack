<<<<<<< HEAD
import _ from 'lodash'
import {SEARCH_ARTISTS, FIND_ARTIST, RESET_ARTIST} from '../actions/types'
=======
import _ from 'lodash';
import {
  SEARCH_ARTISTS,
  FIND_ARTIST,
  RESET_ARTIST
} from '../actions/types';
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6

const INITIAL_STATE = {
  all: [],
  offset: 0,
  limit: 20,
<<<<<<< HEAD
  count: 0,
}
=======
  count: 0
};
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ARTISTS:
      return _.extend({}, state, {
        count: action.payload.length,
<<<<<<< HEAD
        all: action.payload,
      })
    case FIND_ARTIST:
      return _.extend({}, state, {artist: action.payload})
    case RESET_ARTIST:
      return _.extend({}, state, {artist: null})
    default:
      return state
  }
}
=======
        all: action.payload
      })
    case FIND_ARTIST:
      return _.extend({}, state, { artist: action.payload });
    case RESET_ARTIST:
      return _.extend({}, state, { artist: null });
    default:
      return state;
  }
};
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
