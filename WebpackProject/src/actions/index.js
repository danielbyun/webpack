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

const resetArtist = () => {
  return {type: RESET_ARTIST}
}

const clearError = () => {
  return {type: CLEAR_ERROR}
}

const selectArtist = (id) => {
  return {type: SELECT_ARTIST, payload: id}
}

const deselectArtist = (id) => {
  return {type: DESELECT_ARTIST, payload: id}
}

const setRetired = (ids) => (dispatch, getState) =>
  SetRetiredProxy(ids.map((id) => id.toString()))
    .then(() => dispatch({type: RESET_SELECTION}))
    .then(() => refreshSearch(dispatch, getState))

const setNotRetired = (ids) => (dispatch, getState) =>
  SetNotRetiredProxy(ids.map((id) => id.toString()))
    .then(() => dispatch({type: RESET_SELECTION}))
    .then(() => refreshSearch(dispatch, getState))

const setAgeRange = () => (dispatch) =>
  GetAgeRangeProxy().then((result) =>
    dispatch({type: SET_AGE_RANGE, payload: result})
  )

const setYearsActiveRange = () => (dispatch) =>
  GetYearsActiveRangeProxy().then((result) =>
    dispatch({type: SET_YEARS_ACTIVE_RANGE, payload: result})
  )

const searchArtists =
  (...criteria) =>
  (dispatch) =>
    SearchArtistsProxy(...criteria).then((result = []) =>
      dispatch({type: SEARCH_ARTISTS, payload: result})
    )

const findArtist = (id) => (dispatch) =>
  FindArtistProxy(id).then((artist) =>
    dispatch({type: FIND_ARTIST, payload: artist})
  )

const createArtist = (props) => (dispatch) =>
  CreateArtistProxy(props)
    .then((artist) => {
      history.push(`artists/${artist._id}`)
    })
    .catch((error) => {
      console.error(error)
      dispatch({type: CREATE_ERROR, payload: error})
    })

const editArtist = (id, props) => (dispatch) =>
  EditArtistProxy(id, props)
    .then(() => history.push(`artists/${id}`))
    .catch((error) => {
      console.error(error)
      dispatch({type: CREATE_ERROR, payload: error})
    })

const deleteArtist = (id) => (dispatch) =>
  DeleteArtistProxy(id)
    .then(() => history.push('/'))
    .catch((error) => {
      console.error(error)
      dispatch({type: CREATE_ERROR, payload: error})
    })

//
// Faux Proxies
const GetAgeRangeProxy = (...args) => {
  const result = GetAgeRange(...args)
  if (!result || !result.then) return new Promise(() => {})
  return result
}

const GetYearsActiveRangeProxy = (...args) => {
  const result = GetYearsActiveRange(...args)
  if (!result || !result.then) return new Promise(() => {})
  return result
}

const SearchArtistsProxy = (criteria, offset, limit) => {
  const result = SearchArtists(
    _.omit(criteria, 'sort'),
    criteria.sort,
    offset,
    limit
  )
  if (!result || !result.then) return new Promise(() => {})
  return result
}

const FindArtistProxy = (...args) => {
  const result = FindArtist(...args)
  if (!result || !result.then) return new Promise(() => {})
  return result
}

const CreateArtistProxy = (...args) => {
  const result = CreateArtist(...args)
  if (!result || !result.then) return new Promise(() => {})
  return result
}

const EditArtistProxy = (...args) => {
  const result = EditArtist(...args)
  if (!result || !result.then) return new Promise(() => {})
  return result
}

const DeleteArtistProxy = (...args) => {
  const result = DeleteArtist(...args)
  if (!result || !result.then) return new Promise(() => {})
  return result
}

const SetRetiredProxy = (_ids) => {
  const result = SetRetired(_ids)
  if (!result || !result.then) return new Promise(() => {})
  return result
}

const SetNotRetiredProxy = (_ids) => {
  const result = SetNotRetired(_ids)
  if (!result || !result.then) return new Promise(() => {})
  return result
}

//
// Helpers
const refreshSearch = (dispatch, getState) => {
  const {
    artists: {offset, limit},
  } = getState()
  const criteria = getState().form.filters.values
  dispatch(searchArtists(_.extend({}, {name: ''}, criteria), offset, limit))
}

export {
  resetArtist,
  clearError,
  selectArtist,
  deselectArtist,
  setRetired,
  setNotRetired,
  setAgeRange,
  setYearsActiveRange,
  searchArtists,
  findArtist,
  createArtist,
  editArtist,
  deleteArtist,
}
