import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ name, population, region, capital, flag }) => {
  return (
    <div className="col-sm-12 col-lg-4 col-md-6 col-xl-3 mt-3 mb-3">
      <div ClassName="card" style={{ width: '304px', margin: 'auto', boxShadow: '0 0 10px rgb(0, 0, 0, 0.2)' }}>
        <img src={flag} className="card-img-top" alt="..." style={{ width: '304px', height: '190px', objectFit: 'cover' }}></img>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/detail/${name}`}> {name} </Link>
          </h5>
          <p className="card-text">Population: {population}</p>
          <p className="card-text">Region: {region}</p>
          <p className="card-text">Capital: {capital}</p>
        </div>
      </div>
    </div >
  )
}