import _ from 'lodash'
import {createBrowserHistory} from 'history'
import {
  SET_AGE_RANGE,
  SET_YEARS_ACTIVE_RANGE,
  SEARCH_ARTISTS,
  FIND_ARTIST,
  RESET_ARTIST,
  CREATE_ERROR,
  CLEAR_ERROR,
  DESELECT_ARTIST,
  SELECT_ARTIST,
  RESET_SELECTION,
} from './types'

import GetAgeRange from '../../database/queries/GetAgeRange'
import GetYearsActiveRange from '../../database/queries/GetYearsActiveRange'
import SearchArtists from '../../database/queries/SearchArtists'
import FindArtist from '../../database/queries/FindArtist'
import CreateArtist from '../../database/queries/CreateArtist'
import EditArtist from '../../database/queries/EditArtist'
import DeleteArtist from '../../database/queries/DeleteArtist'
import SetRetired from '../../database/queries/SetRetired'
import SetNotRetired from '../../database/queries/SetNotRetired'

const history = createBrowserHistory()

export const resetArtist = () => {
  return {type: RESET_ARTIST}
}

export const clearError = () => {
  return {type: CLEAR_ERROR}
}

export const selectArtist = (id) => {
  return {type: SELECT_ARTIST, payload: id}
}

export const deselectArtist = (id) => {
  return {type: DESELECT_ARTIST, payload: id}
}

export const setRetired = (ids) => (dispatch, getState) =>
  SetRetiredProxy(ids.map((id) => id.toString()))
    .then(() => dispatch({type: RESET_SELECTION}))
    .then(() => refreshSearch(dispatch, getState))

export const setNotRetired = (ids) => (dispatch, getState) =>
  SetNotRetiredProxy(ids.map((id) => id.toString()))
    .then(() => dispatch({type: RESET_SELECTION}))
    .then(() => refreshSearch(dispatch, getState))

export const setAgeRange = () => (dispatch) =>
  GetAgeRangeProxy().then((result) =>
    dispatch({type: SET_AGE_RANGE, payload: result})
  )

export const setYearsActiveRange = () => (dispatch) =>
  GetYearsActiveRangeProxy().then((result) =>
    dispatch({type: SET_YEARS_ACTIVE_RANGE, payload: result})
  )

export const searchArtists =
  (...criteria) =>
  (dispatch) =>
    SearchArtistsProxy(...criteria).then((result = []) =>
      dispatch({type: SEARCH_ARTISTS, payload: result})
    )

export const findArtist = (id) => (dispatch) =>
  FindArtistProxy(id).then((artist) =>
    dispatch({type: FIND_ARTIST, payload: artist})
  )

export const createArtist = (props) => (dispatch) =>
  CreateArtistProxy(props)
    .then((artist) => {
      history.push(`artists/${artist._id}`)
    })
    .catch((error) => {
<<<<<<< HEAD
      console.error(error)
=======
      console.log(error)
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
      dispatch({type: CREATE_ERROR, payload: error})
    })

export const editArtist = (id, props) => (dispatch) =>
  EditArtistProxy(id, props)
    .then(() => history.push(`artists/${id}`))
    .catch((error) => {
<<<<<<< HEAD
      console.error(error)
=======
      console.log(error)
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
      dispatch({type: CREATE_ERROR, payload: error})
    })

export const deleteArtist = (id) => (dispatch) =>
  DeleteArtistProxy(id)
    .then(() => history.push('/'))
    .catch((error) => {
<<<<<<< HEAD
      console.error(error)
=======
      console.log(error)
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
      dispatch({type: CREATE_ERROR, payload: error})
    })

//
// Faux Proxies

const GetAgeRangeProxy = (...args) => {
  const result = GetAgeRange(...args)
<<<<<<< HEAD
  if (!result || !result.then) return new Promise(() => {})
=======
  if (!result || !result.then) {
    return new Promise(() => {})
  }
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  return result
}

const GetYearsActiveRangeProxy = (...args) => {
  const result = GetYearsActiveRange(...args)
<<<<<<< HEAD
  if (!result || !result.then) return new Promise(() => {})
=======
  if (!result || !result.then) {
    return new Promise(() => {})
  }
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  return result
}

const SearchArtistsProxy = (criteria, offset, limit) => {
  const result = SearchArtists(
    _.omit(criteria, 'sort'),
    criteria.sort,
    offset,
    limit
  )
<<<<<<< HEAD
  if (!result || !result.then) return new Promise(() => {})
=======
  if (!result || !result.then) {
    return new Promise(() => {})
  }
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  return result
}

const FindArtistProxy = (...args) => {
  const result = FindArtist(...args)
<<<<<<< HEAD
  if (!result || !result.then) return new Promise(() => {})
=======
  if (!result || !result.then) {
    return new Promise(() => {})
  }
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  return result
}

const CreateArtistProxy = (...args) => {
  const result = CreateArtist(...args)
<<<<<<< HEAD
  if (!result || !result.then) return new Promise(() => {})
=======
  if (!result || !result.then) {
    return new Promise(() => {})
  }
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  return result
}

const EditArtistProxy = (...args) => {
  const result = EditArtist(...args)
<<<<<<< HEAD
  if (!result || !result.then) return new Promise(() => {})
=======
  if (!result || !result.then) {
    return new Promise(() => {})
  }
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  return result
}

const DeleteArtistProxy = (...args) => {
  const result = DeleteArtist(...args)
<<<<<<< HEAD
  if (!result || !result.then) return new Promise(() => {})
=======
  if (!result || !result.then) {
    return new Promise(() => {})
  }
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  return result
}

const SetRetiredProxy = (_ids) => {
  const result = SetRetired(_ids)
<<<<<<< HEAD
  if (!result || !result.then) return new Promise(() => {})
=======
  if (!result || !result.then) {
    return new Promise(() => {})
  }
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  return result
}

const SetNotRetiredProxy = (_ids) => {
  const result = SetNotRetired(_ids)
<<<<<<< HEAD
  if (!result || !result.then) return new Promise(() => {})
=======
  if (!result || !result.then) {
    return new Promise(() => {})
  }
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  return result
}

//
// Helpers
<<<<<<< HEAD
=======

>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
const refreshSearch = (dispatch, getState) => {
  const {
    artists: {offset, limit},
  } = getState()
  const criteria = getState().form.filters.values
<<<<<<< HEAD
=======

>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  dispatch(searchArtists(_.extend({}, {name: ''}, criteria), offset, limit))
}
