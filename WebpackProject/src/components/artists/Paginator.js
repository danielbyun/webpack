import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

const Paginator = ({
  offset,
  limit,
  count,
  form: {
    filters: {values},
  },
  searchArtists,
}) => {
  const back = () => {
    if (offset === 0) return

    searchArtists(values, offset - 10, limit)
  }

  const advance = () => {
    if (offset + limit > count) return

    searchArtists(values, offset + 10, limit)
  }

  const left = () => {
    return (
      <li className={offset === 0 ? 'disabled' : ''}>
        <a onClick={back}>
          <i className='material-icons'>chevron_left</i>
        </a>
      </li>
    )
  }

  const right = () => {
    const end = offset + limit >= count ? true : false

    return (
      <li className={end ? 'disabled' : ''}>
        <a onClick={advance}>
          <i className='material-icons'>chevron_right</i>
        </a>
      </li>
    )
  }
  return (
    <div className='center-align'>
      <ul className='pagination'>
        {left()}
        <li>
          <a>Page {offset / 10 + 1}</a>
        </li>
        {right()}
      </ul>
      {count} Records Found
    </div>
  )
}

const mapStateToProps = ({artists, form}) => {
  const {limit, offset, count} = artists

  return {limit, offset, count, form}
}

export default connect(mapStateToProps, actions)(Paginator)
