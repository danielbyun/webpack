import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

const ArtistEdit = ({
  artist = {},
  params,
  editArtist,
  findArtist,
  clearError,
  errorMessage,
}) => {
  const [{name, age, yearsActive, genre}, setState] = useState({
    name: '',
    age: 0,
    yearsActive: 0,
    genre: '',
  })

  useEffect(() => {
    findArtist(params.id)

    return () => {
      clearError()
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    editArtist(parmas.id, {name, age, yearsActive, genre})
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='input-field'>
        <input
          value={name}
          onChange={(e) => setState({name: e.target.value})}
          placeholder='Name'
        />
      </div>
      <div className='input-field'>
        <input
          value={age}
          onChange={(e) => setState({age: e.target.value})}
          placeholder='Age'
        />
      </div>
      <div className='input-field'>
        <input
          value={yearsActive}
          onChange={(e) => setState({yearsActive: e.target.value})}
          placeholder='Years Active'
        />
      </div>
      <div className='input-field'>
        <input
          value={genre}
          onChange={(e) => setState({genre: e.target.value})}
          placeholder='Genre'
        />
      </div>
      <div className='has-error'>{errorMessage}</div>
      <button className='btn'>Submit</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    artist: state.artists.artist,
    errorMessage: state.errors,
  }
}

export default connect(mapStateToProps, actions)(ArtistEdit)
