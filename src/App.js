import React, { Fragment } from 'react'
import { PublicRoutes } from './routes/Public.routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css'
import { SectionHeader } from './components/header';
import { GlobalStyles } from './assets/GlobalStyles'

export const App = () => {
  AOS.init({
    duration: 1200
  })

  return (
    <Fragment>
      <GlobalStyles />
      <SectionHeader />
      <PublicRoutes />
    </Fragment>
  );
}