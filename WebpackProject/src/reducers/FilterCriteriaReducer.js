<<<<<<< HEAD
import _ from 'lodash'
import {SET_AGE_RANGE, SET_YEARS_ACTIVE_RANGE} from '../actions/types'

const INITIAL_STATE = {
  age: {min: 0, max: 100},
}
=======
import _ from 'lodash';
import {
  SET_AGE_RANGE,
  SET_YEARS_ACTIVE_RANGE
} from '../actions/types';

const INITIAL_STATE = {
  age: { min: 0, max: 100 }
};
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AGE_RANGE:
<<<<<<< HEAD
      return _.extend({}, state, {age: action.payload})
    case SET_YEARS_ACTIVE_RANGE:
      return _.extend({}, state, {yearsActive: action.payload})
    default:
      return state
  }
}
=======
      return _.extend({}, state, { age: action.payload });
    case SET_YEARS_ACTIVE_RANGE:
      return _.extend({}, state, { yearsActive: action.payload });
    default:
      return state;
  }
};
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
