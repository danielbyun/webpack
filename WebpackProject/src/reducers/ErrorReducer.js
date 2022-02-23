import {CREATE_ERROR, CLEAR_ERROR} from '../actions/types'

export default (state = '', {type}) => {
  switch (type) {
    case CREATE_ERROR:
      return 'There was an error inserting this record'
    case CLEAR_ERROR:
      return ''
    default:
      return state
  }
}
