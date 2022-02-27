import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const db = require('../../database/queries/db')

const Header = () => {
  const [id, setId] = useState(null)

  useEffect(() => {
    return () => {
      setLink()
    }
  }, [])

  const setLink = () => {
    const index = _.random(0, db.length)
    setId(index)
  }

  return (
    <div className='row'>
      <nav>
        <div className='nav-wrapper'>
          <div className='col s12'>
            <a href='#' className='brand-logo'>
              UpStar Music
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link to={`/artists/${id}`} onClick={setLink}>
                  Random Artist
                </Link>
              </li>
              <li>
                <Link to={'/artists/new'}>Create Artist</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export {Header}
