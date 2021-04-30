import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Detail } from '../pages/Detail'
import { Home } from '../pages/Home'

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:name" component={Detail} />
      <Redirect path="/" to="/home" />
    </Switch>
  )
}