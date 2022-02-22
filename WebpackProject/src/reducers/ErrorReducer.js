<<<<<<< HEAD
import {CREATE_ERROR, CLEAR_ERROR} from '../actions/types'
=======
import {
  CREATE_ERROR,
  CLEAR_ERROR
} from '../actions/types';
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6

export default (state = '', action) => {
  switch (action.type) {
    case CREATE_ERROR:
<<<<<<< HEAD
      return 'There was an error inserting this record'
    case CLEAR_ERROR:
      return ''
    default:
      return state
  }
}
=======
      return 'There was an error inserting this record';
    case CLEAR_ERROR:
      return '';
    default:
      return state;
  }
};
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
