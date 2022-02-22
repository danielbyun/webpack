import React from 'react'
import {Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Home from './components/Home'
import ArtistMain from './components/artists/ArtistMain'
import ArtistDetail from './components/artists/ArtistDetail'
import ArtistCreate from './components/artists/ArtistCreate'
import ArtistEdit from './components/artists/ArtistEdit'

const history = createBrowserHistory()

const Routes = () => {
  return (
    <Router history={history}>
      <Route path='/' component={Home}>
        <Route component={ArtistMain} />
        <Route path='artists/new' component={ArtistCreate} />
        <Route path='artists/:id' component={ArtistDetail} />
        <Route path='artists/:id/edit' component={ArtistEdit} />
      </Route>
    </Router>
  )
}

export default Routes
