<<<<<<< HEAD
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import filterCriteriaReducer from './FilterCriteriaReducer'
import ArtistsReducer from './ArtistsReducer'
import ErrorReducer from './ErrorReducer'
import SelectionReducer from './SelectionReducer'
=======
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import filterCriteriaReducer from './FilterCriteriaReducer';
import ArtistsReducer from './ArtistsReducer';
import ErrorReducer from './ErrorReducer';
import SelectionReducer from './SelectionReducer';
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6

export default combineReducers({
  form: formReducer,
  filterCriteria: filterCriteriaReducer,
  artists: ArtistsReducer,
  errors: ErrorReducer,
<<<<<<< HEAD
  selection: SelectionReducer,
})
=======
  selection: SelectionReducer
});
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
