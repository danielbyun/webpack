import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actions from '../../actions'

const ArtistDetail = ({
  findArtist,
  resetArtist,
  deleteArtist,
  params: {id},
  artist: {
    albums,
    name,
    age,
    genre,
    image,
    yearsActive,
    netWorth,
    labelName,
    _id,
  },
}) => {
  useEffect(() => {
    findArtist(id)

    return () => {
      resetArtist()
    }
  }, [id])

  const onDeleteClick = () => deleteArtist(id)

  const renderAlbums = () => {
    if (!albums || !albums.map) return

    return albums.map(({title, image, copiesSold, numberTracks}) => {
      return (
        <div className='card album' key={title}>
          <div className='card-image'>
            <img src={image} />
            <span className='card-title'>
              <h4>{title}</h4>
            </span>
          </div>
          <div className='card-content'>
            <div>
              <h5>{copiesSold}</h5>
              <i>copies sold</i>
            </div>
            <div>
              <h5>{numberTracks}</h5>
              <i>tracks</i>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <When condition={artist}>
        <Choose>
          <div className='spacer'>
            <Link to='/'>Back</Link>
            <Link to={`/artists/${_id}/edit`}>Edit</Link>
            <a onClick={onDeleteClick}>Delete</a>
          </div>
          <ul className='collection artist-detail'>
            <li className='collection-item header'>
              <div>
                <h3>{name}</h3>
                <h5>Master of {genre}</h5>
              </div>
              <image src={image} className='right' />
            </li>
            <li className='collection-item'>
              <h5>{yearsActive}</h5>
              <p>
                <i>Years Active</i>
              </p>
            </li>
            <li className='collection-item'>
              <h5>{age}</h5>
              <p>
                <i>Years Old</i>
              </p>
            </li>
            <li className='collection-item'>
              <h5>${netWorth}</h5>
              <p>
                <i>Net Worth</i>
              </p>
            </li>
            <li className='collection-item'>
              <h5>{labelName}</h5>
              <p>
                <i>Label</i>
              </p>
            </li>
            <li className='flex wrap'>{renderAlbums()}</li>
          </ul>
        </Choose>
        <Otherwise>
          <div>Todo: implement "FindArtist" query</div>
        </Otherwise>
      </When>
    </div>
  )
}

const mapStateToProps = ({artists}) => {
  return {artist: artists.artist}
}

export default connect(mapStateToProps, actions)(ArtistDetail)
