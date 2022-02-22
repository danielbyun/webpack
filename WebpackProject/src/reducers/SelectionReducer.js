<<<<<<< HEAD
import _ from 'lodash'
import {SELECT_ARTIST, DESELECT_ARTIST, RESET_SELECTION} from '../actions/types'
=======
import _ from 'lodash';
import {
  SELECT_ARTIST,
  DESELECT_ARTIST,
  RESET_SELECTION
} from '../actions/types';
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_ARTIST:
<<<<<<< HEAD
      return [...state, action.payload]
    case DESELECT_ARTIST:
      return _.without(state, action.payload)
    case RESET_SELECTION:
      return []
    default:
      return state
  }
}
=======
      return [...state, action.payload];
    case DESELECT_ARTIST:
      return _.without(state, action.payload);
    case RESET_SELECTION:
      return [];
    default:
      return state;
  }
};
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
