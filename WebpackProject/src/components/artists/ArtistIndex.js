import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import Paginator from './Paginator'
import * as actions from '../../actions'

const ArtistIndex = ({selection, artists, deselectArtist, selectArtist}) => {
  const onChange = (_id) => {
    if (_.includes(selection, _id)) {
      deselectArtist(_id)
    } else {
      selectArtist(_id)
    }
  }

  const renderList = ({
    artists: {all},
    artist: {_id, retired, image, name, age, albums},
  }) => {
    const classes = `collection-item avatar ${retired && 'retired'}`

    return (
      <li className={classes} key={_id}>
        <div>
          <input
            id={_id}
            type='checkbox'
            checked={_.includes(selection, _id)}
            onChange={() => onChange(_id)}
          />
          <label htmlFor={_id} />
        </div>
        <img src={image} className='circle' />
        <div>
          <span className='title'>
            <strong>{name}</strong>
          </span>
          <p>
            <b>{age}</b> years old
            <br />
            {albums ? albums.length : 0} albums released
          </p>
        </div>
        <Link to={`artists/${_id}`} className='secondary-content'>
          <i className='material-icons'></i>
        </Link>
      </li>
    )
  }

  const renderPaginator = () => {
    if (all.length) {
      return <Paginator />
    }
  }

  const renderEmptyCollection = () => {
    if (all.length) {
      return
    }

    return (
      <div className='center-align'>
        <h5>No records found!</h5>
        <div>Try searching again</div>
      </div>
    )
  }

  const renderRetire = () => {
    if (selection.length) {
      return (
        <div>
          <button className='btn' onClick={() => setRetired(selection)}>
            Retire
          </button>
          <button className='btn' onClick={() => setNotRetired(selection)}>
            Unretire
          </button>
        </div>
      )
    }
  }

  return (
    <div>
      {renderRetire()}
      <ul className='collection'>
        {all.map(renderList.bind(this))}
        {renderEmptyCollection()}
      </ul>

      {renderPaginator()}
    </div>
  )
}

const mapStateToProps = ({artists, selection}) => ({artists, selection})

export default connect(mapStateToProps, actions)(ArtistIndex)
