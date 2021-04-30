import React, { Fragment } from 'react'
import { PublicRoutes } from './routes/Public.routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css'
import { SectionHeader } from './components/header';

export const App = () => {
  AOS.init({
    duration: 1200
  })

  return (
    <Fragment>
      <SectionHeader />
      <PublicRoutes />
    </Fragment>
  );
}